import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useLocation } from 'react-router-dom';
import LandingPage from './screens/LandingPage.jsx';
import ProjectsPage from './screens/ProjectsPage.jsx';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Router>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects-page" element={<ProjectsPage />} />
        </Routes>   
      </Router>
    </AnimatePresence>
  );
}

export default App;