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
    <header>
      <div className = {classes.logo}>
                <Link to = '/'> KIDS Vietnam </Link>  
            </div>

            <nav>
                <ul className = {classes.mainNav}>
                    <Link to ='/about'>
                        <button> About </button>
                    </Link>

                    <div className = {classes.dropdown}>
                        <Link to ='/pastprojects'>
                            <button className = {classes.dropbtn}> Past Projects </button>
                        </Link>

                        <div className= {classes.dropcontent}>
                            <ul>
                                <li><Link to = '/pastprojects/2021'/> 2020 - 2021 </li>
                                <li><Link to = '/pastprojects/1819'/> 2018 - 2019</li>
                                <li><Link to = '/pastprojects/1617'/> 2016 - 2017 </li>
                                <li><Link to = '/pastprojects/1415'/> 2014 - 2015 </li>
                            </ul>
                            
                        </div>
                    </div>
                    

                    <Link to ='/contact'>
                        <button> Contact </button>
                    </Link>

                </ul>
            </nav>

      <form className = {classes.searchform}>
          <input type="search"
              name="q"
              id="searchbar"
              placeholder="Search"
              required
              />
          <img src="https://cdn.shopify.com/s/files/1/1170/9506/t/74/assets/icon-search.svg?v=3653875556752188748" alt = 'search icon' onClick={handleSearch}/>
      </form>

    </header>
  );
}

export default Navbar;
