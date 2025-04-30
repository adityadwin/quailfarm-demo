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

// Contoh data bulanan (misalnya Revenue) dalam Jutaan
const data = [
  { name: "Jan", value: 12000000 },
  { name: "Feb", value: 24000000 },
  { name: "Mar", value: 35000000 },
  { name: "Apr", value: 25000000 },
  { name: "May", value: 15000000 },
  { name: "Jun", value: 28000000 },
  { name: "Jul", value: 36000000 },
  { name: "Aug", value: 25000000 },
  { name: "Sep", value: 14000000 },
  { name: "Oct", value: 25000000 },
  { name: "Nov", value: 34000000 },
  { name: "Dec", value: 25000000 },
];

// Fungsi format Angka Y-Axis (opsional, bisa tampilkan angka penuh)
const formatYAxis = (tickItem: number) => {
  // Format ke angka penuh dengan pemisah ribuan
  return tickItem.toLocaleString("id-ID");
  // Atau format singkat:
  // if (tickItem >= 1000000) {
  //   return `${tickItem / 1000000}M`;
  // }
  // return tickItem.toString();
};

const MonthlyRevenueExpensesChart = () => {
  return (
    // Sesuaikan tinggi jika perlu
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" fontSize={12} />
        {/* Atur domain dan tick Y-Axis */}
        <YAxis
          domain={[0, 40000000]} // Skala 0 - 40 Juta
          tickCount={5} // Jumlah garis/label (0, 10jt, 20jt, 30jt, 40jt)
          tickFormatter={formatYAxis} // Gunakan formatter
          fontSize={10}
          width={80} // Beri ruang lebih untuk label panjang
        />
        <Tooltip formatter={(value: number) => value.toLocaleString("id-ID")} />{" "}
        {/* Format tooltip */}
        {/* Sesuaikan dataKey jika nama field di data berbeda */}
        <Bar dataKey="value" fill="#1E3A8A" name="Revenue/Expenses" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MonthlyRevenueExpensesChart;
