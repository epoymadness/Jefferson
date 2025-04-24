import { forwardRef } from "react";
import proj1 from "/images/proj1.jpg";
import proj2 from "/images/proj2.jpg";
import proj3 from "/images/proj3.jpg";

type Project = {
  lastName?: string;
};

const Projects = forwardRef<HTMLDivElement, Project>((prop, ref) => {
  return (
    <div
      ref={ref}
      className="h-max w-screen flex flex-col items-center justify-start  xl:mt-10 xl:h-min  xl:justify-between"
    >
      <div className="mt-20 w-3/4 xl:w-1/2">
        <h1 className="text-5xl font-semibold tracking-tighter font-roboto text-right ">
          PROJECTS
        </h1>
      </div>
      {/*project1*/}
      <div className=" w-3/4 h-80 justify-start mt-10 rounded-md xl:w-2/4  flex-col xl:h-96 ">
        <img
          className="w-full h-40 xl:h-56 object-cover rounded-md "
          src={proj1}
          alt=""
        />
        <p className="leading-4 text-left mt-3 text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/*project2*/}
      <div className=" w-3/4 h-80 justify-start mt-10 rounded-md flex flex-col xl:w-2/4  xl:items-center xl:h-96">
        <img
          className="w-full h-40 xl:h-56 object-cover rounded-md"
          src={proj2}
          alt=""
        />
        <p className="leading-4 text-left mt-3 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/*project3*/}
      <div className=" w-3/4 h-80 justify-start mt-10 rounded-md flex flex-col xl:w-2/4 xl:h-96 xl:items-center ">
        <img
          className="w-full h-40 object-cover rounded-md xl:h-56"
          src={proj3}
          alt=""
        />
        <p className="leading-4 text-left mt-3 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {prop.lastName}
    </div>
  );
});

export default Projects;
