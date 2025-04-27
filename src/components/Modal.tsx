import { useState } from "react";
import Graphics from "../modal/Graphics";
import Designs from "../modal/Designs";
import Epoymadness from "../modal/Epoymadness";

export default function Modal() {
  const [isOpenEthereal, setIsOpenEthereal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-28 justify-between">
      <h1 className="font-bold text-text tracking-wide">MY GRAPHIC DESIGNS</h1>
      <button
        onClick={() => setIsOpenEthereal(true)}
        className="text-blue-400 font-bold hover:text-blue-800/50"
      >
        Ethereal
      </button>
      <Graphics
        isOpen={isOpenEthereal}
        onClose={() => setIsOpenEthereal(false)}
      >
        <Designs />
      </Graphics>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-400 font-bold hover:text-blue-800/50"
      >
        Epoymadness
      </button>
      <Graphics isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Epoymadness />
      </Graphics>
    </div>
  );
}
