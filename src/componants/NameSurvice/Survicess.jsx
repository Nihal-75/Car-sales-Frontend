import React from "react";

const Projectscard = ({ img, title, main, price }) => {
  return (
    <div className="flex flex-col bg-[#0b0c14] rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(244,197,66,0.4)] hover:-translate-y-2 transition-all duration-500 ease-out w-72 md:w-80">
      
      {/* Car Image */}
      <div className="relative group">
        <img
          src={img}
          alt={title}
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500"></div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-[#f4c542] text-black px-3 py-1 text-xs md:text-sm font-bold rounded-full tracking-wider shadow-md">
          ₹ {price?.toLocaleString() || "On Request"}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Car Name */}
        <h3 className="text-lg md:text-xl font-semibold text-[#f4c542] mb-1 tracking-wide uppercase">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
          {main}
        </p>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <button className="flex-1 py-2 text-sm md:text-base font-semibold rounded-full bg-[#f4c542] text-black hover:bg-[#d8ad2c] transition-all duration-300 shadow-md hover:shadow-[#f4c542]/50 hover:scale-105">
            View Details
          </button>
          <button className="flex-1 py-2 text-sm md:text-base font-semibold rounded-full bg-transparent border border-[#f4c542] text-[#f4c542] hover:bg-[#f4c542] hover:text-black transition-all duration-300 shadow-md hover:shadow-[#f4c542]/40 hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projectscard;
