import React from "react";
import "./ContactPage.css";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="span" />
      <Link
        to={{ pathname: "https://github.com/pbpbpb2705/KIDS" }}
        target="_blank"
      >
        Github{" "}
      </Link>{" "}
      <h1> updating... </h1>{" "}
    </div>
  );
}

export default ContactPage;
