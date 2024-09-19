import Typewriter from "typewriter-effect";
import Marquee from "./Homesection/Marquee";
import { motion } from "framer-motion";
import Experience from "./Homesection/Experience";
import Projects from "./Homesection/Projects";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full bg-black  flex  items-center justify-center  px-5 text-black/30">
          <div className="text-3xl bg-transparent relative text-white  flex flex-col justify-between sm:text-4xl md:text-[42px]  capitalize w-full  madimi h-1/2">
            <motion.h1
              initial={{ y: "-700%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", ease: "linear", delay: 0.4 }}
            >
              <motion.div
                animate={{
                  y: ["-10%", "5%", "0%", "5%", "-10%"],
                  x: ["5%", "-10%", "0%", "-10%", "5%"],
                  skew: [0, -5, 5, -5, 0],
                  scale: [1, 1.5, 1.2, 0.8, 1.3, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="min-moving-ball w-5 h-5 md:w-10 md:h-10"
              ></motion.div>
            </motion.h1>

            <div className="z-40">
              <div className="mb-5 mix-blend-overlay instrument-serif-regular text-4xl md:text-5xl flex justify-center items-center text-black capitalize overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: "0" }}
                  transition={{ ease: "linear", delay: 0.7, type: "spring" }}
                >
                  i'am náveen baloni.
                </motion.h1>
              </div>
              <div className="mb-5 mix-blend-overlay instrument-serif-regular text-4xl md:text-5xl flex justify-center items-center text-black capitalize overflow-hidden">
                <Typewriter
                  options={{
                    strings: ["a web developer", "fullstack developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <motion.h1
              initial={{ y: "-900%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", ease: "linear", delay: 0.8 }}
              className="flex justify-end "
            >
              <motion.div
                animate={{
                  y: ["0%", "20%", "-15%", "10%", "0%"],
                  x: ["0%", "-15%", "15%", "-10%", "0%"],
                  rotate: [0, 15, -15, 10, 0],
                  scale: [1, 1.3, 0.9, 1.1, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="min-moving-ball w-5 h-5 md:w-10 md:h-10"
              ></motion.div>
            </motion.h1>

            {/* orange animation */}
            <motion.div
              animate={{
                x: ["-5%", "-10%", "0%", "10%", "-5%"],
                y: ["10%", "5%", "0%", "-5%", "10%"],
                skew: [0, -5, 5, -5, 0],
                scale: [
                  [2, 1],
                  [1.2, 0.8],
                  [1.2, 0.8],
                  [1.1, 1.1],
                  [2, 1],
                ],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="moving-ball absolute  left-[33%] top-20 md:top-0"
            ></motion.div>
          </div>
        </div>
      </div>
      <Marquee />
      <Experience />
      <Projects />
    </>
  );
};

export default Home;
// bg-gradient-to-r from-green-200 to-black/90
