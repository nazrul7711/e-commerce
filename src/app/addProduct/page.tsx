"use client";
import React from "react";
import "@/styles/addproduct.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const { register: register1, handleSubmit: handleSubmit1 } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { register: register3, handleSubmit: handleSubmit3 } = useForm();
  interface FormType {
    productImg: string;
    productImg2?: string;
    title: string;
    description: string;
    price: string;
    isNew: string;
    subcategory: string;
    oldprice: string;
    category: string;
  }
  interface FormTypeII {
    title: string;
    desc?: string;
    img?: string;
    subcategories?: string;
  }
  const submitHandler3 = async (d:any) => {
    let res = await axios.post("/api/addSubcategory", {
      title: d.title,
    });
  };
  const submitHandler2 = async (d:any) => {
    let formData = new FormData();
    formData.append("title", d.title);
    formData.append("desc", d.desc!);
    formData.append("subcategories", d.subcategories!);
    formData.append("img", d.img ? d.img[0] : "");
    await axios.post("/api/addCategory", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  const submitHandler = async (d:any) => {
    let formData = new FormData();
    formData.append("productImage", d.productImg[0]);
    formData.append("productImage2", d.productImg2 ? d.productImg2[1] : "");
    formData.append("title", d.title);
    formData.append("description", d.description);
    formData.append("price", d.price);
    formData.append("isNew", d.isNew);
    formData.append("subcategory", d.subcategory);
    formData.append("oldPrice", d.oldprice);

    let res = await axios.post("/api/addProduct", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
  };
  return (
    <div className="addproduct">
      <form onSubmit={handleSubmit1(submitHandler)} className="form">
        <input
          type="file"
          {...register1("productImg", { required: "field is needed" })}
          placeholder="productImg"
        />
        <input
          type="file"
          {...register1("productImg2")}
          placeholder="productImg2"
        />
        <input
          type="text"
          {...register1("title", { required: "field is needed" })}
          placeholder="title"
        />
        <input
          type="text"
          {...register1("description", { required: "field is needed" })}
          placeholder="description"
        />
        <input
          type="text"
          {...register1("price", { required: "field is needed" })}
          placeholder="price"
        />
        <input
          type="text"
          {...register1("isNew", { required: "field is needed" })}
          placeholder="isNew"
        />
        <input
          type="text"
          {...register1("subcategory", { required: "field is needed" })}
          placeholder="subcategory"
        />
        <input
          type="text"
          {...register1("oldprice", { required: "field is needed" })}
          placeholder="old price"
        />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSubmit2(submitHandler2)}>
        <input
          type="text"
          {...register2("title", { required: "Title is required" })}
          placeholder="title"
        />
        <input
          type="text"
          {...register2("desc", { required: "Title is required" })}
          placeholder="desc"
        />
        <input
          type="text"
          {...register2("subcategories", { required: "Title is required" })}
          placeholder="subcategories"
        />
        <input
          type="file"
          {...register2("img", { required: "This field is required" })}
          placeholder="img"
        />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSubmit3(submitHandler3)}>
        <input
          type="text"
          {...register3("title", { required: "Title is required" })}
          placeholder="title"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;

// id            String    @id @default(auto()) @map("_id") @db.ObjectId
//   title String
//   desc String?
//   img String?
//   products Product[]
