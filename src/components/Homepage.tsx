import { useRef, useEffect, useState } from "react";
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
  const [display, setDisplay] = useState("flex");
  let scrollTimeout: number | null = null;
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const socialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setDisplay("hidden");

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollTimeout = window.setTimeout(() => {
        setDisplay("flex");
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

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
        <div
          className={`fixed ease-in-out w-2/4 h-10 ${display} flex-row justify-evenly items-center rounded bg-blue-600/50 backdrop-blur-sm xl:w-1/4 drop-shadow-lg`}
        >
          <div onClick={projectClick}>
            <ProjectIcon />
          </div>
          <div onClick={socialMediaClick}>
            <Contact />
          </div>
          <div onClick={aboutClick}>
            <Info />
          </div>
        </div>
        {/*profile section*/}
        <div className="w-3/4 mt-24 xl:w-3/4 xl:flex xl:flex-row  xl:h-2/3 xl:justify-center  ">
          <img
            className="w-full rounded-md xl:w-max xl:h-full "
            src={profile}
            alt="Jefferson"
          />
          <div className="xl:ml-10  xl:h-1/full xl:flex xl:flex-col xl:justify-end xl:w-1/3  ">
            <div className=" justify-between mt-12 xl:w-1/3 hidden xl:flex  ">
              <TechTwo />
              <TechOne />
              <TechThree />
            </div>
            <h1 className="text-5xl mt-5 font-semibold font-roboto tracking-tight">
              Jefferson
            </h1>
            <p className="text-sm text-left mt-1 leading-4 tracking-tight font-roboto xl:w-10/12 ">
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
