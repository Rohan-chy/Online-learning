import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 grid grid-cols-3 gap-4 my-[50px]' id="plan">
        <div className=' col-span-3 md:col-span-1 h-[400px] shadow-2xl hover:scale-105 duration-300 text-center p-5'>
           <h1 className='text-3xl font-semibold'> Web Development</h1>
           <h1 className='my-8 text-2xl font-semibold'>Rs.1999</h1>
           <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, cumque quia laudantium eligendi consequatur itaque perspiciatis assumenda tenetur id maiores nostrum voluptatem voluptate aut quam repudiandae, reprehenderit iusto ducimus!</p>
           <button className='p-3 bg-[green] text-white text-xl my-3 rounded'>Get Started</button>
            </div>

        <div className='col-span-3 md:col-span-1 h-[400px] shadow-xl bg-slate-100 hover:scale-105 duration-300 text-center p-5 '>
        <h1 className='text-3xl font-semibold'> Digital Marketing</h1>
           <h1 className='my-8 text-2xl font-semibold'>Rs.1999</h1>
           <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, cumque quia laudantium eligendi consequatur itaque perspiciatis assumenda tenetur id maiores nostrum voluptatem voluptate aut quam repudiandae, reprehenderit iusto ducimus!</p>
           <button className='p-3 bg-[green] text-white text-xl my-3 rounded'>Get Started</button>
        </div>

        <div className='col-span-3 md:col-span-1 h-[400px] shadow-2xl hover:scale-105 duration-300 text-center p-5  '>
        <h1 className='text-3xl font-semibold'>SEO</h1>
           <h1 className='my-8 text-2xl font-semibold'>Rs.1999</h1>
           <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, cumque quia laudantium eligendi consequatur itaque perspiciatis assumenda tenetur id maiores nostrum voluptatem voluptate aut quam repudiandae, reprehenderit iusto ducimus!</p>
           <button className='p-3 bg-[green] text-white text-xl my-3 rounded'>Get Started</button>
        </div>
    </div>
  )
}

export default Plan;