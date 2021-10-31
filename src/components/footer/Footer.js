import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="tab" />
      <div className="tab">
        <h3> Thông tin </h3> <a href="/about"> About us </a> <br />
        <a href="/past"> Past events </a> <br />
        <a href="/contact"> Contact us </a>{" "}
      </div>{" "}
      
    </footer>
  );
}

export default Footer;
