// app/components/OrderRow.tsx
import React from "react";

type OrderStatus = "Pending" | "Completed" | "Cancelled";
interface OrderRowProps {
  order: {
    id: number;
    orderNumber: string;
    customerName: string;
    orderDate: string;
    status: OrderStatus;
  };
}
const getStatusStyles = (status: OrderStatus) => {
  switch (status) {
    case "Completed":
      return "bg-[#bfe39f] text-green-700";
    case "Pending":
      return "bg-[#a6cee3] text-blue-700";
    case "Cancelled":
      return "bg-[#f5b5b5] text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const OrderRow: React.FC<OrderRowProps> = ({ order }) => {
  return (
    // --- Ubah grid menjadi responsif: 1 kolom default, 5 kolom di md+ ---
    // --- Sesuaikan padding & gap ---
    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-2 md:gap-4 md:items-center py-3 px-4 bg-white border-b border-gray-200 last:border-b-0 ">
      {/* Kolom Order */}
      {/* --- Sesuaikan text-align --- */}
      <div className="text-sm text-gray-900 font-medium text-left md:text-center">
        {/* Tidak perlu label untuk kolom pertama biasanya */}
        {order.orderNumber}
      </div>

      {/* Kolom Customer */}
      {/* --- Tambahkan label mobile, sesuaikan text-align --- */}
      <div className="text-sm text-gray-900 text-left md:text-center">
        <span className="font-normal md:hidden">Customer: </span>
        {order.customerName}
      </div>

      {/* Kolom Date */}
      {/* --- Tambahkan label mobile, sesuaikan text-align --- */}
      <div className="text-sm text-gray-900 text-left md:text-center">
        <span className="font-normal md:hidden">Date: </span>
        {order.orderDate}
      </div>

      {/* Kolom Status */}
      {/* --- Tambahkan label mobile, sesuaikan text-align --- */}
      <div className="text-left md:text-center">
        <span className="font-normal md:hidden">Status: </span>
        <span
          className={`text-xs font-normal px-2.5 py-0.5 rounded-full ${getStatusStyles(
            order.status
          )}`}
        >
          {order.status}
        </span>
      </div>

      {/* Kolom Edit Button */}
      {/* --- Atur ulang posisi di mobile --- */}
      <div className="md:justify-self-center pt-2 md:pt-0 flex justify-end md:justify-center">
        <button className="text-xs border border-gray-300 rounded px-3 py-1 text-gray-900 hover:bg-gray-100 transition-colors">
          Edit
        </button>
      </div>
    </div>
  );
};

export default OrderRow;
