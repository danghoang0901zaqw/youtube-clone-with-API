import React from "react";

const LeftNavMenuItem = ({ text, icon, action, className }) => {
  return (
    <div
      className={
        "text-white text-sm flex items-center  cursor-pointer h-10  px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
        className
      }
      onClick={action}
    >
      <span className=" text-xl mr-5">{icon}</span>
      <span className="text-[14px] mr-5">{text}</span>
    </div>
  );
};

export default LeftNavMenuItem;
