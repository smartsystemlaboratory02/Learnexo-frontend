import React from "react";
import type { ChildrenProps } from "../../../utils/types/baseTypes";

type FeatureProps = ChildrenProps & {
  title: string;
  info: string;
};

const Feature: React.FC<FeatureProps> = ({ children, title, info }) => {
  return (
    <div className="flex flex-col gap-7 w-full">
      <div className="bg-white rounded-br-3xl p-4 shadow-md w-fit">{children}</div>
      <h4 className="text-black font-semibold text-2xl">{title}</h4>
      <p className="text-gray-2 leading-[150%] tracking-[0%]">{info}</p>
    </div>
  );
};

export default Feature;
