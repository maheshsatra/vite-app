import React, { useState } from 'react'
import Popup from "../../components/popup/Popup"
import NewItem from './components/NewItem'
import { Initialstate } from './components/utils'
import ItemList from './components/ItemList'


const Items = () => {
  const[data,setData]=useState(Initialstate)
const showPopupNewItem = () =>{
  setData({...data,showPopup:true})
}
const closePopupNewItem = () =>{
  setData({showPopup: false,newItem:{
    itemName: "",
    itemPrice: "",
    discountPrice: "",
    itemDesc: "",
    itemImage: "",
    itemCategory: "",
    itemQuantity: "",
    itemId: null,
  }})
}

  return (
   <>
   <div className='w-full flex justify-between px-4'>
    <span className='text-green-700 text-2xl font-bold'>Items List</span>
    <span className="text-green-700 underline font-bold cursor-pointer" onClick={showPopupNewItem} >New</span>
   </div>
   <div className='w-full relative px-4'>
    <ItemList  data={data} setData={setData} />
    </div>

   <Popup 
   size='xl'
   isOpen={data.showPopup}
   onClose={closePopupNewItem}
   title="Create New Item"
   content={<NewItem data={data} setData={setData} />}
   />
   </>
  )
}

export default Items