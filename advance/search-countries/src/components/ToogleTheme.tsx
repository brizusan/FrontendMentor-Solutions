import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import useToggle from "../hooks/useToggle";

export default function ToggleTheme() {
  const { ischecked, handleDarkMode, setIsChecked } = useToggle();

  return (
    <div className="flex justify-center py-4">
      <input
        className="hidden"
        type="checkbox"
        id="check"
        checked={ischecked}
        onChange={() => setIsChecked(!ischecked)}
      />
      <label
        htmlFor="check"
        className="flex items-center gap-2 cursor-pointer font-semibold uppercase tracking-wider text-slate-600 dark:text-white"
        onClick={handleDarkMode}
      >
        {!ischecked ? "Dark" : "Ligth"}
        {ischecked ? <BsFillSunFill /> : <FaMoon />}
      </label>
    </div>
  );
}
