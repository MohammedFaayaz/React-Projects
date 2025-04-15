import React, { useId, forwardRef } from "react";

const Select = forwardRef(({ options, label, className = "", ...props }, ref) => {
  const id = useId();
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-white font-semibold mb-1">
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-4 py-2 rounded-lg bg-gray-900 text-white outline-none border border-gray-700 w-full 
        focus:ring-2 focus:ring-blue-500 hover:bg-gray-800 transition-all duration-200 ${className}`}
      >
        {options.map((option, index) => (
          <option key={index} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
