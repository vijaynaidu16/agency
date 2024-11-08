import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Company = () => {
  return (
    <div className="company">
      <p>The Best Companies Trust Us</p>
      <div className="icons">
        <FaFacebook />
        <FaYoutube />
        <FaPinterest />
        <FaGoogle />
      </div>
    </div>
  );
};

export default Company;
