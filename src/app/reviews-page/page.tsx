"use client";
import Image from "next/image";
import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useRouter } from "next/navigation";

interface Review {
  imageSrc: string;
  date: string;
  title: string;
  content: string;
  onClick?: () => void;


}

const ReviewCard: React.FC<Review> = ({ imageSrc, date, title, content ,onClick}) => (
  <div className="rounded-2xl md:w-[20.625rem] border border-solid border-[#25314640] p-3">
    <Image alt="" src={imageSrc} height={280} width={400} />
    <p className="text-[#253146CC] text-base font-light italic my-3">{date}</p>
    <p className="text-[#253146] font-medium text-xl">{title}</p>
    <p className="text-[#253146CC] text-base font-normal my-3">{content}</p>
    <p className="text-[#253146] font-bold text-base underline my-3 cursor-pointer" onClick={onClick}>
      Read More
    </p>
  </div>
);
const totalPages = 3; // Replace with the actual total number of pages
const currentPage = 2; // Replace with the actual current page
const renderPageNumber = (pageNumber:any) => (
  <span
    key={pageNumber}
    className={`w-[40px] h-[40px] border border-[#25314640] font-medium text-base rounded-full flex items-center justify-center text-[#25314640] ${currentPage === pageNumber ? 'border-[#253146] text-[#253146]' : ''}`}
  >
    {pageNumber}
  </span>
);
const ReviewsPage: React.FC = () => {
  const router = useRouter();
  const reviews: Review[] = [
    {
      imageSrc: "/review1.png",
      date: "Inkmattic - February 10, 2022",
      title: "M1 Finance vs Webull: Which Finance Platform Is the Best?",
      content:
        "Stock brokerage firms have been undergoing a quiet revolution...",
    },
    {
      imageSrc: "/review2.png",
      date: "Inkmattic - October 24, 2022",
      title: "Freetrade SIPPs | Everything You Need To Know!",
      content:
        "There have been a lot of rumours on the internet that the top commission-free brokerage platforms in the UK are planning to offer SIPPs....",
    },
    {
      imageSrc: "/review3.png",
      date: "Inkmattic - May 14, 2022",
      title: "Is the eToro CopyTrader tool too good to be true?",
      content:
        "If you’ve ever searched the term ‘trading’ on Google or YouTube, you’ll probably have seen eToro’s eye-catching lime-green...",
    },
    {
      imageSrc: "/review4.png",
      date: "Inkmattic - February 26, 2022",
      title: "CIRCA5000 Review | Easy Ethical Investing",
      content:
        "What is CIRCA5000? CIRCA5000 formally Tickr is an investment app that aims to bring the idea of impactful investing to the normal retail...",
    },
    {
      imageSrc: "/review5.png",
      date: "Inkmattic - August 1, 2022",
      title:
        "Trading 212 Review [2022]: The Best Investing Platform Right Now!",
      content:
        "What is Trading 212? Trading 212 is quickly growing as one of the most used brokerage platforms in the UK...",
    },
    {
      imageSrc: "/review6.png",
      date: "Inkmattic - May 5, 2022",
      title:
        "Shares Review: The Best Social Investing App Will Change Your World",
      content:
        "Every so often, an app, idea, or website comes along that has the potential to revolutionize an industry. Facebook, for example...",
    },
    {
      imageSrc: "/review1.png",
      date: "Inkmattic - February 10, 2022",
      title: "M1 Finance vs Webull: Which Finance Platform Is the Best?",
      content:
        "Stock brokerage firms have been undergoing a quiet revolution...",
    },
    {
      imageSrc: "/review2.png",
      date: "Inkmattic - October 24, 2022",
      title: "Freetrade SIPPs | Everything You Need To Know!",
      content:
        "There have been a lot of rumours on the internet that the top commission-free brokerage platforms in the UK are planning to offer SIPPs....",
    },
    {
      imageSrc: "/review3.png",
      date: "Inkmattic - May 14, 2022",
      title: "Is the eToro CopyTrader tool too good to be true?",
      content:
        "If you’ve ever searched the term ‘trading’ on Google or YouTube, you’ll probably have seen eToro’s eye-catching lime-green...",
    },
  ];
  const data = {
    text: "Latest",
    icon: (
      <img
        src="/arrow-down.png"
        width={16}
        height={16}
        alt="arrown-down"
        className="text-sm mt-1"
      />
    ),
  };

  return (
    <div className="w-11/12 mx-auto flex items-center flex-col mb-20">
      <p className="text-center text-[#253146] text-4xl font-medium mt-14 mb-4 md:mb-0 ">
        Featured Trading Platform
      </p>
      <div className="flex justify-between items-center w-full">
        <p className="font-normal text-sm text-[#253146BF]">Total 35 Reviews</p>{" "}
        <span className="flex items-center gap-[10px] text-[#253146BF] text-sm font-normal">
          Sort By:
          <Dropdown menu={{}} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className="text-[#253146] text-sm">
                {data.text}
                {data.icon}
              </Space>
            </a>
          </Dropdown>
        </span>
      </div>

      <div className="w-full my-10 flex flex-wrap gap-[30px] justify-between">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} onClick={()=>{router.push('/review-detail-page')}} />
          ))}
      </div>
      <div className="flex w-full items-center justify-center gap-[1rem]">
      <span className="w-[40px] h-[40px] border border-[#25314640] font-medium text-base rounded-full flex items-center justify-center text-[#25314640]">
        <Image src="/arrow-left.png" height={20} width={20} alt="" />
      </span>
      {Array.from({ length: totalPages }, (_, index) => renderPageNumber(index + 1))}
      <span className="w-[40px] h-[40px] border border-[#25314640] font-medium text-base rounded-full flex items-center justify-center text-[#25314640]">
        <Image src="/arrow-right.png" height={20} width={20} alt="" />
      </span>
    </div>
    </div>
  );
};

export default ReviewsPage;
