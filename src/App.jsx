import "./app.scss";
import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App
