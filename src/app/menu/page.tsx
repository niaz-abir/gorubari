/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { MdAttachMoney, MdFastfood, MdOutlineDiscount } from "react-icons/md";

const Menu = () => {
  const allFood = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "meal disk",
      price: "387",
      discount: "10%",
    },
  ];
  return (
    <div>
      <h1 className="text-center font-bold mt-14 mb-14 text-5xl">
        All menu here
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 ml-4 gap-4 lg:ml-14">
        {/* {allFood?.map((food) => (
          <div key={food?.id}>
            <div className="w-full max-w-xs p-4 overflow-hidden rounded-lg ">
              <Image
                height={600}
                width={500}
                alt=""
                className="object-cover w-full p-4 rounded-full  shadow-md h-60 shadow-[#363636]"
                src={food?.image}
              />

              <div className="flex justify-center mt-4  shadow-md shadow-[#363636] ">
                <div className="pt-5 pb-5 text-center">
                  <div className="flex gap-4 text-[20px] items-center">
                    <MdFastfood className="text-[#00a34f] text-[30px]"></MdFastfood>
                    <h1 className="block font-bold text-[#de172e] dark:text-white">
                      {food?.name}
                    </h1>
                  </div>
                  <div className="flex gap-4 text-[20px] items-center pt-2">
                    <h1>Price:</h1>
                    <div className="flex items-center">
                      <MdAttachMoney className="text-[20px] text-[#00a34f]"></MdAttachMoney>
                      <h1 className="block font-bold text-[#de172e] dark:text-white">
                        {food?.price}
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-4 text-[20px] pt-2 items-center">
                    <h1>Discount:</h1>
                    <div className="flex items-center ">
                      <MdOutlineDiscount className="text-[20px] text-[#00a34f]"></MdOutlineDiscount>
                      <h1 className="block font-bold text-[#de172e] dark:text-white">
                        {food?.discount}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="flex ml-4 lg:ml-24">
              <div className=" mt-4">
                <button className="relative px-5 py-2 font-bold text-black hover:text-white group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#f82a46] group-hover:bg-[#04c866] group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#04c866] group-hover:bg-[#f82a46] group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#04c866] -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#04c866] -rotate-12"></span>
                  <span className="relative">Order Now</span>
                </button>
              </div>
            </div>
          </div>
        ))} */}

        {allFood?.map((food) => (
          <div key={food?.id}>
            <div className="card  w-96 shadow-sm rounded-sm">
              <figure>
                <img className="pb-2" src={food?.image} alt="Shoes" />
              </figure>
              <div className="flex justify-center mt-4  shadow-md shadow-[#363636] ">
                <div className="pt-5 pb-5 text-center">
                  <div className="flex gap-4 text-[20px] items-center">
                    <MdFastfood className="text-[#00a34f] text-[30px]"></MdFastfood>
                    <h1 className="block font-bold text-[#de172e] dark:text-white">
                      {food?.name}
                    </h1>
                  </div>
                  <div className="flex gap-4 text-[20px] items-center pt-2">
                    <h1>Price:</h1>
                    <div className="flex items-center">
                      <MdAttachMoney className="text-[20px] text-[#00a34f]"></MdAttachMoney>
                      <h1 className="block font-bold text-[#de172e] dark:text-white">
                        {food?.price}
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-4 text-[20px] pt-2 items-center">
                    <h1>Discount:</h1>
                    <div className="flex items-center ">
                      <MdOutlineDiscount className="text-[20px] text-[#00a34f]"></MdOutlineDiscount>
                      <h1 className="block font-bold text-[#de172e] dark:text-white">
                        {food?.discount}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex ml-4 lg:ml-24">
                <div className=" mt-4">
                  <button className="relative px-5 py-2 font-bold text-black hover:text-white group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#f82a46] group-hover:bg-[#04c866] group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#04c866] group-hover:bg-[#f82a46] group-hover:-skew-x-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#04c866] -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#04c866] -rotate-12"></span>
                    <span className="relative">Order Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
