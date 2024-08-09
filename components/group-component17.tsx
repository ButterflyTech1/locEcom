import type { NextPage } from "next";

export type GroupComponent17Type = {
  className?: string;
};

const GroupComponent17: NextPage<GroupComponent17Type> = ({
  className = "",
}) => {
  return (
    <footer
      className={`self-stretch bg-white flex flex-col items-start justify-start pt-[98px] px-[100px] pb-[38px] box-border gap-12 max-w-full text-left text-base text-darkgray font-poppins mq800:gap-6 mq800:pt-16 mq800:px-[50px] mq800:pb-[25px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[555px] relative bg-white hidden max-w-full" />
      <div className="w-[1135px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1150:flex-wrap">
          <div className="w-[285px] flex flex-col items-start justify-start pt-[108px] px-0 pb-0 box-border">
            <div className="relative z-[1]">
              <p className="m-0">
                400 University Drive Suite 200 Coral Gables,
              </p>
              <p className="m-0">FL 33134 USA</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2 gap-[55px]">
            <div className="relative font-medium inline-block min-w-[40px] z-[1]">
              Links
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0 text-black">
              <div className="flex flex-col items-start justify-start gap-[45.7px]">
                <div className="relative font-medium inline-block min-w-[48px] z-[1]">
                  Home
                </div>
                <div className="relative font-medium inline-block min-w-[42px] z-[1]">
                  Shop
                </div>
                <div className="relative font-medium inline-block min-w-[49px] z-[1]">
                  About
                </div>
                <div className="relative font-medium inline-block min-w-[66px] z-[1]">
                  Contact
                </div>
              </div>
            </div>
          </div>
          <div className="w-[498px] flex flex-col items-start justify-start gap-11 max-w-full text-black mq800:gap-[22px]">
            <div className="w-[298px] flex flex-row items-start justify-between pt-0 px-0 pb-[9px] box-border gap-5 text-darkgray">
              <div className="relative font-medium inline-block min-w-[37px] z-[1]">
                Help
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative font-medium inline-block min-w-[86px] z-[1]">
                  Newsletter
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[72px] mq800:flex-wrap mq800:gap-9">
              <div className="relative font-medium z-[1]">Payment Options</div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[11px] min-w-[186px] text-sm text-darkgray">
                <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                  <div className="relative z-[1]">Enter Your Email Address</div>
                  <div className="self-stretch h-0.5 relative border-black border-t-[1px] border-solid box-border z-[1]" />
                </div>
                <div className="w-[75px] flex flex-col items-start justify-start gap-[3px]">
                  <input
                    className="w-full [border:none] [outline:none] font-medium font-poppins text-sm bg-[transparent] self-stretch h-[21px] relative text-black text-left inline-block min-w-[45px] p-0 z-[1]"
                    placeholder="SUBSCRIBE"
                    type="text"
                  />
                  <div className="w-[77px] h-0.5 relative border-black border-t-[1px] border-solid box-border z-[1]" />
                </div>
              </div>
            </div>
            <div className="relative font-medium inline-block min-w-[62px] z-[1]">
              Returns
            </div>
            <div className="relative font-medium inline-block min-w-[124px] z-[1]">
              Privacy Policies
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[34px] text-black mq800:gap-[17px]">
        <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border z-[1]" />
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <div className="relative z-[1]">
            2022 Meubel House. All rights reverved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent17;
