import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
   const { scrollYProgress } = useScroll();
   const [color, setcolor] = useState(false)
   useMotionValueEvent(scrollYProgress, "change", (latest) => {
      let val= Math.round(latest*100)
      if(val>=70){
          setcolor(true);
      }
      else{
         setcolor(false);
      }
    })
  return (
    <div className={`w-full ${color==false?'bg-gray-200 text-black':'bg-[#0b0e17] text-white'} transition-all ease-in-out duration-200  px-5 md:px-10 py-10 overflow-hidden`}>
        <motion.h1   transition={{ duration: 0.9, ease: "easeInOut" ,type:'spring'}} className="text-6xl madimi text-center">Pr<span>
         <motion.img 
          initial={{width:'0'}}
          whileInView={{width:'80px'}}
          transition={{duration:1.5,type:'spring',ease:'linear'}} 
          className='inline rounded-full w-20 h-[60px] object-cover'
          src="https://i.pinimg.com/originals/02/01/1e/02011ec8554277b8c70bf22fb192123c.gif" alt="" />
          </span>jects.</motion.h1>
     
        <motion.div  
            whileInView={{opacity:1,x:'0'}}
            initial={{opacity:0,x:'-100%'}} 
            whileHover={{ scale: 0.95 ,border:'1px solid red'}}
            transition={{duration:0.1,type:'spring',ease:'easeInOut'}}
            className="overflow-hidden hover:bg-white/10  delay-100 duration-300 w-full px-3 flex flex-wrap md:flex-nowrap justify-center items-center border-[1px] rounded-2xl mt-3 py-5">
              <img className="w-[80vw] z-40 md:w-[40vw] max-h-full rounded-2xl" src="/netflixshot.png"  alt="netflixpng" />
           <div className=" w-[65vw] text-center z-40">
              <h1 className="instrument-serif-regular text-4xl md:text-6xl ">Netflix Clone</h1>
              <p className="text-gray-500 madimi">Developed a fully responsive Netflix clone using React.js and Tailwind CSS</p>
           </div>
        </motion.div>

        <motion.div
         whileInView={{opacity:1,x:'0'}}
         initial={{opacity:0,x:'100%'}} 
         whileHover={{ scale: 0.95,border:'2px solid aqua'}}
         transition={{duration:0.2,type:'spring',ease:'easeInOut'}}
         className="overflow-hidden hover:bg-white/10  delay-100 duration-300 w-full px-3 flex flex-wrap md:flex-nowrap justify-center items-center border-[1px] rounded-2xl mt-3 py-5">
              <img className="w-[80vw] z-40 md:w-[40vw] max-h-full rounded-2xl" src="/amafli.png"  alt="amaflipng" />
           <div className=" w-[65vw] text-center z-40">
              <h1 className="instrument-serif-regular text-4xl md:text-6xl ">E-commerce</h1>
              <p className="text-gray-500 madimi">Developed a full-featured e-commerce platform using Express, Node.js, MongoDB,Tailwind, and EJS</p>
           </div>
        </motion.div>
    </div>
  );
};

export default Projects;
