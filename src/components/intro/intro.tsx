import React from "react";
import "./intro.scss";
import { GitHub, LinkedIn, Mail, ArrowDownward } from "@material-ui/icons";
import { ReactComponent as Webring } from '../../assets/logo.svg';
import { IconButton } from "@material-ui/core";

export default function Intro(): JSX.Element {
  const github = "https://github.com/ZhouJas";
  const email = "mailto:jason.zhou@uwaterloo.ca";
  const linkedin = "https://www.linkedin.com/in/zhoujas/";
  const rbc = "https://www.rbc.com/our-company/index.html";
  const ideanotion = "https://ideanotion.net/";
  const tealbook = "https://www.tealbook.com/";
  const webring = "https://se-webring.xyz/"
  const resumeLink = "https://drive.google.com/file/d/1KjAcN6kDE4msQ2DoBJ17RhZ9atfrORLH/view?usp=sharing"

  return (
    <div className="intro" id="intro">
      {/* <div className="profileImage">
        <img src={profile} alt="profile" className="image" />
      </div> */}
      <div className="introTitle">
        <h1>Hello, I'm Jason.</h1>
      </div>
      <div className="contacts">
        <div className="iconWrapper">
          <div className="itemContainer">
            <a href={github}>
              <IconButton>
                <GitHub className="icon" />
              </IconButton>
            </a>
          </div>
          <div className="itemContainer">
            <a href={linkedin}>
              <IconButton>
                <LinkedIn className="icon" />
              </IconButton>
            </a>
          </div>
          <div className="itemContainer">
            <a href={email}>
              <IconButton>
                <Mail className="icon" />
              </IconButton>
            </a>
          </div>
          <div className="itemContainer">
            <a href={webring}>
              <IconButton>
                <Webring className="icon"/>
              </IconButton>
            </a>
          </div>
        </div>
      </div>
      <div className="introBody" id="school">
        Currently studying as 3rd year Software Engineering student at the University of
        Waterloo
      </div>
      <div className="introBody" id="prevWork">
        Currently at <a href={tealbook}>Tealbook</a>. Previously at <a href={rbc}>Royal Bank of Canada</a>, and{" "}
        <a href={ideanotion}>Idea Notion Development</a>. Seeking summer internship opportunities for 2023
      </div>
      <div className="introBody" id="motivation">
        I want to explore different technologies and build useful products.
        Right now I'm creating apps with React, Angular, Node, and currently learning Google's suite of development tools such as Google Cloud Storage, and Firebase 
      </div>
      <div className="introBody" id="techStack">
        I have work experience with React, Angular, Node, GCP and others. But I am always open to learning new technologies and trying out new fields! For more details, check out my resume <a href={resumeLink}>here</a>
      </div>
      <div className="promptArrow">
        <a href="#portfolio">
          <ArrowDownward className="arrow bounce" />
        </a>
      </div>
    </div>
  );
}
