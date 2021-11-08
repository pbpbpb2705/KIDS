import React from "react";
import "./ContentPage.css";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card.js";

function Project1718() {
  return (
    <div className="content-page">
      <div class="span" />
      <div className="card-container">
        <div class="main-1">
          <div class="container">
            <Card
              src="/15.jpg"
              name="Bình Định-8/2018"
              href="binhdinh-8-2018"
              title="Bình Định-8/2018"
            />
            <Card
              src="/14.jpg"
              name="Nam Trà My-7/2018"
              href="https://www.facebook.com/media/set/?vanity=kidsvietnam14&set=a.2059257954341515"
            />
            <Card src="/13.jpg" name="SAPA-6/2018" href="sapa-6-2018" />
          </div>
          <div class="container">
            <Card src="/12.jpg" name="Cần Thơ-8/2017" href="detailpage" />
            <Card
              src="/11.jpg"
              name="Bình Định-8/2017"
              href="https://www.facebook.com/media/set/?vanity=kidsvietnam14&set=a.1874968179437161"
            />
            <Card src="/10.jpg" name="SAPA-6/2017" href="detailpage" />
          </div>
          <div class="container">
            <Card
              src="/9.jpg"
              name="Đại Lộc-1/2017"
              href="https://www.facebook.com/media/set/?vanity=kidsvietnam14&set=a.1799922706941709"
            />
          </div>{" "}
        </div>{" "}
        <div className="main-2">
          <h1 className="black-title"> More projects </h1>{" "}
          <ul>
            <li>
              <Link to="/1314projects"> 2013 - 2014 </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/1516projects"> 2015 - 2016 </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/1718projects"> 2017 - 2018 </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/1920projects"> 2019 - 2020 </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/2122projects"> 2021 - 2022 </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Project1718;
