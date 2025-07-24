import React from "react";

type CheckInputProps = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const Check: React.FC<CheckInputProps> = ({ state, setState }) => {
  return (
    <input
      type="checkbox"
      className="w-4.5 h-4.5 bg-white rounded-sm"
      checked={state}
      onChange={() => setState(!state)}
    />
  );
};

export default Check;
