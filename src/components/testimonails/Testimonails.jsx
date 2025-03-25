import React from "react";
import Slider from "react-slick";
import { testimonialData } from "../../constant/testimonailsData";

const Testimonails = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our costomer are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonails
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            dolor asperiores perspiciatis dolores error voluptates?
          </p>
        </div>
        {/* testimonails card */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div
                  
                  className="flex flex-col gap-4 shadow-lg
                    py-8 px-6 mx-4 rounded-xl dark:bg-gray-800
                    bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-4">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="font-bold text-xl text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p
                    className="absolute text-black/20 text-9xl
                    font-serif top-0 right-0"
                  >
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonails;
