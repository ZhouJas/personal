import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import TopBar from "./components/topBar/topBar";
import "./app.scss";
import { useEffect, useState } from "react";
import {ThemeProvider} from "styled-components";
import { Themes, GlobalStyles } from "./themes";
import ReactGA from 'react-ga';
import {tracker} from './trackingID';

function App() {
  useEffect(() => {
    ReactGA.initialize(tracker);
    ReactGA.pageview('personal');
  }, [])
  
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [colorMode, setColorMode] = useState(prefersDark ? "dark" : "light");

  console.log(colorMode);

  const themeToggler = () => {
    colorMode === "dark" ? setColorMode("light") : setColorMode("dark");
    console.log(colorMode);
  };

  return (
      <div className="app">
        <ThemeProvider theme ={colorMode === 'dark' ? Themes.darkTheme: Themes.lightTheme}>
        <GlobalStyles/>
        <TopBar theme={colorMode} themeToggler={themeToggler}/>
        <div className="sections">
          <Intro />
          <Portfolio />
        </div>
        </ThemeProvider>
      </div>
  );
}

export default App;
