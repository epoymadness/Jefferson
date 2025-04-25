import graphic1 from "/images/ethereal.jpg";

export default function Designs() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={graphic1} alt="" className="w-10/12 " />
      <p className="pl-8 pr-8 leading-4 mt-3 font-noto text-sm tracking-tight">
        Delicate as moonlight, fleeting as a breath-- ethereal evokes the
        intangible beauty that lies just beyond the grasp of reality
      </p>
    </div>
  );
}
