import Homepage from "./components/Homepage";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Homepage />
    </>
  );
}
