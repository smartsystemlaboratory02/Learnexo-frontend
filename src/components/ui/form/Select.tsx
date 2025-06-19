// import { ArrowDown } from 'lucide-react';
import React from 'react'

type SelectProps = {
  placeholder: string;
  name: string;
  width: "full" | "half";
  value?: string;
  multiple?: boolean;
  size?: number;
  options: {
    value: string;
    label: string;
  }[];
};

const Select: React.FC<SelectProps> = ({ placeholder, name, width, options }) => {
  return (
    <div className={`${width === "full" ? "w-full" : "w-[47%]"
      } relative`}>
      <select
        className={`w-full border border-gray-1/60 rounded-md py-4 px-5 outline-none text-gray-1/40 capitalize select_input`}

        name={name}
      //   onChange={onChange}
      //   onBlur={onBlur}
      //   onFocus={onFocus}
      >
        <button>
          <selectedcontent></selectedcontent>
        </button>

        <div className='select-option-container'>
           <option value="" className='select_option font-medium capitalize truncate'>{placeholder}</option>
          {
            options.map((option) => (
              <option key={option.value} value={option.value} className='select_option font-medium capitalize'>{option.label}</option>
            ))
          }
        </div>
      </select>
    </div>
  )
}

export default Select