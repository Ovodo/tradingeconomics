"use client";
import { motion } from "framer-motion";
import { Inconsolata } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPieChart } from "react-icons/fi";
import { MdOutlineBarChart, MdOutlineCandlestickChart } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";
const nunito = Inconsolata({ subsets: ["latin"] });
const links = [
  { icon: RiLineChartLine, href: "/", label: "Inflation" },
  { icon: MdOutlineBarChart, href: "/unemployment", label: "Unemployment" },
  { icon: MdOutlineCandlestickChart, href: "/pmi", label: "PMI" },
];

const SideBar = () => {
  const path = usePathname();
  return (
    <div className='w-[18%] lg:w-[15%] bord hidden md:flex flex-col border-r border-appAsh2 h-full bg-black'>
      {/* Logo */}
      <Link className='flex bord flex-col items-center' href={"/"}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: 1,
            y: [0, -5, 0], // Slight bounce
            boxShadow: [
              "2px 2px 5px rgba(255, 165, 0, 0.4)",
              "0px 0px 15px rgba(255, 165, 0, 0.7)",
              "2px 2px 5px rgba(255, 165, 0, 0.4)",
            ],
          }}
          transition={{
            scale: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            y: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            opacity: { duration: 1 },
          }}
          className='relative shadow-[2px_2px_2px] p-1 flex justify-center items-center shadow-orange_web self-center mt-[15%] w-[60px] h-[44px]'
        >
          <h2 className='italic text-5xl text-orange_web'>F</h2>
        </motion.div>

        <motion.h6
          style={nunito.style}
          className='text-orange_web font-semibold tracking-wider mt-2 text-xl w-full text-center'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
        >
          Fundamentals
        </motion.h6>
      </Link>

      {/* Links */}
      <div className='h-[60%] w-full flex py-[10px] mt-[32%] items-center'>
        {/* Icons */}
        <div className='w-[30%] flex flex-col justify-center space-y-10 items-center rounded-r-[88px] h-full  bg-white py-[50px]'>
          {links.map((item, index) => {
            return (
              <div key={index.toString()} className='w-6   h-6 relative'>
                <item.icon
                  className={`w-full ${
                    path === item.href ? "text-orange_web " : "text-black "
                  } h-full`}
                />
              </div>
            );
          })}
        </div>
        {/* Text */}
        <ul className='w-[70%] flex flex-col justify-center space-y-10 items-start px-[12%] h-full py-[50px]'>
          {links.map((link, index) => (
            <li
              key={index.toString()}
              className={`cursor-pointer ${
                path === link.href
                  ? "text-orange_web font-medium"
                  : "text-white hover:text-orange_web"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
