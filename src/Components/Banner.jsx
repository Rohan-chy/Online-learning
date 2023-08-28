import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-blue-500 w-full py-[100px]' id="banner">
        <div className='max-w-[1240px] mx-auto text-center font-bold my-[50px]'>
            <h1 className='text-4xl p-2 '>Learn with us</h1>
            <h1 className='text-[50px] text-white p-2'>Grow with us</h1>
            <h1 className=' text-3xl md:text-4xl text-white p-2'>Learn
            <Typed className='pl-3'
                    strings={['Web Development','Digital Marketing' ,'SEO']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                /> 
            </h1>
            <button className='p-3 bg-black text-white text-xl my-3 rounded'>Get Started</button>
        </div>
    </div>
  )
}

export default Banner;