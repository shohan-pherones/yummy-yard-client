"use client";

import Image from "next/image";
import Overlay from "./Overlay";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { data } from "@/data/categoryImages";
import "swiper/css";
import "swiper/css/pagination";

const Category = () => {
  return (
    <section className="py-20">
      <SectionTitle
        subTitle="Categories"
        title="Delicious Delights: Explore Our Culinary Categories"
      />

      <div className="w-full h-[50vh]">
        <Swiper
          speed={750}
          loop={true}
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full">
                <Image
                  priority
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <Overlay />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-[2]">
                <h3 className="text-5xl font-semibold">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
