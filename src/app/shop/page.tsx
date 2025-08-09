"use client";

import Image from "next/image";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Shop Our Perfumes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((perfume) => (
          <div
            key={perfume.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <Image
              src={perfume.imageUrl}
              alt={perfume.name}
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{perfume.name}</h2>
            <p className="text-gray-600">{perfume.description}</p>
            <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
