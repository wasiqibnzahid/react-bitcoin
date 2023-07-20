import React from "react";
import Dollar from "../Svgicons/Dollar";
import "./BuyAndSellBtnc.css";

const BuyAndSellBtnc = () => {
  return (
    <section className="buyandsellsection">
      <div className="buyandSellWrapper">
        <div className="card">
          <span className="circle">
            <Dollar />
          </span>
          <span className="name">Buy BTC</span>
        </div>
        <div className="card">
          <span className="circle pinkbg">
            <Dollar />
          </span>
          <span className="name">Sell BTC</span>
        </div>
      </div>
    </section>
  );
};

export default BuyAndSellBtnc;
