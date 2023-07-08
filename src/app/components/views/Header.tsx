'use client';
import React, { useState } from 'react';
import { Navbar } from '../utils/NavbarData';
import Image from 'next/image';
import Logo from '/public/images/Logo.webp';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center max-w-7xl py-6">
      {/* Logo */}
      <Link href={'/'}>
        <div className="flex-shrink-0">
          <Image src={Logo} alt="Logo" />
        </div>
      </Link>
      {/* <p className="flex-shrink-0">Dine Market</p> */}
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
          <div className="h-4 w-4 bg-red-400 top-0 right-0 rounded-full absolute text-center text-sm">
            3
          </div>
          <AiOutlineShoppingCart size={30} />
        </div>
      </div>
      <div onClick={() => setNavbarOpen(!isNavbarOpen)} className="md:hidden">
        {isNavbarOpen ? 'X' : '+'}
      </div>
    </header>
  );
};

export default Header;
