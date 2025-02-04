import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between mt-10">
      <div className="flex flex-col gap-2">
        <span className="text-gray-400">Total this month</span>
        <p className="font-bold text-5xl">$478.33</p>
      </div>
      <div className="flex flex-col gap-1 text-right pt-3">
        <p className="font-bold">+2.4%</p>
        <span className="text-gray-400">from last month</span>
      </div>
    </footer>
  );
};

export default Footer;
