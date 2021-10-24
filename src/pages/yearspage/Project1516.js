import React from "react";
import "./ContentPage.css";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card.js";
function Project1516() {
  return (
    <div className="content-page">
      <div class="span" />
      <div class="card-container">
        <div class="main-1">
          <div class="container">
            <Card src="image/8.jpg" name="SAPA-8/2016" href="SAPA82014.html" />
            <Card
              src="image/7.jpg"
              name="Quảng Nam-8/2015"
              href="SAPA82014.html"
            />
            <Card
              src="image/6.jpg"
              name="Bình Định-1/2015"
              href="SAPA82014.html"
            />
          </div>
        </div>
        <div className="main-2">
          <h1 className="black-title"> More projects </h1>
          <ul>
            <li>
              <Link to="/1314projects"> 2013 - 2014 </Link>
            </li>
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

export default Project1516;
