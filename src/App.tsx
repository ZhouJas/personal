import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import TopBar from "./components/topBar/topBar";
import "./app.scss";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Themes, GlobalStyles } from "./themes";
import { PuffLoader } from "react-spinners";
import { animated, useSpring, useChain, useSpringRef} from "@react-spring/web";

function App() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [colorMode, setColorMode] = useState(prefersDark ? "dark" : "light");
  const [isLoading, setLoading] = useState(false);

  const themeToggler = () => {
    colorMode === "dark" ? setColorMode("light") : setColorMode("dark");
    console.log(colorMode);
  };

  const loaderSpringRef = useSpringRef()
  const headerSpringRef = useSpringRef()
  const bodySpringRef = useSpringRef()

  const loaderSpring = useSpring({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
    delay: 2000,
    onResolve: () => setLoading(false),
    ref: loaderSpringRef
  });

  const headerSpring = useSpring({
    from: {
      opacity: 0,
      y:-100
    },
    to: {
      opacity: 1,
      y:0
    },
    ref: headerSpringRef
  });

  const bodySpring = useSpring({
    from: {
      opacity: 0,
      y:100
    },
    to: {
      opacity: 1,
      y:0
    },
    ref: bodySpringRef
  });

  useChain([loaderSpringRef, headerSpringRef, bodySpringRef], [0, 0.9, 0.9], 3000)


  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="app hideScrollBar">
      <ThemeProvider
        theme={colorMode === "dark" ? Themes.darkTheme : Themes.lightTheme}
      >
        <GlobalStyles />
        {isLoading ? (
          <animated.div
            className="loaderWrapper"
            style={loaderSpring}
          >
            <PuffLoader
              className="loader"
              size={150}
              color={"gray"}
            />
          </animated.div>
        ) : (
          <>
          <animated.div style={headerSpring}>
            <TopBar theme={colorMode} themeToggler={themeToggler} />
          </animated.div>
            <animated.div style={bodySpring} className="sections hideScrollBar">
              <Intro/>
              <Portfolio/>
            </animated.div>
          </>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
