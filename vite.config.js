import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // Important for GLB files
  optimizeDeps: {
    exclude: ['@react-three/rapier']
  }
})