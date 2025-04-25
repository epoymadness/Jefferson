import TechOne from "../icons/TechOne";
import TechThree from "../icons/TechThree";
import TechTwo from "../icons/TechTwo";

export default function Desktop() {
  return (
    <div className="w-3/4 h-44  flex justify-evenly mt-12 xl:hidden ">
      <TechTwo />
      <TechOne />
      <TechThree />
    </div>
  );
}
