import React from "react";
import bannerImg from "../../assets/digitools/banner.png";
import playImg from "../../assets/digitools/Play.png";

const Banner = () => {
  return (
    <div className="bg-white py-3 md:py-4 lg:py-6">
      <div className="hero container mx-auto min-h-[420px] bg-white px-4 md:min-h-[470px]">
        <div className="hero-content w-full flex-col-reverse justify-between gap-8 px-0 py-4 sm:py-6 lg:flex-row-reverse lg:gap-20">
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#7c3aed]/12 via-white to-[#a855f7]/10 blur-2xl"></div>
            <img
              src={bannerImg}
              alt="DigiTools banner"
              className="relative w-full max-w-[260px] rounded-[10px] object-cover sm:max-w-[300px] md:max-w-[360px]"
            />
          </div>

          <div className="max-w-[470px] text-center lg:text-left">
            <span className="rounded-full bg-[#f3e8ff] px-3 py-1.5 text-[11px] font-semibold text-[#7c3aed]">
              New AI-Powered Tools Available
            </span>

            <h1 className="mt-5 text-[28px] font-extrabold leading-[1.08] text-[#101727] sm:text-[34px] md:text-[40px]">
              Supercharge Your
              <br />
              Digital Workflow
            </h1>

            <p className="mt-4 max-w-[420px] text-[14px] leading-7 text-[#627382] lg:max-w-[420px]">
              Access premium AI tools, design assets, templates, and
              productivity software all in one place. Start creating faster
              today.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button className="btn h-11 min-h-0 rounded-full border-none bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-6 text-sm font-semibold text-white shadow-none hover:from-[#4f39f6] hover:to-[#9514fa] sm:w-auto">
                Explore Products
              </button>
              <button className="btn h-11 min-h-0 rounded-full border border-[#d8b4fe] bg-white px-5 text-[14px] font-medium text-[#7c3aed] shadow-none hover:bg-white sm:w-auto">
                <img src={playImg} alt="Play" className="h-4 w-4" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
