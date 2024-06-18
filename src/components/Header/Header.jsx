import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me_new.JPG";
import SocialConnect from "./SocialConnect";
// import { ThemeContext } from "../../theme.js";
const Header = () => {
  // theme context
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section id="home">
      <header>
        {/* <button onClick={() => toggleTheme()}>{theme}</button> */}
        {/* <div className={`container header__container ${theme}`}> */}
        <div className="container header__container">
          <h4>Hi, I'm</h4>
          <h1>UDARA CHINTHAKA</h1>
          <h5 className="text_light"> Fullstack Software Engineer</h5>
          <CTA />
          <SocialConnect />
          <div className="me">
            <img src={me} alt="" />
          </div>
          <a href="#contact" className="scroll_down">
            {" "}
            Scroll Down
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
