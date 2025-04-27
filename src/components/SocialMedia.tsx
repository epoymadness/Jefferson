import { forwardRef } from "react";
import Facebook from "../icons/Facebook";
import Github from "../icons/Github";
import Instagram from "../icons/Instagram";
import Linkedin from "../icons/Linkedin";

const SocialMedia = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="h-80 w-screen flex flex-col items-center justify-between xl:w-1/2 "
    >
      <div className="flex flex-row justify-evenly items-center mt-20 w-2/4   ">
        <Facebook width="40px" />
        <a
          href="https://www.facebook.com/jefferson.yabut.52"
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-tighter text-text"
        >
          Jefferson Yabut
        </a>
      </div>
      <div className="flex flex-row justify-evenly items-center w-2/4 space-x-3">
        <Github width="40px" />
        <a
          href="https://github.com/epoymadness"
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-tighter text-text"
        >
          epoymadness
        </a>
      </div>
      <div className="flex flex-row justify-evenly items-center w-2/4  ">
        <Instagram width="40px" />
        <a
          href="https://www.instagram.com/epoymadness/"
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-tighter text-text"
        >
          Jefferson Yabut
        </a>
      </div>
      <div className="flex flex-row justify-evenly items-center w-2/4  ">
        <Linkedin width="40px" />
        <h3 className="tracking-tighter text-text">Jefferson Yabut</h3>
      </div>
    </div>
  );
});

export default SocialMedia;
