import "@/styles/cart.scss";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { ProductType, onreset, removeFromCart } from "../redux/cartReducer";
const Cart = () => {
  let items = useSelector<RootState, ProductType[]>(
    (state) => state.carts.products
  );
  let dispatch = useDispatch<AppDispatch>();
  let totalPrice = ()=>{
    let total = 0
    items.forEach(item=>total+=item.quantity*item.price)
    return total
  }
  console.log(typeof totalPrice,"likk")
  return (  
    <div className="cartdiv">
      <h1>Products in your cart</h1>
      <ul>
        {items.map((item: ProductType) => (
          <div className="item">
            <Image src={item.images[0]} height={100} width={90} alt="img" />
            <div className="details">
              <div className="title">{item.title}</div>
              <div className="desc">{item.description?.substring(0, 100)}</div>
              <div className="price">
                {item.quantity} X {item.price}
              </div>
            </div>
            <div
              className="delete"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              <AiOutlineDelete size={30} />
            </div>
          </div>
        ))}
      </ul>
      <div className="total">
        <h1>SUBTOTAL</h1>
        <div className="price">${totalPrice()}</div>
      </div>
      <button className="proceed">PROCEED TO CHECKOUT</button>
      <p className="reset" onClick={()=>dispatch(onreset())}>RESET CART</p>
    </div>
  );
};

export default Cart;
