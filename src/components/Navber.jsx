import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Hamburger (Only mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-500"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <a href="/">
          <img src={logo} alt="logo" />
        </a>

        {/* Menu (Only desktop) */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-700">
          <li className="hover:text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
          <li className="hover:text-pink-600 cursor-pointer">Projects</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3 text-sm">
          <button className="text-gray-700 hover:text-pink-600">Sign In</button>
          <button className="px-4 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700">
            Sign Up
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 border-t border-gray-200 bg-white text-sm text-gray-700">
          <li className="hover:text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
          <li className="hover:text-pink-600 cursor-pointer">Projects</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>
      )}
    </header>
  );
};

export default Navber;
