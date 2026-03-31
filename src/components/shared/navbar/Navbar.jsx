import React, { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { BookContext } from "../../../context/BookContext";

const Navbar = () => {
  const { cartItems } = useContext(BookContext);
  const navLinks = [
    { id: 1, name: "Products", link: "#products" },
    { id: 2, name: "Features", link: "#features" },
    { id: 3, name: "Pricing", link: "#pricing" },
    { id: 4, name: "Testimonials", link: "#testimonials" },
    { id: 5, name: "FAQ", link: "#faq" },
  ];

  return (
    <nav className="border-b border-[#f2f2f2] bg-white">
      <div className="container mx-auto flex min-h-[78px] items-center justify-between gap-3 px-4 py-4 md:min-h-[92px]">
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="mr-3 text-[#101727]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 bg-white p-2 shadow"
            >
              {navLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="text-[16px] font-semibold text-[#101727]/90"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <h2 className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text pb-1 text-[26px] font-extrabold leading-[1.2] text-transparent sm:text-[30px] md:text-[36px]">
            DigiTools
          </h2>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="text-[16px] font-semibold text-[#101727]/90"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button
            type="button"
            className="relative inline-flex h-5 w-5 items-center justify-center border-none bg-transparent p-0 text-[#101727] outline-none"
          >
            <HiOutlineShoppingCart className="text-[16px]" />
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-1 text-[9px] font-bold text-white sm:h-[18px] sm:min-w-[18px] sm:text-[10px]">
              {cartItems.length}
            </span>
          </button>

          <button
            type="button"
            className="border-none bg-transparent p-0 text-[13px] font-semibold text-[#101727] outline-none sm:text-[14px] md:text-[16px]"
          >
            Login
          </button>

          <button
            type="button"
            className="font-['Inter'] inline-flex h-9 items-center justify-center rounded-full border-none bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-3 text-[13px] font-semibold text-white outline-none sm:h-10 sm:px-4 sm:text-[14px] md:h-11 md:text-[16px]"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
