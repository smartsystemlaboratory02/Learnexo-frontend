// import React from "react";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="flex md:w-[275px] justify-between items-center ml-3 md:ml-5 bg-white-2">
      <div>
        <img src={logo} alt="LEARNEXO" className="w-full h-full" />
      </div>
      <span className="font-inter text-blue-3 font-bold text-4xl">
        LearNEXO
      </span>
    </div>
  );
};

export default Logo;
