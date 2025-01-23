import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyDiscount, removeDiscount } from "../../../components/redux/cartSlice";

const Discount = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const [code, setCode] = useState("");
  const handleDiscountApply = () => {
    if (code === "uma@20") {
      dispatch(applyDiscount(20));
    }
  };
  const handleRemoveDiscount = () => {
    dispatch(removeDiscount());
    setCode("")
  };
  return (
    <>
      <div className="w-full flex gap-4">
        <div className="w-full relative">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            className="w-full border rounded-sm p-2"
            placeholder="code"
          />
          {code.length > 1 && (
            <span
              className="cursor-pointer absolute top-0 right-1 p-2 font-bold text-gray-400"
              onClick={handleRemoveDiscount}
            >
              X
            </span>
          )}
        </div>
        {cartItem.itemList.length !== 0 ?
        <button
          className={`w-[80px] px-4 py-1 bg-green-500 text-white rounded-sm `}
          onClick={handleDiscountApply}
          
        >Apply</button>
        :
        <button
          className={`w-[80px] px-4 py-1 bg-gray-500 text-white rounded-sm cursor-not-allowed`}
          disabled={true}
        >Apply</button>
}
      </div>
    </>
  );
};

export default Discount;
