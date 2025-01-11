import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import "./index.css";

export function StatsChart({ itemPriceRange, monthName }) {
  let list = Object.keys(itemPriceRange);
  list = list.map((each) => ({
    name: each,
    items: itemPriceRange[each],
  }));

  return (
    <div className="chart-container">
      <h2 className="chart-title">
        <u>Bar Chart Stats</u> - <i style={{ color: "#28a745" }}>{monthName}</i>
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={list}
          margin={{
            top: 20,
            right: 30,
            left: 40, // Increased left margin for Y-axis visibility
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            tick={{ fontSize: 20, fill: "#ffffff" }} // Changed color to white
            dataKey="name"
            angle={-30}
            textAnchor="end"
          />
          <YAxis
            interval={1}
            tickCount={10}
            allowDecimals={false}
            tick={{ fontSize: 20, fill: "#ffffff" }} // Changed color to white
            tickLine={false} // Remove tick lines for a cleaner look
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="items" fill="#3498db" radius={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
