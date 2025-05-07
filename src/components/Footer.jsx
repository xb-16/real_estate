import React from "react";
import { motion } from "framer-motion";
import logo2 from "/logo2.png";

let contactInfo = ["Property", "Services", "Product", "About Us"];
export default function Footer() {
  return (
    <footer className="mt-10 w-[85%] lg:w-[95%] mx-auto space-y-3">
      <motion.div
        initial={{ opacity: 0.3, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-blue-700 flex flex-col place-items-center text-white text-center p-6 lg:p-10 md:p-3 space-y-4 rounded-lg"
      >
        <h2 className="text-4xl font-medium">Get started with Homyz</h2>
        <p className="text-slate-300 font-medium">
          Subscribe and find super attractive price quotes from us.
          <br />
          Find your residence soon
        </p>
        <button className="rounded-xl border-2 border-white bg-transparent text-white  px-4 py-2 w-fit hover:bg-white hover:text-blue-700 hover:border-blue-700">
          Get Started
        </button>
      </motion.div>

      <div className="md:flex justify-between max-md:text-center mt-10 pb-8 p-3 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-[20%] space-y-3"
        >
          <img
            src={logo2}
            width="140"
            alt="logo"
            className="max-md:mx-auto"
          ></img>
          <p className="text-slate-500 font-medium">
            Our vision is to make all people the best place to live for them.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h3 className="text-3xl font-bold">Information</h3>
          <p className="text-slate-500">145 New York, FL 5467, USA </p>
          <ul className="flex gap-4 mx-auto flex-wrap justify-center w-fit">
            {contactInfo.map((contact, index) => {
              return (
                <li key={index} className="font-medium whitespace-nowrap">
                  {contact}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
      <div className="mx-auto px-4 py-2 my-5 text-slate-300 font-medium text-lg bg-black w-fit">Developed By <a href="https://github.com/xb-16" target="_blank" className="border-b-2 border-white pb-1">Ahmed ASSARI</a></div>
    </footer>
  );
}
