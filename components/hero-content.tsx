import type { NextPage } from "next";

export type HeroContentType = {
  className?: string;
};

const HeroContent: NextPage<HeroContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-45xl text-black font-poppins ${className}`}
    >
      <img
        className="h-[1000px] w-[853px] absolute !m-[0] top-[-100px] right-[0px] object-contain z-[2]"
        alt=""
        src="/rocket-single-seater-1@2x.png"
      />
      <div className="flex-1 bg-moccasin flex flex-col items-start justify-start pt-[328px] pb-[294px] pl-[202px] pr-5 box-border gap-[35px] shrink-0 max-w-full mq450:pl-5 mq450:pt-[138px] mq450:pb-[124px] mq450:box-border mq750:gap-[17px] mq750:pl-[101px] mq750:box-border mq1050:pt-[213px] mq1050:pb-[191px] mq1050:box-border">
        <div className="w-[1440px] h-[900px] relative bg-moccasin hidden max-w-full" />
        <div className="w-[440px] relative font-medium inline-block max-w-full z-[3] mq450:text-19xl mq750:text-32xl">
          Rocket single seater
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-1 text-5xl">
          <div className="w-[121px] flex flex-col items-start justify-start gap-[13px]">
            <div className="relative font-medium inline-block min-w-[121px] z-[1] mq450:text-lgi">
              Shop Now
            </div>
            <div className="self-stretch h-0.5 relative border-black border-t-[2px] border-solid box-border z-[1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
