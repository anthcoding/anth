//STYLES
import "./App.css";
//COMPONENTS
import HomePage from "./pages/home/home.component";
import About from "./components/about/about.component";
import Work from "./components/work/work.component";
//SMOOTH-SCROLL
import { UseEffectScroll } from "react-use-smooth-scroll";

function App() {
  return (
    <UseEffectScroll>
      <div className="App">
        <HomePage />
        <About />
        <Work />
      </div>
    </UseEffectScroll>
  );
}

export default App;
