import React from "react";

export default function Brands() {
  let imgs = [
    "/public/equinix.png",
    "/public/tower.png",
    "/public/prologis.png",
    "/public/realty.png",
  ];
  return (
    <section className="flex justify-between place-items-center flex-wrap mt-4 mx-auto w-[80%] lg:w-[95%] p-1 space-y-3 py-2">
      {imgs.map((img, index) => {
        return (
          <img
            key={index}
            src={img}
            className="w-[45%] lg:w-[20%] lg:scale-60"
          />
        );
      })}
    </section>
  );
}
