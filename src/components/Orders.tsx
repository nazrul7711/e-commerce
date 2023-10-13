"use client";
import { RootState } from "../redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import "@/styles/orders.scss"

const OrderList = () => {
  let items = useSelector((state: RootState) => state.cart.products);
  return (
    <div className="orders">
      {items.map((item) => (
        <div className="order">
          <div>
            <Image src={item.images[0]} height={100} width={90} alt="img" />
          </div>
          <div className="desc">
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
            <div className="price">
              {item.quantity}X{item.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
