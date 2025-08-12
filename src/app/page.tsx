"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";
import { products as initialProducts } from "@/data/products";
import ShopPage from "./shop/page";
import MensPerfumesPage from "./mens-perfumes/page";
import WomensPerfumesPage from "./womens-perfumes/page";
import ContactPage from "./contact/page";
import Image from "next/image";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  // State for products and new product
  const { data: session } = useSession();
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    file: null as File | null,
    filePreview: "",
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  // Save to localStorage when products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Handle input changes for name and description
  const handleNewProductChange = (field: "name" | "description", value: string) => {
    setNewProduct((prev) => ({ ...prev, [field]: value }));
  };

  // Handle file select and generate preview URL
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type (png or jpg/jpeg)
      if (!file.type.match("image/png") && !file.type.match("image/jpeg")) {
        alert("Please upload a PNG or JPG image.");
        return;
      }

      setNewProduct({
        ...newProduct,
        file,
        filePreview: URL.createObjectURL(file),
      });
    }
  };

  // Add new product to list
  const handleAdd = () => {
    if (!newProduct.name.trim()) {
      alert("Please enter the perfume name.");
      return;
    }
    if (!newProduct.file) {
      alert("Please choose an image file to upload.");
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: newProduct.name,
      description: newProduct.description,
      imageUrl: newProduct.filePreview,
    };

    setProducts([...products, newItem]);
    setNewProduct({ name: "", description: "", file: null, filePreview: "" });
  };

  const handleUpdate = (id: string, field: string, value: string) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const renderSection = () => {
    switch (activeSection) {
      case "shop":
        return <ShopPage />;
      case "mens-perfumes":
        return <MensPerfumesPage />;
      case "womens-perfumes":
        return <WomensPerfumesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return (
          <>
            <h1 className="text-3xl font-bold mb-6">All Perfumes Available</h1>

           {session && (
  <div className="mb-8 p-6 border rounded bg-gray-50 max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold mb-6">Add New Perfume</h2>

    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
      {/* Name input */}
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => handleNewProductChange("name", e.target.value)}
        className="border rounded px-4 py-2 mb-4 sm:mb-0 flex-grow focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      {/* Description textarea */}
      <textarea
        placeholder="Description"
        value={newProduct.description}
        onChange={(e) => handleNewProductChange("description", e.target.value)}
        className="border rounded px-4 py-2 mb-4 sm:mb-0 flex-grow resize-none h-20 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      {/* File input and label */}
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded inline-block text-center transition"
        >
          Choose Image (PNG or JPG)
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Image preview */}
      {newProduct.filePreview && (
        <div className="mb-4 sm:mb-0">
          <Image
            src={newProduct.filePreview}
            alt="Preview"
            width={100}
            height={100}
            className="rounded border"
          />
        </div>
      )}

      {/* Add button */}
      <button
        onClick={handleAdd}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded whitespace-nowrap"
      >
        Add Perfume
      </button>
    </div>
  </div>
)}


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((perfume) => (
                <div
                  key={perfume.id}
                  className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                >
                  {perfume.imageUrl ? (
                    <Image src={perfume.imageUrl} alt={perfume.name} width={400} height={400} />
                  ) : (
                    <div className="w-[400px] h-[400px] flex items-center justify-center bg-gray-200 text-gray-500">
                      No Image
                    </div>
                  )}

                  {session ? (
                    <>
                      <input
                        value={perfume.name}
                        onChange={(e) => handleUpdate(perfume.id, "name", e.target.value)}
                        className="border p-1 w-full mb-2 rounded"
                      />
                      <textarea
                        value={perfume.description}
                        onChange={(e) => handleUpdate(perfume.id, "description", e.target.value)}
                        className="border p-1 w-full mb-2 rounded"
                      />
                      <button
                        onClick={() => handleDelete(perfume.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-semibold mb-2">{perfume.name}</h2>
                      <p className="text-gray-600">{perfume.description}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} onChangeSection={setActiveSection} />
      <div className="max-w-6xl mx-auto py-8 px-4">{renderSection()}</div>
      <WhatsAppFloatingButton />
    </>
  );
}

// WhatsApp Floating Button Component
function WhatsAppFloatingButton() {
  const phoneNumber = "+919152663080";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.95 11.95 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.56 4.08 1.54 5.82L0 24l6.31-1.64a11.92 11.92 0 005.69 1.47c6.63 0 12-5.37 12-12 0-3.22-1.26-6.24-3.48-8.35zM12 21.5a9.47 9.47 0 01-4.88-1.39l-.35-.21-3.75.98.99-3.66-.22-.36A9.5 9.5 0 1121.5 12 9.44 9.44 0 0112 21.5zm5.29-7.23c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13s-.65.8-.8.96-.29.2-.54.07a7.56 7.56 0 01-2.22-1.37 8.41 8.41 0 01-1.55-1.92c-.16-.27 0-.41.12-.54.12-.13.26-.29.4-.43a1.66 1.66 0 00.25-.4.61.61 0 000-.56c-.07-.13-.56-1.36-.77-1.86s-.4-.43-.56-.44h-.47a1.14 1.14 0 00-.83.39 3.51 3.51 0 00-1.09 2.62 5.17 5.17 0 002.37 3.93 8.35 8.35 0 003.93 1.5 3.49 3.49 0 002.61-1.15 2.93 2.93 0 00.8-1.64c.04-.15.03-.27 0-.37-.04-.1-.23-.15-.47-.28z" />
      </svg>
    </a>
  );
}
