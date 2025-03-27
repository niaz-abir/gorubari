import React from "react";

import image from "../../public/images/hero.jpg";
import Image from "next/image";

const Member = () => {
  return (
    <div className="mt-8 mb-8 text-white">
      <h1 className="text-center  text-black dark:text-white text-4xl font-primary mt-14 mb-2 text-secondary-500 font-bold ">
        Get To know Us
      </h1>
      <p className="mt-2 text-center text-[18px] mb-14 dark:text-white text-black">
        where innovation meets dedication!
      </p>
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-evenly">
        <div>
          <Image
            className="rounded-sm"
            src={image}
            alt=""
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="grid grid-cols-2 pl-4 pr-4 gap-14">
          <div className="pt-4 pb-4 pl-12 pr-4 shadow-2xl bg-[#C3B59F] dark:bg-gradient-to-r from-[#532136] to-[#041920] ">
            <h1 className="text-2xl font-bold  text-black dark:text-white">
              Staff
            </h1>
            <div className="text-black dark:text-white text-7xl font-bold">
              <h1>14</h1>
            </div>
          </div>
          <div className="pt-4 pb-4 pl-12 pr-4 shadow-2xl  bg-[#C3B59F] dark:bg-gradient-to-r from-[#532136] to-[#041920]">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Branch
            </h1>
            <div>
              <h1 className="text-black dark:text-white text-7xl font-bold">
                4
              </h1>
            </div>
          </div>
          <div className="pt-4 pb-4 pl-12 pr-4 shadow-2xl  bg-[#C3B59F] dark:bg-gradient-to-r from-[#532136] to-[#041920] ">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Members
            </h1>
            <div className="text-black dark:text-white text-7xl font-bold">
              <h1>124</h1>
            </div>
          </div>
          <div className="pt-4 pb-4 pl-12 pr-4 shadow-2xl  bg-[#C3B59F] dark:bg-gradient-to-r from-[#532136] to-[#041920]">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              partner
            </h1>

            <div className="text-black dark:text-white text-7xl font-bold">
              <h1>8</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
