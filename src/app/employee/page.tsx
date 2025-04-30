// app/employee/page.tsx
import React from "react";
import { FiPlus } from "react-icons/fi";
import EmployeeRow from "../components/EmployeeRow"; // Import komponen baris employee

// Tipe Status untuk Employee
type EmployeeStatus = "Active" | "Inactive";

// Contoh data employee (atau import)
const employeesData: {
  id: number;
  name: string;
  position: string;
  email: string;
  status: EmployeeStatus;
}[] = [
  {
    id: 1,
    name: "Arlyn Stefanny",
    position: "Farm Manager",
    email: "arlyn.s@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Raditya",
    position: "Assistant Manager",
    email: "raditya.m@example.com",
    status: "Active",
  },
  {
    id: 3,
    name: "Adit",
    position: "Farm Worker",
    email: "adit.fw@example.com",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Aubrey",
    position: "Farm Worker",
    email: "aubrey.fw@example.com",
    status: "Active",
  },
];

export default function EmployeePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Employees</h1>

      {/* Kontainer luar (max-w-5xl, rata kiri) */}
      <div className="max-w-5xl space-y-6">
        {/* Baris Atas: Hanya Tombol Add Employee di Kanan */}
        <div className="flex justify-end">
          <button className="bg-[#EAA25D] text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-opacity text-sm flex-shrink-0">
            <FiPlus className="h-4 w-4" />
            <span>Add Employee</span>
          </button>
        </div>

        {/* Area Tabel Employees */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Header Tabel */}
          {/* --- Sembunyikan header di mobile (md ke bawah) --- */}
          <div className="hidden md:grid grid-cols-5 gap-4 items-center py-3 px-4 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-900 uppercase tracking-wider">
            <div className="col-span-1 text-center">Name</div>
            <div className="col-span-1 text-center">Position</div>
            <div className="col-span-1 text-center">Email</div>
            <div className="col-span-1 text-center">Status</div>
            <div className="text-center col-span-1"></div>
          </div>

          {/* Body Tabel (Data Employees) */}
          <div>
            {employeesData.length > 0 ? (
              employeesData.map((employee) => (
                <EmployeeRow key={employee.id} employee={employee} />
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                No employees found.
              </div>
            )}
          </div>
        </div>
        {/* Akhir Div Pembungkus Luar */}
      </div>
    </div>
  );
}
