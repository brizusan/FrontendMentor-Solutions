import { useEffect, useRef, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

const Header = () => {
  const [ischecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsChecked(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toogleDark = useRef(document.documentElement.className === "dark");

  const handleDarkMode = () => {
    toogleDark.value = document.documentElement.classList.toggle("dark");
    toogleDark.value
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
  };

  return (
    <header className="py-10">
      <div className="flex justify-between">
        <a href="#" className="text-2xl font-bold dark:text-white">
          devFinder
        </a>

        <div>
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
      </div>
    </header>
  );
};

export default Header;
