import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
    <h1 className="text-4xl font-bold  text-red-600  cursor-pointer">
     NETFLIX
    </h1>
    <div>
        <button className='text-white pr-5 cursor-pointer'>Sign In</button>
        <button className='text-white bg-red-600 px-4 py-2 rounded cursor-pointer'>Sign Up</button>
    </div>
    </div>
  )
}

export default Navbar