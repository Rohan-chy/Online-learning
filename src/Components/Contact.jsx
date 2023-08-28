import React from 'react'

const Contact = () => {
  return (
    <div className='bg-blue-500 w-full p-4' >
        <div className='max-w-[1240px] mx-auto md:flex justify-between items-center'>
            <div className='text-white'>
                <h1 className='text-3xl font-bold '>Want to learn skills ?</h1>
                <span className='text-xl'>Join with us and stay up to date</span>
            </div>
            <div className='my-3'>
                <input type="text" placeholder='Email' className='p-3 text-xl mr-2 rounded outline-none '  />
                <button className='p-3 bg-black text-white text-xl my-3 rounded'>Get Started</button>
                <h1 className='text-xl text-white' >We care about the protection of your data . Read our <br/><a href="#" className='text-[blue]'> Privacy Policy</a></h1>
            </div>
        </div>
    </div>
  )
}

export default Contact;