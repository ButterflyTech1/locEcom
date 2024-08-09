import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[47px] box-border max-w-full text-left text-29xl text-black font-poppins mq450:pb-[31px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start pt-[61px] px-5 pb-[97px] box-border relative gap-px max-w-full">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/checkout-spacing@2x.png"
        />
        <div className="h-[60px] flex flex-row items-start justify-start py-0 pl-6 pr-[23px] box-border">
          <img
            className="h-[77px] w-[77px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/meubel-house-logos05@2x.png"
          />
        </div>
        <h1 className="m-0 relative text-inherit font-medium font-[inherit] inline-block min-w-[124px] z-[1] mq800:text-19xl mq450:text-10xl">
          Shop
        </h1>
        <div className="w-[124px] flex flex-row items-start justify-start py-0 pl-0.5 pr-px box-border text-base">
          <div className="flex-1 flex flex-row items-start justify-start gap-1.5">
            <div className="flex-1 relative font-medium inline-block min-w-[48px] z-[1]">
              Home
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
                alt=""
                src="/dashiconsarrowdownalt2@2x.png"
              />
            </div>
            <div className="flex-1 relative font-light inline-block min-w-[41px] z-[1]">
              Shop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
