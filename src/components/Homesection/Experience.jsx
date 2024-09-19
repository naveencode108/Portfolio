import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-200 to-violet-300 relative ">
      <img
        src="/hand1.webp"
        alt="hand2"
        className="absolute top-0 left-0 h-[8rem] object-contain"
      />
      <div className="w-full flex flex-col justify-center items-center h-full">
        <motion.h1
          whileInView={{ opacity: 1, x: "0" }}
          initial={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.8, ease: "linear" ,type:'spring'}}
          className="text-5xl md:text-8xl madimi mb-3"
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
            className="inline-block"
            >
            Experi
            </motion.span>
            <motion.img whileHover={{rotate:'20deg',scale:1.1}} className="inline w-[50px] md:w-[80px] h-[50px] rounded-2xl object-cover"
              src="https://i.pinimg.com/564x/94/42/4f/94424f9c1fbe773a2e230372caf66838.jpg"
              alt=""
            />{""}
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
            className="text-gradient inline-block"
          >
            ence
          </motion.span>
          <img
            className="inline w-[50px] hover:animate-spin"
            src="/star.png"
            alt=""
          />
        </motion.h1>

        <h1 className="madimi text-sm underline">
          HOTTRIX IT SERVICE PVT.LTD.- INTERNSHIP (3MONTHS)
          <p className="text-sm text-center underline">Key Contributions During Internship</p>
        </h1>
        <ul className="px-10 overflow-hidden">
          <motion.li
            whileInView={{ opacity: 1, x: "0" }}
            initial={{ opacity: 0, x: "100%" }}
            
            transition={{ duration: 1, ease: "linear",type:'spring'}}
            className="caveat text-xl md:text-3xl py-2"
          >
            <img
              className="inline-block animate-spin"
              src="/untitled.png"
              alt=""
            />
            Integrated PHP Mailer to enhance email functionality across the
            application.
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1, x: "0" }}
            initial={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 1.1, ease: "linear",type:'spring'}}
            className="caveat text-xl md:text-3xl py-2"
          >
            <img
              className="inline-block animate-spin"
              src="/untitled.png"
              alt=""
            />
            Implemented pincode validation on every page for a seamless user
            experience.
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1, x: "0" }}
            initial={{ opacity: 0, x: "100%" }}
            transition={{ duration: 1.2, ease: "linear",type:'spring'}}
            className="caveat text-xl md:text-3xl py-2"
          >
            <img
              className="inline-block animate-spin"
              src="/untitled.png"
              alt=""
            />
            Developed and managed full CRUD operations for efficient data
            management.
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1, x: "0" }}
            initial={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 1.3, ease: "linear",type:'spring' }}
            className="caveat text-xl md:text-3xl py-2"
          >
            <img
              className="inline-block animate-spin"
              src="/untitled.png"
              alt=""
            />
            Redesigned multiple websites to improve user-friendliness and ensure
            mobile responsiveness.
          </motion.li>
        </ul>
      </div>
      <img
        src="/hand2.webp"
        alt="hand2"
        className="absolute bottom-0 right-0 h-[10rem] md:h-[15rem] object-contain"
      />
      <div
        className="w-full h-screen absolute top-0 pointer-events-none"
        style={{ background: "url(/download.png)" }}
      ></div>
    </div>
  );
};
export default Experience;
