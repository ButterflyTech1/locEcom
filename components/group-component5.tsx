import type { NextPage } from "next";
import ProductCardData from "./product-card-data";

export type GroupComponent5Type = {
  className?: string;
};

const GroupComponent5: NextPage<GroupComponent5Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-[55px] px-5 pb-[49px] box-border gap-[65px] shrink-0 max-w-full z-[4] mt-[-4.5px] text-left text-17xl text-black font-poppins mq450:gap-4 mq450:pb-[21px] mq450:box-border mq750:gap-8 mq1050:pb-8 mq1050:box-border ${className}`}
    >
      <div className="w-[1440px] h-[777px] relative bg-white hidden max-w-full" />
      <div className="w-[1240px] flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
        <div className="w-[773px] flex flex-col items-start justify-start gap-[13px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq450:text-3xl mq750:text-10xl">
              Top Picks For You
            </h1>
          </div>
          <div className="relative text-base font-medium text-darkgray z-[1]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </div>
        </div>
      </div>
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[69px] max-w-full text-base mq450:gap-[17px] mq750:gap-[34px]">
        <div className="flex flex-row items-start justify-center gap-[30.7px] mq750:gap-[15px] mq1225:flex-wrap">
          <ProductCardData
            maskGroup="/mask-group@2x.png"
            trentonModularSofa3="Trenton modular sofa_3"
          />
          <ProductCardData
            maskGroup="/mask-group-1@2x.png"
            trentonModularSofa3="Granite dining table with dining chair"
            propWidth="212px"
            propDisplay="inline-block"
          />
          <ProductCardData
            maskGroup="/mask-group-2@2x.png"
            trentonModularSofa3="Outdoor bar table and stool"
            propWidth="212px"
            propDisplay="inline-block"
          />
          <ProductCardData
            maskGroup="/mask-group-3@2x.png"
            trentonModularSofa3="Plain console with teak mirror"
            propWidth="199px"
            propDisplay="inline-block"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] text-xl">
          <div className="w-[115px] flex flex-col items-start justify-start gap-[19px]">
            <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-1.5">
              <div className="relative font-medium inline-block min-w-[104px] z-[1] mq450:text-base">
                View More
              </div>
            </div>
            <div className="self-stretch h-0.5 relative border-black border-t-[2px] border-solid box-border z-[1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent5;
