import React from "react";
import DropDown from "../DropDownMenu/DropDown";
import LeftArrow from "../Svgicons/LeftArrow";

import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <header className="headerSection">
      <nav className="navMenu">
        <span className="cursor-pointer">
          <LeftArrow />
        </span>
        <h1>Bitcoin Wallet</h1>
        <DropDown />
      </nav>
    </header>
  );
};

export default NavigationMenu;
