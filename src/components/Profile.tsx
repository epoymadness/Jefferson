import profile from "/images/Jefferson.png";
import TechTwo from "../icons/TechTwo";
import TechThree from "../icons/TechThree";
import TechOne from "../icons/TechOne";

export default function Profile() {
  return (
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
        <h1 className="text-gray-950 text-5xl mt-5 font-semibold font-roboto tracking-tight">
          Jefferson
        </h1>
        <p className="text-gray-950 text-sm text-left mt-1 leading-4 tracking-tight font-roboto xl:w-10/12 ">
          {" "}
          What started as a thought became something real—built with purpose,
          not just code.{" "}
        </p>
      </div>
    </div>
  );
}
