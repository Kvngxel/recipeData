import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-300 p-7 pt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-semibold pl-3"><a href="#" className="text-white p-1.5">Recipe</a></div>
        <div className="hidden md:flex space-x-4 pr-7">
          <a href="#" className="text-white hover:text-green-600 p-1.5">Home</a>
          <a href="#" className="text-white hover:text-green-600 p-1.5">About</a>
          <a href="#" className="text-white hover:text-green-600 p-1.5">Services</a>
          <a href="#" className="text-white hover:text-green-600 p-1.5">Contact</a>
        </div>
        <div className="md:hidden">
          {/* Add a mobile menu toggle button */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;