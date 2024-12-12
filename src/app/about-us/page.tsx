/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

import Link from "next/link";
import { MdOutlineWavingHand } from "react-icons/md";
const AboutUs = () => {
  return (
    <section className=" pb-14 ml-4 mr-4  mt-6">
      <h1 className="font-bold text-5xl pl-4 ml-4 lg:pl-0 pb-6">About us</h1>

      <div>
        <p className="lg:text-[1.25rem] text-[1rem] p-4 leading-relaxed text-foreground/80">
          At <span className="font-bold">Clothings Bee</span> we redefine
          clothing retail by combining creativity, craftsmanship, and customer
          focus to deliver apparel that resonates with your style and
          personality. Founded on the principles of quality and innovation, we
          offer a curated selection of caps and t-shirts designed to meet your
          everyday and unique needs. Our team of passionate designers and
          professionals is dedicate to crafting clothing that not only looks
          great but feels exceptional. Whether you seek custom designs or
          premium ready-to-wear pieces, we aim to elevate your wardrobe and
          reflect your individuality.
        </p>
        <p className="lg:text-[1.25rem] text-[1rem]  p-4 leading-relaxed text-foreground/80">
          From exceptional materials to a seamless shopping experience, we are
          committed to ensuring your satisfaction every step of the way. At
          Clothings Bee, fashion meets function, helping you make a statement
          with every piece you wear.
        </p>
      </div>

      <div className="max-w-7xl p-8 mt-14 mx-auto rounded-sm bg-gradient-to-r from-[#e0584c] to-[#FD3B29] ">
        <h1 className="pt-4 font-bold pb-4 text-3xl text-white">
          Meet Our Team
        </h1>
        <p className="pb-4">
          Meet the passionate individuals behind Clothings Bee! Our team is a
          vibrant mix of creative designers, skilled artisans, and dedicated
          professionals who bring their expertise to every piece of apparel we
          craft. Driven by innovation and a love for fashion, we collaborate to
          ensure each product reflects our commitment to quality and style. From
          designing unique collections to delivering exceptional customer
          experiences, our team works together to make your style vision a
          reality. Get to know the faces shaping the future of Clothings Bee
        </p>

        <button className="w-28 h-14 text-black bg-gradient-to-r from-[#b6ae98] to-[#f3eddd] hover:bg-[#132836] border-none rounded-md text-[18px]  font-bold transition-all duration-300">
          Lets Talk
        </button>
      </div>

      <div className="flex flex-col p-4 lg:flex-row gap-4 items-center mt-24">
        <div className="shadow-xl shadow-[#23131c] px-6 py-10 border-l-2 border-gray-600">
          <h1 className="font-bold text-2xl pb-4  ">Our Goal</h1>
          <p>
            Our goal is to redefine your style with premium-quality apparel that
            blends comfort, durability, and fashion. We are committed to
            delivering products tailored to your unique preferences, ensuring
            that you look and feel your best. By focusing on exceptional
            craftsmanship and customer satisfaction, we aim to create lasting
            impressions and build a community that values individuality and
            quality.
          </p>
        </div>
        <div className="shadow-xl shadow-[#23131c] px-6 py-10 border-l-2 border-gray-500">
          <h1 className="font-bold text-2xl pb-4">Our Mission</h1>
          <p>
            Our mission is to inspire confidence and self-expression through
            stylish, high-quality clothing. We strive to provide personalized
            designs and exceptional service that meet your needs and exceed your
            expectations. With a focus on sustainability and innovation, we are
            dedicated to shaping a future where fashion is accessible,
            responsible, and empowering for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
