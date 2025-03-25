import React from "react";

import image from "../../public/images/hero.jpg";
import Image from "next/image";

const Member = () => {
  return (
    <div className="mt-8 mb-8 text-white">
      <h1 className="text-center text-black dark:text-white text-[2rem] font-primary mt-14 mb-8 text-secondary-500 font-bold ">
        Our Members{" "}
      </h1>
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
          <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-[#1f2b2e]">
            <h1 className="text-2xl font-bold  text-black dark:text-white">
              Staff
            </h1>
            <div className="text-black dark:text-white text-7xl font-bold">
              <h1>14</h1>
            </div>
          </div>
          <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-[#1f2b2e]">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Branch
            </h1>
            <div>
              <h1 className="text-black dark:text-white text-7xl font-bold">
                4
              </h1>
            </div>
          </div>
          <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-[#1f2b2e] ">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Members
            </h1>
            <div className="text-black dark:text-white text-7xl font-bold">
              <h1>124</h1>
            </div>
          </div>
          <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-[#1f2b2e]">
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
