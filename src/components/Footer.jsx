import React from "react";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.4184406922!2d106.36556197528812!3d10.755292865572997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1696092200511!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </p>
        <div className="icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> Ho Chi Minh city</span> Viet Nam
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> +84 979893510</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="#"> office@company.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          {" "}
          Minh Quang<span> - MQ</span>
        </h2>
        <p className="menu">
          <a href="#"> Home</a> |<a href="#"> About</a> |<a href="#"> Work</a> |
          <a href="#"> Contact</a>
        </p>
        <p className="name"> MQ NET &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
