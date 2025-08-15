import profile from "/images/profile.jpg";
export default function Profile() {
  return (
    <div className="w-3/4 h-svh md:h-svh items-start flex flex-col md:w-2/4 md:flex-col md:items-start md:justify-around ">
      <div className=" xl:h-max xl:w-full xl:flex xl:flex-col xl:justify-between p-10">
        <img
          className="w-20 rounded-full xl:w-20 xl:h-20 "
          src={profile}
          alt="Jefferson"
        />
        <h1 className="text-text text-5xl font-helvetica tracking-tight xl:tracking-wide mt-10">
          Jefferson
        </h1>
        <p className="text-text text-sm text-left mt-1 leading-4 tracking-wide font-helvetica xl:w-full  xl:text-base ">
          First, have a definite, clear practical ideal; a goal, an objective.
          Second, have the necessary means to achieve it. Third, adjust all your
          means to that end.
        </p>
      </div>
      <div className=" flex flex-row  w-1/2 xl:w-1/5 justify-between">
        <i className="fi fi-brands-facebook text-3xl text-text rounded-full w-10 h-10 border border-text items-center flex justify-center"></i>
        <i className="fi fi-brands-instagram text-2xl text-text rounded-full w-10 h-10 border border-text items-center flex justify-center"></i>
        <i className="fi fi-brands-github text-3xl text-text rounded-full w-10 h-10 border border-text items-center flex justify-center"></i>
      </div>
    </div>
  );
}
