import "@/styles/itemlist.scss"
import ProductCard from "./ProductCard";

const ItemList = () => {
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
    <div className="itemlist">
      <ul className="items">
        {data.map((item) => (
          <ProductCard item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
}

export default ItemList