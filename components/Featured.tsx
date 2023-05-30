"use client";

import { useState, useEffect } from "react";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Overlay from "./Overlay";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import { defaultOptions } from "@/configs/titlConfig";
import { Tilt } from "react-tilt";

const Featured = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) =>
        setMenu(data.filter((item: any) => item.category === "featured"))
      );
  }, []);

  return (
    <section>
      <div
        className={`bg-[url("https://images.pexels.com/photos/321588/pexels-photo-321588.jpeg")] bg-center bg-cover bg-fixed w-full h-[120vh] lg:h-screen relative`}
      >
        <Overlay />
        <div className="z-[2] absolute top-0 left-0 w-full h-full py-20 overflow-hidden">
          <SectionTitle
            reverseColor
            title="Chef's Picks: Delectable Recommendations"
            subTitle="Featured"
          />
          {menu.map((item: any) => (
            <div
              key={item._id}
              className="grid lg:grid-cols-3 gap-10 overflow-hidden wrapper h-[90vh] lg:h-[70vh] items-center"
            >
              <Tilt
                options={defaultOptions}
                className="overflow-hidden lg:col-span-1 w-full h-full rounded-2xl shadow-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={720}
                  height={1280}
                  priority
                  className="w-full h-full object-cover"
                />
              </Tilt>
              <div className="lg:col-span-2 space-y-5">
                <h2 className="text-6xl lg:text-8xl text-white font-semibold">
                  {item.name}
                </h2>
                <p className="text-xl text-white/75">{item.recipe}</p>
                <div className="flex items-center gap-10">
                  <p className="text-5xl text-secondary-focus font-medium">
                    {formatCurrency(item.price)}
                  </p>
                  <Link href="/" className="btn btn-primary">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
