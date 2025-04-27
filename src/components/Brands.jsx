import React from "react";

export default function Brands() {
  let imgs = [
    "/public/equinix.png",
    "/public/tower.png",
    "/public/prologis.png",
    "/public/realty.png",
  ];
  return <section className="flex justify-between place-items-center mt-4">
    {imgs.map((img,index) => {
        return (<img key={index} src={img} className="w-[20%] scale-60"/>);
    })}
  </section>;
}
