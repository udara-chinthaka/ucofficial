import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialConnect = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/udarachinthaka/">
        <BsLinkedin />
      </a>
      <a href="https://www.facebook.com/udarachinthaka135/">
        <BsFacebook />
      </a>
      <a href="https://medium.com/@udarachinthaka135">
        <FaMedium />
      </a>
      <a href="https://www.instagram.com/uc.chinthaka/">
        <FaInstagram />
      </a>
      <a href="https://github.com/udara-chinthaka">
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialConnect;
