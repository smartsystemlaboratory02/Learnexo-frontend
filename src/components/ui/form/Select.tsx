// import { ArrowDown } from 'lucide-react';
import React from 'react'

type SelectProps = {
  placeholder: string;
  name: string;
  width: "full" | "half";
  value?: string;
  multiple?: boolean;
  size?: number;
};


const Select: React.FC<SelectProps> = ({ placeholder, name, width }) => {
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
          {/* <selectedcontent></selectedcontent> */}
        </button>

        <option value="" className='select_option'>{placeholder}</option>
        <option value="1" className='select_option'>Watermelon</option>
        <option value="2" className='select_option'>Watermelon</option>
        <option value="3" className='select_option'>Watermelon</option>
      </select>
    </div>
  )
}

export default Select