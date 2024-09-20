import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage.jsx';
import ProjectsPage from './screens/LandingPage.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects-page" element={<ProjectsPage />} />
      </Routes>   

    </Router>
  );
}

export default App;