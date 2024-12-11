import React from "react";
import { GiBilledCap, GiShirt } from "react-icons/gi";
import { PiTShirtDuotone } from "react-icons/pi";

const Record = () => {
  return (
    <div className="bg-gradient-to-r from-[#e0584c] to-[#FD3B29] mt-14 rounded-sm">
      <div className="max-w-4xl mx-auto">
        <div className=" grid grid-cols-1  lg:grid-cols-3 gap-4 p-8 rounded-sm">
          <div className="pl-8">
            <PiTShirtDuotone className="text-8xl" />
            <h1 className="text-4xl font-bold text-white pt-2">1000k</h1>
            <h3 className="text-[20px] text-white">hats produced</h3>
          </div>
          <div className="pl-14">
            <GiBilledCap className="text-8xl" />
            <h1 className="text-4xl font-bold text-white pt-2">1000k</h1>
            <h3 className="text-[20px] text-white">hats produced</h3>
          </div>
          <div className="pl-24">
            <GiShirt className="text-8xl" />
            <h1 className="text-4xl font-bold text-white pt-2">1000k</h1>
            <h3 className="text-[20px] text-white">hats produced</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
