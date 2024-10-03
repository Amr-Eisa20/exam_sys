import React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    ref={ref}
    {...props}
    className={`border border-gray-300 p-4 w-full focus:border-blue-300 text-black 
    focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-md  ${
      props.className || ""
    }`}
  />
));

Input.displayName = "Input";

export default Input;
