import Image from "next/image";
import React from "react";

interface FooterItem {
  title: string;
  items: string[];
}

interface FooterProps {
  columns: FooterItem[];
}

const FooterColumn: React.FC<FooterItem> = ({ title, items }) => (
  <ul className="flex flex-col gap-[1rem]">
    <li className="font-bold text-sm  md:text-lg">{title}</li>
    {items.map((item, index) => (
      <li key={index} className=" cursor-pointer text-sm md:text-base font-normal text-[#FFFFFFBF]">
        {item}
      </li>
    ))}
  </ul>
);

const Footer: React.FC = () => {
  const footerData: FooterProps = {
    columns: [
      {
        title: "Top Investing Platforms",
        items: ["Freetrade", "Trading212", "Freedom24", "Hargreves Lansdown"],
      },
      {
        title: "Top Robo Platforms",
        items: ["InvestEngine", "Plum", "Circa5000", "Commodities"],
      },
      {
        title: "Top Bank Accounts",
        items: ["Starling", "Chase", "Circa5000", "Commodities"],
      },
      {
        title: "Top Crypto Platforms",
        items: ["Coinsmart", "BitPanda", "Wirex", "eToro"],
      },
    ],
  };

  return (
    <div className="bg-[#151515]">
      <div className="w-5/5 p-3 md:p-0 md:w-4/5 mx-auto text-white">
        <div className="py-20 flex gap-[40px] md:gap-[0px] justify-between flex-wrap">
          {footerData.columns.map((column, index) => (
            <FooterColumn key={index} {...column} />
          ))}
        </div>
        <p className="font-normal text-base">
          Inkmattic provides you with independent reviews and comparison
          services to help you on your investing journey. Our website is 100%
          free for you to use and we may receive compensation from brands
          featured on our site, however, compensation received will have no
          impact on our editorial, guides and reviews.
        </p>
        <p className="text-base text-[#FFFFFFCC] font-light py-6">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p className="text-base text-[#FFFFFFCC] font-light pb-6">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p className="text-base text-[#FFFFFFCC] font-light pb-14  border-b border-[#FFFFFF33]">
          Information provided on this website is for guidance only and should
          not be deemed as financial advice, with all investments Capital At
          Risk.
        </p>
        <div className="py-4 flex  items-center justify-between">
          <p className="text-base text-[#FFFFFFCC] font-light ">
            © Inkmattic 2023
          </p>{" "}
          <span className="flex gap-[1.25rem]">
            {[1, 2, 3, 4, 5].map((index) => (
              <Image className="cursor-pointer" key={index} src={`/footerIcon${index}.png`} height={20} width={20} alt="" />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
