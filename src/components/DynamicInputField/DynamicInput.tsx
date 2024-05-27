import { useState } from "react";

interface InputField {
  id: number;
  name: string;
  value: string;
}

const socialLabels = ["Instagram", "Twitter", "GitHub", "LinkedIn", "YouTube"];

const DynamicInput: React.FC = () => {
  const [inputFields, setInputFields] = useState<InputField[]>([]);

  const handleAddField = () => {
    if (inputFields.length < 5) {
      const newField: InputField = {
        id: Date.now(),
        name: socialLabels[inputFields.length],
        value: "",
      };
      setInputFields([...inputFields, newField]);
    }
  };

  const handleRemoveField = (id: number) => {
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  const handleInputChange = (id: number, value: string) => {
    setInputFields(
      inputFields.map((field) =>
        field.id === id ? { ...field, value } : field,
      ),
    );
  };

  return (
    <div>
      <div
        onClick={handleAddField}
        className="flex cursor-pointer rounded-md stroke-white py-2 text-left text-white hover:stroke-[#A0FD32] hover:text-[#A0FD32] focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Edit / Add_Plus">
              <path
                id="Vector"
                d="M6 12H12M12 12H18M12 12V18M12 12V6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
        <span className="ml-1">Add Socials</span>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {inputFields.map((field) => (
          <div key={field.id} className="flex items-center space-x-2">
            <input
              type="text"
              value={field.name}
              readOnly
              className="border-gray-300 rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              className="border-gray-300 rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => handleRemoveField(field.id)}
              className="bg-red-500 focus:ring-red-500 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-red"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M10 12V17"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M14 12V17"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4 7H20"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicInput;
