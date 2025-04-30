// app/components/Sidebar.tsx
"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiBox,
  FiShoppingCart,
  FiTruck,
  FiDollarSign,
  FiUsers,
  FiGrid, // Contoh ikon untuk mode minimize
} from "react-icons/fi";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: FiHome, label: "Dashboard", href: "/" },
    { icon: FiBox, label: "Products", href: "/products" },
    { icon: FiShoppingCart, label: "Orders", href: "/orders" },
    { icon: FiTruck, label: "Shipments", href: "/shipments" },
    { icon: FiDollarSign, label: "Finances", href: "/finances" },
    { icon: FiUsers, label: "Employee", href: "/employee" },
  ];

  // State isMinimized TIDAK digunakan di pendekatan ini
  // const [isMinimized, setIsMinimized] = useState(false);

  return (
    // --- Ubah lebar, padding, dan tambahkan transisi ---
    <aside
      className={`bg-[#FFFDD0] text-[#404040] flex flex-col fixed inset-y-0 left-0 h-screen shadow-lg transition-all duration-300 ease-in-out w-20 lg:w-64 p-4 lg:p-6`}
    >
      {/* Judul Penuh (hanya tampil di lg) */}
      <div className="hidden lg:block text-2xl font-bold mb-8 text-center text-[#404040]">
        Cimahpar Quail Farm
      </div>
      {/* Placeholder Logo/Ikon (tampil di bawah lg) */}
      <div className="block lg:hidden text-2xl font-bold mb-8 text-center text-[#404040]">
        {/* Ganti dengan logo atau ikon Anda */}
        <FiGrid className="mx-auto h-8 w-8" />
      </div>

      <nav className="flex-grow">
        {" "}
        {/* flex-grow agar menu mengisi ruang */}
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
              // isMinimized={isMinimized} // Tidak perlu jika hanya pakai breakpoint
            />
          ))}
        </ul>
      </nav>
      {/* Tombol Toggle bisa ditambahkan di sini nanti jika pakai state */}
    </aside>
  );
};

export default Sidebar;
