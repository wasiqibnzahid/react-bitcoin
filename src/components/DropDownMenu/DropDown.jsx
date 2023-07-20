import React from "react";
import { useState } from "react";
import Edit from "../Svgicons/Edit";
import Info from "../Svgicons/Info";
import MenuDots from "../Svgicons/MenuDots";
import MinusCircle from "../Svgicons/MinusCircle";
import Upload from "../Svgicons/Upload";
import "./DropDown.css";

const menuItems = [
  { label: "Edit", icon: <Edit className="dropDownIcon" /> },
  { label: "Courier Info", icon: <Info className="dropDownIcon" /> },
  { label: "Share", icon: <Upload className="dropDownIcon" /> },
  { label: "Remove", icon: <MinusCircle className="dropDownIcon" /> },
];

const DropDown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideToggleMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="dropDownMenuWrapper">
      <span onClick={toggleMenu} className="cursor-pointer menuToggler">
        <MenuDots />
      </span>
      <div
        onClick={hideToggleMenu}
        className={` ${showMenu ? "showOverlay" : ""}`}
      ></div>
      <ul className={`dropDowmMenu ${showMenu ? "showDropDownMenu" : ""}`}>
        {menuItems.map((item, index) => (
          <li  onClick={hideToggleMenu} key={index}>
            {item.label} {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
