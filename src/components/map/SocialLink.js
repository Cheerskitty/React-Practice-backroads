import React from "react";
import { socialLinks } from "../../data";

const SocialLink = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a href={href} target="_blank" className={childClass}>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLink;
