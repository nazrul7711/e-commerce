import "@/styles/itemlist.scss"
import ProductCard from "./ProductCard";
import useSwr from "swr"
import fetcher from "../utils/fetcher";





const ItemList = ({categoryId}:{categoryId:string}) => {
  let {data,isLoading,error} = useSwr("http://localhost:3000/api/getProducts",fetcher);
  console.log(data?.products)
  let products = data?.products?.filter(item=>item.categoryId===categoryId)
  console.log(products)
  if(isLoading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Encountered Error fetching data</p>
  }

  return (
    <div className="itemlist">
      <ul className="items">
        {products?.map((item:any) => (
          <ProductCard item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
}

export default ItemList