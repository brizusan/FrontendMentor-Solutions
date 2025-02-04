import { useEffect , useRef , useState } from "react";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsChecked(true)
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, []);


  const toogleDark = useRef(document.documentElement.className === 'dark');

  const handleDarkMode = () => {
    toogleDark.value =  document.documentElement.classList.toggle("dark");
    toogleDark.value ? 
      localStorage.theme = 'dark'
     :localStorage.theme = 'light'; 
    
  };
  
  const handleChange =()=>{
    setIsChecked(!isChecked)
  }

  return (
    <header className="relative">
      <div className="bg-header dark:bg-slate-800 dark:opacity-20  absolute w-screen h-full bg-slate-100 "></div>
      <div
        className="container mx-auto w-4/5 xl:w-full max-w-screen-xl flex flex-col gap-4
      lg:grid grid-cols-2 lg:mt-12">
        <h1 className="z-10 font-bold text-slate-800 dark:text-slate-100 text-2xl lg:text-3xl ">
          Social Media Dashboard 
        </h1>
        <p className="z-10 font-semibold text-gray-500 dark:text-slate-400 lg:col-start-1">
          Total Followers: 23,004
        </p>
        <hr className="z-10 border border-slate-600 lg:hidden" />
        <div className="z-10 flex justify-between  lg:col-start-2 lg:justify-end lg:gap-10 lg:items-center">
          <h2 className="font-semibold text-gray-500 dark:text-slate-400 ">
            Dark Mode
          </h2>
          <input type="checkbox" id="check" checked={isChecked} onChange={handleChange}/>
          <div className="toogle">
            <label
              className='circle'
              htmlFor="check"
              onClick={handleDarkMode}></label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
