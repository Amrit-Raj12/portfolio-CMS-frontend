import React, { useState } from "react";
import DynamicInput from "../DynamicInputField/DynamicInput";
import DatePicker from "../DatePicker/DatePicker";
import Dropdown from "../DropDown/DropDown";

interface AchievementFormProps {
  handleNextClick: () => void;
}

const AchievementForm: React.FC<AchievementFormProps> = ({
  handleNextClick,
}) => {
  const [components, setComponents] = useState([<DynamicComponent key={0} />]);

  const addComponent = () => {
    setComponents([
      ...components,
      <DynamicComponent key={components.length} />,
    ]);
  };

  const deleteComponent = (index: number) => {
    if (index !== 0) {
      const updatedComponents = components.filter((_, i) => i !== index);
      setComponents(updatedComponents);
    }
  };
  return (
    <div>
      <h3 className="text-gray-900 mb-4 text-lg font-medium leading-none dark:text-white">
        Achievement
      </h3>
      {components.map((component, index) => (
        <div key={index}>
          {index !== 0 && (
            <div className="float-end flex">
              <button
                type="button"
                onClick={() => deleteComponent(index)}
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
          )}
          {component}

          <hr className="mb-2 border border-[#A0FD32]" />
        </div>
      ))}
      <div
        onClick={addComponent}
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
        <span className="ml-1">Add More</span>
      </div>
    </div>
  );
};

const DynamicComponent = () => {
  const options = ["Academic", "Professional", "Extracurricular"];
  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="title"
          className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
        >
          Achievement Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Enter project title"
        />
      </div>
      <div>
        <label
          htmlFor="desc"
          className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
        >
          Description
        </label>
        <textarea
          name="desc"
          id="desc"
          className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Describe your responsibilities"
        />
      </div>
      <div>
        <label
          htmlFor="date"
          className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
        >
          Date
        </label>
        <DatePicker placeholder="Select Date" handleChangeDate={() => ""} />
      </div>
      <div>
        <label
          htmlFor="awarding"
          className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
        >
          Awarding Organization
        </label>
        <input
          type="text"
          name="awarding"
          id="awarding"
          className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Enter awarding by"
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
        >
          Category
        </label>
        <Dropdown options={options} />
      </div>
      <div>
        <label
          htmlFor="tech-stack"
          className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
        >
          Relevant Project/Experience
        </label>
        <input
          type="text"
          name="relevant"
          id="relevant"
          className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Enter Relevant Project/Experience"
        />
      </div>
      <div>
        <label
          htmlFor="address"
          className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
        >
          Certifcate Link
        </label>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            name="link-name"
            id="link-name"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 col-span-2 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Link name"
          />
          <input
            type="text"
            name="url"
            id="url"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Link url"
          />
        </div>
      </div>

      <div>
        <label
          className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          htmlFor="file_input"
        >
          Certificate Upload
        </label>
        <input
          className="text-gray-900 border-gray-300 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full cursor-pointer rounded-lg border text-sm focus:outline-none"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
        />
        {/* <p
            className="text-gray-500 dark:text-gray-300 mt-1 text-sm"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p> */}
      </div>

      <div className="col-span-2 grid">
        <label
          htmlFor="notes"
          className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
        >
          Additional Notes
        </label>
        <textarea
          name="notes"
          id="notes"
          className="bg-gray-50  border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Enter addtional notes"
        />
      </div>
    </div>
  );
};

export default AchievementForm;
