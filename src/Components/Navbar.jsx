import { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-gray-800"
        >
          El Toro
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="hover:text-black transition duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm px-2"
            />
            <CiSearch className="text-lg text-gray-600" />
          </div>

          {/* Icons */}
          <Link to="/account" className="text-xl text-gray-700 hover:text-black">
            <VscAccount />
          </Link>

          <Link to="/cart" className="text-xl text-gray-700 hover:text-black">
            <IoCartOutline />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 font-medium hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
