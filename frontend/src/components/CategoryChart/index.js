import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import "./index.css";

export default function CategoryChart({ monthName, categories }) {
  // Ensure categories is a valid array
  if (!categories || categories.length === 0) {
    return (
      <div className="category-chart-container">
        <h2>
          <u>Unique Category Chart</u> -{" "}
          <b style={{ color: "green" }}>{monthName}</b>
        </h2>
        <p style={{ color: "red", fontWeight: "bold" }}>
          No data available to display.
        </p>
      </div>
    );
  }

  return (
    <div className="category-chart-container">
      <h2>
        <u>Unique Category Chart</u> -{" "}
        <b style={{ color: "green" }}>{monthName}</b>
      </h2>
      <ResponsiveContainer width="90%" height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={categories}
            startAngle={90}
            endAngle={450}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="items"
            paddingAngle={5} // Adds spacing between slices
          >
            {categories.map((each, index) => (
              <Cell
                key={`cell-${index}`}
                name={each.category.toUpperCase()}
                fill={getRandomColor()}
              />
            ))}
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip
            formatter={(value, name) => [`${value} items`, name]}
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              padding: "8px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// Improved Random Color Generator
function getRandomColor() {
  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
