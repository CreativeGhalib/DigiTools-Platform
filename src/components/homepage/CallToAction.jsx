import React from "react";

const CallToAction = () => {
  return (
    <div
      id="testimonials"
      className="py-16 text-white md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(90deg, rgba(79,57,246,1) 0%, rgba(149,20,250,1) 100%)",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[32px] font-extrabold sm:text-[38px] md:text-[48px]">
          Ready To Transform Your Workflow?
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-[14px] leading-7 text-white/80">
          Join thousands of creators using DigiTools to design, automate, and
          publish faster with premium-ready resources.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="btn h-11 min-h-0 w-full rounded-full border-none bg-white px-8 text-[14px] font-semibold text-[#7c3aed] shadow-none hover:bg-white sm:w-auto">
            Explore Products
          </button>
          <button className="btn h-11 min-h-0 w-full rounded-full border border-white/40 bg-white/10 px-8 text-[14px] font-semibold text-white shadow-none hover:bg-white/10 sm:w-auto">
            View Pricing
          </button>
        </div>

        <p className="mt-5 text-[12px] text-white/70">
          No setup fees. Instant access. New packs added regularly.
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
