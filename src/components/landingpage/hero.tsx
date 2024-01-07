import React from "react";
import "./index.css";
function Hero() {
  return (
    <div className="hero-section">
      <div className="w-4/5 flex flex-col gap-[2rem] items-start justify-start  mx-auto pb-[4rem] pt-[10.25rem]">
        <p className="w-[45rem] text-white font-medium text-5xl">
          Wise Account Review: Is This the Premier Multi-Currency Solution?
        </p>
        <p className="w-[35.75rem] text-[#FFFFFFCC] text-base font-normal">
          In today's interconnected world, one aspect of our lives that has
          remained remarkably stagnant is banking. Banking is typically very
          localised...
        </p>
        <button
          style={{ borderRadius: 50 }}
          className="text-black border-radius-50 py-3 px-8 bg-white "
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default Hero;
