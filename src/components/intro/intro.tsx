import React from "react";
import "./intro.scss";
import { GitHub, LinkedIn, Mail, ArrowDownward } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
// import profile from "../../assets/profile.jpg";

export default function Intro(): JSX.Element {
  const github = "https://github.com/ZhouJas";
  const email = "mailto:jason.zhou@uwaterloo.ca";
  const linkedin = "https://www.linkedin.com/in/zhoujas/";
  const rbc = "https://www.rbc.com/our-company/index.html";
  const ideanotion = "https://ideanotion.net/";

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
        </div>
      </div>
      <div className="introBody" id="school">
        I'm a 2nd year Software Engineering student at the University of
        Waterloo.
      </div>
      <div className="introBody" id="prevWork">
        Previously at <a href={rbc}>Royal Bank of Canada</a> (2021 Summer) and{" "}
        <a href={ideanotion}>Idea Notion Development</a> (Summer 2020, 2019)
      </div>
      <div className="introBody" id="openForWork">
        Currently seeking Winter (Jan-April) and Fall (Sept-Dec) internship
        opportunities for 2022
      </div>
      <div className="introBody" id="motivation">
        I want to explore different technologies and build useful products.
        Right now I'm continuing to build with key tools for full stack
        development such as Node, Angular and React, but I'm always looking to
        learn new tech to add to my toolbox.
      </div>
      <div className="promptArrow">
        <a href="#portfolio">
          <ArrowDownward className="arrow bounce" />
        </a>
      </div>
    </div>
  );
}
