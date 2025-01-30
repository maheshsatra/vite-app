import React from "react";

const NewCategory = ({ data, setData }) => {
  // Handle input changes
  const handleInputChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      newCode: {
        ...prevData.newCode,
        [name]: value,
      },
    }));
  };

  // save function
  const handleNewCode = () => {};
  return (
    <>
      <div className="w-full flex gap-3 mb-2">
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Category Name"
          value={data.newCategory.categoryName}
          onChange={(e) => handleInputChange("categoryName", e.target.value)}
        />
        <button
          class="w-[100px] bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={handleNewCode}
        >
          {data.newCategory.id ? "Update" : "Submit"}
        </button>
      </div>
    </>
  );
};

export default NewCategory;
