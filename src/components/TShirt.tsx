"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiGraduationCapFill, RiWebhookLine } from "react-icons/ri";
import image1 from "../../public/images/tshirt (1).jpg";
import image2 from "../../public/images/tshirt (2).jpg";
import image3 from "../../public/images/tshirt (3).jpg";
import Image from "next/image";
import Link from "next/link";

const TShirt = () => {
  const allTShirts = [
    {
      id: 2,
      name: "Henley TShirt",
      no: "02",
      image: image1,
      price: "$120",
      min: 25,
    },
    {
      id: 4,
      name: "Crew New",
      no: "04",
      image: image2,
      price: "$160",
      min: 35,
    },
    {
      id: 5,
      name: "Scoop Next",
      no: "05",
      image: image3,
      price: "$210",
      min: 45,
    },
  ];

  return (
    <section id="tShirts">
      <div className="text-center mb-14 mt-14 p-4">
        <h1 className="font-bold text-center text-4xl">Our TShirt</h1>
        <p className="text-[18px] text-black">
          From enhancing your digital presence to creating impactful designs, we
          provide <br />
          solutions that drive business growth.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allTShirts?.map((tShirt) => (
          <motion.div
            key={tShirt?.id}
            className="bg-[#e7dec7] rounded-md p-4 lg:w-96 m-6 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.4,
                  },
                },
              }}
            >
              <Image
                src={tShirt?.image}
                alt=""
                height={500}
                width={520}
                className="object-fit object-center   min-w-[170px]"
              ></Image>
              <motion.h1
                className="font-bold flex  rounded-md gap-2 pb-2 pt-2 text-[20px] lg:text-[24px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className=" p-2 rounded-md">
                  <RiGraduationCapFill />
                </span>
                {tShirt.name}
              </motion.h1>
              <motion.h1
                className=" flex  rounded-md gap-2  text-[20px] lg:text-[18px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className=" p-2 rounded-md">price :</span>
                {tShirt.price}
              </motion.h1>
              <motion.h1
                className=" flex  rounded-md gap-2  text-[20px] lg:text-[18px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className=" p-2 rounded-md">Min :</span>
                {tShirt.min}
              </motion.h1>
              <div className="flex items-center gap-x-4 pt-4 ">
                <Link href="/#project">
                  <button className="w-36 h-14 bg-gradient-to-r from-[#e0584c] to-[#FD3B29] hover:bg-[#132836] border-none rounded-md text-[18px] text-white font-bold transition-all duration-300">
                    Order now
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TShirt;
