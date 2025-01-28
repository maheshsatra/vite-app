import React, { useEffect, useState } from 'react'
import Titel from '../../components/feachers/Titel'
import Popup from "../../components/popup/Popup"
import NewItem from './components/NewItem'
import { Initialstate } from './components/utils'
import axios from 'axios'


const Items = () => {
  const[data,setData]=useState(Initialstate)
const showPopupNewItem = () =>{
  setData({...data,showPopup:true})
}
const closePopupNewItem = () =>{
  setData({...data,showPopup:false})
}
const getItemList = async()=>{
  const headers = {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("loginInfo"))?.token}`, 
    'Content-Type': 'application/json' 
  }; 
 await axios
    .get("http://10.10.10.23:3031/api/item/getAllItems", {headers})  
    .then((response) => {
     console.log(response)
    })
    .catch((error) => {
      toast.error(error.response.data.message ? error.response.data.message :"Error, please try again!");
    });
}
useEffect(()=>{
  getItemList()
})

  return (
   <>
   <div className='w-full flex justify-between px-4'>
    <Titel tag="h2" name="Item List" />
    <button className="text-green-700 underline font-bold" onClick={showPopupNewItem} >
            New
        </button>
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