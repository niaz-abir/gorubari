"use client";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { GiClothespin, GiMoneyStack, GiPriceTag } from "react-icons/gi";
import { GoStopwatch } from "react-icons/go";
import { GrProjects, GrUserExpert } from "react-icons/gr";
import { MdApproval, MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import { AiFillProduct } from "react-icons/ai";

const ChooseUs = () => {
  const allChooseUs = [
    {
      id: 1,
      name: "Exceptional Quality",
      icon: <AiFillProduct />,
      color: "#00A9A5",
      text: "Count on us for top-notch apparel made with premium materials, ensuring comfort and durability in every piece.",
    },
    {
      id: 2,
      name: "Custom Order",
      icon: <MdDesignServices />,
      color: "#7E1891",
      text: "Bring your vision to life with our personalized cap and t-shirt designs, tailored to reflect your unique style or brand.",
    },
    {
      id: 3,
      name: "Affordable Prices",
      icon: <GiPriceTag />,
      color: "#000000",
      text: "Enjoy competitive pricing without compromising on quality, making stylish apparel accessible for everyone.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const iconAndNameVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } },
  };

  return (
    <section className="mt-16 mb-8 mr-0 lg:mr-8 rounded-sm bg-[#9599a7] dark:bg-gradient-to-r from-[#341321] to-[#000b0f]  p-4">
      <h1 className="font-bold text-center text-4xl pt-4">Why Choose us?</h1>
      <p className=" pb-8 pt-2 dark:text-white text-black text-[18px] text-center">
        We have lot of support form us .You can watch it and discuss with us.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allChooseUs?.map((choose) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            key={choose?.id}
            className="lg:w-96 m-6  p-6 rounded-md bg-[#1f2b2e]/40   "
          >
            <div className="backdrop-blur-xl p-4 rounded-sm   ">
              <motion.h1
                variants={iconAndNameVariants}
                className="text-3xl lg:text-4xl mt-4 mb-2   "
                style={{ color: choose?.color }}
              >
                {" "}
                {choose?.icon}
              </motion.h1>
              <motion.h1
                variants={iconAndNameVariants}
                className="text-2xl font-bold gap-2 items-center pb-2 "
              >
                {choose?.name}
              </motion.h1>
              <motion.p
                variants={textVariants}
                className="mb-4 text-[18px] pt-2"
              >
                {choose?.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
