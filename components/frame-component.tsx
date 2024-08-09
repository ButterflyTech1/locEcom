import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
  maskGroup?: string;
  kentCoffeeTable?: string;
  rs22500000?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  maskGroup,
  kentCoffeeTable,
  rs22500000,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-3.5 text-left text-base text-black font-poppins ${className}`}
    >
      <img
        className="w-[287px] h-[287px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className="w-[212px] flex flex-col items-start justify-start gap-[11px]">
        <div className="self-stretch relative z-[1]">{kentCoffeeTable}</div>
        <div className="relative text-5xl font-medium z-[1] mq450:text-lgi">
          {rs22500000}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
