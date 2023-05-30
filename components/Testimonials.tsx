"use client";

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper";
import { IoIosQuote } from "react-icons/io";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="py-20">
      <SectionTitle
        subTitle="Testimonials"
        title="Words of Praise: What Others Say"
      />
      <Swiper
        pagination={{
          clickable: true,
        }}
        speed={750}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        navigation={true}
        parallax={true}
        modules={[Navigation, Autoplay, Pagination, Parallax]}
        className="mySwiper wrapper"
      >
        {testimonials.map((item: any) => (
          <SwiperSlide key={item._id}>
            <div className="flex flex-col gap-5 justify-center items-center p-10">
              <div data-swiper-parallax="-800%" className="text-6xl">
                <IoIosQuote />
              </div>
              <p
                data-swiper-parallax="-200%"
                className="text-xl max-w-2xl text-center"
              >
                {item.body}
              </p>
              <div data-swiper-parallax="-800%">
                <Rating
                  style={{ maxWidth: 150 }}
                  value={item.rating}
                  readOnly
                  itemStyles={myStyles}
                />
              </div>
              <div
                className="flex items-center gap-5"
                data-swiper-parallax="-800%"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  priority
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div>
                  <h4 className="text-xl font-medium">{item.name}</h4>
                  <p className="text-black/60">{item.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
