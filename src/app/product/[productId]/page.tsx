"use client";
import React, { useState } from "react";
import "@/styles/product.scss";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import Image from "next/image";

const Product = () => {
  const [imageNum, setImageNum] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  let item = {
    title: "Long Sleeve Graphic T-Shirt",
    price: 19.9,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ex veniam praesentium distinctio provident tempore. Delectus laborum unde, vel ratione neque assumenda aut quibusdam quae.",
    quantity: 1,
    images: ["/male1.jpg", "/male2.jpg"],
  };
  return (
    <div className="product">
      <div className="left">
        <div className="left">
          <div className="clickable" onClick={() => setImageNum(0)}>
            <Image src={item.images[0]} width={100} height={100} alt="top" />
          </div>
          <div className="clickable" onClick={() => setImageNum(1)}>
            <Image src={item.images[1]} width={100} height={100} alt="top" />
          </div>
        </div>
        <div className="right">
          <Image
            src={item.images[imageNum]}
            width={400}
            height={500}
            alt="top"
          />
        </div>
      </div>
      <div className="right">
        <h1>{item.title}</h1>
        <div className="price">${item.price}</div>
        <div className="desc">{item.description}</div>
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
