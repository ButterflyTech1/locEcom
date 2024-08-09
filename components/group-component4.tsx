import type { NextPage } from "next";

export type GroupComponent4Type = {
  className?: string;
};

const GroupComponent4: NextPage<GroupComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-snow-100 flex flex-row flex-wrap items-start justify-start pt-[51px] px-[100px] pb-[59px] box-border gap-[30px] shrink-0 max-w-full z-[3] mt-[-4.5px] text-left text-17xl text-black font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[15px] mq750:pl-[50px] mq750:pr-[50px] mq750:pb-[38px] mq750:box-border ${className}`}
    >
      <div className="h-[672px] w-[1440px] relative bg-snow-100 hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-end py-[51px] pl-[105px] pr-5 box-border relative gap-[23px] min-w-[393px] min-h-[562px] max-w-full z-[1] mq450:pl-5 mq450:box-border mq750:min-w-full">
        <div className="relative font-medium z-[2] mq450:text-3xl mq750:text-10xl">
          Side table
        </div>
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group1@2x.png"
        />
        <div className="w-[127px] flex flex-row items-start justify-start py-0 px-px box-border text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[13px]">
            <div className="relative font-medium inline-block min-w-[125px] mq450:text-lgi">
              View More
            </div>
            <div className="self-stretch h-0.5 relative border-black border-t-[2px] border-solid box-border" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-end py-[51px] pl-[106px] pr-5 box-border relative gap-[23px] min-w-[393px] min-h-[562px] max-w-full z-[1] mq450:pl-5 mq450:box-border mq750:min-w-full">
        <div className="relative font-medium mq450:text-3xl mq750:text-10xl">
          Side table
        </div>
        <div className="w-[125px] flex flex-col items-start justify-start gap-[13px] text-5xl">
          <div className="relative font-medium inline-block min-w-[125px] mq450:text-lgi">
            View More
          </div>
          <div className="self-stretch h-0.5 relative border-black border-t-[2px] border-solid box-border" />
        </div>
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group-16@2x.png"
        />
      </div>
    </div>
  );
};

export default GroupComponent4;
