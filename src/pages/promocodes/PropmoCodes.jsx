import React, { useState } from "react";
import Popup from "../../components/popup/Popup";
import { Initialstate } from "./components/utils";
import NewCode from "./components/NewCode";
import List from "./components/List";

const PropmoCodes = () => {
  const [data, setData] = useState(Initialstate);
  const showPopupNewItem = () => {
    setData({
      ...data,
      showPopup: true,
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
  };
  const closePopupNewItem = () => {
    setData({
      ...data,
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
  };

  return (
    <>
      <div className="w-full flex justify-between px-4">
        <span className="text-green-700 text-2xl font-bold">
          Promo Code List
        </span>
        <span
          className="text-green-700 underline font-bold cursor-pointer"
          onClick={showPopupNewItem}
        >
          New
        </span>
      </div>
      <div className="w-full relative px-4">
        <List data={data} setData={setData} />
      </div>

      <Popup
        size="lg"
        isOpen={data.showPopup}
        onClose={closePopupNewItem}
        title="Create New Promo Code"
        content={<NewCode data={data} setData={setData} />}
      />
    </>
  );
};

export default PropmoCodes;
