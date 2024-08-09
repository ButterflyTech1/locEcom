import type { NextPage } from "next";
import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import GroupComponent1 from "./group-component1";

export type GroupComponent6Type = {
  className?: string;
};

const GroupComponent6: NextPage<GroupComponent6Type> = ({ className = "" }) => {
  const [blogCardContentValue, setBlogCardContentValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section
        className={`self-stretch flex flex-col items-center justify-start pt-[55px] px-5 pb-[52px] box-border gap-[65px] max-w-full z-[6] text-left text-17xl text-black font-poppins mq450:gap-4 mq750:gap-8 mq750:pt-[23px] mq750:pb-[22px] mq750:box-border mq1050:pt-9 mq1050:pb-[34px] mq1050:box-border ${className}`}
      >
        <div className="w-[1440px] h-[944px] relative bg-white hidden max-w-full" />
        <div className="w-[1240px] flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
          <div className="w-[479px] flex flex-col items-start justify-start gap-[13px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
              <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq450:text-3xl mq750:text-10xl">
                Our Blogs
              </h1>
            </div>
            <div className="relative text-base font-medium text-darkgray z-[1]">
              Find a bright ideal to suit your taste with our great selection
            </div>
          </div>
        </div>
        <div className="w-[1240px] flex flex-col items-start justify-start gap-[75px] max-w-full text-xl mq450:gap-[19px] mq750:gap-[37px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[31px] max-w-full z-[1] mq750:gap-[15px] mq1050:flex-wrap">
            <div className="h-[555px] w-[393px] flex flex-col items-start justify-start pt-0 px-0 pb-[162px] box-border gap-[33px] min-w-[393px] max-w-full mq450:gap-4 mq750:pb-[105px] mq750:box-border mq750:min-w-full mq1050:flex-1">
              <img
                className="self-stretch h-[393px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-13@2x.png"
              />
              <div className="self-stretch h-[133px] shrink-0">
                <DatePicker
                  value={blogCardContentValue}
                  onChange={(newValue: any) => {
                    setBlogCardContentValue(newValue);
                  }}
                  sx={{
                    fieldset: {
                      borderColor: "transparent",
                      borderTopWidth: 0,
                      borderRightWidth: 0,
                      borderBottomWidth: 0,
                      borderLeftWidth: 0,
                    },
                    "&:hover": {
                      fieldset: { borderColor: "transparent" },
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                    },
                    "& input::placeholder": { textColor: "#000", fontSize: 24 },
                    input: {
                      color: "#000",
                      fontSize: 24,
                      textAlign: "left",
                      fontWeight: "500",
                    },
                    "& .MuiInputBase-root": {
                      height: 133,
                      gap: "86px",
                      flexDirection: { flexDirection: "row" },
                    },
                  }}
                  slotProps={{
                    textField: {
                      size: "medium",
                      fullWidth: true,
                      required: false,
                      autoFocus: false,
                      error: false,
                      helperText: "5 min",
                      placeholder: "Read More",
                    },
                    openPickerIcon: {
                      component: () => (
                        <img width="18px" height="17.8px" src="/group.svg" />
                      ),
                    },
                  }}
                  label="Going all-in with millennial design"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[30px] min-w-[530px] max-w-full mq750:flex-wrap mq750:min-w-full">
              <GroupComponent1 blogImages="/rectangle-14@2x.png" />
              <GroupComponent1 blogImages="/rectangle-15@2x.png" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="w-[126px] flex flex-col items-start justify-start gap-[19px]">
              <div className="relative font-medium inline-block min-w-[126px] z-[1] mq450:text-base">
                View All Post
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-[3px]">
                <div className="h-0.5 flex-1 relative border-black border-t-[2px] border-solid box-border z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default GroupComponent6;
