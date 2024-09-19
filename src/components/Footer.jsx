import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="w-full bg-[#0b0e17] text-white">
      <img
        className="bg-[#0b0e17] border-none outline-none"
        src="https://cdn.prod.website-files.com/5f2d95cb45872fc361ffb5a6/5f34d27b3d78652e77929e97_WavyDivider_Bottom.svg"
        alt=""
      />

      <motion.div className="flex justify-evenly md:justify-around px-5 py-10 items-center">
        <div className="text-sm md:text-2xl madimi border rounded-full px-3 py-3">
          <a
            href="mailto:naveenbaloni018@gmail.com"
            className="text-gradient underline flex items-center justify-center"
          >
            <MdEmail size={20} />
            :naveenbaloni018@gmail.com
          </a>
          <div className="mt-1 flex items-center justify-around">
            <a
              href="https://github.com/naveencode108"
              className="flex justify-center items-center"
            >
              <IoLogoGithub color="red" />
              Github
            </a>
          </div>
        </div>

        <svg
          viewBox="0 0 100 100"
          className="w-[55px] h-[55px] md:w-[100px] md:h-[100px] animate-spin cursor-pointer"
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
    </div>
  );
};
export default Footer;
