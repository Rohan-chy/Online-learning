import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [toggle,setToggle]=useState(false);
  return (
    <>
    <div className='bg-blue-500 p-4 sticky' id='header'>
        <div className='max-w-[1240px] mx-auto  flex justify-between items-center'>
          <div className='text-3xl font-bold text-white'>Online Learning</div>
          {
            toggle?<AiOutlineClose onClick={()=>setToggle(!toggle)} className='cursor-pointer text-2xl md:hidden block  text-white'/>:
            <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='cursor-pointer text-2xl md:hidden block text-white'/>
          }
          
            
          
            <ul className='hidden md:flex gap-10 text-xl text-white font-bold'>
              <li ><Link to={"/#banner" }smooth >Home</Link></li> 
              <li><Link to={"/#plan"} smooth>Services</Link></li> 
              <li><Link to={"#footer"}smooth >About</Link></li> 
              <li><Link to={"/#footer"}smooth>Contact</Link></li> 
            </ul>
          
          {/* responsive menu */}
          
            <ul className={`md:hidden  text-xl text-white bg-black fixed top-[69px] w-full h-screen
             ${toggle ? 'left-0':'left-[-100%]'} duration-300 `}>
              <li className='p-4 border-b border-white'><Link to={"/#banner" }smooth >Home</Link></li>
              <li className='p-4 border-b border-white'><Link to={"/#plan"} smooth>Services</Link></li>
              <li className='p-4 border-b border-white'><Link to={"#footer"}smooth >About</Link></li>
              <li className='p-4 border-b border-white'><Link to={"/#footer"}smooth>Contact</Link></li>
            </ul>
          
        </div>
    </div>
    </>
  );
}

export default Header;