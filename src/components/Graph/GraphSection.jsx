import React, { useEffect, useMemo, useState } from "react";
import CardinalAreaChart from "../CardinalAreaChart/CardinalAreaChart";
import "./Graph.css";
import { fetchCoinData } from "../../api/CoinData";
const timeOptions = [
  {
    label: "Day",
    value: 1,
  },
  {
    label: "Week",
    value: 7,
  },
  {
    label: "Month",
    value: 30,
  },
  {
    label: "Year",
    value: 365,
  },
];

const GraphSection = ({ coinValue }) => {
  const [selectedTime, setSelectedTime] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [graphData, setGraphData] = useState([]);
  const highestLowestData = useMemo(() => {
    let lowestVal = Infinity;
    let highestVal = -Infinity;
    for (let i = 0; i < graphData.length; i++) {
      if (graphData[i].price < lowestVal) {
        lowestVal = graphData[i].price;
      }
      if (graphData[i].price > highestVal) {
        highestVal = graphData[i].price;
      }
    }
    return {
      highestVal,
      lowestVal,
    };
  }, [graphData]);
  function fetchGraphData() {
    try {
      setIsLoading(true);
      fetchCoinData(selectedTime).then((res) => {
        setGraphData(res);
        setIsLoading(false);
      });
    } catch (e) {
      console.error(e);
      alert(
        "There was an error fetching data from the servers, please try again later"
      );
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchGraphData();
  }, [selectedTime]);
  return (
    <section className="graphSection">
      <ul className="graphNavigation">
        {timeOptions.map((time) => (
          <li
            onClick={() => setSelectedTime(time.value)}
            key={time.value}
            className={time.value === selectedTime ? "active" : ""}
          >
            {time.label}
          </li>
        ))}
      </ul>
      <div className="graphWrapper">
        <div className={`hide ${!isLoading && "show"}`}>
          <div className="lowandhigh">
            <div className="point">
              <span>Lower: </span>
              <span>${highestLowestData?.lowestVal || 0}</span>
            </div>
            <div className="point green">
              <span>Higher: </span>
              <span>${highestLowestData?.highestVal || 0}</span>
            </div>
          </div>
          <div className="areaGraphWrapper">
            <CardinalAreaChart chartData={graphData} />
            <div className="point btcToDollar">
              <span>1 BTC = </span>
              <span>${coinValue}</span>
            </div>
          </div>
        </div>
        <div className={`hide ${isLoading && "show"}`}>
          <div className="loader-parent">
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphSection;
