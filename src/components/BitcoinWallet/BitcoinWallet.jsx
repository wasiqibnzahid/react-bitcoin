import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import ArrowDown from "../Svgicons/ArrowDown";
import Bitcoin from "../Svgicons/Bitcoin";
import "./BitcoinWallet.css";

const BitcoinWallet = ({ coinValue, loading }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };
  const userBalance = 0.52902;
  return (
    <section className={`bitCoinWallet ${showDropDown && "h-280"}`}>
      <div className="flexBox">
        <div className="heading">
          <Bitcoin className="bitcoinCircle" />
          <span>Bitcoin</span>
        </div>
        <span className="text-gray">BTC</span>
      </div>
      <div className="totalAmount">
        <span>{userBalance} BTC</span>
      </div>
      <div className="flexBox mb2">
        <div className="relative text-gray">
          {!loading && <>${+(userBalance * coinValue).toFixed(5)} USD</>}
          <div className={`loader-parent hide ${loading && "show"}`}>
            <div className="loader loader-small"></div>
          </div>
        </div>

        <span className="percentageRectangle">-2.32%</span>
      </div>
      <div className="downArrow">
        <span className="cursor-pointer" onClick={handleDropDown}>
          <ArrowDown className={`${showDropDown ? "rotateArrow" : ""}`} />
        </span>

        <div className="accordionContent">
          <Button label="Buy" className="btnWidth" variant="primary" />
          <Button label="Sell" className="btnWidth" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default BitcoinWallet;
