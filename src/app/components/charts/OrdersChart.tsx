"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", orders: 12 },
  { name: "Feb", orders: 21 },
  { name: "Mar", orders: 28 },
  { name: "Apr", orders: 22 },
  { name: "May", orders: 15 },
  { name: "Jun", orders: 29 },
  { name: "Jul", orders: 32 },
  { name: "Aug", orders: 21 },
  { name: "Sep", orders: 14 },
  { name: "Oct", orders: 24 },
  { name: "Nov", orders: 29 },
  { name: "Dec", orders: 20 },
];

const OrdersChart = () => {
  return (
    // --- Kembalikan height ke 250 ---
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 80, right: 20, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" fontSize={12} />
        <YAxis domain={[0, 32]} tickCount={5} fontSize={12} />
        <Tooltip />
        <Bar dataKey="orders" fill="#1E3A8A" name="Orders" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default OrdersChart;
