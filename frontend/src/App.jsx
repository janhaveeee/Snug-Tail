import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your global CSS and the Navbar
import './App.css';
import Navbar from './components/Navbar'; // Assuming correct path to Navbar

// Import your page components
import Homepage from './pages/Homepage';
import Report from './pages/Report';
import Admin from './pages/Admin' // Import the new Report component

function App() {
  return (
    <div className="App">
      {/* Navbar will now appear on every page */}
      <Navbar />

      {/* The Routes component handles the page content based on the URL */}
      <main>
        <Routes>
          {/* Route for the homepage */}
          <Route path="/" element={<Homepage />} />

          {/* ADDED: Route for the report page */}
          <Route path="/report" element={<Report />} />
          <Route path="/admin" element={<Admin />} />

          {/* Example of another route, currently commented out */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
