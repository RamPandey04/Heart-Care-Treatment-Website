import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Doctors', id: 'doctors' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-pink-600 to-red-700 text-white fixed w-full z-50 shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo & Title */}
          <div className="flex items-center">
            <FaHeart className="text-2xl mr-2 text-white" />
            <a href="#home" className="font-bold text-xl tracking-wide text-white">
              HeartCare
            </a>
          </div>

          {/* Middle: Nav Items (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="text-white hover:text-amber-200 transition duration-300 font-medium tracking-wide"
                onClick={() => window.scrollTo({ behavior: "smooth" })}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right: Hamburger (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-red-700"
        >
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="text-white hover:text-amber-200 transition duration-300 font-medium tracking-wide"
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ behavior: "smooth" });
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;