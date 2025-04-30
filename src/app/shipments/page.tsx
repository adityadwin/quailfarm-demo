import React from "react";
import { FiSearch } from "react-icons/fi";
import ShipmentRow from "../components/ShipmentRow";

type ShipmentStatus = "Pending" | "Completed" | "Cancelled";
const shipmentsData: {
  id: number;
  shipmentId: string;
  orderId: string;
  shipmentDate: string;
  status: ShipmentStatus;
}[] = [
  {
    id: 1,
    shipmentId: "SHP001",
    orderId: "1001",
    shipmentDate: "04/10/2025",
    status: "Pending",
  },
  {
    id: 2,
    shipmentId: "SHP002",
    orderId: "1000",
    shipmentDate: "04/10/2025",
    status: "Completed",
  },
  {
    id: 3,
    shipmentId: "SHP003",
    orderId: "999",
    shipmentDate: "04/10/2025",
    status: "Cancelled",
  },
  {
    id: 4,
    shipmentId: "SHP004",
    orderId: "998",
    shipmentDate: "04/10/2025",
    status: "Completed",
  },
];

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Shipments</h1>
      <div className="max-w-5xl space-y-6">
        {" "}
        <div className="flex">
          <div className="relative w-full sm:max-w-xl">
            {" "}
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search shipments"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#EAA25D]/50 focus:border-transparent"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="hidden md:grid grid-cols-5 gap-4 items-center py-3 px-4 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-900 uppercase tracking-wider">
            <div className="col-span-1 text-center">Shipments</div>
            <div className="col-span-1 text-center">Order</div>
            <div className="col-span-1 text-center">Date</div>
            <div className="col-span-1 text-center">Status</div>
            <div className="text-center col-span-1"></div>
          </div>
          <div>
            {shipmentsData.length > 0 ? (
              shipmentsData.map((shipment) => (
                <ShipmentRow key={shipment.id} shipment={shipment} />
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                No shipments found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
