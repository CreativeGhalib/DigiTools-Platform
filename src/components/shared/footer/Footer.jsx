import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white">
      <div className="container mx-auto px-4 py-12 sm:py-14">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-[24px] font-extrabold">DigiTools</h2>
            <p className="mt-4 max-w-[250px] text-[13px] leading-6 text-white/65">
              Premium digital tools for creators, professionals, and businesses,
              built smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-white/90">Product</h3>
            <div className="mt-4 space-y-2.5 text-[13px] text-white/65">
              <p>Features</p>
              <p>Pricing</p>
              <p>Templates</p>
              <p>Integrations</p>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-white/90">Company</h3>
            <div className="mt-4 space-y-2.5 text-[13px] text-white/65">
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Press</p>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-white/90">Resources</h3>
            <div className="mt-4 space-y-2.5 text-[13px] text-white/65">
              <p>Documentation</p>
              <p>Help Center</p>
              <p>Community</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-white/90">Social Links</h3>
            <div className="mt-4 flex items-center gap-2.5">
              <a className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#101727]">
                <FaYoutube className="text-[13px]" />
              </a>
              <a className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#101727]">
                <FaFacebookF className="text-[12px]" />
              </a>
              <a className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#101727]">
                <FaXTwitter className="text-[12px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1120px] flex-col gap-4 border-t border-white/10 pt-5 text-[11px] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MesbahGhalib. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
