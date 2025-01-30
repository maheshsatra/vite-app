import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showPaymentType,
  removePaymentType,
  handleChange,
} from "../../../components/redux/paymentSlice";
import { BsCash } from "react-icons/bs";
import { FaCreditCard, FaMoneyCheckAlt } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const Payment = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.payment);

  const handleShowPaymentType = (name) => {
    dispatch(showPaymentType({ name }));
  };

  const handleRemovePaymentType = (name) => {
    dispatch(removePaymentType({ name }));
  };

  const handleInputChange = (e, paymentType) => {
    const { name, value } = e.target;
    dispatch(handleChange({ paymentType, name, value }));
  };

  return (
    <>
      <div>
        <p className="w-full font-semibold text-green-700 text-[15px]">
          Payment Info
        </p>
        <div className="flex gap-6 mt-2">
          <BsCash
            className="w-8 h-8 cursor-pointer text-green-900"
            title="Cash"
            onClick={() => handleShowPaymentType("cash")}
          />
          <FaCreditCard
            className="w-7 h-7 cursor-pointer text-green-900"
            title="Card"
            onClick={() => handleShowPaymentType("card")}
          />
          <FaMoneyCheckAlt
            className="w-8 h-8 cursor-pointer text-green-900"
            title="Check"
            onClick={() => handleShowPaymentType("check")}
          />
        </div>

        {data.cash.isActive && (
          <div className="w-full my-4">
            <p className="text-lg font-semibold">Cash</p>
            <div className="w-full flex items-center gap-3">
              <div className="w-[95%] flex gap-3">
                <input
                  type="text"
                  name="amount"
                  value={data.cash.amount}
                  onChange={(e) => handleInputChange(e, "cash")}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Amount"
                />
                <button className="bg-green-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                  Apply
                </button>
              </div>
              <div className="w-[5%] flex justify-center">
                <FaTrashCan
                  className="w-5 h-5 cursor-pointer text-red-900"
                  onClick={() => handleRemovePaymentType("cash")}
                />
              </div>
            </div>
          </div>
        )}

        {data.check.isActive && (
          <div className="w-full my-4">
            <p className="text-lg font-semibold">Check</p>
            <div className="w-full flex items-center gap-3">
              <div className="w-[95%] flex gap-3">
                <input
                  type="text"
                  name="amount"
                  placeholder="Amount"
                  value={data.check.amount}
                  onChange={(e) => handleInputChange(e, "check")}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  name="referanceNum"
                  placeholder="Reference Number"
                  value={data.check.referanceNum}
                  onChange={(e) => handleInputChange(e, "check")}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-green-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                  Apply
                </button>
              </div>
              <div className="w-[5%] flex justify-center">
                <FaTrashCan
                  className="w-5 h-5 cursor-pointer text-red-900"
                  onClick={() => handleRemovePaymentType("check")}
                />
              </div>
            </div>
          </div>
        )}

        {data.card.isActive && (
          <div className="w-full my-4">
            <p className="text-lg font-semibold">Credit Card</p>
            <div className="w-full flex items-center gap-3">
              <div className="w-[95%] flex gap-3">
                <input
                  type="text"
                  name="amount"
                  placeholder="Amount"
                  value={data.card.amount}
                  onChange={(e) => handleInputChange(e, "card")}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  name="cardNum"
                  placeholder="Card Number"
                  value={data.card.cardNum}
                  onChange={(e) => handleInputChange(e, "card")}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-green-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                  Apply
                </button>
              </div>
              <div className="w-[5%] flex justify-center">
                <FaTrashCan
                  className="w-5 h-5 cursor-pointer text-red-900"
                  onClick={() => handleRemovePaymentType("card")}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Payment;
