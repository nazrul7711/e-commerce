import React from "react";
import "@/styles/featured.scss";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ type }: { type: string }) => {
  let data = [
    {
      id: 1,
      img: "/double1.jpg",
      img2: "/double2.jpg",
      title: "long sleeve jacket",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "/coat.jpg",
      title: "coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "/hat.jpg",
      title: "Hat",
      isNew: false,
      oldPrice: 231,
      price: 12,
    },
    // {
    //   id: 4,
    //   img: "/officeWear.jpg",
    //   title: "Office Coat",
    //   isNew: true,
    //   oldPrice: 231,
    //   price: 12,
    // },
    {
      id: 5,
      img: "/OversizeShirt.jpg",
      title: "Oversize Shirt",
      isNew: false,
      oldPrice: 231,
      price: 12,
    },
  ];
  return (
    <div className="featured">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          perspiciatis necessitatibus eaque nihil sit sequi temporibus odio
          debitis perferendis esse sunt, pariatur beatae quaerat ipsa corrupti
          excepturi placeat vel quas?
        </p>
      </div>
      <div className="bottom">
        <ul className="itemlist">
          {data.map((item) => (
            <ProductCard item={item} key={item.id}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProducts;
