import type { NextPage } from "next";

export type GroupComponent14Type = {
  className?: string;
};

const GroupComponent14: NextPage<GroupComponent14Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-[61px] px-[603px] pb-[97px] relative gap-px text-left text-29xl text-black font-poppins mq800:pl-[301px] mq800:pr-[301px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/checkout-spacing@2x.png"
      />
      <div className="self-stretch h-[133px] relative">
        <h1 className="m-0 absolute top-[61px] left-[0px] text-inherit font-medium font-[inherit] z-[1] mq800:text-19xl mq450:text-10xl">
          Checkout
        </h1>
        <img
          className="absolute top-[0px] left-[78px] w-[77px] h-[77px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/meubel-house-logos05@2x.png"
        />
      </div>
      <div className="flex flex-row items-start justify-end py-0 px-5 text-base">
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="relative font-medium inline-block min-w-[48px] z-[1]">
            Home
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
          <div className="relative font-light inline-block min-w-[77px] z-[1]">
            Checkout
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent14;
