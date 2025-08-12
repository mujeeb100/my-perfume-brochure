import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Brand & Description */}
        <div>
          {/* <h2 className="text-2xl font-bold text-pink-500">Lehra Goods</h2> */}
          <img
                src="/images/lehra_logo.jpg"
                alt="Lehra Goods Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            {/* </button> */}
          <p className="mt-4 text-sm leading-6">
            Discover luxury fragrances and elegant gifts that captivate your senses.
            At Lehra Goods, we bring you the best perfumes for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">All Perfumes</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Categories</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
          <div className="flex space-x-6 text-2xl">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/lehra_goods?igsh=bmVzODh4ZnhwbTBx&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+919152663080"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Lehra Goods. All rights reserved.</p>
      </div>
    </footer>
  );
}

