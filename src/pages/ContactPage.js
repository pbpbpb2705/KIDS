import React from 'react'
import "./ContactPage.css"
import {Link} from "react-router-dom"
function ContactPage() {
    return (
      <div>
        <Link to={{ pathname: "https://github.com/pbpbpb2705/KIDS" }} target="_blank">
          Github
        </Link>
      </div>
    );
}

export default ContactPage;
