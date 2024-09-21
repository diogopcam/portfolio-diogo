import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './screens/LandingPage.jsx';
import ProjectsPage from './screens/ProjectsPage.jsx';
import AcademicProjects from './screens/AcademicProjects.jsx';
import AboutMePage from './screens/AboutMePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects-page" element={<ProjectsPage />} />
        <Route path="/academic-projects-page" element={<AcademicProjects />} />
        <Route path="/about-me-page" element={<AboutMePage />} />
      </Routes>   

    </Router>
  );
}

export default App;