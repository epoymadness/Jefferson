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
import profile from "/images/Jefferson.png";

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
      <div className="relative h-full xl:h-screen flex flex-col p-5 items-center justify-start overflow-x-hidden pb-0  ">
        <div ref={aboutRef}></div>

        {/*navigationbar*/}
        <div className="fixed w-2/4 h-10 flex flex-row justify-evenly items-center rounded bg-blue-600/50 backdrop-blur-sm xl:w-1/4">
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
        {/*profile section*/}
        <div className="w-3/4 mt-24 xl:w-3/4 xl:flex xl:flex-row  xl:h-2/3 xl:justify-center  ">
          <img
            className="w-full rounded xl:w-2/4 xl:h-full "
            src={profile}
            alt="Jefferson"
          />
          <div className="xl:ml-10  xl:h-1/full xl:flex xl:flex-col xl:justify-end xl:w-1/2  ">
            <div className=" justify-evenly mt-12 xl:w-1/4 hidden xl:flex  ">
              <TechTwo />
              <TechOne />
              <TechThree />
            </div>
            <h1 className="text-5xl mt-5 font-semibold font-roboto tracking-tight">
              Jefferson
            </h1>
            <p className="text-sm text-left mt-2 leading-4 tracking-tight font-roboto xl:w-2/4">
              {" "}
              I blend logic with a little mystery, craft with a dash of
              mischief, and always leave a spark behind.
            </p>
          </div>
        </div>
        <div className="w-3/4 h-44  flex justify-evenly mt-12 xl:hidden ">
          <TechTwo />
          <TechOne />
          <TechThree />
        </div>
        <div className="flex flex-col justify-between h-max xl:h-fit xl:items-center">
          <Projects ref={targetRef} />
          <SocialMedia ref={socialRef} />
          <Outro />
        </div>
      </div>
    </>
  );
}
