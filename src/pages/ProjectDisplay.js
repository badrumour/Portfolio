import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <a href={project.link1}>
        <h2>{project.link1}</h2>
      </a>

      <a href={project.link2}>
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
