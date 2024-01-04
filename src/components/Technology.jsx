import React from "react";
import "../styles/Technology.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Shopping: 3000,
  },
  {
    name: "February",
    Shopping: 100,
  },
  {
    name: "March",
    Shopping: 9000,
  },
  {
    name: "April",
    Shopping: 900,
  },
  {
    name: "May",
    Shopping: 800,
  },
  {
    name: "June",
    Shopping: 5000,
  },
  {
    name: "July",
    Shopping: 8000,
  },
];

export default function Technology() {
  return (
    <>
      <div className="custom-text">
        <p>top countries with high spending on online shopping </p>
      </div>
      <div className="Technology">
        <ResponsiveContainer width="90%" aspect={3}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1" horizontal="true" vertical="" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              cursor={false}
            />

            <Line
              type="monotone"
              dataKey="Shopping"
              stroke="#8884d8"
              dot={{
                fill: "#000000",
                strokeWidth: 2,
                stroke: " #00ff00",
                r: 6,
              }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
