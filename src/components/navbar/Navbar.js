import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css";
import {useHistory} from 'react-router-dom'
function Navbar() {
  const history = useHistory();
  function handleClick (){
    const item = document.getElementById('searchbar')
    history.push({
      pathname: '/search',
      query: '',
      state: {
        detail: item.value
      }
    });
  }
    return (
      <div className="navbar-container">
        <Link to="/" className="navbar-item navbar-logo navbar-icon">
          Kids
        </Link>
        <nav className="navbar-position navbar-tab">
          <Link to="/past" className="navbar-item navbar-category">
            Past events
          </Link>
          <Link to="/upcoming" className="navbar-item navbar-category">
            Upcoming events
          </Link>
          <Link to="/apply" className="navbar-item navbar-category">
            Apply now!
          </Link>
          <Link to="/apply" className="navbar-item navbar-category">
            Apply now!
          </Link>
        </nav>
        <div className="navbar-position navbar-search-item">
          <input
            id="searchbar"
            placeholder="Search"
            className="navbar-searchform"
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
    );
}

export default Navbar;
