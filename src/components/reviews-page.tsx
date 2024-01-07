import Image from "next/image";
import React from "react";

interface Review {
  imageSrc: string;
  date: string;
  title: string;
  content: string;
}

const ReviewCard: React.FC<Review> = ({ imageSrc, date, title, content }) => (
  <div className="rounded-2xl w-[25.625rem] border border-solid border-[#25314640] p-3">
    <Image alt="" src={imageSrc} height={280} width={400} />
    <p className="text-[#253146CC] text-base font-light italic my-3">
      {date}
    </p>
    <p className="text-[#253146] font-medium text-xl">
      {title}
    </p>
    <p className="text-[#253146CC] text-base font-normal my-3">
      {content}
    </p>
    <p className="text-[#253146] font-bold text-base underline my-3 cursor-pointer">
      Read More
    </p>
  </div>
);

const ReviewsPage: React.FC = () => {
  const reviews: Review[] = [
    {
      imageSrc: "/review1.png",
      date: "Inkmattic - February 10, 2022",
      title: "M1 Finance vs Webull: Which Finance Platform Is the Best?",
      content: "Stock brokerage firms have been undergoing a quiet revolution...",
    },
    {
      imageSrc: "/review2.png",
      date: "Inkmattic - October 24, 2022",
      title: "Freetrade SIPPs | Everything You Need To Know!",
      content: "There have been a lot of rumours on the internet that the top commission-free brokerage platforms in the UK are planning to offer SIPPs....",
    },
    {
        imageSrc: "/review3.png",
        date: "Inkmattic - May 14, 2022",
        title: "Is the eToro CopyTrader tool too good to be true?",
        content: "If you’ve ever searched the term ‘trading’ on Google or YouTube, you’ll probably have seen eToro’s eye-catching lime-green...",
      },  {
        imageSrc: "/review4.png",
        date: "Inkmattic - February 26, 2022",
        title: "CIRCA5000 Review | Easy Ethical Investing",
        content: "What is CIRCA5000? CIRCA5000 formally Tickr is an investment app that aims to bring the idea of impactful investing to the normal retail...",
      },  {
        imageSrc: "/review5.png",
        date: "Inkmattic - August 1, 2022",
        title: "Trading 212 Review [2022]: The Best Investing Platform Right Now!",
        content: "What is Trading 212? Trading 212 is quickly growing as one of the most used brokerage platforms in the UK...",
      },  {
        imageSrc: "/review6.png",
        date: "Inkmattic - May 5, 2022",
        title: "Shares Review: The Best Social Investing App Will Change Your World",
        content: "Every so often, an app, idea, or website comes along that has the potential to revolutionize an industry. Facebook, for example...",
      },
      {
        imageSrc: "/review1.png",
        date: "Inkmattic - February 10, 2022",
        title: "M1 Finance vs Webull: Which Finance Platform Is the Best?",
        content: "Stock brokerage firms have been undergoing a quiet revolution...",
      },
      {
        imageSrc: "/review2.png",
        date: "Inkmattic - October 24, 2022",
        title: "Freetrade SIPPs | Everything You Need To Know!",
        content: "There have been a lot of rumours on the internet that the top commission-free brokerage platforms in the UK are planning to offer SIPPs....",
      },
      {
          imageSrc: "/review3.png",
          date: "Inkmattic - May 14, 2022",
          title: "Is the eToro CopyTrader tool too good to be true?",
          content: "If you’ve ever searched the term ‘trading’ on Google or YouTube, you’ll probably have seen eToro’s eye-catching lime-green...",
        }
      
  ];

  return (
    <div className="w-4/5 mx-auto flex items-center flex-col mb-20">
      <p className="text-center text-[#253146] text-4xl font-medium">
      Featured Trading
Platform
      </p>

      <div className="my-10 flex flex-wrap gap-[30px] justify-between">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <button
          style={{ borderRadius: 50 }}
          className="text-white border-radius-50 py-3 px-8 bg-[#253146] "
        >
          Read More
        </button>
    </div>
  );
};

export default ReviewsPage;
