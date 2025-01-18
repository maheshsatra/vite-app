import React, { useState } from 'react';

const Input = ({ name, type, handleChange, value }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) setIsFocused(false); // If input is empty, label should go back to placeholder state
  };

  return (
    <div className="relative">
      <input
        id={name}
        type={type || "text"}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <label
        htmlFor={name}
        className={`capitalize absolute left-2 top-2 transition-all duration-200 ease-in-out text-gray-500 dark:text-gray-300 ${isFocused || value ? 'transform -translate-y-6 text-xs' : 'text-sm'}`}
      >
        {name}
      </label>
    </div>
  );
};

export default Input;
