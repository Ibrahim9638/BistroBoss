import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[600px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              I apologize for the inconvenience, but as an AI language model, I
              do not have real-time access to specific restaurant menus. However,
              I can provide you with a general idea of what
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
