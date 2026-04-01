import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(BookContext);

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[#f9fafc] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-white">
          <img src={item.icon} alt={item.name} className="h-8 w-8" />
        </div>

        <div>
          <h4 className="font-semibold text-[#101727]">{item.name}</h4>
          <p className="text-[14px] text-[#627382]">${item.price}</p>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-[16px] font-bold text-[#ff3980]"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
