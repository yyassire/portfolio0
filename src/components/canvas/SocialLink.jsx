import React from "react";
import { Link } from "react-router-dom";

function SocialLink({ socialLink }) {
  return (
    <Link
      to={socialLink?.link}
      className={
        socialLink.link == "https://github.com/yyassire"
          ? "social-link"
          : "social-link s"
      }
      target={"_blank"}
    >
      <img src={socialLink?.icon} alt="" className="link-img" />
    </Link>
  );
}

export default SocialLink;
