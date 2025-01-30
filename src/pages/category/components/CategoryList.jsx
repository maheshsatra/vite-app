import React from "react";

const CategoryList = () => {
  return (
    <>
      <table className="table-auto w-full text-left border-collapse border border-gray-300 my-8">
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2 w-[100px]">SNo</th>
          <th className="border border-gray-300 p-2">Category</th>
          <th className="border border-gray-300 p-2">Actions</th>
        </tr>
        <tr>
          <td colSpan={3}>No Category's Available</td>
        </tr>
      </table>
    </>
  );
};

export default CategoryList;
