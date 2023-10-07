import React from "react";
import "@/styles/categories.scss";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

async function getCategories() {
  let res = await fetch("http://localhost:3000/api/getCategories", {
    method: "GET",
    headers: headers(),
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("fetching failed");
  }
  return res.json();
}
const Categories = async () => {

  let categories = await getCategories();

  return (
    <div className="categories">
      <div className="first">
        <Image src={categories[0].img} fill={true} alt={categories[0].title} />
        <Link href={`/category/${categories[0].id}`}>
          {categories[0].title}
        </Link>
      </div>
      <div className="second">
        <Image src={categories[1].img} fill={true} alt={categories[1].title} />
        <Link href={`/category/${categories[1].id}`}>
          {categories[1].title}
        </Link>
      </div>
      <div className="third">
        <Image src={categories[2].img} fill={true} alt={categories[2].title} />
        <Link href={`/category/${categories[2].id}`}>
          {categories[2].title}
        </Link>
      </div>
      <div className="fourth">
        <Image src={categories[3].img} fill={true} alt={categories[3].title} />
        <Link href={`/category/${categories[3].id}`}>
          {categories[3].title}
        </Link>
      </div>
      <div className="fifth">
        <Image src={categories[4].img} fill={true} alt={categories[4].title} />
        <Link href={`/category/${categories[4].id}`}>
          {categories[4].title}
        </Link>
      </div>
      <div className="sixth">
        <Image src={categories[5].img} fill={true} alt={categories[5].title} />
        <Link href={`/category/${categories[5].id}`}>
          {categories[5].title}
        </Link>
      </div>
    </div>
  );
};

export default Categories;
