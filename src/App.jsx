import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experiance from "./components/Experiance/Experiance";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ThemeContext } from "./theme";
import Project from "./components/Projects/Project.jsx";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`App ${theme}`}>
        <Header />
        <Navbar />
        <About />
        <Experiance />
        <Project />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
