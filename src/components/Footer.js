import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <InstagramIcon />
        <GitHubIcon />
      </div>
      <p> &copy; 2023 Thanks for visiting my profile....</p>
    </div>
  );
}

export default Footer;
