"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhotoVideo } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { IoIosApps } from "react-icons/io";
import { RiPaintBrushLine, RiTShirt2Line, RiWebhookLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { VscGraph } from "react-icons/vsc";
import { FiShoppingBag } from "react-icons/fi";

const Services = () => {
  const allServices = [
    {
      id: 1,
      name: "Dine-In Experience ",
      no: "01",
      icon: <RiPaintBrushLine />,
      details:
        "Enjoy a cozy and welcoming ambiance where you can indulge in our freshly prepared, authentic dishes. Whether it’s a casual meal or a special occasion, we provide an unforgettable dining experience with top-notch service.",
    },
    {
      id: 2,
      name: "Online Ordering",
      no: "02",
      icon: <RiPaintBrushLine />,
      details:
        "Craving Gorubari at home? Order online and enjoy your favorite meals with quick and hassle-free takeout. Perfect for busy days or relaxed nights when you want restaurant-quality food at your doorstep",
    },
    {
      id: 3,
      name: "Catering for Events",
      no: "03",
      icon: <RiPaintBrushLine />,
      details:
        "Hosting an event? Let Gorubari take care of the food! We offer customized catering services for parties, corporate events, and special gatherings, ensuring every guest enjoys a delicious experience.",
    },
  ];

  return (
    <section id="services">
      <div className="text-center mb-14 mt-14 p-4">
        <h1 className="font-bold text-center text-4xl">
          Discover Our Services
        </h1>
        <p className="text-[18px] text-black dark:text-white">
          From crafting unique apparel to delivering exceptional customer
          experiences, <br /> we provide solutions that drive your food business
          forward.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allServices.map((service) => (
          <motion.div
            key={service.id}
            className=" rounded-md p-4 lg:w-96 m-6  bg-[#1f2b2e]"
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
              <motion.h1
                className="font-bold flex  rounded-md gap-2 pb-2 pt-2 text-[20px] lg:text-[28px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[#FD3B29] p-2 rounded-md">
                  {service.icon}
                </span>
                {service.name}
              </motion.h1>
              <motion.h2
                className="text-[18px] pt-4 pb-6"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {service.details}
              </motion.h2>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
