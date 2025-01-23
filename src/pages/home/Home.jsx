import React, { useEffect } from "react";
import Items from "../../components/items/Items";
import Cart from "../../components/cart/Cart";


const Home = () => {

  return (
    <>
      <div className="w-full bg-green-50 p-2 h-full flex gap-4">    
          <div className="w-[60%] max-h-[530px] overflow-y-auto">
         <Items />
          </div>            
          <div className="w-[40%]">
         <Cart />
          </div>
        </div>
    </>
  );
};

export default Home;
