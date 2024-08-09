import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import GroupComponent8 from "../components/group-component8";
import GroupComponent9 from "../components/group-component9";
import GroupComponent10 from "../components/group-component10";
import GroupComponent11 from "../components/group-component11";
import GroupComponent2 from "../components/group-component2";

const SingleProduct: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent3 />
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start max-w-full">
          <GroupComponent8 />
          <GroupComponent9 />
        </section>
        <GroupComponent10 />
        <GroupComponent11 />
      </main>
      <GroupComponent2 propMarginTop="unset" propBackgroundColor="#fff" />
    </div>
  );
};

export default SingleProduct;
