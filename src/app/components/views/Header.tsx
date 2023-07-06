'use client';
import React, { useState } from 'react';
import { Navbar } from '../utils/NavbarData';

const Header = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center max-w-7xl">
      {/* Logo */}
      <p className="flex-shrink-0">Dine Market</p>
      {/* <ul className="flex justify-between">
        {Navbar.map((item, index: number) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul> */}

      <div className="hidden md:flex md:gap-x-6 lg:gap-x-12">
        <ul className="flex justify-between items-center gap-x-4">
          <li className="flex-shrink-0">Male</li>
          <li className="flex-shrink-0">Female</li>
          <li className="flex-shrink-0">Kids</li>
          <li className="flex-shrink-0">All Products</li>
        </ul>

        <div className="border-2 rounded-lg">
          <input
            type="search"
            placeholder="Search your item"
            className="focus:outline-none px-2 py-1 w-72"
          />
        </div>

        <div className="relative flex justify-center items-center">
          <div className="h-5 w-5 bg-red-400 top-0 right-1 rounded-full absolute text-center">
            3
          </div>
          <p>Cart</p>
        </div>
      </div>
      <div onClick={() => setNavbarOpen(!isNavbarOpen)} className="md:hidden">
        {isNavbarOpen ? 'X' : '+'}
      </div>
    </header>
  );
};

export default Header;
