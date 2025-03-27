/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import image from "../../../public/images/company1.jpg";

const About = () => {
  return (
    <>
      <section className="block lg:hidden">
        <div className="grid grid-cols-1 pt-24  lg:pt-16 all-About lg:grid-cols-2 font-Raleway">
          <div>
            <h1 className="mx-auto mt-10 text-4xl font-bold text-center text-black dark:text-white lg:text-5xl">
              Join Us And Explore <br /> Thousands Of{" "}
              <span className="text-colour">
                Super <br /> Jobs
              </span>
            </h1>
            <div className="flex justify-center gap-8 pt-12 pl-6 text-black dark:text-white lg:pl-14">
              <div>
                <h1 className="text-3xl font-bold">100+</h1>
                <p>Food Menu</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold">40+</h1>
                <p>Staff</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold">25k+</h1>
                <p>active job seekers</p>
              </div>
            </div>
            <div className="flex ml-24  items-center gap-x-4 pt-4 pb-4">
              <Link
                href="order-now"
                className="w-32 h-12 pl-2 pt-3 bg-gradient-to-r from-[#e0584c] to-[#FD3B29] hover:bg-[#132836] border-none rounded-md text-[18px] text-white font-bold transition-all duration-300"
              >
                Explore us
              </Link>
            </div>
          </div>

          <div className="pt-6">
            <img
              className="w-full rounded-md h-3/4"
              src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            ></img>
          </div>
        </div>
      </section>

      <section className="hidden max-w-6xl  pb-12 mx-auto mt-8 shadow-xl lg:block shadow-dark-new ">
        <div className="flex items-center gap-8">
          <h1 className="text-[70px] font-bold pl-2 text-accent-400">
            MEET NOW{" "}
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="flex p-2 -space-x-4 rounded-md bg-dark-300">
              <img
                alt=""
                className="object-cover object-center w-20 h-20 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                alt=""
                className="object-cover object-center w-20 h-20 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                alt=""
                className="object-cover object-center w-20 h-20 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src="https://plus.unsplash.com/premium_photo-1675129779582-d84b954f2397?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                alt=""
                className="object-cover object-center w-20 h-20 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <span className="flex items-center justify-center w-20 h-20 font-semibold border rounded-full dark:bg-gray-50 dark:text-gray-800 dark:border-gray-300">
                +3
              </span>
            </div>
          </div>
          <div className="p-4 rounded-md shadow-2xl bg-dark-300 shadow-dark-new">
            <h2>
              Success try to make you great result<br></br> if you want you can
              do it easily<br></br>
              Job try to make you great result<br></br> lot of option in your
              hand do it.<br></br>
              No way make you great result try <br></br> do hard and earn your
              result here<br></br>A great story try to make you great
              <br></br> and hope you can make it
            </h2>
            {/* <h1 className="text-[40px]">
            Success Try<br></br> To Your Make<br></br> History
          </h1> */}
          </div>
        </div>
        <div>
          <h1 className="text-[75px] pl-2 font-bold">
            Be a part of our family today!
          </h1>
        </div>

        {/* chart section */}
        <div className="flex flex-col lg:flex-row gap-8 pt-2 lg:pt-6">
          <div className="p-4 text-black dark:text-white rounded-md bg-dark-300">
            <div className="flex gap-8 pt-4 pl-4">
              <div>
                <h1 className="text-3xl font-bold">100+</h1>
                <p className="font-bold"> Food Menu</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold">40+</h1>
                <p className="font-bold">Staff</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold">25k+</h1>
                <p className="font-bold">Community Member</p>
              </div>
            </div>

            <div className="pt-6">
              <h2 className="text-[30px] font-bold">
                We aspire to elevate your Order
              </h2>
              <p>
                way make you great result try do hard and earn your result here{" "}
                <br></br>A great story try to make you great and hope you can
                make it
              </p>

              <div className="flex items-center gap-x-4 pt-4 pb-4">
                <Link
                  href="order-now"
                  className="w-32 h-12 pl-2 pt-3 bg-gradient-to-r from-[#e0584c] to-[#FD3B29] hover:bg-[#132836] border-none rounded-md text-[18px] text-white font-bold transition-all duration-300"
                >
                  Explore us
                </Link>
              </div>
            </div>
          </div>

          <div>
            <Image
              className="rounded-sm p-4"
              src={image}
              alt=""
              height={500}
              width={500}
            ></Image>
          </div>
        </div>
      </section>

      <section>
        <div className=" dark:text-white text-black p-4 block text-[18px] mt-6 lg:mt-14">
          In Gorubari Restaurant, where tradition meets taste! We take pride in
          serving authentic, flavorful dishes that bring the warmth of
          home-cooked meals to your table. Our journey began with a passion for
          rich, hearty flavors and a commitment to quality ingredients. At
          Gorubari, every dish is crafted with care, blending traditional
          recipes with a modern touch. Whether you are here for a family
          gathering or a casual meal, we promise a dining experience that feels
          both familiar and exciting. Join us and savor the true essence of
          great food, great company, and unforgettable moments!
        </div>
      </section>
    </>
  );
};

export default About;
