import Image from 'next/image';
import React from 'react';
import HeroImg from '/public/Hero.webp';
import Bazaar from '/public/bazaar.webp';
import Bustle from '/public/bustle.webp';
import Instyle from '/public/instyle.webp';
import Verasce from '/public/verasce.webp';

import { AiOutlineShoppingCart } from 'react-icons/ai';

const Hero = () => {
  const btn = 'Start \nShopping';
  return (
    <section className="h-screen  flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 space-x-2">
      <div className="flex-1 space-y-8 pr-10">
        <button className="bg-blue-300 text-blue-700 px-2 py-1 rounded-lg">
          Sale 70 %
        </button>
        <p className="text-4xl md:text-6xl font-bold leading-snug ">
          An Industrial take on Sweatwear
        </p>
        <p className="text-gray-300 text-sm">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="text-white bg-black flex items-center justify-center space-x-2 px-2 py-3">
          <AiOutlineShoppingCart size={20} />
          <p className="whitespace-pre">{btn}</p>
        </button>
        <div className="flex justify-between items-center flex-wrap gap-2 md:gap-1">
          <Image src={Bazaar} alt="Bazaar" />
          <Image src={Instyle} alt="Bazaar" />
          <Image src={Bustle} alt="Bazaar" />
          <Image src={Verasce} alt="Bazaar" />
        </div>
      </div>
      <div className="hidden md:flex bg-gray-300 rounded-full flex-1 ">
        <Image
          src={HeroImg}
          alt="Hero Image"
          className="flex items-center justify-center"
        />
      </div>
    </section>
  );
};

export default Hero;
