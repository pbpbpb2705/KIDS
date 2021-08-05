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
              <li><Link to="/2020-2021"> 2020 - 2021 </Link></li>
              <li><Link to = '/pastprojects/1819'> 2018 - 2019 </Link> </li>
              <li><Link to = '/pastprojects/1617'> 2016 - 2017 </Link> </li>
              <li><Link to = '/pastprojects/1415'> 2014 - 2015 </Link> </li>
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
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMjUuNDc0LDBDMTAxLjE1MSwwLDAsMTAxLjE1MSwwLDIyNS40NzRjMCwxMjQuMzMsMTAxLjE1MSwyMjUuNDc0LDIyNS40NzQsMjI1LjQ3NA0KCQkJYzEyNC4zMywwLDIyNS40NzQtMTAxLjE0NCwyMjUuNDc0LTIyNS40NzRDNDUwLjk0OCwxMDEuMTUxLDM0OS44MDQsMCwyMjUuNDc0LDB6IE0yMjUuNDc0LDQwOS4zMjMNCgkJCWMtMTAxLjM3MywwLTE4My44NDgtODIuNDc1LTE4My44NDgtMTgzLjg0OFMxMjQuMTAxLDQxLjYyNiwyMjUuNDc0LDQxLjYyNnMxODMuODQ4LDgyLjQ3NSwxODMuODQ4LDE4My44NDgNCgkJCVMzMjYuODQ3LDQwOS4zMjMsMjI1LjQ3NCw0MDkuMzIzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA1LjkwMiw0NzYuNDcyTDM4Ni41NzQsMzU3LjE0NGMtOC4xMzEtOC4xMzEtMjEuMjk5LTguMTMxLTI5LjQzLDBjLTguMTMxLDguMTI0LTguMTMxLDIxLjMwNiwwLDI5LjQzbDExOS4zMjgsMTE5LjMyOA0KCQkJYzQuMDY1LDQuMDY1LDkuMzg3LDYuMDk4LDE0LjcxNSw2LjA5OGM1LjMyMSwwLDEwLjY0OS0yLjAzMywxNC43MTUtNi4wOThDNTE0LjAzMyw0OTcuNzc4LDUxNC4wMzMsNDg0LjU5Niw1MDUuOTAyLDQ3Ni40NzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
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
