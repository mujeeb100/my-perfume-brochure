"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar({
  activeSection,
  onChangeSection,
  onSearch,
}: {
  activeSection: string;
  onChangeSection: (section: string) => void;
  onSearch?: (query: string) => void;
}) {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopCategoriesOpen, setIsDesktopCategoriesOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "All Perfumes", id: "all-perfumes" },
    { label: "Categories", id: "categories", dropdown: true },
    { label: "Contact", id: "contact" },
  ];

  const categoryItems = [
    { label: "Ajmal", id: "ajmal" },
    { label: "Armaf", id: "armaf" },
    { label: "Lattafa", id: "lattafa" },
    { label: "Rasasi", id: "rasasi" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  const handleNavClick = (id: string) => {
    onChangeSection(id);
    setIsMobileMenuOpen(false);
    setIsMobileCategoriesOpen(false);
    setIsDesktopCategoriesOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* grid with left/center/right columns */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-16">
          {/* LEFT: Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick("home")}
              aria-label="Go to home"
              className="flex items-center focus:outline-none"
            >
              <img
                src="/images/lehra_logo.jpg"
                alt="Lehra Goods Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </button>
          </div>

          {/* CENTER: Nav */}
          <div className="flex justify-center">
            <ul className="hidden md:flex items-center space-x-6">
              {navItems.map((item) =>
                item.dropdown ? (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setIsDesktopCategoriesOpen(true)}
                    onMouseLeave={() => setIsDesktopCategoriesOpen(false)}
                  >
                    <button
                      onClick={() =>
                        setIsDesktopCategoriesOpen((prev) => !prev)
                      }
                      aria-expanded={isDesktopCategoriesOpen}
                      className={`text-gray-700 font-medium text-sm hover:text-pink-600 focus:outline-none ${
                        activeSection === item.id ? "text-pink-600" : ""
                      }`}
                    >
                      {item.label}
                    </button>

                    {isDesktopCategoriesOpen && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-md rounded w-44">
                        {categoryItems.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => handleNavClick(cat.id)}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50"
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`text-gray-700 font-medium text-sm hover:text-pink-600 focus:outline-none ${
                        activeSection === item.id
                          ? "text-pink-600 border-b-2 border-pink-600 pb-1"
                          : ""
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* RIGHT: Search + Account + Mobile icons */}
          <div className="flex items-center justify-end space-x-3">
            {/* Desktop search */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search perfumes, notes, brands..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 text-sm w-64"
              />
            </div>

            {/* Account / Sign in/out */}
            {session ? (
              <button
                aria-label="Sign Out"
                className="text-pink-600 hover:text-pink-800 focus:outline-none font-medium"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            ) : (
              <button
                aria-label="Sign In"
                className="text-pink-600 hover:text-pink-800 focus:outline-none font-medium"
                onClick={() => signIn("google")}
              >
                Sign In
              </button>
            )}

            {/* Mobile search icon */}
            <button
              className="md:hidden text-pink-600 hover:text-pink-800 focus:outline-none"
              aria-label="Open search"
              onClick={() => setMobileSearchOpen((p) => !p)}
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

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-pink-600 hover:text-pink-800 focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen((p) => !p)}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search input */}
      {mobileSearchOpen && (
        <div className="md:hidden px-4 pb-2 bg-white">
          <input
            type="text"
            placeholder="Search perfumes, notes, brands..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 text-sm"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-4 pt-3 pb-4 space-y-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.id} className="space-y-1">
                  <button
                    onClick={() => setIsMobileCategoriesOpen((p) => !p)}
                    className={`w-full text-left text-gray-700 font-medium text-base focus:outline-none ${
                      activeSection === item.id ? "text-pink-600" : ""
                    }`}
                  >
                    {item.label}
                  </button>

                  {isMobileCategoriesOpen && (
                    <div className="pl-4 space-y-1">
                      {categoryItems.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => handleNavClick(cat.id)}
                          className="block text-gray-600 hover:text-pink-600 text-left w-full py-1"
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left text-gray-700 font-medium text-base ${
                    activeSection === item.id ? "text-pink-600" : ""
                  }`}
                >
                  {item.label}
                </button>
              )
            )}

            {/* Sign in/out on mobile */}
            {session ? (
              <button
                onClick={() => signOut()}
                className="w-full text-left text-pink-600 font-medium"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="w-full text-left text-pink-600 font-medium"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
