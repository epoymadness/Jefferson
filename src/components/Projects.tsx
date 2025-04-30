import { forwardRef } from "react";
import proj1 from "/images/proj1.jpg";
import proj2 from "/images/proj2.jpg";
import proj3 from "/images/proj3.jpg";

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="h-max w-screen flex flex-col items-center justify-start  xl:mt-10 xl:h-min  xl:justify-between"
    >
      <div className="mt-20 w-3/4 xl:w-1/2">
        <h1 className="text-5xl font-semibold tracking-tighter font-roboto text-right text-text">
          PROJECTS
        </h1>
      </div>
      {/*project1*/}
      <div className=" w-3/4 h-80 justify-start mt-10 rounded-md xl:w-2/4  flex-col xl:h-96  ">
        <a
          href="https://github.com/epoymadness/cafeshop"
          target="_blank"
          rel="noopener norefferer"
        >
          <h3 className="tracking-tight font-bold font-noto  text-text">
            CAFESHOP
          </h3>
          <img
            className="w-full h-40 xl:h-56 object-cover rounded-md "
            src={proj1}
            alt=""
          />
        </a>
        <p className="leading-4 mt-3 text-left text-sm text-text">
          I've always dreamed of owning a café—specifically, one designed for
          introverts. The idea came to me while I was ordering at a café one
          day. I always feel a bit uncomfortable standing in front of the
          cashier, and that sparked something.{" "}
        </p>
      </div>
      {/*project2*/}
      <div className="w-3/4 h-80 justify-start mt-10 rounded-md xl:w-2/4  flex-col xl:h-96 ">
        <a
          href="https://epoymadness.github.io/Filmstack/"
          target="_blank"
          rel="noopener norefferer"
        >
          <h3 className="font-bold font-noto tracking-tight text-text">
            FILMSTACK
          </h3>
          <img
            className="w-full h-40 xl:h-56 object-cover rounded-md"
            src={proj2}
            alt=""
          />
        </a>
        <p className="leading-4 text-left text-sm mt-3 text-text">
          It's a Letterboxd alternative where I log the movies I've recently
          watched, rate them, and share my thoughts. Such a wonderful creation
          of mine.
        </p>
      </div>
      {/*project3*/}
      <div className=" w-3/4 h-80 justify-start mt-10 rounded-md flex flex-col xl:w-2/4 xl:h-96 xl:items-start ">
        <h3 className="font-bold  font-noto tracking-tight text-text ">
          PENDING
        </h3>
        <img
          className="w-full h-40 object-cover rounded-md xl:h-56"
          src={proj3}
          alt=""
        />
        <p className="leading-4 text-left mt-3 text-sm text-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
});

export default Projects;
