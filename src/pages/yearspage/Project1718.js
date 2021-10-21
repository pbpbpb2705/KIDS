import React from "react";
import "./ContentPage.css";
import {Link} from 'react-router-dom'
function Project1718() {
  return (
    <div className="content-page">
      <div class="span" />
      <div className="card-container">
        <div class="main-1">
          <div class="container">
            <div class="card">
              <img
                class="card-img-top"
                src="image/15.JPG"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">BÌNH ĐỊNH-8/2018</h1>
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
                src="image/14.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">NAM TRÀ MY-7/2018</h1>
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
                src="image/13.JPG"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">SAPA-6/2018</h1>
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


          <div class="container">
            <div class="card">
              <img
                class="card-img-top"
                src="image/12.JPG"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">CẦN THƠ-8/2017</h1>
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
                src="image/11.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">BÌNH ĐỊNH-8/2017</h1>
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
                src="image/10.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">SAPA-6/2017</h1>
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
                src="image/9.JPG"
                alt="Card image cap"
              />
              <div class="card-body">
                <h1 class="card-title">ĐẠI LỘC-1/2017</h1>
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

export default Project1718;
