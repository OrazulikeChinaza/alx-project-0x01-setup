import React from "react";

const Button: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
      {label}
    </button>
  );
};

export default Button;
