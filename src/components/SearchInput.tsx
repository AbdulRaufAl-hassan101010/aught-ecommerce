import { SearchIcon } from "lucide-react";
import React from "react";

interface SearchInputProps extends React.HTMLProps<HTMLInputElement> {
  value?: string;
  onClick?: () => void;
}

const SearchInput = ({ onClick, ...props }: SearchInputProps) => {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        placeholder="Search for products, brands and categories..."
        {...props}
        className="w-full py-4 px-2 rounded-l-sm outline-none text-sm border-none"
      />
      <button
        className="bg-blue-500 text-white py-4 px-5 rounded-r-md text-sm hover:opacity-80"
        onClick={onClick}
      >
        <SearchIcon />
      </button>
    </div>
  );
};
export default SearchInput;
