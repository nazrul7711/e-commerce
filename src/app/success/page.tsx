import Link from "next/link";
import React from "react";
import "@/styles/success.scss";
import { TiTick } from "react-icons/ti";

const Success = () => {
  return (
    <div className="success">
      <div className="tick">
        <TiTick size={30} />
      </div>
      <div className="title">Payment Successful</div>
      <div className="successfull">
        Your order has been placed.We'll send you an email with your order
        details
      </div>
      <div className="buttons">
        <Link href="/orders">Your Orders</Link>
        <Link href="/">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Success;
