"use client";

import { useState } from "react";

export default function Navbar({
  activeSection,
  onChangeSection,
  onSearch,
}: {
  activeSection: string;
  onChangeSection: (section: string) => void;
  onSearch?: (query: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Shop", id: "shop" },
    { label: "Men's Perfumes", id: "mens-perfumes" },
    { label: "Women's Perfumes", id: "womens-perfumes" },
    { label: "Offers", id: "offers" },
    { label: "Contact", id: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Mobile: Hamburger Left */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-pink-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo Center on mobile, static left on desktop */}
          <div
            className="text-3xl font-bold text-pink-600 cursor-pointer font-[Dancing_Script] select-none absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none"
            onClick={() => {
              onChangeSection("home");
              setIsOpen(false);
            }}
          >
            Lehra Goods
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onChangeSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-gray-700 font-medium text-sm hover:text-pink-600 focus:outline-none ${
                    isActive
                      ? "text-pink-600 border-b-2 border-pink-600 pb-1"
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Search + Account: always visible */}
          <div className="flex items-center space-x-4">
            {/* On desktop: show full search input */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search perfumes, notes, brands..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 text-sm"
              />
            </div>

            {/* On mobile: show search icon */}
            <button
              aria-label="Search"
              className="text-pink-600 hover:text-pink-800 focus:outline-none md:hidden"
              onClick={() => alert("Search clicked")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Account icon always visible */}
            <button
              aria-label="Account"
              className="text-pink-600 hover:text-pink-800 focus:outline-none"
              onClick={() => alert("Account clicked")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onChangeSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-gray-700 font-medium text-base text-left hover:text-pink-600 focus:outline-none ${
                    isActive ? "text-pink-600 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
