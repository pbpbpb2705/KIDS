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
              src="image/CardImg/24.jpg"
              name="Vĩnh Long - 11/2020"
              href="vinhlong-11-2020"
              title="Vĩnh Long - 11/2020"
            />
            <Card
              src="image/CardImg/23.jpg"
              name="Đồng Nai - 10/2020"
              href="dongnai-10-2020"
              title="Đồng Nai - 10/2020"
            />
            <Card
              src="image/CardImg/22.jpg"
              name="Bến Tre - 9/2020"
              href="bentre-9-2020"
              title="Bến Tre - 9/2020"
            />
          </div>
          <div class="container">
            <Card
              src="image/CardImg/21.jpg"
              name="Vĩnh Long - 7/2020"
              href="vinhlong-7-2020"
              title="Vĩnh Long - 7/2020"
            />
            <Card
              src="image/CardImg/20.jpg"
              name="Bến Tre - 3/2020"
              href="bentre-3-2020"
              title="Bến Tre - 3/2020"
            />
            <Card
              src="image/CardImg/19.jpg"
              name="Bến Tre - 9/2019"
              href="bentre-9-2019"
              title="Bến Tre - 9/2019"
            />
          </div>
          <div class="container">
            <Card
              src="image/CardImg/18.jpg"
              name="Bình Định - 8/2019"
              href="binhdinh-8-2019"
              title="Bình Định - 8/2019"
            />
            <Card
              src="image/CardImg/17.jpg"
              name="Sapa - 7/2019"
              href="sapa-7-2019"
              title="SAPA - 7/2019"
            />
            <Card
              src="image/CardImg/16.jpg"
              name="Vĩnh Long - 7/2019"
              href="vinhlong-7-2019"
              title="Vĩnh Long - 7/2019"
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

export default Project1920;
