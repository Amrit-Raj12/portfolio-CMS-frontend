import React from "react";
import DynamicInput from "../DynamicInputField/DynamicInput";
import DynamicSkill from "../DynamicSkillField/DynamicSkillField";

interface SkillFormProps {
  handleNextClick: () => void;
}

const SkillForm: React.FC<SkillFormProps> = ({ handleNextClick }) => {
  return (
    <div>
      <h3 className="text-gray-900 mb-4 text-lg font-medium leading-none dark:text-white">
        Skills
      </h3>
      <DynamicSkill />
    </div>
  );
};

export default SkillForm;
