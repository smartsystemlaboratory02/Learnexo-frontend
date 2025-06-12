import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";

type InputProps = {
  placeholder: string;
  type: string;
  name: string;
  width: "full" | "half";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  visibility?: boolean;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  name,
  width,
  value,
  onChange,
  onBlur,
  onFocus,
  visibility
//   setValue,
}) => {
    const [show, setShow] = useState<boolean>(false)


  return (
    <div className={`${
            width === "full" ? "w-full" : "w-[47%]"
          } relative`}>
        <input
          className={`w-full border border-gray-1/60 rounded-md py-4 px-5 outline-none focus:border-2 placeholder:text-gray-1/40 placeholder:capitalize`}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          
        />
        {
        visibility && (show ? <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-1/60" onClick={() => setShow(!show)} /> : <EyeOffIcon className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-1/60" onClick={() => setShow(!show)} />)
        }
    </div>
  );
};

export default Input;
