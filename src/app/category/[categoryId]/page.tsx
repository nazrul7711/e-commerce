"use client";
import ItemList from "@/components/ItemList";
import fetcher from "@/utils/fetcher";
import "@/styles/products.scss";
import Image from "next/image";
import { useState } from "react";
import useSwr from "swr";

const ProductsId = ({ params }: { params: { categoryId: string } }) => {
  const [maxValue, setMaxValue] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string | null>(null);
  let categoryId = params.categoryId;
  let { data, isLoading, error } = useSwr(
    `/api/getCategory?category=${categoryId}`,
    fetcher
  );
  let { data: subCatagoryDet } = useSwr(
    `/api/getSubCategory?categoryId=${categoryId}`,
    fetcher
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error occured while loading data</p>;
  }
  console.log(subCatagoryDet?.msg, "sub");
  //652113b70f3e63ffe2d14291
  return (
    <div className="products">
      <h1 className="title">{data?.title} Section</h1>
      <div className="detail">
        <div className="left">
          <div>
            <h1>Product Categories</h1>
            {subCatagoryDet?.msg.map((item: any) => (
              <div className="item" key={item.id}>
                <input type="checkbox" id={item.title} />
                <label htmlFor={item.title}>{item.title}</label>
              </div>
            ))}
          </div>
          <div>
            <h1>Filter By Price</h1>
            <span>{0}</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxValue(parseInt(e.target.value))}
              defaultValue={0}
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
            <Image src={data?.img} fill={true} alt="topimage" />
          </div>
          <ItemList categoryId={categoryId} />
        </div>
      </div>
    </div>
  );
};

export default ProductsId;
