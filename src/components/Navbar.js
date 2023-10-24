import React from "react";
import PageLink from "./map/PageLink";
import SocialLink from "./map/SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLink parentClass="nav-links" childClass="nav-link" />
        <SocialLink parentClass="nav-icons" childClass="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
