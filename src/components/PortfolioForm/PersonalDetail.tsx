import React from "react";
import DynamicInput from "../DynamicInputField/DynamicInput";

interface PersonalFormProps {
  handleNextClick: () => void;
}

const PersonalDetail: React.FC<PersonalFormProps> = ({ handleNextClick }) => {
  return (
    <div>
      <h3 className="text-gray-900 mb-4 text-lg font-medium leading-none dark:text-white">
        Personal details
      </h3>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="username"
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="fname.example"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter your number"
          />
        </div>
        <div>
          <label
            htmlFor="job-title"
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Job Title
          </label>
          <input
            type="text"
            name="job-title"
            id="job-title"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter your job title"
          />
        </div>

        <div>
          <label
            htmlFor="intro"
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Introduce yourself
          </label>
          <textarea
            name="intro"
            id="intro"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Introduce yourself"
          />
        </div>
        <div>
          <label
            htmlFor="about"
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          >
            About
          </label>
          <textarea
            name="about"
            id="about"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Tell us professional details"
          />
        </div>
        <div className="col-span-2 grid">
          <label
            htmlFor="address"
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Address
          </label>
          <textarea
            name="address"
            id="address"
            className="bg-gray-50  border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-[#A0FD32] focus:ring-[#A0FD32] dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter your address"
          />
        </div>

        <div className="col-span-2 grid">
          <label
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
            htmlFor="file_input"
          >
            Avatar
          </label>
          <input
            className="text-gray-900 border-gray-300 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full cursor-pointer rounded-lg border text-sm focus:outline-none"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <p
            className="text-gray-500 dark:text-gray-300 mt-1 text-sm"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>

        <div>
          <DynamicInput />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
