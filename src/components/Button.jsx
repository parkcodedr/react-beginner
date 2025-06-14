import React from "react";

const Button = ({
  title = "Button",
  bg = "bg-purple-800",
  color = "text-white",
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`border-0 rounded-2xl h-11 px-4 cursor-pointer ${bg} ${color}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
