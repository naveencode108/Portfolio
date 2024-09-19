import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <>
      <div className="w-full  px-5 bg-[#0b0e17] text-white">
        <div className="flex items-center justify-center">
          <img
            src="/star.png"
            alt=""
            className="w-[30px] h-fit inline animate-spin"
          />
          <h1 className=" madimi text-3xl md:text-5xl py-2 text-center inline">
            Technologies <span className="text-gradient">I Love Working</span>{" "}
            With
          </h1>
          <img
            src="/star.png"
            alt=""
            className="w-[30px] h-fit inline animate-spin"
          />
        </div>

        <div className="w-full relative overflow-hidden  py-5 ">
          <motion.div
            initial={{ x: "-10%" }}
            animate={{ x: "-121%" }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
              damping: 200,
              stiffness: 1000,
              mass: 1,
            }}
            className="flex w-full py-2 items-center my-10"
          >
            <img
              src="/react.png"
              alt="reactjs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />

            <img
              src="/javascript.png"
              alt="javascript logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/node.png"
              alt="nodejs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/css.png"
              alt="css logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/mongodb.png"
              alt="mongodb logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/html.png"
              alt="html logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/tcss.png"
              alt="tcss logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/react.png"
              alt="reactjs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/javascript.png"
              alt="javascript logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/node.png"
              alt="nodejs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/css.png"
              alt="css logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/mongodb.png"
              alt="mongodb logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/html.png"
              alt="html logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/tcss.png"
              alt="tcss logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/react.png"
              alt="reactjs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/javascript.png"
              alt="javascript logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/node.png"
              alt="nodejs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/css.png"
              alt="css logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/mongodb.png"
              alt="mongodb logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/html.png"
              alt="html logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/tcss.png"
              alt="tcss logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/react.png"
              alt="reactjs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/javascript.png"
              alt="javascript logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/node.png"
              alt="nodejs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/css.png"
              alt="css logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/mongodb.png"
              alt="mongodb logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/html.png"
              alt="html logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/tcss.png"
              alt="tcss logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
          </motion.div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "-4%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            className="flex w-full py-2 items-center  my-10 "
          >
            <img
              src="/react.png"
              alt="reactjs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/node.png"
              alt="nodejs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/html.png"
              alt="html logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/javascript.png"
              alt="javascript logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/css.png"
              alt="css logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img src="/tcss.png" alt="" className="w-[20%] md:w-[8%] h-fit" />
            <img
              src="/mongodb.png"
              alt=""
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/react.png"
              alt="reactjs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/node.png"
              alt="nodejs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/html.png"
              alt="html logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/javascript.png"
              alt="javascript logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/css.png"
              alt="css logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/react.png"
              alt="reactjs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/node.png"
              alt="nodejs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/html.png"
              alt="html logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/javascript.png"
              alt="javascript logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/css.png"
              alt="css logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img src="/tcss.png" alt="" className="w-[20%] md:w-[8%] h-fit" />
            <img
              src="/mongodb.png"
              alt=""
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/react.png"
              alt="reactjs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/node.png"
              alt="nodejs logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/html.png"
              alt="html logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/javascript.png"
              alt="javascript logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
            <img
              src="/css.png"
              alt="css logo"
              className="w-[15%] md:w-[8%] h-fit"
            />
          </motion.div>
          <div className="w-full absolute top-0 h-full bg-gradient-to-r from-[#0b0e17] via-transparent pointer-events-none to-[#0b0e17] "></div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
