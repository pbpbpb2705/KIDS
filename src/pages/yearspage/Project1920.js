import React from "react";
import "./ContentPage.css";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card.js";
function Project1920() {
  return (
    <div className="content-page">
      <div class="span" />
      <div className="card-container">
        <div class="main-1">
          <div class="container">
            <Card
              src="image/24.jpg"
              name="Vĩnh Long-11/2020"
              href="SAPA82014.html"
            />
            <Card
              src="image/23.jpg"
              name="Đồng Nai-10/2014"
              href="SAPA82014.html"
            />
            <Card
              src="image/22.jpg"
              name="Bến Tre-9/2020"
              href="SAPA82014.html"
            />
          </div>

          <div class="container">
            <Card
              src="image/21.jpg"
              name="Vĩnh Long-7/2020"
              href="SAPA82014.html"
            />
            <Card
              src="image/20.jpg"
              name="Bến Tre-3/2020"
              href="SAPA82014.html"
            />
            <Card
              src="image/19.jpg"
              name="Bến Tre-9/2019"
              href="SAPA82014.html"
            />
          </div>

          <div class="container">
            <Card
              src="image/18.jpg"
              name="Bình Định-8/2019"
              href="SAPA82014.html"
            />
            <Card src="image/17.jpg" name="SAPA-7/2019" href="SAPA82014.html" />
            <Card
              src="image/16.jpg"
              name="Vĩnh Long-7/2019"
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

export default Project1920;
