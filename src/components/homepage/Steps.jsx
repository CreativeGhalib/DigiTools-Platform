import React from "react";
import userImg from "../../assets/digitools/user.png";
import packageImg from "../../assets/digitools/package.png";
import rocketImg from "../../assets/digitools/rocket.png";

const stepsData = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up in seconds and unlock your digital tools dashboard.",
    icon: userImg,
  },
  {
    id: 2,
    title: "Choose Products",
    description: "Pick the tools and packs that fit your workflow and goals.",
    icon: packageImg,
  },
  {
    id: 3,
    title: "Start Creating",
    description:
      "Download and start creating with immediate access to every purchase.",
    icon: rocketImg,
  },
];

const Steps = () => {
  return (
    <div className="bg-[#f5f7fb] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold text-[#101727] sm:text-[38px] md:text-[48px]">
            Get Started In 3 Steps
          </h2>
          <p className="mt-3 text-[14px] text-[#627382]">
            Start using premium digital tools in minutes with this quick setup.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stepsData.map((step, ind) => (
            <div
              key={step.id}
              className="relative rounded-2xl border border-[#edf0f5] bg-white px-6 py-10 text-center shadow-[0_16px_45px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12"
            >
              <div className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-[#8b3dff] text-xs font-semibold text-white">
                {ind + 1}
              </div>

              <div className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#f4ebff]">
                <img src={step.icon} alt={step.title} className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-[20px] font-bold text-[#101727] sm:text-[24px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#627382]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
