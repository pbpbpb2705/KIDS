import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
      <div>
        <Link to="/" class="navbar-logo">Kids</Link>
        <ul class="navbar-tab">
          <Link to="/past" class="navbar-item">Past events</Link>
          <Link to="/upcoming" class="navbar-item">Upcoming events</Link>
          <Link to="/apply" class="navbar-item">Apply now!</Link>
        </ul>
      </div>
    );
}

export default Navbar;
