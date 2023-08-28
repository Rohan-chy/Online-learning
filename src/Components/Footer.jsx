import React from 'react'
import {MdLocationOn} from "react-icons/md"
import {FiPhoneCall} from "react-icons/fi"
import {BiSolidMessageAltDetail} from "react-icons/bi"
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa"
import {BsLinkedin,BsGithub} from "react-icons/bs"
const Footer = () => {
  return (
    <div className='bg-blue-500 w-full p-4 overflow-x-hidden ' id="footer">
        <div className='max-w-[1240px] mx-auto md:flex justify-end p-4 '>
            <div className=' flex flex-col justify-center '>
               <div className='flex  gap-5 flex-row items-center py-2'>
               <MdLocationOn className='text-2xl'/> 
                <span className='text-[18px] font-semibold'>Itahari, Sunsari <br />Province 1, Nepal</span>
               </div>
               <div className='flex  gap-5 flex-row items-center py-2'>
                <FiPhoneCall className='text-2xl'/>
                <span className='text-[18px] font-semibold'>+9779812345678</span>
               </div>
               <div className='flex  gap-5 flex-row items-center py-2'>
              < BiSolidMessageAltDetail className='text-2xl'/>
              <span className='text-[18px] font-semibold'>onlinelearning@gmail.com</span>
               </div>
            </div>
            <div className=' my-5 md:ml-[100px]'>
                <h1 className='text-3xl text-white font-bold'>About the company</h1>
                <p className='text-justify text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, reprehenderit quidem rerum
                 nemo mollitia iste eveniet inventore numquam dolorum commodi?</p>
               <div className='flex my-5 gap-5'>
               <FaFacebookSquare className='text-3xl'/>
               <FaInstagramSquare className='text-3xl'/>
               <BsLinkedin className='text-3xl'/>
               <BsGithub className='text-3xl'/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;