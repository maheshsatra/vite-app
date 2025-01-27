import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice, ShortTitel } from "../../../components/feachers/shortTitele";
import { removeFromCart } from "../../../components/redux/cartSlice";
import Discount from "./Discount";
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ItemInfo = () => {
  const [showItems, setShowItems] = useState(true);
  const [showDiscount, setShowDiscount] = useState(false);
  const cartItem = useSelector((state) => state.cart);
  console.log(cartItem);
  const dispatch = useDispatch();

  const handleItemToggle = () => {
    setShowItems(!showItems);
    setShowDiscount(false);
  };

  const handleDiscountToggle = () => {
    setShowDiscount(!showDiscount);
    setShowItems(false);
  };

  return (
    <>
      <div className="w-full bg-green-50 p-2">
        <p
          className="w-full bg-green-100 p-2 cursor-pointer font-bold"
          onClick={handleItemToggle}
        >
          Item Info
        </p>
        <div
          className={`w-full py-4 px-2  ${
            cartItem.itemList.length > 5
          } ? "h-[200px] overflow-y-auto" : "h-auto"`}
        >
          {showItems && (
            <>
              {cartItem.itemList.length > 0 ? (
                <table className="w-full table table-fixed text-left">
                  <thead>
                    <tr className="bg-green-700 text-white">
                      <th className="p-2 w-[10%]">Sno</th>
                      <th className="p-2 w-[40%]">Name</th>
                      <th className="p-2">Quantity</th>
                      <th className="p-2">Price</th>
                      <th className="p-2">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.itemList.map((list, inx) => (
                      <tr key={inx} className="border-b-2">
                        <td className="p-2">{inx + 1}</td>
                        <td className="p-2">{ShortTitel(list.title, 30)}</td>
                        <td className="p-2">{list.quantity}</td>
                        <td className="p-2">{setPrice(list.price)}</td>
                        <td
                          className="p-2 cursor-pointer text-green-700 font-semibold"
                          onClick={() => dispatch(removeFromCart(list))}
                        >
                          <BsTrash3Fill />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <>
                  <div>
                    No Items Go To Products. <Link to="/home" className="text-green-700 font-semibold">Click me</Link>
                  </div>{" "}
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div className="w-full bg-green-50 p-2">
        <p
          className="w-full bg-green-100 p-2 cursor-pointer font-bold"
          onClick={handleDiscountToggle} // Toggle discount info
        >
          Discount
        </p>
        <div className="w-full py-4 px-2 ">{showDiscount && <Discount />}</div>
      </div>
    </>
  );
};

export default ItemInfo;
