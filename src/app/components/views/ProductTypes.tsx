import Image from 'next/image';
import React from 'react';
import Img1 from '/public/images/img1.webp';
import Img2 from '/public/images/img2.webp';
import Img3 from '/public/images/img3.webp';

const ProductTypes = () => {
  return (
    // Promotions
    <div className="py-16 px-2 space-y-8">
      {/* first Grid  */}
      <div className="text-center">
        <p className="text-blue-600 uppercase font-semibold tracking-[5px]">
          Promotions
        </p>

        <h3 className="text-3xl font-bold ">Our Promition Events</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-12 ">
        <div className="cols-span-1 md:col-span-2 w-full  bg-promCat1 px-8 flex flex-col  md:flex-row items-center justify-between lg:justify-center  ">
          <div className=" max-w-[16rem] md:max-w-[9rem]  py-4 ">
            <p className="text-3xl uppercase font-bold">get up to 60%</p>
            <span className=" tracking-[1px] font-semibold">
              For the summer season
            </span>
          </div>

          <div className=" h-full">
            <Image
              src={Img1}
              alt="Image promotion"
              className="h-full overflow-hidden"
            />
          </div>
        </div>

        {/* Second Grid  */}
        <div className="w-full  row-span-1 md:row-span-2 h-full bg-promCat2  pt-2">
          <div className="px-8 md:px-6 pt-6 ">
            <p>Flex Sweat Shirt</p>
            <p>
              <span className="text-lg">
                <del>$100</del>
                &nbsp;&nbsp;&nbsp;
                <b>
                  <ins>$75</ins>
                </b>
              </span>
            </p>
          </div>
          <div className="w-70 flex justify-center">
            <Image src={Img2} alt="Image 2" />
          </div>
        </div>

        {/* Third Grid  */}
        <div className="w-full h-full row-span-1 md:row-span-2 bg-promCat3 pt-2">
          <div className="px-8 md:px-4 pt-6 ">
            <p>Flex Push Button Bomber</p>
            <p>
              <span className="text-lg">
                <del>$225</del>
                &nbsp;&nbsp;&nbsp;
                <b>
                  <ins>$190</ins>
                </b>
              </span>
            </p>
          </div>
          <div className="w-70 flex justify-center">
            <Image
              src={Img3}
              alt="Image 3"
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="w-full col-span-1 md:col-span-2 bg-promCat4 flex justify-center items-center py-6">
          <div className="text-white text-center ">
            <h3 className="text-3xl font-bold">GET 30% Off</h3>
            <p className="uppercase pt-4 text-sm">use promo code</p>
            <button
              aria-label="Redirect to Dine week sale"
              className="uppercase tracking-[4px] font-semibold bg-promText px-8 py-2 rounded-lg"
            >
              dineweekend sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTypes;
