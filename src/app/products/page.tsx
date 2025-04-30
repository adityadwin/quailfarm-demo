import React from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import ProductRow from "../components/ProductRow";

const productsData = [
  {
    id: 1,
    imageUrl: "/assets/images/1.png",
    name: "Quail Eggs",
    description: "Small, speckled eggs",
    price: 10000,
    stock: 500,
  },
  {
    id: 2,
    imageUrl: "/assets/images/2.png",
    name: "Quail Meat",
    description: "Fresh quail meat",
    price: 50000,
    stock: 500,
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Products</h1>
      <div className="max-w-5xl space-y-6">
        {" "}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="relative w-full sm:max-w-xl">
            {" "}
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search products"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#EAA25D]/50 focus:border-transparent"
            />
          </div>

          <button className="bg-[#EAA25D] text-white px-3 py-1.5 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:bg-opacity-90 transition-opacity text-sm flex-shrink-0 self-end sm:self-auto">
            {" "}
            <FiPlus className="h-4 w-4" />
            <span>Add Product</span>
          </button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="hidden md:grid grid-cols-5 gap-4 items-center py-3 px-4 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-900 uppercase tracking-wider">
            <div className="text-center col-span-1">Product</div>
            <div className="text-center col-span-1">Description</div>
            <div className="text-center col-span-1">Price</div>
            <div className="text-center col-span-1">Stock</div>
            <div className="text-center col-span-1"></div>
          </div>
          <div>
            {productsData.length > 0 ? (
              productsData.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  formatCurrency={formatCurrency}
                />
              ))
            ) : (
              <div className="text-center py-10 text-gray-900">
                No products found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
