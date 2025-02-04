const Stats = (stat) => {
  return (
    <div className="stat flex flex-col gap-10 md:gap-8 bg-slate-100 dark:bg-slate-800 w-3/4 md:max-w-sm
    p-6 xl:w-full
    ">
      <header className="flex justify-between items-center">
        <p className="font-semibold text-gray-600 dark:text-slate-400 text-sm">{stat.title}</p>
        <img src={stat.icon} alt={stat.title} />
      </header>
      <footer className="flex justify-between items-center">
        <h2 className="font-bold text-3xl dark:text-white">{stat.number}</h2>
        <div className="flex items-center gap-1 font-semibold text-green-500">
          <img src={stat.today} alt={stat.today} />
          <small>{stat.percentage}%</small>
        </div>
      </footer>
    </div>
  );
};

export default Stats;
