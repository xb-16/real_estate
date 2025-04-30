import React from "react";
import { motion } from "framer-motion";
import equinix from "/equinix.png";
import tower from "/tower.png";
import prologis from "/prologis.png";
import realty from "/realty.png";
export default function Brands() {
  let imgs = [equinix, tower, prologis, realty];
  return (
    <section className="flex justify-between place-items-center flex-wrap mt-4 mx-auto w-[85%] lg:w-[95%] p-1 space-y-3 py-2">
      {imgs.map((img, index) => {
        return (
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            key={index}
            src={img}
            className="w-[45%] lg:w-[20%] lg:scale-60"
          />
        );
      })}
    </section>
  );
}
