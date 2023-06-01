"use client";

import { Parallax } from "react-parallax";

interface CoverProps {
  image: string;
  title: string;
  paragraph?: string;
}

const Cover: React.FC<CoverProps> = ({ image, title, paragraph }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt={title}
      strength={-200}
    >
      <section className="hero h-[60vh]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-6xl font-bold">{title}</h1>
            <p className="mb-5 text-lg">{paragraph}</p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Cover;
