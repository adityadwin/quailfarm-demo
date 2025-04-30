// app/components/ProductRow.tsx
import React from "react";
import Image from "next/image";

interface ProductRowProps {
  product: {
    id: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    stock: number;
  };
  formatCurrency: (value: number) => string;
}

const ProductRow: React.FC<ProductRowProps> = ({ product, formatCurrency }) => {
  return (
    // --- Ubah grid menjadi responsif: 1 kolom default, 5 kolom di md+ ---
    // --- Sesuaikan padding & gap ---
    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-2 md:gap-4 md:items-center py-3 px-4 bg-white border-b border-gray-200 last:border-b-0">
      {/* Kolom Product (selalu di atas pada mobile) */}
      <div className="flex flex-col items-center text-center md:col-span-1">
        <div className="relative w-20 h-20 mb-1 rounded overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm text-gray-700 font-medium">
          {product.name}
        </span>
      </div>

      {/* Kolom Description */}
      {/* --- Tambahkan label mobile, sesuaikan text-align --- */}
      <div className="text-sm text-gray-600 md:col-span-1 text-left md:text-center">
        <span className="font-semibold md:hidden">Description: </span>
        {product.description}
      </div>

      {/* Kolom Price */}
      {/* --- Tambahkan label mobile, sesuaikan text-align --- */}
      <div className="text-sm text-gray-800 font-medium md:col-span-1 text-left md:text-center">
        <span className="font-semibold md:hidden">Price: </span>
        {formatCurrency(product.price)}
      </div>

      {/* Kolom Stock */}
      {/* --- Tambahkan label mobile, sesuaikan text-align --- */}
      <div className="text-sm text-gray-800 font-medium md:col-span-1 text-left md:text-center">
        <span className="font-semibold md:hidden">Stock: </span>
        {product.stock}
      </div>

      {/* Kolom Edit Button */}
      {/* --- Atur ulang posisi di mobile --- */}
      <div className="md:justify-self-center md:col-span-1 pt-2 md:pt-0 flex justify-end md:justify-center">
        {" "}
        {/* Rata kanan di mobile, center di md+ */}
        <button className="text-xs border border-gray-300 rounded px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProductRow;
