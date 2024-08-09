import type { NextPage } from "next";
import { Button } from "@mui/material";
import GroupComponent2 from "./group-component2";

export type InstagramType = {
  className?: string;
};

const Instagram: NextPage<InstagramType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-41xl text-black font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start py-[124px] px-5 box-border relative gap-[18px] max-w-full z-[7] mq450:pt-[81px] mq450:pb-[81px] mq450:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/group-43@2x.png"
        />
        <div className="flex flex-col items-start justify-start max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-[inherit] z-[1] mq450:text-17xl mq750:text-29xl">
            Our Instagram
          </h1>
          <div className="flex flex-row items-start justify-start py-0 pl-[78px] pr-[79px] text-xl mq450:pl-[39px] mq450:pr-[39px] mq450:box-border">
            <div className="relative z-[1] mq450:text-base">
              Follow our store on Instagram
            </div>
          </div>
        </div>
        <div className="w-[454px] flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
          <Button
            className="h-16 w-[255px] shadow-[0px_20px_20px_rgba(0,_0,_0,_0.1)] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "20",
              background: "#faf5f5",
              borderRadius: "50px",
              "&:hover": { background: "#faf5f5" },
              width: 255,
              height: 64,
            }}
          >
            Follow Us
          </Button>
        </div>
      </div>
      <GroupComponent2 />
    </section>
  );
};

export default Instagram;
