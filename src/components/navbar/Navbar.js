import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css";
function Navbar() {
    return (
      <div className="navbar-container">
        <Link to="/" className="navbar-item navbar-logo icon">
          Kids
        </Link>
        <nav className="navbar-tab">
          <Link to="/past" className="navbar-item navbar-category">
            Past events
          </Link>
          <Link to="/upcoming" className="navbar-item navbar-category">
            Upcoming events
          </Link>
          <Link to="/apply" className="navbar-item navbar-category">
            Apply now!
          </Link>
        </nav>
      </div>
    );
}

export default Navbar;
