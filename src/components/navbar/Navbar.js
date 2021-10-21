import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  function handleSearch(event) {
    const item = document.getElementById("searchbar");
    if (item.value !== "") {
      history.push({
        pathname: "/search",
        query: "",
        state: {
          detail: item.value,
        },
      });
    }
  }

  return (   
    <header>
      <div className={classes.logo}>
        <Link to="/"> KIDS Vietnam </Link>
      </div>

      <nav className={classes.mainNav}>
        <Link to ='/about'>
          <button> About </button>
        </Link>

        <div className={classes.dropdown}>
          <Link to ='/pastprojects'>
            <button className = {classes.dropbtn}> Past Projects </button>
          </Link>

          <div className={classes.dropcontent}>
            <ul>
              <li><Link to = "/1314projects"> 2013 - 2014 </Link></li>
              <li><Link to = '/1516projects'> 2015 - 2016 </Link> </li>
              <li><Link to = '/1718projects'> 2017 - 2018 </Link> </li>
              <li><Link to = '/1920projects'> 2019 - 2020 </Link> </li>
              <li><Link to = '/2122projects'> 2021 - 2022 </Link></li>
            </ul>
          </div>
        </div>

        <Link to="/upcoming"> 
          <button> Upcoming </button> 
        </Link>

        <Link to ='/contact'>
          <button> Contact </button>
        </Link>

      </nav>

      <div className={classes.container}>
        <form className={classes.searchform}>
          <input
            type="search"
            name="q"
            id="searchbar"
            placeholder="Search"
            required
          />
          <img src="/Image/iconmonstr-search-thin-24.png"
            alt="search icon"
            onClick={handleSearch}
          />
        </form>
        
        <div className={classes.dropdown_container}>
          <img className={classes.icon} src="Icon.svg" alt="list" />
          <div className={classes.dropdown_responsive}>
            <ul>
              <li className={classes.button_responsive}>
                <Link to="/about"> About </Link>
              </li>

              <li className={classes.button_responsive}>
                <Link to="/pastprojects"> Past Projects </Link>
              </li>

              <li className={classes.button_responsive}>
                <Link to="/contact"> Contact </Link>
              </li>

              <li className={classes.button_responsive}>
                <Link to="/upcoming"> Upcoming </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </header>
    
    
  );
}

export default Navbar;
