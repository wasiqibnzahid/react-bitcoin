import React from "react";
import { AreaChart, Area } from "recharts";


const CardinalAreaChart = ({ chartData }) => {
  return (
    <AreaChart
      width={window.innerWidth - 30}
      height={160}
      data={chartData}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Area type="monotone" dataKey="price" stroke="#FA9D21" fill="#fa9d213d" />
    </AreaChart>
  );
};

export default CardinalAreaChart;
