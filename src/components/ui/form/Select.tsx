// import { ArrowDown } from 'lucide-react';
import React from "react";
import type { Option } from "../../../utils/types/baseTypes";
import FieldError from "./FieldError";

type SelectProps = {
  placeholder: string;
  name: string;
  value?: string;
  multiple?: boolean;
  half?: boolean;
  size?: number;
  options: Option[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: string;
};

const Select: React.FC<SelectProps> = ({
  placeholder,
  name,
  half,
  options,
  onBlur,
  onChange,
  onFocus,
  error,
}) => {
  return (
    <div
      className={`${
        half ? "md:w-[47%] mlg:w-full lgd:w-[47%]" : "w-full"
      } relative`}
    >
      <select
        className={`w-full border border-gray-1/60 rounded-md py-4 px-5 outline-none text-gray-1/40 capitalize select_input min-w-80 md:min-w-0 mlg:min-w-80 lgd:min-w-0`}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        {/* <button>
          <selectedcontent></selectedcontent>
        </button> */}

        <div className="select-option-container">
          <option
            value=""
            className="select_option font-medium capitalize truncate"
          >
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="select_option font-medium capitalize"
            >
              {option.label}
            </option>
          ))}
        </div>
      </select>
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
};

export default Select;
