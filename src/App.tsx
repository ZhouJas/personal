import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import TopBar from "./components/topBar/topBar";
import "./app.scss";
import { useState } from "react";
import {ThemeProvider} from "styled-components";
import { Themes, GlobalStyles } from "./themes";
function App() {
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
