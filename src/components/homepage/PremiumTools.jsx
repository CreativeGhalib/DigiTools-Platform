import React, { use, useContext } from "react";
import { BookContext } from "../../context/BookContext";
import ProductCard from "../ui/ProductCard";
import CartItem from "../ui/CartItem";

const productsPromise = fetch("/productsData.json").then((res) => res.json());

const PremiumTools = () => {
  const products = use(productsPromise);
  const { activeView, setActiveView, cartItems, clearCart } =
    useContext(BookContext);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const isProductView = activeView === "products";

  return (
    <div id="products" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold text-[#101727] sm:text-[38px] md:text-[48px]">
            Premium Digital Tools
          </h2>
          <p className="mx-auto mt-3 max-w-[680px] text-[14px] leading-7 text-[#627382]">
            Choose from our curated collection of premium digital products
            designed to power your workflow and creative output.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#f3f4f6] p-1">
            <button
              onClick={() => setActiveView("products")}
              className={`rounded-full px-5 py-2 text-[13px] font-semibold transition sm:px-6 ${activeView === "products" ? "bg-gradient-to-r from-[#6d28ff] to-[#a020f8] text-white" : "text-[#6b7280]"}`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveView("cart")}
              className={`rounded-full px-5 py-2 text-[13px] font-semibold transition sm:px-6 ${activeView === "cart" ? "bg-gradient-to-r from-[#6d28ff] to-[#a020f8] text-white" : "text-[#6b7280]"}`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {isProductView ? (
          <div className="mx-auto mt-12 grid max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, ind) => {
              return <ProductCard key={ind} product={product} />;
            })}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-[1080px] rounded-2xl border-2 border-[#f2f2f2] bg-white px-5 py-6 shadow-none sm:px-8 sm:py-8 md:px-10 md:py-10">
            <h3 className="text-[20px] font-bold text-[#101727]">Your Cart</h3>

            {cartItems.length === 0 ? (
              <div className="mt-6 rounded-2xl bg-[#f8fafc] px-6 py-14 text-center text-[#627382]">
                No products added yet. Switch to the products tab and add your
                first tool.
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}

                <div className="flex items-center justify-between gap-4 pt-4 text-[16px] text-[#627382]">
                  <span>Total:</span>
                  <span className="text-[20px] font-bold text-[#101727] sm:text-[24px]">
                    ${totalPrice}
                  </span>
                </div>

                <button
                  onClick={clearCart}
                  className="btn mt-2 h-[52px] min-h-0 w-full rounded-full border-none bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-4 text-sm font-bold text-white shadow-none hover:from-[#4f39f6] hover:to-[#9514fa] sm:text-base"
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumTools;
