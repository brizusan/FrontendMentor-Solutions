import React from "react";
import Image from '/images/icon-ellipsis.svg'

const Card = ({ data, times }) => {
  const { title, timeframes } = data;
  const { current, previous } = timeframes[times.toLowerCase()];

  const str = title.toLowerCase().replace(" ","-")
  const bg=`var(--color-${str})`

  return (
    <article 
    style={{backgroundColor:bg}}
    className="card max-w-sm w-5/6 lg:w-full mx-auto bg-slate-800 first-line:overflow-y-hidden text-white  rounded-xl overflow-hidden">
      <section 
      style={
        {
          backgroundImage:`url(/images/icon-${str}.svg)`,
        }}
      className="card__img py-5">
      </section>
      <section className="flex flex-col gap-4 xl:gap-6 p-5 bg-slate-800 hover:bg-slate-700 hover:cursor-pointer rounded-xl ">
        <div className="flex justify-between items-center ">
        <p>{title}</p>
        <img src={Image} alt={data.title} />
        </div>
        <div className="flex justify-between items-center xl:flex-col xl:items-start xl:gap-2">
          <p className="text-2xl xl:text-4xl text-gray-300">{current <=1 ? current +'hr' :current +'hrs'}</p>
          <p className="text-slate-200">Last Week - {previous === 1 ? '1hr' : previous +'hrs'}</p>
        </div>
      </section>
    </article>
  );
};

export default Card;
