import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top container">
        <div className="d1">
          <p className="p1">Contact Us</p>
          <div className="d2">
            <p className="p2">Email</p>
            <p className="p3">needhelp@Organia.com</p>
          </div>
          <div className="d2">
            <p className="p2">Phone</p>
            <p className="p3">666 888 888</p>
          </div>
          <div className="d2">
            <p className="p2">Address</p>
            <p className="p3">88 road, borklyn street, USA</p>
          </div>
        </div>
        <span className="line1"></span>
        <div className="d3">
          <img src="/image1.svg" alt="" />
          <p className="p4">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </p>
          <div className="icons">
            <img src="/image10.svg" alt="" />
            <img src="/image11.svg" alt="" />
            <img src="/image12.svg" alt="" />
            <img src="/image13.svg" alt="" />
          </div>
        </div>
        <span className="line1"></span>
        <div className="d4">
          <p className="p5">Utility Pages</p>
          <p className="p6">Style Guide</p>
          <p className="p6">404 Not Found</p>
          <p className="p6">Password Protected</p>
          <p className="p6">Licences</p>
          <p className="p6">Changelog</p>
        </div>
      </div>
      <span className="line2"></span>
      <div className="container footer-bottom">
        <p className="p7">
          {" "}
          Copyright © <span className="aa">Organick</span> | Designed by
          <span className="aa">VictorFlow</span> Templates - Powered by{" "}
          <span className="aa">Webflow</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
