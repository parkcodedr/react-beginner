import React, { useRef, useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const inputRef = useRef(null);

  const onFormSubmit = (value) => {
    setFormData({ ...formData, value });
  };

  const onfocus = () => {
    console.log({ inputRef });
    inputRef.current.hidden = true;
  };
  console.log({ formData });

  return (
    <div>
      {step === 1 ? (
        <StepOne setStep={setStep} onFormSubmit={onFormSubmit} step={step} />
      ) : null}
      {step === 2 ? <StepTwo setStep={setStep} step={step} /> : null}
      <label></label>
      <input
        name="file"
        placeholder="Email"
        type="file"
        className="border-blue-300 h-11 text-black hidden"
        ref={inputRef}
      />

      <button onClick={onfocus}>focus</button>
    </div>
  );
};

export default Signup;
