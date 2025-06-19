import React from "react";
import type { ChildrenProps } from "../../utils/types/baseTypes";

type WhiteButtonProps = ChildrenProps & {
  onClick?: () => void;
  width?: "full" | "fit";
  bg?: "white" | "blue" | "back";
};

const WhiteButton: React.FC<WhiteButtonProps> = ({
  children,
  onClick,
  width,
}) => {
  return (
    <button
      className={`${width === "full" ? "w-full" : "w-fit"} bg-white text-black border-1
           font-semibold py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
};

export default WhiteButton;
