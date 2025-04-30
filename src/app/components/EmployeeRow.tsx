// app/components/EmployeeRow.tsx
import React from "react";

// Tipe Status
type EmployeeStatus = "Active" | "Inactive";

interface EmployeeRowProps {
  employee: {
    id: number;
    name: string;
    position: string;
    email: string;
    status: EmployeeStatus;
  };
}

// Helper styling status badge
const getStatusStyles = (status: EmployeeStatus) => {
  switch (status) {
    case "Active":
      return "bg-blue-100 text-blue-700";
    case "Inactive":
      return "bg-gray-200 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  return (
    // --- Ubah grid menjadi responsif: 1 kolom default, 5 kolom di md+ ---
    // --- Sesuaikan padding & gap ---
    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-2 md:gap-4 md:items-center py-3 px-4 bg-white border-b border-gray-200 last:border-b-0">
      {/* Kolom Name */}
      {/* --- Sesuaikan text-align --- */}
      <div className="text-sm text-gray-800 font-medium text-left md:text-center">
        {/* Tidak perlu label untuk kolom pertama */}
        {employee.name}
      </div>

      {/* Kolom Position */}
      {/* --- Tambahkan label mobile, sesuaikan text-align --- */}
      <div className="text-sm text-gray-600 text-left md:text-center">
        <span className="font-semibold md:hidden">Position: </span>
        {employee.position}
      </div>

      {/* Kolom Email */}
      {/* --- Tambahkan label mobile, sesuaikan text-align --- */}
      <div className="text-sm text-gray-600 text-left md:text-center">
        <span className="font-semibold md:hidden">Email: </span>
        {employee.email}
      </div>

      {/* Kolom Status */}
      {/* --- Tambahkan label mobile, sesuaikan text-align --- */}
      <div className="text-left md:text-center">
        <span className="font-semibold md:hidden">Status: </span>
        <span
          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getStatusStyles(
            employee.status
          )}`}
        >
          {employee.status}
        </span>
      </div>

      {/* Kolom Edit Button */}
      {/* --- Atur ulang posisi di mobile --- */}
      <div className="md:justify-self-center pt-2 md:pt-0 flex justify-end md:justify-center">
        <button className="text-xs border border-gray-300 rounded px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">
          Edit
        </button>
      </div>
    </div>
  );
};

export default EmployeeRow;
