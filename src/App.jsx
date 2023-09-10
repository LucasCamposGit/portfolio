import "./app.scss";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App
