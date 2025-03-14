import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import axios from "axios";
import { BaseItemURL } from "../../../components/services/apis";
import { getItemsData } from "../../../components/redux/itemSlice";
import { useDispatch } from "react-redux";

const NewItem = ({ data, setData }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  // Handle file input and convert it to base64
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        handleInputChange("itemImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle input changes
  const handleInputChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      newItem: {
        ...prevData.newItem,
        [name]: value,
      },
    }));
  };

  // Clear the image
  const removeImage = () => {
    setData((prevData) => ({
      ...prevData,
      newItem: {
        ...prevData.newItem,
        itemImage: "",
      },
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };
  // save new item function
  const handleNewItem = () => {
    const postObj = {
      itemName: data.newItem.itemName,
      itemPrice: Number(data.newItem.itemPrice),
      discountPrice: Number(data.newItem.discountPrice),
      itemDesc: data.newItem.itemDesc,
      itemImage: data.newItem.itemImage,
      itemCategory: data.newItem.itemCategory,
      itemQuantity: Number(data.newItem.itemQuantity),
      itemId: data.newItem.itemId,
    };
    const headers = {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("loginInfo"))?.token
      }`,
      "Content-Type": "application/json",
    };
    const message = data.newItem.itemId
      ? "item update successfuly"
      : "item save successfuly";

    setData({
      showPopup: false,
      newItem: {
        itemName: "",
        itemPrice: "",
        discountPrice: "",
        itemDesc: "",
        itemImage: "",
        itemCategory: "",
        itemQuantity: "",
        itemId: null,
      },
    });
    axios
      .post(`${BaseItemURL}/item/createItem`, postObj, { headers })
      .then((response) => {
        toast.success(response.data.message ? response.data.message : message);
        dispatch(getItemsData(`${BaseItemURL}/item/getAllItems`));
      })
      .catch((error) => {
        toast.error(
          error.response.data.message
            ? error.response.data.message
            : "Error, please try again!"
        );
      });
  };

  return (
    <>
      <div className="w-full grid grid-cols-2 gap-3 mb-2">
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Item Name"
          value={data.newItem.itemName}
          onChange={(e) => handleInputChange("itemName", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Item Category"
          value={data.newItem.itemCategory}
          onChange={(e) => handleInputChange("itemCategory", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Item Quantity"
          value={data.newItem.itemQuantity}
          onChange={(e) => handleInputChange("itemQuantity", e.target.value)}
        />
        <div className="w-full grid grid-cols-2 gap-3">
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Item Price"
            value={data.newItem.itemPrice}
            onChange={(e) => handleInputChange("itemPrice", e.target.value)}
          />
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Discount Price"
            value={data.newItem.discountPrice}
            onChange={(e) => handleInputChange("discountPrice", e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex gap-3">
        <div className="w-1/2">
          <textarea
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[150px] max-h-[200px]"
            placeholder="Item Desc"
            value={data.newItem.itemDesc}
            onChange={(e) => handleInputChange("itemDesc", e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <input
            ref={fileInputRef}
            type="file"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            accept="image/*"
            onChange={handleFileChange}
          />
          {data?.newItem?.itemImage && (
            <div className="relative p-2 w-[100px] h-[100px]">
              <RxCross2
                className="absolute top-1 right-1 cursor-pointer"
                onClick={removeImage}
              />
              <img
                src={data?.newItem?.itemImage}
                className="w-[100px] h-[100px] object-contain"
                alt={
                  data.newItem.itemName
                    ? data.newItem.itemName
                    : "No Item Available"
                }
              />
            </div>
          )}
        </div>
      </div>
      <div className="w-full mt-2 flex justify-end">
        <button
          class="bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={handleNewItem}
        >
          {data.newItem._id ? "Update" : "Submit"}
        </button>
      </div>
    </>
  );
};

export default NewItem;
