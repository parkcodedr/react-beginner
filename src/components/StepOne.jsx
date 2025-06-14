import React, { useState } from "react";

const StepOne = ({ step, setStep, onFormSubmit }) => {
  const [username, setUsername] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleNext = () => {
    onFormSubmit(username);
    setStep(2);
  };

  console.log({ username });

  return (
    <div>
      <div>
        <label>Username</label>
        <input
          onChange={onChange}
          name="username"
          className="border-blue-300 h-11 bg-white"
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-red-500 px-5 h-8 rounded-2xl text-white mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
