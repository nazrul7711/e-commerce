import React from "react";
import "@/styles/featured.scss";
import ProductCard from "./ProductCard";
import getProducts from "../utils/productsData";
import OrderList from "./Orders";

const FeaturedProducts = async ({ type }: { type: string }) => {
  let { products } = await getProducts();


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
          {products.map((item: any) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </ul>
      </div>

    </div>
  );
};

export default FeaturedProducts;
