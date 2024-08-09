import type { NextPage } from "next";

export type GroupComponent8Type = {
  className?: string;
};

const GroupComponent8: NextPage<GroupComponent8Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[31px] px-[99px] pb-8 box-border gap-[21px] max-w-full text-left text-base text-darkgray font-poppins mq750:flex-wrap mq750:pl-[49px] mq750:pr-[49px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="h-[100px] w-[1440px] relative bg-white hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[7px] pb-0 pl-0 pr-[3px]">
        <div className="flex flex-row items-start justify-start gap-3.5">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[48px] z-[1]">
            Home
          </a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[41px] z-[1]">
          Shop
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[9px] pb-0 pl-0 pr-1">
        <img
          className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/dashiconsarrowdownalt2@2x.png"
        />
      </div>
      <div className="h-[37px] w-[142px] flex flex-row items-start justify-between gap-5 text-black">
        <div className="h-[39px] w-0.5 relative border-darkgray border-r-[2px] border-solid box-border z-[1]" />
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <div className="relative inline-block min-w-[108px] z-[1]">
            Asgaard sofa
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent8;
