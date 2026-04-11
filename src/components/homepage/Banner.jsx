import React from "react";
import bookImg from "../../assets/hero_img.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-3 container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse w-full gap-20">
        <img
          src={bookImg}
          className="max-w-lg rounded-lg shadow-2xl object-cover"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your Bookshelf
          </h1>

          <button className="btn btn-success mt-12 w-full font-bold text-lg text-white">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
