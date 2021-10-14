import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import TopBar from "./components/topBar/topBar";
import './app.scss'
function App() {

  return (
    <div className="app">
      <TopBar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
