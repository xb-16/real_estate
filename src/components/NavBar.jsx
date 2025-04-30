import React from "react";
import { ChartNoAxesGantt } from "lucide-react";
import BlueButton from "./BlueButton";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const scrollVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
export default function NavBar() {
  let [open, setOpen] = useState(false);
  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="p-6 flex flex-row gap-8 place-items-center relative lg:w-[95%] mx-auto"
    >
      <img src="/public/logo.png" width="100" alt="logo"></img>
      <ul className="p-2 sm:flex sm:flex-row gap-6 place-items-center ml-auto hidden text-gray-300">
        <li>
          <a href="">Residencies</a>
        </li>
        <li>
          <a href="">Our Values</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Get Started</a>
        </li>
      </ul>
      <BlueButton content="Contact" className="hidden" />
      <ChartNoAxesGantt
        color="white"
        size={40}
        className="sm:hidden ml-auto"
        onClick={() => setOpen(!open)}
      />
      {width < 640 && open && (
        <ul className="p-4 text-black bg-white hover:shadow-[10px_10px_0px_0px] shadow-[8px_8px_25px_0px,-8px_-8px_25px_0px] transition  rounded-xl shadow-blue-600  absolute top-[100%] right-4 [&>li]:hover:text-orange-600 [&>li]:p-2 z-10 [&>li]:font-medium">
          <li>
            <a href="">Residencies</a>
          </li>
          <li>
            <a href="">Our Values</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Get Started</a>
          </li>
        </ul>
      )}
    </motion.nav>
  );
}
