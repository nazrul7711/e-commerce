import "@/styles/cart.scss";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
const Cart = () => {
  let items = [
    {
      id: 1,
      img: "/double1.jpg",
      img2: "/double2.jpg",
      title: "long sleeve jacket",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni delectus atque voluptate ipsam sapiente ullam cupiditate animi voluptatibus exercitationem doloremque sint, alias quasi placeat, nemo quas nisi! Deleniti, alias sapiente.",
    },
    {
      id: 2,
      img: "/coat.jpg",
      title: "coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni delectus atque voluptate ipsam sapiente ullam cupiditate animi voluptatibus exercitationem doloremque sint, alias quasi placeat, nemo quas nisi! Deleniti, alias sapiente.",
    },
  ];
  return (
    <div className="cartdiv">
      <h1>Products in your cart</h1>
      <ul>
        {items.map((item) => (
          <div className="item">
            <Image src={item.img} height={100} width={90} alt="img" />
            <div className="details">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc?.substring(0, 100)}</div>
              <div className="price">2 X {item.price}</div>
            </div>
            <div className="delete">
              <AiOutlineDelete size={30} />
            </div>
          </div>
        ))}
      </ul>
      <div className="total">
        <h1>SUBTOTAL</h1>
        <div className="price">${19.9}</div>
      </div>
      <button className="proceed">PROCEED TO CHECKOUT</button>
      <p className="reset">RESET CART</p>
    </div>
  );
};

export default Cart;
