import { div } from "framer-motion/m"

const MouseAnim = () => {
  return (
    <div className="border w-3 h-5 md:w-5 md:h-10 rounded-xl text-white text-center flex flex-col justify-between items-center mr-2">
    <span className="w-[1px] h-1 md:h-2 border inline-block "></span>
    <span
      className="w-1 h-1 md:w-2 md:h-2 inline-block rounded-full bg-white"
      style={{
        animation: "bounce-up-down 3s ease-in-out infinite",
      }}
    ></span>
  </div>
  )
}

export default MouseAnim