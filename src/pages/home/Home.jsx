import React, { useEffect } from "react";
import HomeItems from "./componets/HomeItems";
import HomeCart from "./componets/HomeCart";


const Home = () => {

  return (
    <>
      <div className="w-full bg-green-50 p-2 h-full flex gap-4">    
          <div className="w-[60%] max-h-[530px] overflow-y-auto">
         <HomeItems />
          </div>            
          <div className="w-[40%]">
         <HomeCart />
          </div>
        </div>
    </>
  );
};

export default Home;
