import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductType } from "../../redux/cartReducer";
import "@/styles/order.scss";
import OrderList from "@/components/Orders";

const Orders = () => {
  return (
    <div className="orders">
      <OrderList/>
    </div>
  );
};

export default Orders;
