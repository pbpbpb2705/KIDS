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
      <div className="contact-page-content"> updating... </div>{" "}
    </div>
  );
}

export default ContactPage;