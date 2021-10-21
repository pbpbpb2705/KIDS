import React from "react";
import "./ContentPage.css";
import {Link} from 'react-router-dom'
function Project1516() {
  return (
    <div className="content-page">
      <div class="span" />
      <div class="card-container">
        <div class="main-1">
          <div class="container">
            <div class="card">
              <img
                class="card-img-top"
                src="image/8.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">SAPA-8/2016</h1>
                <a
                  href="SAPA-8-2016.html"
                  target="_blank"
                  class="btn btn-primary"
                >
                  See Project
                </a>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="image/7.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">QUẢNG NAM-8/2015</h1>
                <a
                  href="QUANG NAM-8-2015.html"
                  target="_blank"
                  class="btn btn-primary"
                >
                  See Project
                </a>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="image/6.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">BÌNH ĐỊNH-1/2015</h1>
                <a
                  href="BINH DINH-1-2015.html"
                  target="_blank"
                  class="btn btn-primary"
                >
                  See Project
                </a>
              </div>
            </div>
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
