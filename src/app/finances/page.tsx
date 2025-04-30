import React from "react";
import Card from "../components/Card"; // Import Card component
import MonthlyRevenueExpensesChart from "../components/charts/MonthlyRevenueExpensesChart"; // Import chart baru

// Fungsi format Rupiah (bisa diimpor dari utilitas jika ada)
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Contoh Nilai Revenue & Expenses
const totalRevenue = 35000000;
const totalExpenses = 12000000;

export default function FinancesPage() {
  return (
    // Kontainer utama halaman
    <div className="space-y-6">
      {/* Judul Halaman */}
      <h1 className="text-3xl font-bold text-gray-800">Finances</h1>

      {/* Pembungkus Card Revenue & Expenses */}
      <div className="max-w-xl">
        {" "}
        {/* Lebar dibatasi, rata kiri */}
        {/* Baris Atas: Card Revenue & Expenses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Revenue */}
          {/* --- Sesuaikan padding vertikal untuk responsif --- */}
          <Card className="text-center px-6 py-6 md:py-10">
            {" "}
            {/* py-6 default, md:py-10 */}
            <h2 className="text-lg font-semibold text-gray-500 mb-2 uppercase tracking-wider">
              Revenue
            </h2>
            <p className="text-3xl font-bold text-gray-800">
              {formatCurrency(totalRevenue)}
            </p>
          </Card>
          {/* Card Expenses */}
          {/* --- Sesuaikan padding vertikal untuk responsif --- */}
          <Card className="text-center px-6 py-6 md:py-10">
            {" "}
            {/* py-6 default, md:py-10 */}
            <h2 className="text-lg font-semibold text-gray-500 mb-2 uppercase tracking-wider">
              Expenses
            </h2>
            <p className="text-3xl font-bold text-gray-800">
              {formatCurrency(totalExpenses)}
            </p>
          </Card>
        </div>
      </div>
      {/* Akhir Pembungkus Card Atas */}

      {/* Baris Bawah: Card Grafik */}
      <div>
        <Card title="Revenue and Expenses" className="p-6">
          <MonthlyRevenueExpensesChart />
        </Card>
      </div>
    </div> // Akhir Kontainer utama halaman
  );
}
