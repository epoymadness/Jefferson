import { projectType } from "../types/myTheme";

export default function Projector({ title, description, link }: projectType) {
  return (
    <>
      <div className=" w-full h-80 justify-start flex-col mt-10 rounded-md xl:w-1/4 ">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="tracking-tight font-bold font-helvetica  text-text">
            {title}
          </h3>
          <div className="border w-full h-40"></div>
        </a>
        <p className="leading-4 mt-3 text-left text-sm text-text">
          {description}
        </p>
      </div>
    </>
  );
}
