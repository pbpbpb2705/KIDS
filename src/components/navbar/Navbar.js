import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Navbar.module.css'
import {useHistory} from 'react-router-dom'
function Navbar() {
  const history = useHistory();

  function handleSearch(event){
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
    <div>
      <header>
        <div className={classes.logo}>
          <Link to="/"> KIDS Vietnam </Link>
        </div>

        <div className={classes.menu}>
          <nav>
            <ul>
              <li className={classes.button}>
                <Link to="/about"> About </Link>
              </li>

              <li className={classes.button}>
                <Link to="/pastprojects"> Past Projects </Link>
              </li>

              <li className={classes.button}>
                <Link to="/contact"> Contact </Link>
              </li>

              <li className={classes.button}>
                <Link to="/upcoming"> Upcoming </Link>
              </li>
            </ul>
          </nav>

          <form className={classes.searchform}>
            <input
              type="search"
              name="q"
              id="searchbar"
              placeholder="Search"
              required
            />
            <img
              src="https://cdn.shopify.com/s/files/1/1170/9506/t/74/assets/icon-search.svg?v=3653875556752188748"
              alt="search icon"
              onClick={handleSearch}
            />
          </form>
          <div className={classes.container}>
            <img className={classes.icon} src="Icon.svg" />
            <div className={classes.dropdown}>
              <ul>
                <li className={classes.button}>
                  <Link to="/about"> About </Link>
                </li>

                <li className={classes.button}>
                  <Link to="/pastprojects"> Past Projects </Link>
                </li>

                <li className={classes.button}>
                  <Link to="/contact"> Contact </Link>
                </li>

                <li className={classes.button}>
                  <Link to="/upcoming"> Upcoming </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className={classes.space} />
    </div>
  );
}

export default Navbar;
