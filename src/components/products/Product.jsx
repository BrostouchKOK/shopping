import React from "react";
import { productData } from "../../constant/productData";
import { FaStar } from "react-icons/fa6";

const Product = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            dolor asperiores perspiciatis dolores error voluptates?
          </p>
        </div>
        {/* body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                place-items-center gap-5"
          >
            {/* card section */}
            {productData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] 
                            object-cover rounded-md"
                />
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            ))}
          </div>
          {/* button view all */}
          <div className="flex justify-center">
            <button
              className="text-center mt-10
                cursor-pointer bg-primary text-white px-4 py-1 rounded-md"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
