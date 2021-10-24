import React from "react";
import "./ContentPage.css";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card.js";
function Project1314() {
  return (
    <div className="content-page">
      <div class="span" />
      <div className="card-container">
        <div class="main-1">
          <div class="container">
            <Card src="image/5.jpg" name="SAPA-8/2014" href="SAPA82014.html" />
            <Card src="image/4.jpg" name="BÌNH ĐỊNH-8/2014" href="SAPA82014.html"/>
            <Card src="image/3.jpg" name="LAI CHÂU-8/2014" href="SAPA82014.html"/>
          </div>
          <div class="container">
            <Card src="image/2.jpg" name="SAPA-2/2014" href="SAPA82014.html" />
            <Card src="image/1.jpg" name="SAPA-12/2013" href="SAPA82014.html" />
          </div>
        </div>
        <div className="main-2">
          <h1 className="black-title"> More projects </h1>
          <ul>
            <li>
              <Link to="/1516projects"> 2015 - 2016 </Link>{" "}
            </li>
            <li>
              <Link to="/1718projects"> 2017 - 2018 </Link>{" "}
            </li>
            <li>
              <Link to="/1920projects"> 2019 - 2020 </Link>{" "}
            </li>
            <li>
              <Link to="/2122projects"> 2021 - 2022 </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project1314;
