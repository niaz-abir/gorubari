"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination module
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import your images
import image1 from "../../public/images/gorucaro (1).jpg";
import image2 from "../../public/images/gorucaro (2).jpg";
import image3 from "../../public/images/gorucaro (3).jpg";
import image4 from "../../public/images/gorucaro (4).jpg";

export function Banner() {
  return (
    <section>
      <div className="grid backdrop-blur-xl p-6 rounded-md grid-cols-1  mt-10 items-center justify-items-center md:grid-cols-2">
        <div className="flex flex-col items-center gap-y-5 text-center md:items-start md:text-start">
          <h1 className="text-[clamp(2rem,_4vw+1rem,_4rem)] font-extrabold capitalize leading-tight tracking-tight">
            Welcome to Gorubari!
          </h1>
          <h2 className=" text-4xl font-semibold">
            {" "}
            A Taste of Tradition & Flavor
          </h2>
          <p className="max-w-[35rem] text-lg leading-relaxed text-foreground-500">
            <span className="font-bold"> At Gorubari, </span>
            we bring you the perfect fusion of authentic flavors, fresh
            ingredients, and heartwarming hospitality. Our menu is crafted with
            passion, offering a delightful selection of mouthwatering dishes
            that satisfy every craving.
          </p>
          <div className="flex items-center gap-x-4 pt-4 pb-4">
            <Link
              href=""
              className="w-32 h-12 pl-2 pt-3 bg-gradient-to-r from-[#e0584c] to-[#FD3B29] hover:bg-[#132836] border-none rounded-md text-[18px] text-white font-bold transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>
        </div>
        <div className="ml-0 mt-4 lg:ml-6 w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-md"
          >
            {/* Swiper Slides */}
            <SwiperSlide>
              <Image
                src={image1}
                alt="Hero 1"
                className="rounded-md"
                height={600}
                width={600}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={image2}
                alt="Hero 2"
                className="rounded-md"
                height={600}
                width={600}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={image3}
                alt="Hero 3"
                className="rounded-md"
                height={600}
                width={600}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={image4}
                alt="Hero 3"
                className="rounded-md"
                height={600}
                width={600}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={image2}
                alt="Hero 3"
                className="rounded-md"
                height={600}
                width={600}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
