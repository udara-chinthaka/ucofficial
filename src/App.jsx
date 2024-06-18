import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experiance from "./components/Experiance/Experiance";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ThemeContext } from "./theme";
import BlogArticle from "./components/Blog/BlogArticle";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`App ${theme}`}>
        <Header />
        <Navbar />
        <About />
        <Experiance />
        {/* <Services />
        <Portfolio /> */}
        <Testimonials />
        <Contact />
        <Footer />
        {/* <BlogArticle /> */}
      </div>
    </>
  );
};

export default App;
