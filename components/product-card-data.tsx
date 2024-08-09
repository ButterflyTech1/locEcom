import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ProductCardDataType = {
  className?: string;
  maskGroup?: string;
  trentonModularSofa3?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const ProductCardData: NextPage<ProductCardDataType> = ({
  className = "",
  maskGroup,
  trentonModularSofa3,
  propWidth,
  propDisplay,
}) => {
  const trentonModularSofa3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[12.5px] text-left text-base text-black font-poppins ${className}`}
    >
      <img
        className="w-[287px] h-[287px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className="relative z-[1]" style={trentonModularSofa3Style}>
        {trentonModularSofa3}
      </div>
      <div className="relative text-5xl font-medium z-[1] mq450:text-lgi">
        Rs. 25,000.00
      </div>
    </div>
  );
};

export default ProductCardData;
