import React from 'react';
import { Link } from 'react-router-dom';
// We will create the CSS for this in the next step.
// For now, it's good practice to import it.
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          {/* You can replace this with an <img> tag for your logo later */}
          SnugTail
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/report">Report</Link></li>
        <li><Link to="/adopt">Adopt</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
      <div className="navbar-profile">
        {/* We'll leave the profile icon for later, but the structure is here */}
        <Link to="/profile">
            {/* Placeholder for a profile icon */}
            👤 
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;