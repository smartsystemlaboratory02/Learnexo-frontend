import { Field } from "@tanstack/react-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import FieldError from "./FieldError";

type InputProps = {
  placeholder: string;
  type: string;
  name: string;
  half?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  visibility?: boolean;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  name,
  half,
  value,
  onChange,
  onBlur,
  onFocus,
  visibility,
  error,
  //   setValue,
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={`${half ? "w-[47%]" : "w-full"} relative`}>
      <input
        className={`w-full border border-gray-1/60 rounded-md py-4 px-5 not-focus-visible:outline-none focus:outline-gray-1/60 focus:outline-1 placeholder:text-gray-1/40 placeholder:capitalize z-30`}
        placeholder={placeholder}
        type={type === "password" && show ? "text" : type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {visibility &&
        (show ? (
          <EyeIcon
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-1/60"
            onClick={() => setShow(!show)}
          />
        ) : (
          <EyeOffIcon
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-1/60"
            onClick={() => setShow(!show)}
          />
        ))}
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
};

export default Input;
