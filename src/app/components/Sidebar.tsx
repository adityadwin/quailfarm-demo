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
  FiGrid,
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

  return (
    <aside
      className={`bg-[#FFFDD0] text-[#404040] flex flex-col fixed inset-y-0 left-0 h-screen shadow-lg transition-all duration-300 ease-in-out w-20 lg:w-64 p-4 lg:p-6`}
    >
      <div className="hidden lg:block text-2xl font-bold mb-2 text-center p-2 text-[#404040]">
        Cimahpar Quail Farm
      </div>

      <div className="block lg:hidden text-2xl font-bold mb-8 text-center text-[#404040]">
        <FiGrid className="mx-auto h-8 w-8" />
      </div>

      <nav className="flex-grow">
        {" "}
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
