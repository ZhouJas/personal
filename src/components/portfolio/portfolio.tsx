import React from "react";
import Footer from "../footer/footer";
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Some of my projects</h1>
      <div className="portItems">
        <a href="https://devpost.com/software/campusafe" title="Go to DevPost">
          <div className="item">
            <h3>Campusafe</h3>
            <p>React Native app made to provide mental health support</p>
          </div>
        </a>
        <a href="https://github.com/ZhouJas/CryptoPi" title="Go to Github">
          <div className="item">
            <h3>CryptoPi</h3>
            <p>
              Physical Ethereum wallet using Raspberry Pi, Node, MongoDB and
              Flutter
            </p>
          </div>
        </a>
        <a href="https://github.com/ZhouJas/GM-WebScraper" title="Go to Github">
          <div className="item">
            <h3>GM WebScraper</h3>
            <p>
              Web scraping tool to quickly obtain GM brands' vehicle data for
              data entry
            </p>
          </div>
        </a>
        <a href="https://github.com/teppah/gitvoice" title="Go to Github">
          <div className="item">
            <h3>GitVoice</h3>
            <p>
              VSCode extension to perform git commands remotely using voice
              prompts
            </p>
          </div>
        </a>
      </div>
      <h1>More to come</h1>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
