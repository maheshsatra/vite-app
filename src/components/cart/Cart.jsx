import React from "react";
import Title from "../feachers/Titel";
import { useDispatch, useSelector } from "react-redux";
import { setPrice, ShortTitel } from "../feachers/shortTitele";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { BsTrash3Fill } from "react-icons/bs";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full p-4">
        <Title name={"Cart"} tag="h3" />
        <div className="items mt-4">
        {cartItem.itemList.length > 0 ? (
  <>
    <table className="w-full table table-fixed text-left">
      <thead>
        <tr className="bg-green-700 text-white">
          <th className="p-2 w-[10%]">Sno</th>
          <th className="p-2 w-[45%]">Name</th>
          <th className="p-2">Quantity</th>
          <th className="p-2">Price</th>
          <th className="p-2">Remove</th>
        </tr>
      </thead>
      <tbody>
        {cartItem.itemList.map((list, inx) => (
          <tr key={inx} className="border-b-2 text-[14px]">
            <td className="p-2">{inx + 1}</td>
            <td className="p-2">{ShortTitel(list.title,25)}</td>
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
    <div className="w-full flex justify-end mt-4">
      <button  onClick={()=>navigate("/checkout")} className="px-4 py-1 bg-green-500 text-white rounded-sm">
        Checkout
      </button>
    </div>
  </>
) : (
  "No Items"
)}

        </div>
      </div>
    </>
  );
};

export default Cart;
