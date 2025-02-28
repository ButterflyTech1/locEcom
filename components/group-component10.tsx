import type { NextPage } from "next";

export type GroupComponent10Type = {
  className?: string;
};

const GroupComponent10: NextPage<GroupComponent10Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[744px] bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[65px] box-border gap-[47px] max-w-full text-left text-5xl text-darkgray font-poppins mq750:h-auto mq750:gap-[23px] mq1050:pb-[42px] mq1050:box-border mq450:pb-[27px] mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[744px] relative bg-white hidden" />
      <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border shrink-0" />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[18px] pl-5 pr-[21px] box-border max-w-full shrink-0">
        <div className="w-[1239px] flex flex-col items-end justify-start gap-[36.5px] max-w-full mq750:gap-[18px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[22px] pr-5 box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[53px] max-w-full mq750:flex-wrap mq750:gap-[26px]">
              <h3 className="m-0 relative text-inherit font-normal font-[inherit] text-black z-[1] mq450:text-lgi">
                Description
              </h3>
              <h3 className="m-0 relative text-inherit font-normal font-[inherit] z-[1] mq450:text-lgi">
                Additional Information
              </h3>
              <h3 className="m-0 relative text-inherit font-normal font-[inherit] z-[1] mq450:text-lgi">
                Reviews [5]
              </h3>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full text-justify text-base">
            <div className="w-[1026px] flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="self-stretch relative z-[1]">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </div>
              <div className="self-stretch relative z-[1]">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[29px] max-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[393px] min-h-[348px] z-[1] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="/group-107@2x.png"
            />
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[393px] min-h-[348px] z-[1] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="/group-106@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border shrink-0" />
    </section>
  );
};

export default GroupComponent10;
