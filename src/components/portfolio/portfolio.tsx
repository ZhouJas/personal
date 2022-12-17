import React from "react";
import Footer from "../footer/footer";
import "./portfolio.scss";
import Item from "./item/item";
import projects from "./projects";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Some of my projects</h1>
      <div className="portItems">
          {projects.map(project => Item(project))}
      </div>
      <h1>More to come</h1>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
