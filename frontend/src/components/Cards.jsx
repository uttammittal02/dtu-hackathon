import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";

import "./css/Cards.css";

export default function Cards({ name, work, personImg, emailLink, githubLink, twitterLink, linkedInLink }) {
  return (
    <>
      <div className="card-container">
        <div className="person-image image">
            <img 
                src = {personImg}
                alt = "personImage" />

        </div>
        <div className="team-content">
          <h3 className="name">{name}</h3>
          <h4 className="title">{work}</h4>
        </div>
        <ul className="social">
          <a href={emailLink} aria-hidden="true">
            <FaRegEnvelope className="fa-icon"/>
          </a>

          <a href={githubLink} aria-hidden="true">
            <FaGithub className="fa-icon"/>
          </a>

          <a href={twitterLink} aria-hidden="true">
            <FaTwitter className="fa-icon"/>
          </a>

          <a href={linkedInLink} aria-hidden="true">
            <FaLinkedinIn className="fa-icon"/>
          </a>
        </ul>
      </div>
    </>
  );
}
