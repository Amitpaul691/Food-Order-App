import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Fooditems from "./Fooditems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  console.log(cartitems[0]);
  const dispatch = useDispatch();
  const handleClearcart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">cart - {cartitems.length} items</h1>
      <button
        className="bg-green-100 p-2 m-2"
        onClick={() => handleClearcart()}
      >
        Clear cart
      </button>
      <div className="flex">
        {cartitems.map((items) => (
          <Fooditems key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
