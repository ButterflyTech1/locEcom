import type { NextPage } from "next";
import ProductCardData from "./product-card-data";

export type ProductGridType = {
  className?: string;
};

const ProductGrid: NextPage<ProductGridType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[30.7px] max-w-full z-[1] mq800:gap-[15px] mq1350:flex-wrap">
        <ProductCardData
          maskGroup="/mask-group@2x.png"
          trentonModularSofa3="Trenton modular sofa_3"
          propWidth="unset"
          propDisplay="unset"
        />
        <ProductCardData
          maskGroup="/mask-group-1@2x.png"
          trentonModularSofa3="Granite dining table with dining chair"
          propWidth="212px"
          propDisplay="inline-block"
        />
        <ProductCardData
          maskGroup="/mask-group-2@2x.png"
          trentonModularSofa3="Outdoor bar table and stool"
          propWidth="212px"
          propDisplay="inline-block"
        />
        <ProductCardData
          maskGroup="/mask-group-3@2x.png"
          trentonModularSofa3="Plain console with teak mirror"
          propWidth="199px"
          propDisplay="inline-block"
        />
      </div>
    </div>
  );
};

export default ProductGrid;
