"use client";
import React, { useState } from "react";
import "@/styles/product.scss";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import Image from "next/image";
import useSwr from "swr"
import fetcher from "@/app/utils/fetcher";

const Product = ({params}:{params:{productId:string}}) => {
  const [imageNum, setImageNum] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  let productId = params.productId


  let { data, isLoading, error } = useSwr(
    `/api/getProduct?id=${productId}`,
    fetcher
  );
  console.log(data,"what")

  let item = {
    title: "Long Sleeve Graphic T-Shirt",
    price: 19.9,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ex veniam praesentium distinctio provident tempore. Delectus laborum unde, vel ratione neque assumenda aut quibusdam quae.",
    quantity: 1,
    images: ["/male1.jpg", "/male2.jpg"],
  };

  let images = [data?.img,data?.img2]
  if(isLoading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Some error occured while loading data</p>
  }
  return (
    <div className="product">
      <div className="left">
        <div className="left">
          <div className="clickable" onClick={() => setImageNum(0)}>
            <Image src={data?.img} width={100} height={100} alt="top" />
          </div>
          <div className="clickable" onClick={() => setImageNum(1)}>
            {data?.img2 && <Image src={data?.img2} width={100} height={100} alt="top" />}
          </div>
        </div>
        <div className="right">
          <Image
            src={images[imageNum]}
            width={400}
            height={500}
            alt="top"
          />
        </div>
      </div>
      <div className="right">
        <h1>{data?.title}</h1>
        <div className="price">${data?.price}</div>
        <div className="desc">{data?.desc}</div>
        <div className="increasesection">
          <button onClick={() => setQuantity((p) => p === 1 ? 1: p - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((p) => p +1)}>+</button>
        </div>
        <button className="cart">
          <AiOutlineShoppingCart />
          ADD TO CART
        </button>
        <div className="wishlist">
          <div>
            <AiOutlineHeart />
            <div>ADD TO WISHLIST</div>
          </div>
          <div>
            <BiGitCompare />
            <div>ADD TO COMPARE</div>
          </div>
        </div>
        <div className="information">
          <div>Vendor:Polo</div>
          <div>Product Type: Tshirt</div>
          <div>Tag:Woman, Tshirt, Trendy</div>
        </div>
        <div className="line"></div>
        <div className="addInformation">
          <div>DESCRIPTION</div>
          <div className="line"></div>
          <div>ADDITIONAL INFORMATION</div>
          <div className="line"></div>
          <div>FAQ</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
