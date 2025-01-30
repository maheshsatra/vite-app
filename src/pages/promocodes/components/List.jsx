import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseItemURL } from "../../../components/services/apis";
import { getAllPromoCodesData } from "../../../components/redux/promocodeSlice";
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatDate, setPrice } from "../../../components/feachers/shortTitele";

const List = ({ data, setData }) => {
  const dispatch = useDispatch();

  const { codes, status, isError } = useSelector((state) => state.promocode);
  // get code list function
  const getCodeList = () => {
    dispatch(getAllPromoCodesData(`${BaseItemURL}/promo/getAllPromoCodes`));
  };
  console.log(codes);
  // edit sing code function
  const onEdit = (code) => {
    setData({
      ...data,
      showPopup: true,
      newCode: {
        promoCode: code.promoCode,
        promoName: code.promoName,
        promoType: "test",
        promoPrice: code.promoPrice,
        promoDesc: code.promoDesc,
        id: code._id,
        startDate: code.startDate,
        endDate: code.endDate,
      },
    });
  };

  useEffect(() => {
    getCodeList();
  }, [dispatch]);
  return (
    <>
      <table className="table-auto w-full text-left border-collapse border border-gray-300 my-8">
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2">SNo</th>
          <th className="border border-gray-300 p-2">Prmo Code Name</th>
          <th className="border border-gray-300 p-2 ">Prmo Code</th>
          <th className="border border-gray-300 p-2">Promo Code Price</th>
          <th className="border border-gray-300 p-2">Start Date</th>
          <th className="border border-gray-300 p-2">End Date</th>
          <th className="border border-gray-300 p-2">Actions</th>
        </tr>
        {codes && codes.length > 0 ? (
          codes.map((code, inx) => {
            return (
              <tr key={inx}>
                <td className="border border-gray-300 p-2">{inx + 1}</td>
                <td className="border border-gray-300 p-2">{code.promoName}</td>
                <td className="border border-gray-300 p-2">{code.promoCode}</td>
                <td className="border border-gray-300 p-2">
                  {setPrice(code.promoPrice)}
                </td>
                <td className="border border-gray-300 p-2">
                  {formatDate(code.startDate)}
                </td>
                <td className="border border-gray-300 p-2">
                  {formatDate(code.endDate)}
                </td>
                <td className="border border-gray-300 p-2">
                  <div className="w-full flex gap-3">
                    <MdEdit
                      onClick={(e) => onEdit(code)}
                      className="text-green-700 w-5 h-5 cursor-pointer"
                    />
                    <FaRegTrashAlt
                      //   onClick={(e) => onRemoveItem(code)}
                      className="text-red-700 w-5 h-5 cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={7}>No Promo codes Available</td>
          </tr>
        )}
      </table>
    </>
  );
};

export default List;
