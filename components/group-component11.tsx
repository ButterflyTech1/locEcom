import type { NextPage } from "next";
import ProductCardData from "./product-card-data";

export type GroupComponent11Type = {
  className?: string;
};

const GroupComponent11: NextPage<GroupComponent11Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-start pt-[55px] px-5 pb-[101px] box-border gap-[93px] max-w-full text-left text-17xl text-black font-poppins mq750:gap-[46px] mq1050:pt-9 mq1050:pb-[66px] mq1050:box-border mq450:gap-[23px] mq450:pt-[23px] mq450:pb-[43px] mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[777px] relative bg-white hidden max-w-full" />
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[26px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[23px]">
          <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq750:text-10xl mq450:text-3xl">
            Related Products
          </h1>
        </div>
        <div className="flex flex-row items-start justify-center gap-[30.7px] z-[1] mq750:gap-[15px] mq1225:flex-wrap">
          <ProductCardData
            maskGroup="/mask-group@2x.png"
            trentonModularSofa3="Trenton modular sofa_3"
            propWidth="unset"
            propDisplay="unset"
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
      </div>
      <div className="w-[1240px] flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full text-xl">
        <div className="w-[115px] flex flex-col items-start justify-start gap-[19px]">
          <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-1.5">
            <div className="relative font-medium inline-block min-w-[104px] z-[1] mq450:text-base">
              View More
            </div>
          </div>
          <div className="self-stretch h-0.5 relative border-black border-t-[2px] border-solid box-border z-[1]" />
        </div>
      </div>
    </section>
  );
};

export default GroupComponent11;
