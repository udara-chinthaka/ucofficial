import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const SocialConnect = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/udarachinthaka/">
        <BsLinkedin />
      </a>
      <a href="https://www.facebook.com/udarachinthaka135/">
        <BsFacebook />
      </a>
    </div>
  );
};

export default SocialConnect;
