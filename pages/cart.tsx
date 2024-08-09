import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import GroupComponent16 from "../components/group-component16";
import ProductInfo from "../components/product-info";
import GroupComponent15 from "../components/group-component15";
import GroupComponent3 from "../components/group-component3";
import GroupComponent17 from "../components/group-component17";

const Cart: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <GroupComponent
        rectangleDivBackgroundColor="#fff"
        accountIconBackgroundColor="#fff"
      />
      <GroupComponent16 />
      <section className="self-stretch bg-white flex flex-row items-start justify-start pt-[72px] px-[100px] pb-[63px] box-border gap-[30px] max-w-full text-left text-base text-darkgray font-poppins mq800:gap-[15px] mq800:pt-[47px] mq800:px-[50px] mq800:pb-[41px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap">
        <div className="h-[525px] w-[1440px] relative bg-white hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[55px] max-w-full mq800:min-w-full mq450:gap-[27px]">
          <ProductInfo />
          <div className="w-[792px] flex flex-row items-start justify-start gap-9 max-w-full mq800:flex-wrap mq450:gap-[18px]">
            <img
              className="h-[106px] w-[106px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/group-137@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[37px] px-0 pb-0 box-border min-w-[422px] max-w-full mq800:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-5 mq800:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-[13px]">
                  <div className="relative inline-block min-w-[108px] z-[1]">
                    Asgaard sofa
                  </div>
                </div>
                <div className="w-[140px] flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-5 box-border">
                  <div className="relative inline-block min-w-[112px] z-[1]">
                    Rs. 250,000.00
                  </div>
                </div>
                <div className="rounded-8xs border-darkgray border-[1px] border-solid flex flex-row items-start justify-start py-0.5 px-[13px] z-[1] text-black">
                  <div className="h-8 w-8 relative rounded-8xs border-darkgray border-[1px] border-solid box-border hidden" />
                  <div className="relative inline-block min-w-[6px] z-[1]">
                    1
                  </div>
                </div>
                <div className="w-[189px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-black">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative inline-block min-w-[112px] z-[1]">
                        Rs. 250,000.00
                      </div>
                    </div>
                    <img
                      className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/antdesigndeletefilled.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GroupComponent15 />
      </section>
      <GroupComponent3 />
      <GroupComponent17 />
    </div>
  );
};

export default Cart;
