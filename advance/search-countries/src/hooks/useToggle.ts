import { useEffect, useRef, useState } from "react";

export default function useToggle(){
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
    toogleDark.current = document.documentElement.classList.toggle("dark");
    toogleDark.current
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
  };


  return {ischecked , handleDarkMode , setIsChecked}
}