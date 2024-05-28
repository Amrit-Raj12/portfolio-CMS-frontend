import { useState } from "react";

type DropdownProps = {
  options: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block w-full text-left">
      <div>
        <button
          type="button"
          className="border-gray-300 text-gray-700 hover:bg-gray-50 inline-flex w-full justify-between rounded-md border bg-white px-4 py-2 text-sm font-medium shadow-sm focus:outline-none"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected || "Select Category"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707 1.707L6.414 9H14a1 1 0 110 2H6.414l4.293 4.293A1 1 0 019.293 16.707l-5-5a1 1 0 010-1.414l5-5A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <a
                href="#"
                key={option}
                className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                role="menuitem"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
