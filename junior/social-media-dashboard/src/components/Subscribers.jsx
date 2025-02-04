import React from "react";

const Subscribers = (dato) => {
  return (
    <div className="card__follow relative flex flex-col justify-center items-center gap-6  py-7 bg-slate-100 dark:bg-slate-800 w-3/4 xl:w-full lg:gap-8 md:max-w-md">
      <header className="flex gap-2">
        <img src={dato.icon} alt="icon image social" />
        <p className="font-bold text-xs text-gray-500 dark:text-slate-400">@{dato.titulo}</p>
      </header>
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-bold text-5xl dark:text-white">{dato.followers}</h2>
        <h4 className="tracking-widest font-extralight text-gray-500 dark:text-slate-400">Followers</h4>
      </div>
      <footer className="flex items-center gap-2 text-green-500 font-semibold">
        <img src={dato.today} alt="img icon" />
        <small>{dato.follows} Today</small>
      </footer>
    </div>
  );
};

export default Subscribers;
