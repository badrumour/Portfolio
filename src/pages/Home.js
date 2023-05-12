import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi my name is Sanjeet (: </h2>
        <div className="prompt">
          <p>A Software engineer with passion for learning and creating</p>
          <a href="https://www.linkedin.com/in/sanjeet-kshirasagar-1ba6b3211/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/badrumour/">
            <GitHubIcon />
          </a>

          <a href="https://mail.google.com/">
            <AttachEmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              Reactjs, Redux-toolkit, Html & css, Bootstrap, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>languages</h2>
            <span>Javascript, TypeScript, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
