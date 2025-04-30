import React from "react";

let contactInfo = ["Property", "Services", "Product", "About Us"];
export default function Footer() {
  return (
    <footer className="mt-10 w-[80%] lg:w-[95%] mx-auto space-y-3">
      <div className="bg-blue-700 flex flex-col place-items-center text-white text-center p-6 lg:p-10 md:p-3 space-y-4 rounded-lg">
        <h2 className="text-4xl font-medium">Get started with Homyz</h2>
        <p className="text-slate-300 font-medium">
          Subscribe and find super attractive price quotes from us.
          <br />
          Find your residence soon
        </p>
        <button className="rounded-xl border-2 border-white bg-transparent text-white  px-4 py-2 w-fit hover:bg-white hover:text-blue-700 hover:border-blue-700">
          Get Started
        </button>
      </div>

      <div className="md:flex justify-between max-md:text-center mt-10 pb-8 p-3 space-y-6">
        <div className="md:w-[20%] space-y-3">
          <img src="/public/logo2.png" width="140" alt="logo" className="max-md:mx-auto"></img>
          <p className="text-slate-500 font-medium">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className="space-y-4">
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
        </div>
      </div>
    </footer>
  );
}
