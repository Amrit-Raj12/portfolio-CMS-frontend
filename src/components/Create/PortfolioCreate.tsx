"use client";
import React, { useState } from "react";
import PersonalDetail from "../PortfolioForm/PersonalDetail";
import SkillForm from "../PortfolioForm/SkillForm";
import ExperienceForm from "../PortfolioForm/ExperienceForm";
import ProjectForm from "../PortfolioForm/ProjectForm";
import AchievementForm from "../PortfolioForm/AchievementForm";

const PortfolioCreate: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextClick = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 5));
  };

  const handlePreviousClick = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNextClick();
  };

  return (
    <>
      <ol className="mb-4 flex w-full items-center sm:mb-5">
        <li className={`w-full ${currentStep >= 0 ? "text-[#A0FD32]" : ""}`}>
          <div
            className={`flex w-full items-center ${currentStep >= 0 ? "after:border-[#A0FD32]" : "after:border-gray-100"} after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-['']`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${currentStep >= 0 ? "bg-[#A0FD32] text-white" : "bg-gray-100 text-gray-500"} lg:h-12 lg:w-12`}
            >
              1
            </div>
          </div>
          <div>Personal Info</div>
        </li>
        <li className={`w-full ${currentStep >= 1 ? "text-[#A0FD32]" : ""}`}>
          <div
            className={`flex w-full items-center ${currentStep >= 1 ? "after:border-[#A0FD32]" : "after:border-gray-100"} after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-['']`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${currentStep >= 1 ? "bg-[#A0FD32] text-white" : "bg-gray-100 text-gray-500"} lg:h-12 lg:w-12`}
            >
              2
            </div>
          </div>
          <div>Skills</div>
        </li>
        <li className={`w-full ${currentStep >= 2 ? "text-[#A0FD32]" : ""}`}>
          <div
            className={`flex w-full items-center ${currentStep >= 2 ? "after:border-[#A0FD32]" : "after:border-gray-100"} after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-['']`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${currentStep >= 2 ? "bg-[#A0FD32] text-white" : "bg-gray-100 text-gray-500"} lg:h-12 lg:w-12`}
            >
              3
            </div>
          </div>
          <div>Experience</div>
        </li>
        <li className={`w-full ${currentStep >= 3 ? "text-[#A0FD32]" : ""}`}>
          <div
            className={`flex w-full items-center ${currentStep >= 3 ? "after:border-[#A0FD32]" : "after:border-gray-100"} after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-['']`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${currentStep >= 3 ? "bg-[#A0FD32] text-white" : "bg-gray-100 text-gray-500"} lg:h-12 lg:w-12`}
            >
              4
            </div>
          </div>
          <div>Project</div>
        </li>
        <li className={`w-full ${currentStep >= 4 ? "text-[#A0FD32]" : ""}`}>
          <div
            className={`flex w-full items-center ${currentStep >= 4 ? "after:border-[#A0FD32]" : "after:border-gray-100"} after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-['']`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${currentStep >= 4 ? "bg-[#A0FD32] text-white" : "bg-gray-100 text-gray-500"} lg:h-12 lg:w-12`}
            >
              5
            </div>
          </div>
          <div>Achievements</div>
        </li>
        <li className={`w-full ${currentStep >= 5 ? "text-[#A0FD32]" : ""}`}>
          <div className="flex w-full items-center">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${currentStep >= 5 ? "bg-[#A0FD32] text-white" : "bg-gray-100 text-gray-500"} lg:h-12 lg:w-12`}
            >
              <svg
                className={`h-4 w-4 ${currentStep >= 5 ? "text-white" : "text-gray-500"} lg:h-6 lg:w-6`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
              </svg>
            </div>
          </div>
          <div>Publish</div>
        </li>
      </ol>
      <form action="#" onSubmit={handleFormSubmit}>
        {currentStep === 0 && (
          <PersonalDetail handleNextClick={handleNextClick} />
        )}
        {currentStep === 1 && <SkillForm handleNextClick={handleNextClick} />}
        {currentStep === 2 && (
          <ExperienceForm handleNextClick={handleNextClick} />
        )}
        {currentStep === 3 && <ProjectForm handleNextClick={handleNextClick} />}
        {currentStep === 4 && (
          <AchievementForm handleNextClick={handleNextClick} />
        )}

        {currentStep === 4 && (
          <div className="mt-4 flex justify-end">
            <button
              className="rounded-lg bg-[#A0FD32] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#A0FD32] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#A0FD32] dark:hover:bg-[#A0FD32] dark:focus:ring-[#A0FD32]"
              type="submit"
            >
              Publish
            </button>
          </div>
        )}
      </form>

      <div className="mt-4 flex justify-between">
        {currentStep > 0 && (
          <button
            className="bg-gray-300 hover:bg-gray-400 focus:ring-gray-300 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4  dark:border dark:border-[#A0FD32] dark:text-white dark:hover:bg-[#A0FD32]"
            onClick={handlePreviousClick}
          >
            Previous Step
          </button>
        )}
        {currentStep < 4 && (
          <button
            className="rounded-lg bg-[#A0FD32] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#A0FD32] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#A0FD32] dark:hover:bg-[#A0FD32] dark:focus:ring-[#A0FD32]"
            onClick={handleNextClick}
          >
            Next Step
          </button>
        )}
      </div>
    </>
  );
};

export default PortfolioCreate;
