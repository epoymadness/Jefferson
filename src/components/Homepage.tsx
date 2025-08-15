import { useEffect, useState } from "react";
import Projects from "./Projects";
import Outro from "./Outro";
import Profile from "./Profile";
import { theme } from "../types/myTheme";
import Navigation from "./Navigation";

export default function Homepage() {
  const [, setTheme] = useState<theme>("system");

  useEffect(() => {
    const savedTheme = localStorage.theme;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setTheme(savedTheme || "system");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme(savedTheme || "system");
    }
  }, []);

  return (
    <>
      <div className="h-full xl:h-full flex flex-col pt-0 items-center justify-start overflow-x-hidden pb-0 bg-background ">
        <Navigation />
        <Profile />
        <div className="flex flex-col items-center justify-between h-max xl:h-fit xl:items-center">
          <Projects />
          <Outro />
        </div>
      </div>
    </>
  );
}
