import React from "react";
import PageLink from "./map/PageLink";
import SocialLink from "./map/SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink parentClass="footer-links" childClass="footer-link" />
      <SocialLink parentClass="footer-icons" childClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
