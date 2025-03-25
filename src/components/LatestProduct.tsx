import React from "react";
import Marquee from "react-fast-marquee";

import image1 from "../../public/images/latest(1).png";
import image2 from "../../public/images/latest(2).png";
import image3 from "../../public/images/latest(5).png";
import image4 from "../../public/images/latest(10).png";
import image5 from "../../public/images/latest(6).png";
import image6 from "../../public/images/latest(9).png";
import image7 from "../../public/images/latest(5).png";
import image8 from "../../public/images/latest(2).png";
import image9 from "../../public/images/latest(10).png";
import image10 from "../../public/images/latest(1).png";
import image11 from "../../public/images/latest(6).png";
import Image from "next/image";

const LatestProduct = () => {
  return (
    <div className="mt-8 mb-8">
      <h1 className="text-center font-primary text-secondary-500 mt-14 mb-8 text-[2rem] font-bold">
        Our Latest product
      </h1>
      <div className="mb-14 mt-14">
        <Marquee>
          <div>
            <Image src={image1} alt="" height={250} width={250}></Image>
          </div>
          <div>
            <Image src={image2} alt="" height={250} width={250}></Image>
          </div>
          <div>
            <Image src={image3} alt="" height={250} width={250}></Image>
          </div>
          <div>
            <Image src={image4} alt="" height={250} width={250}></Image>
          </div>
          <div>
            <Image src={image5} alt="" height={250} width={250}></Image>
          </div>
          <div>
            <Image src={image6} alt="" height={250} width={250}></Image>
          </div>
          <div>
            <Image src={image7} alt="" height={250} width={250}></Image>
          </div>
          <div>
            <Image src={image8} alt="" height={250} width={250}></Image>
          </div>
          <div>
            <Image src={image9} alt="" height={250} width={250}></Image>
          </div>
          <div>
            <Image src={image10} alt="" height={250} width={250}></Image>
          </div>
          <div>
            <Image src={image11} alt="" height={250} width={250}></Image>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestProduct;
