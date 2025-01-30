import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemById,
  getItemsData,
} from "../../../components/redux/itemSlice";
import { BaseItemURL } from "../../../components/services/apis";
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { setPrice } from "../../../components/feachers/shortTitele";
import createAxiosInstance from "../../../components/services/axiosInstance";
import { toast } from "react-toastify";

const ItemList = ({ data, setData }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.items);
  const getItems = () => {
    dispatch(getItemsData(`${BaseItemURL}/item/getAllItems`));
  };
  //item edit function
  const onEdit = (list) => {
    setData({
      ...data,
      showPopup: true,
      newItem: {
        ...list,
        itemName: list.itemName,
        itemPrice: list.itemPrice,
        discountPrice: list.discountPrice,
        itemDesc: list.itemDesc,
        itemImage: list.itemImage,
        itemCategory: list.itemCategory,
        itemQuantity: list.itemQuantity,
        itemId: list._id,
      },
    });
  };

  // item delete function
  const onRemoveItem = async (list) => {
    try {
      const axiosUser = createAxiosInstance("item");
      const res = await axiosUser.delete(
        `${BaseItemURL}/item/deleteItemById/${list._id}`
      );
      toast.success(res.data.message);
      getItems();
      // dispatch(deleteItemById(list._id));
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    getItems();
  }, [dispatch]);
  return (
    <>
      <table className="table-auto w-full text-left border-collapse border border-gray-300 my-8">
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2">SNo</th>
          <th className="border border-gray-300 p-2">Item Image</th>
          <th className="border border-gray-300 p-2 w-[50%]">Item Name</th>
          <th className="border border-gray-300 p-2">Item Price</th>
          <th className="border border-gray-300 p-2">Actions</th>
        </tr>
        {items && items.length > 0 ? (
          items.map((list, inx) => {
            return (
              <tr key={list._id}>
                <td className="border border-gray-300 p-2">{inx + 1}</td>
                <td className="border border-gray-300 p-2">
                  <img
                    src={list.itemImage}
                    alt={list.itemName}
                    className="w-[50px] h-[50px] object-contain"
                  />
                </td>
                <td className="border border-gray-300 p-2">{list.itemName}</td>
                <td className="border border-gray-300 p-2">
                  {setPrice(list.itemPrice)}
                </td>
                <td className="border border-gray-300 p-2">
                  <div className="w-full flex gap-3">
                    <MdEdit
                      onClick={(e) => onEdit(list)}
                      className="text-green-700 w-5 h-5 cursor-pointer"
                    />
                    <FaRegTrashAlt
                      onClick={(e) => onRemoveItem(list)}
                      className="text-red-700 w-5 h-5 cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={3}>No Items Available</td>
          </tr>
        )}
      </table>
    </>
  );
};

export default ItemList;
