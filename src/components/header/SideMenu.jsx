import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
<>
<div className='w-full'>
    <p className='w-full my-2'><Link to="/items">Items</Link></p>
    <p className='w-full my-2'><Link to="/promocode">Promo Codes</Link></p>
</div>
</>
  )
}

export default SideMenu