import React, { useState } from "react";
import NewCategory from "./components/NewCategory";
import Popup from "../../components/popup/Popup";
import { Initialstate } from "./components/utils";
import CategoryList from "./components/CategoryList";

const Category = () => {
  const [data, setData] = useState(Initialstate);
  const showPopupNewCategory = () => {
    setData({
      ...data,
      showPopup: true,
    });
  };
  const closePopupNewItem = () => {
    setData({
      ...data,
      showPopup: false,
    });
  };
  return (
    <>
      <div className="w-full flex justify-between px-4">
        <span className="text-green-700 text-2xl font-bold">Category List</span>
        <span
          className="text-green-700 underline font-bold cursor-pointer"
          onClick={showPopupNewCategory}
        >
          New
        </span>
      </div>
      <div className="w-full relative px-4">
        <CategoryList />
      </div>

      <Popup
        size="md"
        isOpen={data.showPopup}
        onClose={closePopupNewItem}
        title="Create New Category"
        content={<NewCategory data={data} setData={setData} />}
      />
    </>
  );
};

export default Category;
