import React from "react";
import "@/styles/productcard.scss";
import Link from "next/link";
import Image from "next/image";
import { spawn } from "child_process";

type ProductCardProp = {
  id: number;
  img: string;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  img2?: string;
};

const ProductCard = ({ item }: { item: ProductCardProp }) => {
  return (
    <Link href="/" className="link">
      <div className="productcard">
        {item.isNew && <span>New Season</span>}
        <div className="imagecontainer">
          <Image
            src={item.img}
            fill={true}
            alt={item.title}
            className="firstImage"
          />
          {item.img2 && (
            <Image
              src={item.img2}
              fill={true}
              alt={item.title}
              className="secondImage"
            />
          )}
        </div>
        <div className="title">{item.title}</div>
        <div className="price">
          <div className="oldprice">${item.oldPrice}</div>
          <div className="newprice">${item.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
