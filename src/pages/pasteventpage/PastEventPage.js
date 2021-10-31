import React from "react";
import "./PastEventPage.css";
import { useHistory } from 'react-router-dom';

function PastEventPage() {
  const history = useHistory();

  function handleClick(props) {
    console.log(props);
    history.push(props);
  }

  return (
    <div className="pastEventPage">
      <div className="span" />
      <div className="pastEventPage-container">
      <div className="card">
        <div className="card-body">
          <h1 class="card-title"> </h1>{" "}
          <button
            onClick={() => handleClick("1314projects")}
            className="btn btn-primary"
          >
            2013-2014 Projects
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="card">
        <div className="card-body">
          <h1 class="card-title"> </h1>{" "}
          <button
            onClick={() => handleClick("1516projects")}
            className="btn btn-primary"
          >
            2015-2016 Projects
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="card">
        <div className="card-body">
          <h1 class="card-title"> </h1>{" "}
          <button
            onClick={() => handleClick("1718projects")}
            className="btn btn-primary"
          >
            2017-2018 Projects
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="card">
        <div className="card-body">
          <h1 class="card-title"> </h1>{" "}
          <button
            onClick={() => handleClick("1920projects")}
            className="btn btn-primary"
          >
            2019-2020 Projects
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="card">
        <div className="card-body">
          <h1 class="card-title"> </h1>{" "}
          <button
            onClick={() => handleClick("2122projects")}
            className="btn btn-primary"
          >
            2021-2022 Projects
          </button>{" "}
        </div>{" "}
      </div>{" "}
      </div>
    </div>
  );
}

export default PastEventPage;
