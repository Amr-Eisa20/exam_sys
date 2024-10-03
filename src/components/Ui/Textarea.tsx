import React from "react";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => (
  <textarea
    ref={ref}
    {...props}
    className={`border-[1px] border-gray-300 text-black shadow-md focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-lg px-3 py-3 text-md w-full bg-transparent ${
      props.className || ""
    }`}
  />
));

Textarea.displayName = "Textarea";

export default Textarea;
