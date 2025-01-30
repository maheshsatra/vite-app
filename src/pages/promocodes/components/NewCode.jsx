import React from "react";
import { BaseItemURL } from "../../../components/services/apis";
import createAxiosInstance from "../../../components/services/axiosInstance";
import { toast } from "react-toastify";
import { getAllPromoCodesData } from "../../../components/redux/promocodeSlice";
import { useDispatch } from "react-redux";

const NewCode = ({ data, setData }) => {
  const dispatch = useDispatch();
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

  // create new promo code function
  const handleNewCode = () => {
    const postObj = {
      promoCode: data.newCode.promoCode,
      promoName: data.newCode.promoName,
      promoType: data.newCode.promoType || "test",
      promoPrice: Number(data.newCode.promoPrice),
      promoDesc: data.newCode.promoDesc,
      id: data.newCode.id,
      startDate: data.newCode.startDate,
      endDate: data.newCode.endDate,
    };
    const itemAxios = createAxiosInstance("item");

    const message = data.newCode.itemId
      ? "item update successfuly"
      : "item save successfuly";
    itemAxios
      .post(`${BaseItemURL}/promo/savePromo`, postObj)
      .then((response) => {
        toast.success(response.data.message ? response.data.message : message);
        dispatch(getAllPromoCodesData(`${BaseItemURL}/promo/getAllPromoCodes`));
        setData({
          showPopup: false,
          newCode: {
            promoCode: "",
            promoName: "",
            promoType: "",
            promoPrice: "",
            promoDesc: "",
            id: null,
            startDate: "",
            endDate: "",
          },
        });
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
          placeholder="Promo Code Name"
          value={data.newCode.promoName}
          onChange={(e) => handleInputChange("promoName", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Promo Code"
          value={data.newCode.promoCode}
          onChange={(e) => handleInputChange("promoCode", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Promo code Price"
          value={data.newCode.promoPrice}
          onChange={(e) => handleInputChange("promoPrice", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Promo code Desc"
          value={data.newCode.promoDesc}
          onChange={(e) => handleInputChange("promoDesc", e.target.value)}
        />
        <input
          type="date"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Start Date"
          value={
            data.newCode.startDate
              ? new Date(data.newCode.startDate).toISOString().split("T")[0]
              : ""
          }
          onChange={(e) => handleInputChange("startDate", e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />
        <input
          type="date"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="End Date"
          value={
            data.newCode.endDate
              ? new Date(data.newCode.endDate).toISOString().split("T")[0]
              : ""
          }
          onChange={(e) => handleInputChange("endDate", e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div className="w-full mt-4 flex justify-end">
        <button
          class="bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={handleNewCode}
        >
          {data.newCode.id ? "Update" : "Submit"}
        </button>
      </div>
    </>
  );
};

export default NewCode;
