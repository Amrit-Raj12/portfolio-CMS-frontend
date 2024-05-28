import React, { useEffect, useState } from "react";
import "../../css/range.css";

interface Field {
  id: number;
  value: string;
  rating: number;
}

const DynamicSkill: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([]);
  const [nextId, setNextId] = useState(0);
  const [value, setValue] = useState(50);

  useEffect(() => {
    document.documentElement.style.setProperty("--value", `${value}%`);
  }, [value]);

  const addField = () => {
    setFields([...fields, { id: nextId, value: "", rating: 5 }]);
    setNextId(nextId + 1);
  };

  const removeField = (id: number) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleInputChange = (id: number, value: string) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, value } : field)),
    );
  };

  const handleSliderChange = (id: number, rating: number) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, rating } : field)),
    );
  };

  return (
    <div className="p-4">
      <div
        onClick={addField}
        className="flex w-31 cursor-pointer rounded-md stroke-white py-2 text-left text-white hover:stroke-[#A0FD32] hover:text-[#A0FD32] focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <span className="ml-1">Add Skill</span>
      </div>
      {fields.map((field) => (
        <div key={field.id} className="mb-4 flex items-center">
          <div className="col-span-2 grid">
            <label
              htmlFor="skill"
              className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
            >
              Skill
            </label>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              className="mr-4 rounded border px-2 py-1"
            />
          </div>

          <div className="flex items-center">
            <div className="col-span-2 grid">
              <label
                htmlFor="skill"
                className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
              >
                Rate: {field.rating}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={field.rating}
                onChange={(e) =>
                  handleSliderChange(field.id, parseInt(e.target.value))
                }
                className="bg-red text-rose-400"
              />
            </div>
          </div>
          <button
            className="bg-red-500 ml-4 rounded px-2 py-1 text-white"
            onClick={() => removeField(field.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DynamicSkill;
