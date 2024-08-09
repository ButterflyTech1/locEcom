import type { NextPage } from "next";
import { Button } from "@mui/material";

export type NewArrivalType = {
  className?: string;
};

const NewArrival: NextPage<NewArrivalType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-5xl text-black font-poppins ${className}`}
    >
      <img
        className="h-[799px] w-[983px] absolute !m-[0] top-[calc(50%_-_399.5px)] left-[-36px] object-cover z-[5]"
        loading="lazy"
        alt=""
        src="/asgaard-sofa-1@2x.png"
      />
      <div className="flex-1 bg-oldlace-100 flex flex-col items-center justify-start py-[217px] pl-[935px] pr-5 box-border gap-[33px] max-w-full mq450:pl-5 mq450:box-border mq750:gap-4 mq750:pl-[233px] mq750:pt-[141px] mq750:pb-[141px] mq750:box-border mq1225:pl-[467px] mq1225:box-border">
        <div className="w-[1440px] h-[639px] relative bg-oldlace-100 hidden max-w-full" />
        <div className="w-[331px] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h3 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq450:text-lgi">
              New Arrivals
            </h3>
          </div>
          <h1 className="m-0 relative text-29xl font-bold font-[inherit] z-[2] mq450:text-10xl mq750:text-19xl">
            Asgaard sofa
          </h1>
        </div>
        <div className="w-[331px] flex flex-row items-start justify-start py-0 px-[38px] box-border max-w-full">
          <Button
            className="h-16 flex-1 z-[1]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "20",
              background: "#fff9e6",
              border: "#000 solid 1px",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#fff9e6" },
              height: 64,
            }}
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
