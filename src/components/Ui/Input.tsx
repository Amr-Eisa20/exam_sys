import { forwardRef } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, IProps>(({ ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className="border border-gray-300 p-4 w-full focus:border-blue-300 text-black 
    focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-md 
    "
      {...rest}
    />
  );
});

export default Input;
