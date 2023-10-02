"use client"
import ItemList from "@/app/components/ItemList";
import "@/styles/products.scss";
import Image from "next/image";
import { useState } from "react";

const ProductsId = () => {
  const [maxValue,setMaxValue] = useState<number>(0)
  const [sortBy,setSortBy] = useState<string|null>(null)
  return (
    <div className="products">
      <div className="left">
        <div>
          <h1>Product Categories</h1>
          <div className="item">
            <input type="checkbox" id="shoes" />
            <label htmlFor="shoes">Shoes</label>
          </div>
          <div className="item">
            <input type="checkbox" id="Skirts" />
            <label htmlFor="Skirts">Skirts</label>
          </div>
          <div className="item">
            <input type="checkbox" id="coats" />
            <label htmlFor="coats">Coats</label>
          </div>
        </div>
        <div>
          <h1>Filter By Price</h1>
          <span>{0}</span>
          <input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setMaxValue(parseInt(e.target.value))}
          />
          <span>{maxValue}</span>
        </div>
        <div>
          <h1>Sort by</h1>
          <div className="item">
            <input
              type="radio"
              id="low"
              name="price"
              onChange={() => setSortBy("asc")}
            />
            <label htmlFor="low">Price (Lowest First)</label>
          </div>
          <div className="item">
            <input
              type="radio"
              id="high"
              name="price"
              onChange={() => setSortBy("dsc")}
            />
            <label htmlFor="high">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="imgcontainer">
          <Image src={"/menSea.jpg"} fill={true} alt="topimage" />
        </div>
        <ItemList/>
      </div>
    </div>
  );
};

export default ProductsId;
