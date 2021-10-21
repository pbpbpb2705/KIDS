import React from "react";
import "./ContentPage.css";
import {Link} from 'react-router-dom'
function Project1920() {
  return (
    <div className="content-page">
      <div class="span" />
      <div className="card-container">
        <div class="main-1">
          <div class="container">
            <div class="card">
              <img
                class="card-img-top"
                src="image/24.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">VĨNH LONG-11/2020</h1>
                <a
                  href="VINH LONG-11-2020.html"
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
                src="image/23.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">ĐỒNG NAI-10/2020</h1>
                <a
                  href="DONG NAI-10-2020.html"
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
                src="image/22.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">BẾN TRE-9/2020</h1>
                <a
                  href="BEN TRE-9-2020.html"
                  target="_blank"
                  class="btn btn-primary"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="card">
              <img
                class="card-img-top"
                src="image/21.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">VĨNH LONG-7/2020</h1>
                <a
                  href="VINH LONG-7-2020.html"
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
                src="image/20.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">BẾN TRE-3/2020</h1>
                <a
                  href="https://www.facebook.com/permalink.php?story_fbid=1213060102450642&id=458275831262410"
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
                src="image/19.JPG"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">BẾN TRE-9/2019</h1>
                <a
                  href="https://www.facebook.com/permalink.php?story_fbid=1211861132570539&id=458275831262410"
                  target="_blank"
                  class="btn btn-primary"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>


          <div class="container">
            <div class="card">
              <img
                class="card-img-top"
                src="image/18.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">BÌNH ĐỊNH-8/2019</h1>
                <a
                  href="https://www.facebook.com/permalink.php?story_fbid=1213060102450642&id=458275831262410"
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
                src="image/17.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">SAPA-7/2019</h1>
                <a
                  href="https://www.facebook.com/permalink.php?story_fbid=1211861132570539&id=458275831262410"
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
                src="image/16.jpg"
                alt=" Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">VĨNH LONG-7/2019</h1>
                <a
                  href="https://www.facebook.com/permalink.php?story_fbid=1213060102450642&id=458275831262410"
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

export default Project1920;
