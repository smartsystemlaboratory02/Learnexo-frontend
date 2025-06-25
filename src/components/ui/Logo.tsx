// import React from "react";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-6 md:ml-3 mlg:w-[275px] mlg:justify-between mlg:ml-5">
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
