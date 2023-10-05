"use client";
import React from "react";
import "@/styles/addproduct.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios"

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  type FormType = {
    productImg: string;
    productImg2?: string;
    title: string;
    description: string;
    price: number;
    isNew: boolean;
  };
  const submitHandler: SubmitHandler<FormType> = async (d) => {
    let formData = new FormData();
    console.log(d)

    formData.append("productImage", d.productImg[0]);
    formData.append("productImage2", d.productImg2[0]);
    formData.append("title", d.title);
    formData.append("description", d.description);
    formData.append("price", String(d.price));
    formData.append("isNew", String(d.isNew));
    let res = await axios.post("/api/addProduct", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res)

  };
  return (
    <div className="addproduct">
      <form onSubmit={handleSubmit(submitHandler)} className="form">
        <input
          type="file"
          {...register("productImg", { required: "field is needed" })}
        />
        <input
          type="file"
          {...register("productImg2", { required: "field is needed" })}
        />
        <input
          type="text"
          {...register("title", { required: "field is needed" })}
        />
        <input
          type="text"
          {...register("description", { required: "field is needed" })}
        />
        <input
          type="text"
          {...register("price", { required: "field is needed" })}
        />
        <input
          type="text"
          {...register("isNew", { required: "field is needed" })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
