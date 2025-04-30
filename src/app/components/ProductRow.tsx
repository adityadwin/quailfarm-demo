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
    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-2 md:gap-4 md:items-center py-3 px-4 bg-white border-b border-gray-200 last:border-b-0">
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

      <div className="text-sm text-gray-900 md:col-span-1 text-left md:text-center">
        <span className="font-normal md:hidden">Description: </span>
        {product.description}
      </div>

      <div className="text-sm text-gray-900 font-medium md:col-span-1 text-left md:text-center">
        <span className="font-normal md:hidden">Price: </span>
        {formatCurrency(product.price)}
      </div>

      <div className="text-sm text-gray-800 font-medium md:col-span-1 text-left md:text-center">
        <span className="font-normal md:hidden">Stock: </span>
        {product.stock}
      </div>

      <div className="md:justify-self-center md:col-span-1 pt-2 md:pt-0 flex justify-end md:justify-center">
        {" "}
        <button className="text-xs border border-gray-300 rounded px-3 py-1 text-gray-900 hover:bg-gray-100 transition-colors">
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProductRow;
