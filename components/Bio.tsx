"use client";

import Link from "next/link";
import Overlay from "./Overlay";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false,
  max: 20,
  perspective: 5000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Bio = () => {
  return (
    <section>
      <div
        className={`bg-[url("https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg")] bg-center bg-cover bg-fixed w-full h-[85vh] relative flex justify-center items-center`}
      >
        <Overlay />
        <Tilt
          options={defaultOptions}
          className="z-[2] flex flex-col justify-center items-center w-4/6 h-4/6 p-10 gap-5 bg-black/75 backdrop-blur-xl rounded-br-[50px] rounded-tl-[50px] border border-white/20"
        >
          <h3 className="text-5xl font-semibold text-accent">
            About Yummy Yard
          </h3>
          <p className="text-white/75 text-center text-xl">
            Discover Yummy Yard—a culinary wonderland where passion, innovation,
            and a warm ambiance harmonize. Led by renowned chef Ava Montgomery,
            our talented culinary team curates a menu that celebrates diverse
            flavors and pushes gastronomic boundaries. With a fusion of
            traditional favorites and inventive creations, Yummy Yard invites
            you to indulge in an unforgettable dining experience.
          </p>
          <Link href="/about" className="btn btn-accent">
            Learn More
          </Link>
        </Tilt>
      </div>
    </section>
  );
};

export default Bio;
