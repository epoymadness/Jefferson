import { projectType } from "../types/myTheme";

export default function Projector({ title, description, link }: projectType) {
  return (
    <>
      <div className=" w-full h-80 justify-start flex-col mt-10 rounded-md md:w-1/4 ">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="font-helvetica text-1xl tracking-widest font-semibold text-text">
            {title}
          </h3>
          <div className="border w-full h-40 rounded"></div>
        </a>
        <p className="leading-4 mt-3 text-left text-sm md:text-1xl text-text">
          {description}
        </p>
      </div>
    </>
  );
}
