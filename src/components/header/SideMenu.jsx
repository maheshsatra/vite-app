import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../feachers/Titel'

const SideMenu = () => {
    const sideMenuList = [
        {id:1,link:"/items",name:"Items"},
        {id:1,link:"/promocode",name:"Promo Codes"},
    ]
  return (
<>
<div className='w-full h-[90vh] bg-green-100 p-2'>
    <Title tag='h3' name="admin screens" />
   {sideMenuList && sideMenuList.length > 0 ?
   sideMenuList.map(list=>{
    return(
        <p className='w-full my-2 text-green-800 font-semibold' key={list.id}><Link to={list.link}>{list.name}</Link></p>
    )
   })
   :"no admin menu available"
}
</div>
</>
  )
}

export default SideMenu