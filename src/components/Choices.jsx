import React, { useRef } from "react";
import { motion } from "framer-motion";

let choicesSlider = [
  {
    name: "Aliva Priva Jardin",
    price: "47,043",
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    image: "./r1.png",
  },
  {
    name: "Asatti Garden City",
    price: "66,353",
    detail:
      "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    image: "./r2.png",
  },
  {
    name: "Citralan Puri Serang",
    price: "35,853",
    detail:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    image: "./r3.png",
  },
  {
    name: "Aliva Priva Jardin",
    price: "47,043",
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    image: "./r1.png",
  },
  {
    name: "Asatti Garden City",
    price: "66,353",
    detail:
      "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    image: "./r2.png",
  },
  {
    name: "Citralan Puri Serang",
    price: "35,853",
    detail:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    image: "./r3.png",
  },
];

export default function Choices() {
  const sliderRef = useRef(null);

  const scrollTo = (direction) => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      // i want to convert vh to px
      const scrollAmount = Math.max(container.offsetWidth * 0.25, 300);
      console.log(container.offsetWidth);

      if (direction === "next") {
        container.scrollLeft += scrollAmount;
      } else {
        container.scrollLeft -= scrollAmount;
      }
    }
  };

  return (
    <motion.section
    initial={{ opacity : 0, scale : .8}}
    whileInView={{ opacity : 1, scale : 1}}
    viewport={{once : true}}
    transition={{duration : 1, ease : "easeIn"}}
    className="mx-auto mt-10 w-[85%] lg:w-[95%]">
      <div className="flex justify-between space-y-6">
        <div>
          <h4 className="text-2xl font-medium text-orange-600">Best Choices</h4>
          <h3 className="text-3xl font-medium text-blue-800">
            Popular Residencies
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollTo("prev")}
            className="rounded-full text-blue-700 w-5 h-5 bg-slate-200 p-5 flex place-items-center justify-center font-bold text-3xl hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {"<"}
          </button>
          <button
            onClick={() => scrollTo("next")}
            className="rounded-full text-blue-700 w-5 h-5 bg-slate-200 p-5 flex place-items-center justify-center font-bold text-3xl hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="overflow-hidden scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-[1%] md:gap-[2%] lg:w-[150%] w-[600%] md:w-[200%]">
          {choicesSlider.map((ch, index) => {
            return (
              <div
                key={index}
                className="p-4 transition duration-200 rounded-2xl md:basis-[23%] space-y-2 border-2 border-gray-200 shadow-[lightgray_0px_4px_12px]"
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={ch.image}
                    alt={ch.name}
                    className="hover:scale-110 h-[200px] transition duration-300 ease-in-out"
                  />
                </div>
                <p className="text-stone-500 text-xl font-bold">{ch.price} $</p>
                <h4 className="text-blue-700 text-2xl font-bold">{ch.name}</h4>
                <p className="text-slate-700 text-[13px]">{ch.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
