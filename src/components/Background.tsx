import Profile from "/images/profile.jpg";

export default function Background() {
  return (
    <div className="relative h-32 xl:h-60 w-full">
      <img
        src={Profile}
        alt=""
        className="w-full h-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background "></div>
    </div>
  );
}
