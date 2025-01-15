/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import image1 from "../../../public/images/capprice.jpg";
import image2 from "../../../public/images/tshirtprice.jpg";

interface TInput {
  email: string;
  productType: string;
  color: string;
  quantity: number;
  additionalNote: string;
  phone: string;
  address: string;
  image: FileList;
}

const Order = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInput>();

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      "https://api.imgbb.com/1/upload?key=1f471dd54105935416929b8c41eb9f57",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data?.data?.url;
  };

  const onSubmit: SubmitHandler<TInput> = async (data) => {
    let uploadedImageUrl = null;
    if (data?.image && data?.image[0]) {
      uploadedImageUrl = await uploadImage(data?.image[0]);
      setImageUrl(uploadedImageUrl);
    }

    const submissionData = {
      ...data,
      imageUrl: uploadedImageUrl,
    };
    console.log(imageUrl);

    if (form.current) {
      emailjs
        .send(
          "servicegraphitech",
          "template_ulg1uq6",
          submissionData,
          "B9eRXvIMGw4yENXED"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section className="flex lg:flex-row  flex-col-reverse gap-4 mt-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 p-4">
        <Image src={image1} height={450} width={450} alt="price" />
        <Image src={image2} height={450} width={450} alt="price" />
      </div>
      <div>
        <div className="text-black relative px-2 p-8 rounded-md w-[400px] lg:w-[800px] shadow-lg sm:rounded-3xl">
          <div className="text-center pb-4 -mt-4">
            <h1 className="text-4xl font-bold pt-4 pb-3">Order Process</h1>
            <p className="text-black pb-2">
              Please select the options and fill out the form below to place
              your order.
            </p>
          </div>
          <div className="flex justify-center">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="flex lg:flex-row flex-col gap-3 pb-2">
                <label className="form-control w-full max-w-xs">
                  <span className="label-text font-bold text-[14px] pb-2">
                    Product Type:
                  </span>
                  <select
                    className="select select-bordered  bg-[#f3eddd] w-[350px]  lg:w-[300px]"
                    {...register("productType", {
                      required: "Product type is required",
                    })}
                  >
                    <option value="">Select product type</option>
                    <option value="Cap">Cap</option>
                    <option value="T-Shirt">T-Shirt</option>
                  </select>
                </label>
                {errors.productType && (
                  <p className="text-red-500">{errors.productType.message}</p>
                )}

                <label className="form-control w-full max-w-xs">
                  <span className="label-text font-bold text-[14px] pb-2">
                    Color:
                  </span>
                  <input
                    type="text"
                    placeholder="Color"
                    className="input input-bordered bg-[#f3eddd] w-[350px]  lg:w-[300px]"
                    {...register("color", { required: "Color is required" })}
                  />
                </label>
                {errors.color && (
                  <p className="text-red-500">{errors.color.message}</p>
                )}
              </div>

              <p className="pt-4 text-gray-700 pb-2">
                For better price better high quantity
              </p>

              <div className="flex lg:flex-row flex-col gap-3 pb-2">
                <label className="form-control w-full max-w-xs">
                  <span className="label-text font-bold text-[14px] pb-2">
                    Quantity:
                  </span>
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="input input-bordered w-full bg-[#f3eddd]"
                    {...register("quantity", {
                      required: "Quantity is required",
                      valueAsNumber: true,
                    })}
                  />
                </label>
                {errors.quantity && (
                  <p className="text-red-500">{errors.quantity.message}</p>
                )}

                <label className="form-control w-full max-w-xs">
                  <span className="label-text font-bold text-[14px] pb-2">
                    Upload Product Image:
                  </span>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full bg-[#f3eddd]"
                    {...register("image", { required: "Image is required" })}
                  />
                </label>
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>

              <div className="flex lg:flex-row flex-col gap-3 pb-2">
                <label className="form-control w-full max-w-xs">
                  <span className="label-text font-bold text-[14px] pb-2">
                    Email:
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full bg-[#f3eddd]"
                    {...register("email", { required: "Email is required" })}
                  />
                </label>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
                <label className="form-control w-full max-w-xs">
                  <span className="label-text font-bold text-[14px] pb-2">
                    Phone:
                  </span>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="input input-bordered w-full bg-[#f3eddd]"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                </label>
              </div>

              <label className="form-control w-full max-w-xs">
                <span className="label-text font-bold text-[14px] pb-2">
                  Address:
                </span>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full bg-[#f3eddd]"
                  {...register("address", {
                    required: "Address is required",
                  })}
                />
              </label>
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
              <label className="form-control w-full max-w-xs pt-4">
                <span className="label-text font-bold text-[14px] pb-2">
                  Additional Note:
                </span>
                <textarea
                  placeholder="Additional note (if any)"
                  className="textarea textarea-bordered w-full bg-[#f3eddd]"
                  {...register("additionalNote")}
                ></textarea>
              </label>

              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}

              <div className="mt-6">
                <button className="btn bg-gradient-to-r text-white from-[#e0584c] to-[#FD3B29] hover:bg-[#132836] w-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
