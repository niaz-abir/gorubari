/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { MdAttachMoney, MdFastfood, MdOutlineDiscount } from "react-icons/md";

const Menu = () => {
  const allFood = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1624639644675-6b75d9b44b98?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Beef Steak",
      price: "550",
      discount: "15%",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1648977555545-4dd006e30d3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Smoked Brisket",
      price: "720",
      discount: "10%",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1622716029530-72b0299d89f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Beef Ribs",
      price: "680",
      discount: "12%",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1693422660544-014dd9f3ef73?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Grilled T-Bone",
      price: "790",
      discount: "18%",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1719329468408-cafbd16da8cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Beef Tenderloin",
      price: "620",
      discount: "10%",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1681821674991-03c40fba40e9?q=80&w=1470&auto=format&fit=crop&ixlib=,rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "BBQ Short Ribs",
      price: "750",
      discount: "14%",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1583664402285-f3c8c5a42a15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Beef Kebab",
      price: "480",
      discount: "20%",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1588690793273-4d86028401f0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Beef Curry",
      price: "540",
      discount: "12%",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1667207393997-3fc41d39ade2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Garlic Butter Steak",
      price: "670",
      discount: "15%",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1668724776334-548671c13751?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Beef Stroganoff",
      price: "580",
      discount: "10%",
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center p-4 my-6 mt-16">
        <h1 className="text-3xl text-black dark:text-white md:text-5xl lg:text-6xl font-bold">
          Search your food
        </h1>

        <div className="relative p-4 border-[#1f2b2e] rounded-lg w-full max-w-lg">
          <input
            type="text"
            className="rounded-md p-3 dark:bg-[#1f2b2e]  w-full"
            placeholder="Search MCQ | Topic | Course"
          />

          <button type="submit" className="absolute right-6 top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 ml-8  gap-4 lg:ml-14">
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
            <div className="card w-72 lg:w-96 shadow-sm rounded-sm">
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
              <div className="flex ml-24 mb-8 lg:ml-24">
                <div className=" mt-4">
                  <button className="relative px-8 py-3 font-bold text-black hover:text-white group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#f82a46] group-hover:bg-[#04c866] group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#04c866] group-hover:bg-[#f82a46] group-hover:-skew-x-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-20 h-30 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#04c866] -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-20 h-30 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#04c866] -rotate-12"></span>
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
