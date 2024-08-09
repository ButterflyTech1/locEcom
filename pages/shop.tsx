import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import FrameComponent1 from "../components/frame-component1";
import GroupComponent7 from "../components/group-component7";
import ProductGrid from "../components/product-grid";
import ProductRow from "../components/product-row";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent3 from "../components/group-component3";
import GroupComponent2 from "../components/group-component2";

const Shop: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border leading-[normal] tracking-[normal]">
      <GroupComponent
        rectangleDivBackgroundColor="#fff"
        accountIconBackgroundColor="#fff"
      />
      <FrameComponent1 />
      <div className="self-stretch h-[777px] relative bg-white hidden" />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[117px] box-border gap-4 max-w-full mq450:pb-8 mq450:box-border mq1150:pb-[49px] mq1150:box-border mq1350:pb-[76px] mq1350:box-border">
        <GroupComponent7 />
        <ProductGrid />
        <ProductRow />
      </section>
      <FrameComponent2 />
      <GroupComponent3 />
      <GroupComponent2 propMarginTop="unset" propBackgroundColor="#fff" />
    </div>
  );
};

export default Shop;
