import { SearchIcon } from "lucide-react";

type SearchProps = {
  placeholder: string;
  name: string;
  half?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<SearchProps> = ({
  name,
  half,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
}) => {
  return (
    <div
      className={`
      ${
        half ? "md:w-[47%] mlg:w-full lgd:w-[47%]" : "w-full"
      } flex items-center gap-3 border border-gray-6/60 rounded-md bg-white transition focus-within:border-gray-6/80 focus-within:shadow hover:border-gray-6/80 active:border-gray-6 relative px-3.5 py-2.5 min-w-[300px]`}
    >
      <SearchIcon className="min-w-5 h-5" />
      <input
        className={`w-full bg-transparent border-none outline-none placeholder:text-gray-6 placeholder:capitalize min-w-80 md:min-w-0 mlg:min-w-80 lgd:min-w-0 `}
        placeholder={placeholder}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Search;
