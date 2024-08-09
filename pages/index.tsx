import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import HeroContent from "../components/hero-content";
import GroupComponent4 from "../components/group-component4";
import GroupComponent5 from "../components/group-component5";
import NewArrival from "../components/new-arrival";
import GroupComponent6 from "../components/group-component6";
import Instagram from "../components/instagram";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <GroupComponent />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[29px] box-border max-w-full">
        <HeroContent />
        <GroupComponent4 />
        <GroupComponent5 />
      </section>
      <NewArrival />
      <GroupComponent6 />
      <Instagram />
    </div>
  );
};

export default Home;
