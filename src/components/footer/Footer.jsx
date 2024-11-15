import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_content">
        <div className="footer_content_left">
          <img className="footer_logo" src={assets.food_logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, amet?
          </p>
          <div className="footer_social_icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer_content_center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer_content_right">
          <h2>Get In TOUCH</h2>
          <ul>
            <li>+1-213-245-4536</li>
            <li>contact@foodapp.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer_copyright">
        Copyright 2024 @ FoodApp - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
