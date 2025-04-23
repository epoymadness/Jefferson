import { useRef } from "react";
import Projects from "./Projects";
import ProjectIcon from "../icons/ProjectIcon";
import Contact from "../icons/Contact";
import Info from "../icons/Info";
import SocialMedia from "./SocialMedia";
import Outro from "./Outro";
import TechOne from "../icons/TechOne";
import TechTwo from "../icons/TechTwo";
import TechThree from "../icons/TechThree";

export default function Homepage() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const socialRef = useRef<HTMLDivElement | null>(null);

  const projectClick = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const aboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const socialMediaClick = () => {
    socialRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="relative h-screen flex flex-col p-5 items-center justify-start"
        ref={aboutRef}
      >
        {/*navigationbar*/}
        <div className="fixed w-2/4 h-10 flex flex-row justify-evenly items-center rounded bg-red-600/50 backdrop-blur-sm">
          <div onClick={projectClick}>
            <ProjectIcon width="28px" color="white" />
          </div>
          <div onClick={socialMediaClick}>
            <Contact width="25px" color="white" />
          </div>
          <div onClick={aboutClick}>
            <Info width="10px" color="white" />
          </div>
        </div>
        {/*profile pic*/}
        <img
          className="w-3/4 mt-24 rounded"
          src="/images/profile.jpg"
          alt="jefferson"
        />
        <div className=" w-3/4 h-32 flex flex-col">
          <h1 className="text-5xl mt-5 font-semibold font-roboto tracking-tight">
            Jefferson
          </h1>
          <p className="text-sm text-left mt-2 leading-4 tracking-tight font-roboto ">
            {" "}
            I blend logic with a little mystery, craft with a dash of mischief,
            and always leave a spark behind.
          </p>
        </div>
        <div className="w-3/4 h-full flex justify-evenly mt-12">
          <TechTwo width="50px" />
          <TechOne width="50px" />
          <TechThree width="50px" />
        </div>
      </div>
      <Projects ref={targetRef} />
      <SocialMedia ref={socialRef} />
      <Outro />
    </>
  );
}
