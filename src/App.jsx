import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './screens/LandingPage.jsx';
import ProjectsPage from './screens/ProjectsPage.jsx';
import HomePage from './screens/HomePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects-page" element={<ProjectsPage />} />
      </Routes> 
    </Router>
  );
}

export default App;