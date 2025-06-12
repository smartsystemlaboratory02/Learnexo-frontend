import { ArrowDown } from 'lucide-react';
import React from 'react'

type SelectProps = {
  placeholder: string;
  name: string;
  width: "full" | "half";
  value?: string;
  multiple?: boolean;
  size?: number;
};


const Select:React.FC<SelectProps> = ({placeholder, name, width}) => {
  return (
   <div className={`${
            width === "full" ? "w-full" : "w-[47%]"
          } relative`}>
        <select
          className={`w-full border border-gray-1/60 rounded-md py-4 px-5 outline-none focus:border-2 text-gray-1/40 capitalize appearance-none`}
          
          name={name}
        //   onChange={onChange}
        //   onBlur={onBlur}
        //   onFocus={onFocus}
        >
            <option value="">{placeholder}</option>
            <div><ArrowDown /></div>
        </select>
    </div>
  )
}

export default Select