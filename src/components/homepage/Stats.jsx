import React from "react";

const statsData = [
  {
    id: 1,
    value: "50K+",
    label: "Active Users",
  },
  {
    id: 2,
    value: "200+",
    label: "Premium Tools",
  },
  {
    id: 3,
    value: "4.9",
    label: "Rating",
  },
];

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#5b2df5] to-[#b11cff]">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-6 py-8 text-center text-white md:grid-cols-3 md:gap-0">
        {statsData.map((stat, ind) => (
          <div
            key={stat.id}
            className={`space-y-1 ${ind !== statsData.length - 1 ? "md:border-r md:border-white/20" : ""}`}
          >
            <h3 className="text-[32px] font-extrabold leading-none sm:text-[36px] md:text-[40px]">
              {stat.value}
            </h3>
            <p className="text-[13px] text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
