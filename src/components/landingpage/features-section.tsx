import Image from "next/image";
import React from "react";
interface FeatureItemProps {
    iconSrc: string;
    text: string;
  }
const FeatureItem = ({ iconSrc, text }: FeatureItemProps) => (
  <div className="w-[10rem] flex flex-col items-center gap-[1.25rem]">
    <div
      style={{ borderRadius: "50%" }}
      className="w-[4.375rem] h-[4.375rem] flex items-center justify-center bg-[#253146]"
    >
      <Image width={30} height={30} src={iconSrc} alt={`Feature icon for ${text}`} />
    </div>
    <p className="text-center text-[#253146] text-xl font-medium">{text}</p>
  </div>
);

function FeaturesSection() {
  const features = [
    { iconSrc: "/feature1Icon.png", text: "Featured Trading Platform" },
    { iconSrc: "/feature2Icon.png", text: "Featured Review" },
    { iconSrc: "/feature3Icon.png", text: "Investment Apps" },
    { iconSrc: "/feature4Icon.png", text: "Best Shares to Buy Now" },
    { iconSrc: "/feature5Icon.png", text: "Best Pension Providers" },
    { iconSrc: "/feature6Icon.png", text: "Best Trading Platforms" },
  ];

  return (
    <div className="w-4/5 mx-auto my-[7rem] flex justify-between">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </div>
  );
}

export default FeaturesSection;
