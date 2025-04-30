import React from "react";
import NavBar from "./NavBar";
import { MapPin } from "lucide-react";
import BlueButton from "./BlueButton";
import { useEffect, useRef, useState } from "react";

const dataFeatures = [
  { value: 9000, label: "Premium Product" },
  { value: 2000, label: "Happy Customer" },
  { value: 28, label: "Awards Winning" },
];

export default function HeroSection() {
  const [countedValues, setCountedValues] = useState([0, 0, 0]);
  const refs = useRef([]);

  const countUp = (index, target) => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.ceil(target / 100); // Increment the count by a portion of the target
      if (current >= target) {
        current = target;
        clearInterval(interval); // Stop counting once target is reached
      }
      setCountedValues((prevState) => {
        const newState = [...prevState];
        newState[index] = current;
        return newState;
      });
    }, 50); // Adjust the speed by changing this interval (in ms)
  };

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && countedValues[index] === 0) {
          // Start counting when the element is visible and hasn't counted yet
          countUp(index, dataFeatures[index].value);
        }
      });
    }, options);

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect(); // Clean up observer when component unmounts
    };
  }, [countedValues]);

  return (
    <section className="bg-stone-900 max-md:px-4">
      <div className="relative">
        <NavBar />
        <div className="absolute w-[20rem] h-[20rem] bg-[rgba(255,255,255,.522)] top-0 left-0 rounded-[100%] z-1 blur-[100px]"></div>
        <div className="md:pt-8 flex flex-col md:flex-row justify-between m-auto w-[90%] p-2">
          <div className="md:w-[45%] space-y-10 md:mt-10 max-md:text-center max-md:flex max-md:flex-col max-md:place-items-center max-md:mt-12">
            <h1 className="text-6xl font-bold relative z-1 w-fit text-white">
              <div className=" h-[4rem] w-[4rem] bg-orange-500 rounded-[100%] absolute right-[28%] top-[-10%] -z-1"></div>
              Discover
              <br /> Most Suitable
              <br /> Property
            </h1>
            <p className="text-gray-400 font-light text-[16px]">
              Find a variety of properties that suit you very easilty Forget all
              difficulties in finding a residence for you
            </p>

            <div className="bg-white p-3 gap-2 rounded-xl border-2 border-gray-400 flex w-[85%] place-items-center">
              <MapPin
                stroke="blue"
                fill="white"
                size={35}
              />
              <input
                type="text"
                className="w-[70%] h-full focus:outline-0"
              />
              <BlueButton content="Search" className="" />
            </div>
            <div className="grid grid-cols-3 gap-2 md:max-lg:pb-4">
              {dataFeatures.map((item, index) => (
                <div key={index} ref={(el) => (refs.current[index] = el)}>
                  <h2 className="text-2xl font-medium text-white">
                    {countedValues[index]}{" "}
                    <span className="text-orange-500">+</span>
                  </h2>
                  <div className="text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-[50%] lg:w-[50%] flex justify-center max-md:mt-12 max-md:pb-4">
            <img
              src="/public/hero-image.png"
              alt=""
              className="border-slate-600 object-cover border-8 rounded-t-[100%] h-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
