import {
  MessageSquareDotIcon,
  PhoneIcon,
  Video,
  MessageSquareMore,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <PhoneIcon className="fill-blue-600" />,
    type: "Call",
    number: "021 123 145 14",
    action: "Call now",
  },
  {
    icon: <MessageSquareMore className="fill-blue-600" />,
    type: "Chat",
    number: "021 123 145 14",
    action: "Chat now",
  },
  {
    icon: <Video className="fill-blue-600" />,
    type: "Video Call",
    number: "021 123 145 14",
    action: "Video Call now",
  },
  {
    icon: <MessageSquareDotIcon className="fill-blue-600" />,
    type: "Message",
    number: "021 123 145 14",
    action: "Message now",
  },
];

export default function Contact() {
  return (
    <section className="m-auto mt-20 md:flex justify-between w-[85%] lg:w-[95%] space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-[50%] space-y-3"
      >
        <h2 className="text-orange-500 text-2xl font-bold">Our Value</h2>
        <h3 className="text-blue-700 text-4xl font-bold">
          Value We Give to You
        </h3>
        <p className="text-slate-600 mb-10">
          We always ready to help by providijng the best services for you. We
          beleive a good blace to live can make your life better
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6 lg:w-[85%]">
          {contactInfo.map((contact, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-4 gap-3 border-1 border-slate-300 p-4 rounded-lg hover:scale-105 hover:shadow-2xl transition"
              >
                <div className="col-span-1 flex place-items-center justify-center bg-blue-400/15 text-gray-400/50 rounded-lg">
                  {contact.icon}
                </div>
                <div className="col-span-3">
                  <h4 className="font-bold">{contact.type}</h4>
                  <p className="text-slate-500">{contact.number}</p>
                </div>
                <button className="bg-blue-400/15 text-blue-600 font-medium px-4 py-2 rounded-md col-span-4">
                  {contact.action}
                </button>
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-[40%] flex justify-center items-center place-items-center"
      >
        <img
          src="/public/contact.jpg"
          alt=""
          className="rounded-t-[100%] h-[400px] md:h-full max-h-[500px] object-cover"
        />
      </motion.div>
    </section>
  );
}
