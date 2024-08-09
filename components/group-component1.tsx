import type { NextPage } from "next";

export type GroupComponent1Type = {
  className?: string;
  blogImages?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  blogImages,
}) => {
  return (
    <div
      className={`h-[554px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[161px] box-border gap-[33px] min-w-[255px] max-w-full text-left text-xl text-black font-poppins mq450:gap-4 mq750:pb-[105px] mq750:box-border ${className}`}
    >
      <img
        className="self-stretch h-[393px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={blogImages}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-2.5 shrink-0 max-w-full">
          <div className="relative mq450:text-base">
            Going all-in with millennial design
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] text-5xl">
            <h3 className="m-0 relative text-inherit font-medium font-[inherit] mq450:text-lgi">
              Read More
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[58px] pr-[51px] text-base mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-4">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[57px] pr-14">
                <div className="h-0.5 flex-1 relative border-black border-t-[2px] border-solid box-border" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[19px]">
                <div className="flex flex-row items-start justify-start gap-2.5">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-[18px] h-[17.8px] relative"
                      loading="lazy"
                      alt=""
                      src="/group-1.svg"
                    />
                  </div>
                  <div className="relative font-light inline-block min-w-[45px]">
                    5 min
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-2.5">
                  <img
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/uilcalender-1.svg"
                  />
                  <div className="relative font-light inline-block min-w-[106px]">
                    12
                    <sup>th</sup> Oct 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
