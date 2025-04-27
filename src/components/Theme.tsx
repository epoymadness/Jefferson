import Dropdown from "../modal/Dropdown";
import { customTheme } from "../types/myTheme";

export default function Theme({ light, dark, system }: customTheme) {
  return (
    <div>
      <Dropdown>
        <button
          className="w-full text-left px-4 py-2 text-sm text-text bg-background hover:bg-hover rounded-2xl "
          role="menuitem"
          onClick={light}
        >
          light
        </button>
        <button
          className="w-full text-left px-4 py-2 text-sm text-text bg-background hover:bg-hover rounded-2xl"
          role="menuitem"
          onClick={dark}
        >
          dark
        </button>
        <button
          className="w-full h-full text-left px-4 py-2 text-sm text-text bg-background hover:bg-hover rounded-2xl"
          role="menuitem"
          onClick={system}
        >
          system
        </button>
      </Dropdown>
    </div>
  );
}
