import React from "react";

const StepTwo = ({ step, setStep }) => {
  const onChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleNext = () => {
    setStep(3);
  };

  return (
    <div>
      <div>
        <label>Username</label>
        <input
          onChange={onChange}
          name="password"
          className="border-blue-300 h-11 bg-white"
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-red-500 px-5 h-8 rounded-2xl text-white mt-4"
      >
        Submit
      </button>
    </div>
  );
};

export default StepTwo;
