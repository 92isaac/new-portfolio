import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { createContext, useState } from "react";

export const ThemeMode = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const themeData = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeMode.Provider value={themeData}>
      <div className="body" id={theme}>
        <div className="all">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </ThemeMode.Provider>
  );
}

export default App;
