import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className = {classes.container}>
          <div className = {classes.col1}>
            <h6>About</h6>
            <p> KIDS VIETNAM is a platform in which you can help improve children 's lives through basic necessities, health and education.You can do it by: -creating and running your own community projects (e.g.Lifebuoy for Lai Chau project by Hoai Chung) - making donations to(an) existing project(s) - sponsoring a child to help them get access to basic necessities, medical attention and education. </p>
          </div>
          <div className = {classes.col2}>
            <h6>Contact us at</h6>
            <ul>
              <li> phone no </li>
              <li> facebook </li>
            </ul>
          </div>
      </div>
    </footer>
    
  );
}

export default Footer;
