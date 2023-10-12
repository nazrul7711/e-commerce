import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { ProductType } from "../redux/cartReducer"
import Link from "next/link"


const Orders = () => {
  let orders = useSelector<RootState,ProductType[]>((state)=>state.cart.orders)
  return (
    <div>
      
    </div>
  )
}

export default Orders