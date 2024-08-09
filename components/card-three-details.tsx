import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CardThreeDetailsType = {
  className?: string;
  maskGroup?: string;
  graniteSquareSideTable?: string;
  rs25880000?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const CardThreeDetails: NextPage<CardThreeDetailsType> = ({
  className = "",
  propFlex,
  propAlignSelf,
  maskGroup,
  propWidth,
  graniteSquareSideTable,
  propAlignSelf1,
  rs25880000,
}) => {
  const cardThreeDetailsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const itemDetailsThreeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const graniteSquareSideStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-3.5 text-left text-base text-black font-poppins ${className}`}
      style={cardThreeDetailsStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3.5 pr-0">
        <img
          className="h-[287px] w-[287px] relative object-cover"
          loading="lazy"
          alt=""
          src={maskGroup}
        />
      </div>
      <div
        className="flex flex-col items-start justify-start gap-[11px]"
        style={itemDetailsThreeStyle}
      >
        <div className="relative" style={graniteSquareSideStyle}>
          {graniteSquareSideTable}
        </div>
        <div className="relative text-5xl font-medium mq450:text-lgi">
          {rs25880000}
        </div>
      </div>
    </div>
  );
};

export default CardThreeDetails;
