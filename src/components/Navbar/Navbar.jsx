import React, { useState } from "react";
import "./navbar.css";
import { MenuItems } from "./MenuItem.js";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("#home");
  return (
    <nav>
      {MenuItems.map(({ sectionID, icon }, index) => {
        return (
          <a
            key={sectionID}
            href={sectionID}
            className={activeNavbar === sectionID ? "active" : ""}
            onClick={() => setActiveNavbar(sectionID)}
          >
            {icon}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
