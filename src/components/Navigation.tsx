export default function Navigation() {
  return (
    <div className="h-20 w-full border flex justify-between p-5">
      <div className="border flex h-full items-center">Jefferson</div>
      <div className="hidden md:flex border items-center w-52 h-full justify-around mr-28">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <button className="md:hidden flex flex-col h-full items-center justify-center gap-1">
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>
    </div>
  );
}
