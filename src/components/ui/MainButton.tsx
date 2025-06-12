import React from "react";
import type { ChildrenProps } from "../../utils/types/baseTypes";

type MainButtonProps = ChildrenProps & {
  onClick?: () => void;
};

const MainButton: React.FC<MainButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className=""
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
