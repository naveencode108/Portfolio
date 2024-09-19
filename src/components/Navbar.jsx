import { Link, } from "react-router-dom";
import { motion } from "framer-motion";
import { LiaDownloadSolid } from "react-icons/lia";
import MouseAnim from "../components/optional/MouseAnim";

const Navbar = () => {
  return (
    <>
      <nav className={`w-full fixed  text-white mt-[1px] px-5 md:px-10 z-50`}>
        <motion.div
          initial={{ y: "-150%" }}
          animate={{ y: "0" }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className=" w-full flex justify-between items-center  border-[1px]  gap-2 relative rounded-full overflow-hidden"
        >
          {/* svg */}
          <motion.div className="cursor-pointer">
            <svg
              viewBox="0 0 100 100"
              className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]  animate-spin"
              style={{ animationDuration: "7s" }}
            >
              <path
                id="top-circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text fill="white">
                <textPath
                  href="#top-circle"
                  className="text-sm mr-10  "
                  startOffset="1%"
                >
                  NAVEEN BALONI BALONI NAVEEN
                </textPath>
              </text>
            </svg>
          </motion.div>
          {/*end of svg  */}

          {/* links */}
          <div className="z-50 border-[1px] border-white rounded-full w-1/2 mx-auto  text-[13px] sm:text-sm md:text-xl gap-4 py-2 px-3 flex  justify-around capitalize">
            <Link
              to="/"
              className="instrument-serif-regular  hover-line cursor-pointer"
            >
              {" "}
              home
            </Link>
            <Link
              to="/about"
              className="instrument-serif-regular  hover-line cursor-pointer"
            >
              {" "}
              about
            </Link>
            <a
              href="/cv.pdf"
              download={"NaveenCv"}
              className="instrument-serif-regular  hover-line cursor-pointer"
            >
              {" "}
              <span className="flex justify-center items-center text-gradient">
                <LiaDownloadSolid className="animate-bounce"/>
                Cv
              </span>
            </a>
          </div>

          <div className="absolute inset-0 bg-black/30 backdrop-blur-lg top-0 -z-10 "></div>
          <MouseAnim />
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
