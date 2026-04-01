import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useContext(BookContext);
  const isAdded = cartItems.some((item) => item.id === product.id);
  let badgeColor = "bg-[#e5e7eb] text-[#4b5563]";

  if (product.tagType === "primary") {
    badgeColor = "bg-[#ede9fe] text-[#7c3aed]";
  } else if (product.tagType === "success") {
    badgeColor = "bg-[#dcfce7] text-[#16a34a]";
  } else if (product.tagType === "warning") {
    badgeColor = "bg-[#ffedd5] text-[#ea580c]";
  }

  return (
    <div className="flex min-h-[380px] flex-col rounded-2xl border border-[#edf0f5] bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.04)] md:min-h-[400px] md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8fafc] md:h-[60px] md:w-[60px]">
          <img src={product.icon} alt={product.name} className="h-8 w-8" />
        </div>

        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${badgeColor}`}>
          {product.tag}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="mt-5 text-[20px] font-bold text-[#101727]">{product.name}</h3>
        <p className="mt-3 text-[14px] leading-7 text-[#627382]">
          {product.description}
        </p>

        <div className="mt-5 flex items-end gap-1">
          <span className="text-[30px] font-bold text-[#101727] md:text-[32px]">
            ${product.price}
          </span>
          <span className="mb-1 text-[14px] text-[#627382]">{product.period}</span>
        </div>

        <div className="mt-5 space-y-2">
          {product.features.map((feature, ind) => {
            return (
              <div
                key={ind}
                className="flex items-center gap-3 text-[14px] text-[#627382]"
              >
                <span className="text-[#22c55e]">✓</span>
                <span>{feature}</span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="btn mt-6 h-11 min-h-0 w-full rounded-full border-none bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-sm font-semibold text-white shadow-none hover:from-[#4f39f6] hover:to-[#9514fa]"
      >
        {isAdded ? "Added To Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;
