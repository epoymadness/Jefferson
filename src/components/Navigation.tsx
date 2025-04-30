import ProjectIcon from "../icons/ProjectIcon";
import Contact from "../icons/Contact";
import Info from "../icons/Info";
import Theme from "./Theme";
import { navigationType } from "../types/myTheme";

export default function Navigation({
  display,
  projectClick,
  socialMediaClick,
  aboutClick,
  light,
  dark,
  system,
}: navigationType) {
  return (
    <div
      className={`fixed ease-in-out w-2/4 h-10 ${display} flex-row justify-evenly items-center rounded bg-blue-600/50 backdrop-blur-sm xl:w-1/4 drop-shadow-lg mt-5 z-50`}
    >
      <div onClick={projectClick}>
        <ProjectIcon />
      </div>
      <div onClick={socialMediaClick}>
        <Contact color="fill-white" width="28px" hover="hover:w-8" />
      </div>
      <div onClick={aboutClick}>
        <Info />
      </div>
      {/*dropdown-menu*/}
      <Theme light={light} dark={dark} system={system} />
    </div>
  );
}
