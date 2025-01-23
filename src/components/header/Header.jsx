import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const onLogout = () =>{
    localStorage.removeItem("loginInfo")
    navigate("/")
  }
  return (
<>
<div className='w-full flex justify-between items-center p-2'>
    <div className='logo'>
        Logo
    </div>
    <div className='nav flex-grow flex justify-center gap-4'>
        <span className='text-green-700 font-semibold'>
            <NavLink to="/home">Home</NavLink>
        </span>
        <span className='text-green-700 font-semibold'>
            <NavLink to="/about">About</NavLink>
        </span>
        <span className='text-green-700 font-semibold'>
            <NavLink to="/contact">Contact</NavLink>
        </span>
    </div>
    <div>
        <button className='px-4 py-2 bg-green-700 text-white rounded-md' onClick={onLogout}>
            Logout
        </button>
    </div>
</div>

</>
  )
}

export default Header