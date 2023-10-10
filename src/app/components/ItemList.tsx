import "@/styles/itemlist.scss";
import ProductCard from "./ProductCard";
import useSwr from "swr";
import fetcher from "../utils/fetcher";

const ItemList = ({ categoryId }: { categoryId: string }) => {
  let { data, isLoading, error } = useSwr(
    "http://localhost:3000/api/getProducts",
    fetcher
  );
  let { data: subcategories } = useSwr(
    `http://localhost:3000/api/getSubCategory?categoryId=${categoryId}`,
    fetcher
  );
  subcategories = subcategories?.msg.map((item:any)=>item.id);
  let subcategoriesSet = new Set(subcategories);

  let productWithCategory = data?.products.filter((item:any) =>
    subcategoriesSet.has(item.subcategoryId)
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Encountered Error fetching data</p>;
  }

  return (
    <div className="itemlist">
      <ul className="items">
        {productWithCategory?.map((item: any) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
