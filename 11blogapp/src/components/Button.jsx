import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  hoverColor = "hover:bg-blue-700",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none ${bgColor} ${textColor} ${hoverColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
