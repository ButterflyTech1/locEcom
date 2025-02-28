import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <header className="flex-1 bg-white flex flex-row items-start justify-center py-9 pl-[425px] pr-5 box-border gap-[45px] max-w-full mq750:gap-[22px] mq750:pl-[106px] mq750:box-border mq450:pl-5 mq450:box-border mq1225:pl-[212px] mq1225:box-border">
        <div className="h-[100px] w-[1440px] relative bg-white hidden max-w-full" />
        <nav className="m-0 w-[543px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full mq750:hidden">
          <nav className="m-0 w-[430px] h-6 relative max-w-full text-left text-base text-black font-poppins">
            <a className="[text-decoration:none] absolute top-[0px] left-[0px] font-medium text-[inherit] inline-block min-w-[48px] z-[1]">
              Home
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[123px] font-medium text-[inherit] inline-block min-w-[42px] z-[1]">
              Shop
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[240px] font-medium text-[inherit] inline-block min-w-[49px] z-[1]">
              About
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[364px] font-medium text-[inherit] inline-block min-w-[66px] z-[1]">
              Contact
            </a>
          </nav>
        </nav>
        <img
          className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
          loading="lazy"
          alt=""
          src="/mdiaccountalertoutline.svg"
        />
        <div className="w-[174px] flex flex-row items-start justify-between gap-5">
          <img
            className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
            loading="lazy"
            alt=""
            src="/akariconssearch.svg"
          />
          <img
            className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
            loading="lazy"
            alt=""
            src="/akariconsheart.svg"
          />
          <img
            className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
            loading="lazy"
            alt=""
            src="/antdesignshoppingcartoutlined.svg"
          />
        </div>
      </header>
    </div>
  );
};

export default FrameComponent3;
