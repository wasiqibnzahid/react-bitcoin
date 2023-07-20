import React from "react";
import Explore from "../Svgicons/Explore";
import Notification from "../Svgicons/Notification";
import Settings from "../Svgicons/Settings";
import Wallet from "../Svgicons/Wallet";
import "./FooterMenu.css";

const FooterMenu = () => {
  const svgIcons = [
    <Wallet className="footerIcons" />,
    <Explore className="footerIcons" />,
    <Notification className="footerIcons" />,
    <Settings className="footerIcons" />,
  ];

  return (
    <footer className="footerMenu">
      <ul>
        {svgIcons.map((svgIcon, index) => (
          <li key={index}>{svgIcon}</li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterMenu;
