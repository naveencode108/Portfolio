import { motion } from 'framer-motion'
import React from 'react'



const About = () => {

  return (
    <div className='w-full h-full bg-[#0b0e17] text-white flex items-center justify-center'>
      <div className='border w-full flex flex-col justify-center items-center py-10'>
           <h1 className='text-5xl md:text-7xl madimi text-gradient py-10'>About <span>
            <motion.img  
            initial={{width:'0'}}
            animate={{width:'80px'}}
            whileHover={{rotate:'20deg',scale:1.3}}
            transition={{duration:1,type:'spring',ease:'linear'}}
            className='inline w-[80px] md:w-[100px] h-[50px] rounded-2xl object-cover' 
            src="https://i.pinimg.com/736x/d4/d7/2f/d4d72f71231ae5995e425b7a813d87f6.jpg" alt="" />
            </span> Me</h1>

           <p  className='w-full  md:w-[80%] roboto text-lg md:text-2xl text-center px-5'>Hey' My name is Naveen Baloni,and I am a passionate <span className='text-gradient'>Full Stack Web Developer.</span> I hold a Bachelor's degree in Computer Applications (BCA) from the University of Rajasthan. I have a deep interest in creating animated, interactive websites and enjoy diving into backend development as well. My curiosity drives me to continuously explore new technologies, and I love learning about all things tech. Whether it's frontend design or backend logic, I strive to create seamless, efficient, and engaging digital experiences.</p>
      </div>
    </div>
  )
}

export default About