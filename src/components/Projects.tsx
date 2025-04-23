import { forwardRef } from "react";

type Project = {
  lastName?: string;
};

const Projects = forwardRef<HTMLDivElement, Project>((prop, ref) => {
  return (
    <div
      ref={ref}
      className="h-min w-screen flex flex-col items-center justify-start "
    >
      <div className="mt-20 w-3/4">
        <h1 className="text-5xl font-semibold tracking-tighter font-roboto text-right ">
          PROJECTS
        </h1>
      </div>
      {/*project1*/}
      <div className=" w-3/4 h-80 justify-start mt-10 rounded-md flex flex-col">
        <img
          className="w-full h-40 object-cover rounded-md "
          src="/images/proj1.jpg"
          alt=""
        />
        <p className="leading-4 text-left mt-3 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/*project2*/}
      <div className=" w-3/4 h-80  items-center justify-start mt-10 rounded-md flex flex-col">
        <img
          className="w-full h-40 object-cover rounded-md"
          src="/images/proj2.jpg"
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
      <div className=" w-3/4 h-80  items-center justify-start mt-10 rounded-md flex flex-col">
        <img
          className="w-full h-40 object-cover rounded-md"
          src="/images/proj3.jpg"
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
