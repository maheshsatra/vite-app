import React from 'react'
import ItemInfo from './components/ItemInfo'
import Title from "../../components/feachers/Titel"

const Checkout = () => {
  return (
<>
<div className="w-full bg-green-50 p-2 h-full ">   
  <Title name="checkout" tag="h2" /> 
  <div className='flex gap-4 w-full'>
          <div className="w-[60%] max-h-[530px] overflow-y-auto">
        <ItemInfo />
          </div>            
          <div className="w-[40%]">
         payment info
          </div>
          </div>
        </div>
</>
  )
}

export default Checkout