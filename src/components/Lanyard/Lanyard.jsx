/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

// Asset imports
import cardGLB from '../../assets/card.glb';
import lanyardTexture from '../../assets/lanyard.png';

import * as THREE from 'three';
import './Lanyard.css';

// Preload assets to avoid refresh flashing
useGLTF.preload(cardGLB);
useTexture.preload(lanyardTexture);

extend({ MeshLineGeometry, MeshLineMaterial });

// Loading fallback component
const Loader = () => (
  <div className="lanyard-loader">
    <div className="loader-spinner"></div>
  </div>
);

export default function Lanyard({
  position = [0, 0, 18],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const userAgent = navigator.userAgent.toLowerCase();
    setIsAndroid(/android/.test(userAgent));

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsSmallMobile(width < 480);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) return <Loader />;

  // Dynamic Camera position tuned for portrait mobile viewports
  const getCameraProps = () => {
    if (isAndroid) return { position: [0, 0, 22], fov: 16 };
    if (isSmallMobile) return { position: [0, 0, 20], fov: 18 };
    if (isMobile) return { position: [0, 0, 19], fov: 19 };
    if (isTablet) return { position: [0, 0, 20], fov: 20 };
    return { position, fov };
  };

  const cameraProps = getCameraProps();
  const gravityValue = isAndroid ? [0, -30, 0] : gravity;
  const timeStep = isMobile || isAndroid ? 1 / 30 : 1 / 60;

  return (
    <div className={`lanyard-wrapper ${isMobile ? 'mobile' : ''} ${isSmallMobile ? 'small-mobile' : ''} ${isAndroid ? 'android' : ''}`}>
      <Canvas
        camera={{ position: cameraProps.position, fov: cameraProps.fov }}
        dpr={[1, isAndroid ? 1 : isMobile ? 1.5 : 2]}
        gl={{
          alpha: transparent,
          antialias: !isAndroid,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
          if (isAndroid) {
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
          }
        }}
        style={{ touchAction: 'none' }}
      >
        <ambientLight intensity={Math.PI} />
        <Suspense fallback={null}>
          <Physics
            gravity={gravityValue}
            timeStep={timeStep}
            {...(isAndroid ? { iterations: 5 } : {})}
          >
            <Band
              isMobile={isMobile}
              isSmallMobile={isSmallMobile}
              isAndroid={isAndroid}
            />
          </Physics>
          <Environment blur={0.75}>
            <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false, isSmallMobile = false, isAndroid = false }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  };

  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyardTexture);

  const [curve] = useState(
    () => new THREE.CatmullRomCurve3([
      new THREE.Vector3(), new THREE.Vector3(),
      new THREE.Vector3(), new THREE.Vector3()
    ])
  );

  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  // Shorten joint anchor distance on mobile
  const jointLength = isMobile ? 0.6 : 1.0;
  const jointOffset = isMobile ? 0.25 : 0.5;

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], jointLength]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], jointLength]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], jointLength]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, isMobile ? 1.5 : 2.2, 0]]);

  // Responsive scale & position helpers
  const getCardScale = () => {
    if (isAndroid) return 1.8;
    if (isSmallMobile) return 2.0;
    if (isMobile) return 2.2;
    return 3.3;
  };

  const getCardPosition = () => {
    if (isAndroid) return [0, -0.9, -0.05];
    if (isSmallMobile) return [0, -1.0, -0.05];
    if (isMobile) return [0, -1.1, -0.05];
    return [0, -1.8, -0.05];
  };

  const getLanyardLineWidth = () => {
    if (isAndroid) return 0.8;
    if (isSmallMobile) return 1.0;
    if (isMobile) return 1.2;
    return 1.65;
  };

  const getBandResolution = () => {
    if (isAndroid) return [400, 800];
    if (isSmallMobile) return [500, 1000];
    if (isMobile) return [800, 1500];
    return [1000, 1000];
  };

  const getCurvePoints = () => {
    if (isAndroid) return 10;
    if (isSmallMobile) return 12;
    if (isMobile) return 16;
    return 32;
  };

  // LOWER THE ANCHOR ON MOBILE (5.0 -> 2.2 / 2.5)
  const getGroupPosition = () => {
    if (isAndroid) return [0, 3.5, 0];
    if (isSmallMobile) return [0, 2.2, 0];
    if (isMobile) return [0, 2.5, 0];
    return [0, 5.0, 0];
  };

  useEffect(() => {
    if (hovered && !isMobile && !isAndroid) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged, isMobile, isAndroid]);

  const isDraggable = !isMobile && !isAndroid;

  useFrame((state, delta) => {
    if (isAndroid && !band.current) return;

    if (dragged && card.current && isDraggable) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }

    if (fixed.current && band.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        }
        const clampedDistance = Math.max(0.1, Math.min(1,
          ref.current.lerped.distanceTo(ref.current.translation())
        ));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());

      if (band.current?.geometry) {
        band.current.geometry.setPoints(curve.getPoints(getCurvePoints()));
      }

      if (card.current) {
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
      }
    }
  });

  curve.curveType = 'chordal';
  if (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = isAndroid ? 1 : 4;
  }

  const cardScale = getCardScale();
  const cardPosition = getCardPosition();
  const lanyardLineWidth = getLanyardLineWidth();
  const bandResolution = getBandResolution();
  const groupPosition = getGroupPosition();

  if (!nodes?.card) return null;

  return (
    <>
      <group position={groupPosition}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[jointOffset, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[jointOffset * 2, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[jointOffset * 3, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[jointOffset * 4, 0, 0]}
          ref={card}
          {...segmentProps}
          type={isDraggable && dragged ? 'kinematicPosition' : 'dynamic'}
          {...(isAndroid ? { enabledRotations: [false, false, false] } : {})}
        >
          <CuboidCollider args={[isMobile ? 0.8 : 1.2, isMobile ? 1.1 : 1.7, 0.01]} />
          <group
            scale={cardScale}
            position={cardPosition}
            onPointerOver={() => isDraggable && hover(true)}
            onPointerOut={() => isDraggable && hover(false)}
            onPointerUp={(e) => {
              if (isDraggable) {
                e.target.releasePointerCapture(e.pointerId);
                drag(false);
              }
            }}
            onPointerDown={(e) => {
              if (isDraggable && card.current) {
                e.target.setPointerCapture(e.pointerId);
                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
              }
            }}
          >
            {nodes.card && (
              <mesh geometry={nodes.card.geometry}>
                <meshPhysicalMaterial
                  map={materials.base?.map}
                  map-anisotropy={isAndroid ? 1 : 16}
                  clearcoat={isMobile || isAndroid ? 0 : 1}
                  clearcoatRoughness={0.15}
                  roughness={0.9}
                  metalness={0.8}
                />
              </mesh>
            )}
            {nodes.clip && (
              <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            )}
            {nodes.clamp && (
              <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
            )}
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={bandResolution}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={lanyardLineWidth}
        />
      </mesh>
    </>
  );
}