import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: ReactNode;
};

const modal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function Dropdown({ children }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function handleScroll() {
      setOpen(false);
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <>
      <AnimatePresence>
        <div ref={modalRef}>
          <button onClick={toggleDropdown} className="text-white">
            theme
          </button>

          {open && (
            <motion.div
              className="absolute mt-5 w-min rounded-2xl shadow-lg bg-background ring-1 ring-black ring-opacity-5"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
            >
              <div className="" role="menu" aria-orientation="vertical">
                {children}
              </div>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
}
