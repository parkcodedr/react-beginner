import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = (data) => {
    console.log({ data });
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
        Contact sales
      </h2>
      <form onSubmit={handleSubmit(onFormSubmit)}>
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
                {...register("firstname", {
                  required: "Firstname is required",
                  maxLength: 4,
                })}
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="givenname"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              {errors.firstname && (
                <span className="text-red-500">
                  {errors?.firstname.message}
                </span>
              )}
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
                {...register("lastname", { required: true })}
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
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
              {...register("message")}
              name="message"
              rows={4}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              defaultValue={""}
            />
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

export default ContactUsForm;
