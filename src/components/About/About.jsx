import React, { useState } from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";
import Model from "./Model";
const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function viewModalhandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experiance</h5>
              <small>3+ Industry Experiance</small>
            </article>
            <article className="about_card">
              <HiOutlineUsers className="about_icon" />
              <h5>Clients</h5>
              <small>Worked with 5+ clients</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>Worked in US / Saudi based projects</small>
            </article>
          </div>
          <p>
            A motivated and responsible individual who has the passion to learn
            while developing new skills and i am perfectly capable of adapting
            to any working environment and will become a valued member to the
            team.
          </p>
          <div className="btn_about_me">
            <a href="#c" className="btn" onClick={viewModalhandler}>
              {" "}
              My Journey{" "}
            </a>
            {modalIsOpen && (
              <Model
                onCancel={closeModalHandler}
                // onConfirm={closeModalHandler}
              />
            )}
            {/* {modalIsOpen && <BackDrop OnCancel={closeModalHandler} />} */}
            <a href="#contact" className="btn btn-primary">
              {" "}
              Let's Talk{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
