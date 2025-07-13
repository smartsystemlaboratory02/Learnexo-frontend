import { SearchIcon } from "lucide-react";


const Search = () => {
  return (
    <div className="shadow-sm outline outline-gray-2 rounded-lg p-2.5 flex gap-2 items-center hover:outline-2">
      <SearchIcon color="#98A2B3" strokeWidth={3}/>
      <input
        type="text"
        placeholder="Want to learn?"
        className="text-gray-1 font-medium text-lg p-0 border-0 outline-none"
        name="search"
        id="search"
      />
    </div>
  );
}

export default Search
