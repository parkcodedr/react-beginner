import React, { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setErrors((prev) => {
      return {
        ...prev,
        [name]: "",
      };
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (formValues.firstname == "") {
      setErrors({
        ...errors,
        firstname: "Firstname is required",
      });
      return;
    }
    console.log({ formValues });
    setFormValues({
      firstname: "",
      lastname: "",
      message: "",
    });
    console.log({ formValues });
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
        Contact sales
      </h2>
      <form onSubmit={onFormSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleInputChange}
                id="firstname"
                name="firstname"
                type="text"
                value={formValues.firstname}
                autoComplete="givenname"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              {errors.firstname ? (
                <span className="text-red-500">{errors.firstname}</span>
              ) : null}
            </div>
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastname"
                name="lastname"
                onChange={handleInputChange}
                type="text"
                value={formValues.lastname}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              {errors.lastname ? (
                <span className="text-red-500">{errors.lastname}</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              onChange={handleInputChange}
              name="message"
              value={formValues.message}
              rows={4}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              defaultValue={""}
            />
            {errors.message ? (
              <span className="text-red-500">{errors.message}</span>
            ) : null}
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
