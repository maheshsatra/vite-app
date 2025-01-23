import React from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (

      <div className="w-full h-[80vh] flex flex-col justify-center items-center text-center">
        <p className="text-3xl font-bold">404 | Page Not Found</p>
        <br />
        <p className="text-lg">
          Back to Home? <Link to="/home" className="text-green-500 font-semibold hover:underline">Click here</Link>
        </p>
      </div>
    );

}

export default Pagenotfound