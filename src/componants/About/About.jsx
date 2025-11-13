import React from "react";
import { IoArrowForward } from "react-icons/io5";

export const About = () => {
  return (
    <div id="Cars" className="text-white flex flex-col items-center bg-black w-full shadow-xl px-6 py-12 md:px-20 md:py-20">
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-[#f4c542] tracking-wide">
        Car AutoDrive
      </h2>

      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">
        {/* 1. Premium Cars */}
        <div className="flex flex-col gap-4 bg-zinc-900 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <IoArrowForward size={24} className="text-[#f4c542]" />
            <h1 className="text-lg md:text-xl font-semibold text-[#f4c542] uppercase">
              Premium Cars
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            At <span className="font-semibold text-white">AutoDrive</span>, we offer an exclusive range of luxury cars
            designed for elegance, power, and performance — from sleek sedans to high-end SUVs.
          </p>
        </div>

        {/* 2. Trusted Service */}
        <div className="flex flex-col gap-4 bg-zinc-900 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <IoArrowForward size={24} className="text-[#f4c542]" />
            <h1 className="text-lg md:text-xl font-semibold text-[#f4c542] uppercase">
              Trusted Service
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Every car goes through 200+ quality checks to guarantee safety,
            reliability, and top-notch performance before reaching our customers.
          </p>
        </div>

        {/* 3. Expert Team */}
        <div className="flex flex-col gap-4 bg-zinc-900 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <IoArrowForward size={24} className="text-[#f4c542]" />
            <h1 className="text-lg md:text-xl font-semibold text-[#f4c542] uppercase">
              Expert Team
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Our certified automotive experts assist you in choosing the perfect
            car, customizing features, and providing after-sales support.
          </p>
        </div>

        {/* 4. Car Maintenance */}
        <div className="flex flex-col gap-4 bg-zinc-900 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <IoArrowForward size={24} className="text-[#f4c542]" />
            <h1 className="text-lg md:text-xl font-semibold text-[#f4c542] uppercase">
              Car Maintenance
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            From oil changes to full diagnostics, our maintenance service ensures
            your vehicle stays in peak condition all year round.
          </p>
        </div>

        {/* 5. Customer Satisfaction */}
        <div className="flex flex-col gap-4 bg-zinc-900 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <IoArrowForward size={24} className="text-[#f4c542]" />
            <h1 className="text-lg md:text-xl font-semibold text-[#f4c542] uppercase">
              Customer Satisfaction
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Our clients are at the heart of everything we do — transparent pricing,
            honest guidance, and lifelong service relationships.
          </p>
        </div>

        {/* 6. Test Drive Experience */}
        <div className="flex flex-col gap-4 bg-zinc-900 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <IoArrowForward size={24} className="text-[#f4c542]" />
            <h1 className="text-lg md:text-xl font-semibold text-[#f4c542] uppercase">
              Test Drive Experience
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Enjoy personalized test drives designed to help you feel the
            performance, comfort, and innovation of every vehicle before purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
