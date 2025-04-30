// app/orders/page.tsx
import React from "react";
import { FiSearch } from "react-icons/fi";
import OrderRow from "../components/OrderRow"; // Pastikan path import benar

type OrderStatus = "Pending" | "Completed" | "Cancelled";
const ordersData: {
  id: number;
  orderNumber: string;
  customerName: string;
  orderDate: string;
  status: OrderStatus;
}[] = [
  {
    id: 1,
    orderNumber: "1001",
    customerName: "Arlyn Stefanny",
    orderDate: "04/10/2025",
    status: "Pending",
  },
  {
    id: 2,
    orderNumber: "1000",
    customerName: "Raditya",
    orderDate: "04/10/2025",
    status: "Completed",
  },
  {
    id: 3,
    orderNumber: "999",
    customerName: "Adit",
    orderDate: "04/10/2025",
    status: "Cancelled",
  },
  {
    id: 4,
    orderNumber: "998",
    customerName: "Aubrey",
    orderDate: "04/10/2025",
    status: "Completed",
  },
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
      <div className="max-w-5xl space-y-6">
        {" "}
        {/* Kontainer tetap max-w-5xl, rata kiri */}
        {/* Baris Atas: Hanya Search Bar (Responsif) */}
        <div className="flex">
          {" "}
          {/* Tidak perlu justify-between karena hanya 1 item */}
          {/* Search Bar */}
          <div className="relative w-full sm:max-w-xl">
            {" "}
            {/* Lebar penuh di mobile, max-w di sm+ */}
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search orders"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#EAA25D]/50 focus:border-transparent"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* --- Header Tabel: Sembunyikan di mobile (md kebawah) --- */}
          <div className="hidden md:grid grid-cols-5 gap-4 items-center py-3 px-4 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-900 uppercase tracking-wider">
            <div className="col-span-1 text-center">Order</div>
            <div className="col-span-1 text-center">Customer</div>
            <div className="col-span-1 text-center">Date</div>
            <div className="col-span-1 text-center">Status</div>
            <div className="text-center col-span-1"></div>
          </div>
          <div>
            {ordersData.length > 0 ? (
              ordersData.map((order) => (
                <OrderRow key={order.id} order={order} />
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                No orders found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
