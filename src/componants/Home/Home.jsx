import React from "react";

const Home = () => {
  return (
    <div id="Home" className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20 bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight text-[#f4c542]">
          Find Your Dream Car Today 🚗
        </h1>
        <p className="text-sm md:text-base text-gray-300">
          Welcome to <span className="font-semibold text-white">AutoDrive</span> — your trusted car dealership.
          Explore a wide range of brand-new and certified pre-owned vehicles 
          from top brands. Whether you’re looking for speed, comfort, or luxury, 
          we’ve got the perfect car waiting for you.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-[#f4c542] text-black font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-yellow-400 hover:scale-105 duration-300 shadow-md">
            Explore Cars
          </button>
          <button className="border border-[#f4c542] text-[#f4c542] font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-[#f4c542] hover:text-black hover:scale-105 duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Section - Car Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          className="w-60 md:w-96 rounded-2xl shadow-2xl hover:scale-105 duration-500"
          src="car.png"
          alt="Luxury Car"
        />
      </div>
    </div>
  );
};

export default Home;
