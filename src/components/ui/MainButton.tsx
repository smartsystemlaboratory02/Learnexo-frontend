import React from "react";
import type { ChildrenProps } from "../../utils/types/baseTypes";
import { Link } from "react-router-dom";

type MainButtonProps = ChildrenProps & {
  onClick?: () => void;
  fit?: boolean;
  white?: boolean;
  link?: string;
};

const MainButton: React.FC<MainButtonProps> = ({
  children,
  onClick,
  fit,
  white,
  link
}) => {

  const buttonElement = <button
    className={`${fit ? 'w-fit' : 'w-full'} ${white ? 'bg-white text-black border-1 hover:outline-1' : 'bg-blue-3 text-white  border-0'} font-bold py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300 `}
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    {children}
  </button>

  if (link) {
    return (
      <Link to={link}>{buttonElement}</Link>
    )
  }
  return (
    buttonElement
  );
};

export default MainButton;
