import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: '20px 0' }}> 
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="logo.png" alt="My Book App Logo" width="40" height="40" style={{ marginRight: '10px' }} /> 
          NovelNest
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: 'white' }}> 
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/library">Library</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recommendations">Recommendations</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;