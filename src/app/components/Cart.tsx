import "@/styles/cart.scss";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { ProductType, addOrders, onreset, removeFromCart, resetOrders } from "../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
const Cart = () => {
  let items = useSelector<RootState, ProductType[]>(
    (state) => state.cart.products
  );


  let dispatch = useDispatch<AppDispatch>();
  let totalPrice = ()=>{
    let total = 0
    items.forEach(item=>total+=item.quantity*item.price)
    return total
  }
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  let {data:session}=useSession()
  const checkoutHandler = async ()=>{
    let stripe = await stripePromise
    let response = await fetch("http://localhost:3000/api/checkout",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        items,
        email:session?.user?.email
      })
    });
    let data = await response.json()
    if(response.ok){
      dispatch(addOrders(items))
      stripe?.redirectToCheckout({sessionId:data.id})
      dispatch(resetOrders())
    }
  }
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
      <button className="proceed" onClick={checkoutHandler}>PROCEED TO CHECKOUT</button>
      <p className="reset" onClick={()=>dispatch(onreset())}>RESET CART</p>
    </div>
  );
};

export default Cart;
