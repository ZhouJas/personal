import "./intro.scss"
import { GitHub, LinkedIn, Mail, ArrowDownward } from "@material-ui/icons"
import { ReactComponent as Webring } from '../../assets/logo.svg'
import { IconButton } from "@material-ui/core"
import Footer from "../footer/footer"

export default function Intro(): JSX.Element {
  const github = "https://github.com/ZhouJas"
  const email = "mailto:jason.zhou@uwaterloo.ca"
  const linkedin = "https://www.linkedin.com/in/zhoujas/"
  const rbc = "https://www.rbc.com/our-company/index.html"
  const tealbook = "https://www.tealbook.com/"
  const qualifacts = "https://qualifacts.com/"
  const autodesk = "https://www.autodesk.com/"
  const twitter = "https://twitter.com/home"
  const webring = "https://se-webring.xyz/"
  const resumeLink = "https://drive.google.com/file/d/1aponlOGaaDC7GReWRrkDuAuxyz6y0rsm/view?usp=sharing"

  return (
    <div className="intro" id="intro">
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
        2025 Software Engineering at the University of Waterloo
      </div>
      <div className="introBody" id="prevWork">
        Wrote code at <a href={twitter} target="_blank" rel="noreferrer">X</a> (Formerly <a href={twitter} target="_blank" rel="noreferrer">Twitter</a>),{" "}
        <a href={autodesk} target="_blank" rel="noreferrer">Autodesk</a>, <a href={rbc} target="_blank" rel="noreferrer">Royal Bank of Canada</a>,{" "}
        <a href={qualifacts} target="_blank" rel="noreferrer">Qualifacts</a>, <a href={tealbook} target="_blank" rel="noreferrer">Tealbook</a>
      </div>
      <div className="introBody" id="motivation">
        Full stack & Compute infrastructure, always open to learning new things
      </div>
      <div className="introBody" id="techStack">
        Check out my resume <a href={resumeLink}>here</a>. If there's anything you want to chat about, please reach out!
      </div>
      {/* <div className="promptArrow">
        <a href="#portfolio">
          <ArrowDownward className="arrow bounce" />
        </a>
      </div> */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
