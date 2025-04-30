"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expenses: 2400 },
  { name: "Feb", income: 3000, expenses: 1398 },
  { name: "Mar", income: 2000, expenses: 9800 },
  { name: "Apr", income: 2780, expenses: 3908 },
  { name: "May", income: 1890, expenses: 4800 },
  { name: "Jun", income: 2390, expenses: 3800 },
  { name: "Jul", income: 3490, expenses: 4300 },
]; // Data contoh

const FinancesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      {/* --- Kurangi margin kanan agar grafik bisa full width --- */}
      <LineChart
        data={data}
        margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
      >
        {" "}
        {/* right dikurangi signifikan */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" fontSize={10} hide />
        <YAxis fontSize={10} hide />
        <Tooltip contentStyle={{ fontSize: "12px", padding: "4px 8px" }} />
        {/* Legend tetap di kanan, tapi ruang margin chart dikurangi */}
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconSize={10}
          wrapperStyle={{ fontSize: "10px", paddingLeft: "10px" }}
        />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#1f78b4"
          strokeWidth={2}
          name="Income"
        />{" "}
        {/* Biru Tua */}
        <Line
          type="monotone"
          dataKey="expenses"
          stroke="#a6cee3"
          strokeWidth={2}
          name="Expenses"
        />{" "}
        {/* Biru Muda (Sky) */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default FinancesChart;
