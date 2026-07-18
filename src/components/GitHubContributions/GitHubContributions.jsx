import { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './GitHubContributions.css';

const GitHubContributions = ({ username = 'WilWilbert123' }) => {
  // Sets the default visible year when the component first mounts
  const [selectedYear, setSelectedYear] = useState(2026);
  const years = [2026, 2025, 2024, 2023];

  // Official GitHub Dark Theme Color Configuration
  const githubExplicitTheme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="github-profile-layout">
      {/* Left Area: The Main Calendar Panel */}
      <div className="github-graph-section">
        <div className="github-graph-header">
          <span className="github-graph-title">Contributions in {selectedYear}</span>
          <div className="github-settings-dropdown">
            Contribution settings <span className="arrow-down">▼</span>
          </div>
        </div>

        <div className="github-graph-card">
          <div className="github-graph-scroll-container">
            <GitHubCalendar 
              username={username}
              year={selectedYear}
              /* ─── ADDING THE KEY PROP FORCES A FRESH FETCH FOR 2025 ON CLICK ─── */
              key={`${username}-${selectedYear}`}
              theme={githubExplicitTheme}
              colorScheme="dark"
              showTotalCount={true}
              showColorLegend={true}
            />
          </div>
        </div>
      </div>

      {/* Right Area: Navigation Sidebar Grid */}
      <div className="github-years-sidebar">
        {years.map((year) => (
          <button
            key={year}
            className={`gh-year-btn ${selectedYear === year ? 'active' : ''}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GitHubContributions;