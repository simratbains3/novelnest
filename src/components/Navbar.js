import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ padding: "5px 0"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="My Book App Logo"
            width="70"
            height="70"
            style={{ marginRight: "10px" }}
          />
        </Link>
        <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/novelnest">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/library">
              Library
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recommendations">
              Recommendations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
