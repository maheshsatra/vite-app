import React, { useState } from 'react'
import { LoginForm } from './components/LoginForm'
import { SignupForm } from './components/SignupForm'
import { initialState } from './components/utilities'

const Login = () => {
    const[data,setData]=useState(initialState)
  return (
    <>
    {data.isLogin ?
     <LoginForm data={data} setData={setData} /> 
     :<SignupForm data={data} setData={setData} />}
    </>
  )
}

export default Login