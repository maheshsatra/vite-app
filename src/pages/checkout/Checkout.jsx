import React from "react";
import ItemInfo from "./components/ItemInfo";
import Title from "../../components/feachers/Titel";
import Payment from "./components/Payment";

const Checkout = () => {
  return (
    <>
      <div className="w-full bg-green-50 pt-2 h-full ">
        <div className="flex gap-4 w-full">
          <div className="w-[60%] ">
            <div className="w-full max-h-[530px] overflow-y-auto bg-white p-2">
              <Title name="checkout" tag="h2" />
              <ItemInfo />
            </div>
          </div>
          <div className="w-[40%]">
            <Payment />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
