import React from "react";

const pricingData = [
  {
    id: 1,
    title: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out a few essential tools.",
    features: [
      "Access to 3 free tools",
      "Basic download access",
      "Community support",
      "Personal use license",
    ],
    buttonText: "Get Started Free",
    active: false,
  },
  {
    id: 2,
    title: "Pro",
    price: "$29",
    period: "/month",
    description: "Built for creators who need more power and flexibility.",
    features: [
      "Unlimited product downloads",
      "Exclusive premium assets",
      "Advanced templates",
      "Priority support",
    ],
    buttonText: "Start Pro Trial",
    active: true,
  },
  {
    id: 3,
    title: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For teams managing multiple brands and workflows.",
    features: [
      "Team collaboration",
      "Shared workspaces",
      "Dedicated onboarding",
      "License management",
    ],
    buttonText: "Contact Sales",
    active: false,
  },
];

const Pricing = () => {
  return (
    <div className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold text-[#101727] sm:text-[38px] md:text-[48px]">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-[14px] text-[#627382]">
            Choose the right plan for your usage and growing creative needs.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1120px] grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingData.map((item, ind) => {
            return (
              <div
                key={ind}
                className={`relative flex min-h-[470px] flex-col rounded-2xl border px-6 py-8 shadow-sm sm:min-h-[500px] sm:px-8 sm:py-9 ${
                  item.active
                    ? "border-[#7c3aed] bg-gradient-to-b from-[#7c3aed] to-[#9f35ff] text-white shadow-[0_20px_45px_rgba(124,58,237,0.28)]"
                    : "border-[#edf0f5] bg-[#fbfcff] text-[#101727]"
                }`}
              >
                {item.active && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffcf5b] px-3 py-1 text-[11px] font-semibold text-[#6b3f00]">
                    Most Popular
                  </span>
                )}

                <h3 className="text-[20px] font-bold sm:text-[24px]">{item.title}</h3>

                <p
                  className={`mt-3 text-[14px] leading-7 ${
                    item.active ? "text-white/75" : "text-[#627382]"
                  }`}
                >
                  {item.description}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-[40px] font-bold sm:text-[48px]">{item.price}</span>
                  <span
                    className={`mb-2 text-[14px] ${
                      item.active ? "text-white/70" : "text-[#627382]"
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <div className="mt-8 flex-1 space-y-3">
                  {item.features.map((feature, featureInd) => {
                    return (
                      <div
                        key={featureInd}
                        className="flex items-center gap-3 text-[14px]"
                      >
                        <span
                          className={`text-lg ${
                            item.active ? "text-white" : "text-[#22c55e]"
                          }`}
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </div>
                    );
                  })}
                </div>

                <button
                  className={`btn mt-8 h-11 min-h-0 w-full rounded-full border-none px-4 text-[14px] font-semibold shadow-none ${
                    item.active
                      ? "bg-white text-[#7c3aed] hover:bg-white"
                      : "bg-gradient-to-r from-[#6d28ff] to-[#a020f8] text-white hover:from-[#6d28ff] hover:to-[#a020f8]"
                  }`}
                >
                  {item.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
