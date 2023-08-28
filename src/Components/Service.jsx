import React from 'react'
import code from "../Assets/Learn-coding-online.jpeg"

const Service = () => {
  return (
    <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 my-[50px] '>
        <div className='col-span-1 flex justify-center items-center'>
            <img src={code} alt="learn to code" className='w-[80%]'/>
        </div>
        <div className='col-span-1 my-[50px] p-4 text-center'>
            <h1 className='text-3xl font-bold text-gray-700'>Our servies</h1>
            <p className='text-gray-600 text-2xl'>As we believe in client`s satisfaction, we provide better and high quality services to our valuable customers. <br /> Customer`s satisfaction is our success.</p>
            <button className='p-3 bg-black text-white text-xl my-3 rounded'>Get Started</button>
        </div>
    </div>
  )
}

export default Service;