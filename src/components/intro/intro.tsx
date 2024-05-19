import "./intro.scss"
import { GitHub, LinkedIn, Mail, ArrowDownward } from "@material-ui/icons"
import { ReactComponent as Webring } from '../../assets/logo.svg'
import { IconButton } from "@material-ui/core"

export default function Intro(): JSX.Element {
  const github = "https://github.com/ZhouJas"
  const email = "mailto:jason.zhou@uwaterloo.ca"
  const linkedin = "https://www.linkedin.com/in/zhoujas/"
  const rbc = "https://www.rbc.com/our-company/index.html"
  const ideanotion = "https://ideanotion.net/"
  const tealbook = "https://www.tealbook.com/"
  const oncall = "https://oncallhealth.com/"
  const autodesk = "https://www.autodesk.com/"
  const twitter = "https://twitter.com/home"
  const webring = "https://se-webring.xyz/"
  const resumeLink = "https://drive.google.com/file/d/14-t4uylU0JtXa082f7C1nHgP4UpsOffX/view?usp=sharing"

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
        Software Engineering student at the University of Waterloo, graduating 2025
      </div>
      <div className="introBody" id="prevWork">
        Currently Compute@<a href={twitter} target="_blank" rel="noreferrer">X</a> (Formerly <a href={twitter} target="_blank" rel="noreferrer">Twitter</a>), 
        previously at <a href={autodesk} target="_blank" rel="noreferrer">Autodesk</a>, <a href={oncall} target="_blank" rel="noreferrer">Oncall Health</a>,{" "}
        <a href={rbc} target="_blank" rel="noreferrer">Royal Bank of Canada</a>, <a href={tealbook} target="_blank" rel="noreferrer">Tealbook</a>, and{" "}
        <a href={ideanotion} target="_blank" rel="noreferrer">Idea Notion Development</a>. Seeking New Grad.
        </div>
      <div className="introBody" id="motivation">
        Full stack & Compute infrastructure, also open to learning new roles.
      </div>
      <div className="introBody" id="techStack">
        Check out my resume <a href={resumeLink}>here</a>. If there's anything you want to chat about, please reach out!
      </div>
      <div className="promptArrow">
        <a href="#portfolio">
          <ArrowDownward className="arrow bounce" />
        </a>
      </div>
    </div>
  );
}
