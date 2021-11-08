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
            <Card
              src="/5.jpg"
              name="SAPA-8/2014"
              href="https://www.facebook.com/media/set/?vanity=kidsvietnam14&set=a.1445882995679017"
            />
            <Card
              src="/4.jpg"
              name="BÌNH ĐỊNH-8/2014"
              href="https://www.facebook.com/media/set/?vanity=kidsvietnam14&set=a.1451311241802859"
            />
            <Card
              src="/3.jpg"
              name="LAI CHÂU-6/2014"
              href="https://www.facebook.com/media/set/?vanity=kidsvietnam14&set=a.1429528633981120"
            />
          </div>
          <div class="container">
            <Card
              src="/2.jpg"
              name="SAPA-2/2014"
              href="https://www.facebook.com/media/set/?vanity=shoesforsapa&set=a.1468192100066781"
            />
            <Card
              src="/1.jpg"
              name="SAPA-12/2013"
              href="https://www.facebook.com/media/set/?vanity=shoesforsapa&set=a.1447161468836511"
            />
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
