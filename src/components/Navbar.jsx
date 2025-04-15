import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="font-extrabold text-xl text-white tracking-wider">MedInsure</span>
        </div>

        {/* Links in the middle */}
        <div className="space-x-8 hidden md:flex">
          <Link to="/" className="text-white hover:text-indigo-200 transition-all duration-300 transform hover:scale-110">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-indigo-200 transition-all duration-300 transform hover:scale-110">
            About
          </Link>
          <Link to="/insuranceplans" className="text-white hover:text-indigo-200 transition-all duration-300 transform hover:scale-110">
            Plans
          </Link>
          <Link to="/contact" className="text-white hover:text-indigo-200 transition-all duration-300 transform hover:scale-110">
            Contact
          </Link>
        </div>

        {/* Login button on the right */}
        <div>
          <Link
            to="/login"
            className="bg-violet-600 hover:bg-violet-700 text-white py-3 px-7 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
