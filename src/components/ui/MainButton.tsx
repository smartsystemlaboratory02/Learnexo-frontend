import React from "react";
import type { ChildrenProps } from "../../utils/types/baseTypes";

type MainButtonProps = ChildrenProps & {
  onClick?: () => void;
  width?: "full" | "fit";
};

const MainButton: React.FC<MainButtonProps> = ({ children, onClick, width }) => {
  return (
    <button
      className={`${width === "full" ? "w-full" : "w-fit"} bg-blue-3 text-white py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300 border-0 `}
      onClick={() => {
        if (onClick) {
        onClick();
      }}}
    >
      {children}
    </button>
  );
};

export default MainButton;
