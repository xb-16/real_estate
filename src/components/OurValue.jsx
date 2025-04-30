import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { TrophyIcon } from "lucide-react";
import { motion } from "framer-motion";
function MoneyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    </svg>
  );
}

let defaultContent =
  "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.";

export default function OurValue() {
  return (
    <section className="m-auto mt-20 md:flex space-y-8 text-center justify-between w-[85%] lg:w-[95%]">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-[40%] flex justify-center place-items-center"
      >
        <img
          src="/public/value.png"
          alt=""
          width=""
          className="border-gray-400 border-8 rounded-t-[100%]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="md:w-[47%] space-y-3"
      >
        <h2 className="text-orange-500 text-2xl font-bold">Our Value</h2>
        <h3 className="text-blue-700 text-4xl font-bold">
          Value We Give to You
        </h3>
        <p className="text-slate-600 mb-10">
          We always ready to help by providijng the best services for you. We
          beleive a good blace to live can make your life better
        </p>
        <Accordion
          variant="splitted"
          itemClasses={{
            base: " border-1 border-slate-300 shadow-lg",
            title: "font-bold text-blue-800",
            trigger: "rounded-lg h-14 flex justify-between items-center",
            content: "p-6 text-slate-600",
            indicator: "p-3",
          }}
          className="space-y-2"
          defaultExpandedKeys="1"
        >
          <AccordionItem
            key="1"
            startContent={<CheckIcon />}
            aria-label="Accordion 1 Best interest rates on the market"
            title="Best interest rates on the market"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            startContent={<MoneyIcon />}
            aria-label="Accordion 2 Prevent unstable prices"
            title="Prevent unstable prices"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            startContent={<TrophyIcon />}
            aria-label="Best price on the market"
            title="Best price on the market"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </motion.div>
    </section>
  );
}
