import { useRef, useEffect, useState } from "react";
import Projects from "./Projects";
import Contact from "../icons/Contact";
import SocialMedia from "./SocialMedia";
import Outro from "./Outro";
import Desktop from "./Desktop";
import Services from "./Services";
import Modal from "./Modal";
import Profile from "./Profile";
import Navigation from "./Navigation";

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
        <Navigation
          display={display}
          projectClick={() => projectClick()}
          socialMediaClick={() => socialMediaClick()}
          aboutClick={() => aboutClick()}
        />
        {/*profile section*/}
        <Profile />
        {/*for desktop*/}
        <Desktop />
        <div className="flex flex-col items-center justify-between h-max xl:h-fit xl:items-center">
          <Services />
          <div
            onClick={socialMediaClick}
            className="w-max flex justify-center  h-20 drop-shadow-md"
          >
            <Contact color="fill-blue-400" width="60px" hover="hover:w-16" />
          </div>
          <Projects ref={targetRef} />
          {/*test modal for graphic designs*/}
          <Modal />
          <SocialMedia ref={socialRef} />
          <Outro />
        </div>
      </div>
    </>
  );
}
