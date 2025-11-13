import React from 'react';
import { FaCarAlt, FaTools, FaCogs, FaTruckPickup, FaOilCan } from "react-icons/fa";
import { GiSteeringWheel, GiCarBattery } from "react-icons/gi";

const Car = () => {
  return (
    <div id='Services' className='p-10 md:p-24 bg-black'>
      <h1 className='text-2xl md:text-4xl text-white font-bold mb-10 text-center'>
        Car Services & Maintenance
      </h1>

      <div className='flex flex-wrap justify-center gap-10'>

        {/* Each Service Card */}
        <div className='bg-zinc-900 p-8 rounded-2xl w-full sm:w-[45%] lg:w-[30%] text-center shadow-md shadow-gray-800 hover:scale-105 transition-all duration-300'>
          <FaTools size={60} color='#FFD700' className='mx-auto mb-4' />
          <h2 className='text-xl font-semibold text-white mb-2'>General Car Service</h2>
          <p className='text-gray-300 text-sm'>
            Regular maintenance, oil changes, filter replacements, and overall health checkup to keep your car running smoothly.
          </p>
        </div>

        <div className='bg-zinc-900 p-8 rounded-2xl w-full sm:w-[45%] lg:w-[30%] text-center shadow-md shadow-gray-800 hover:scale-105 transition-all duration-300'>
          <FaCogs size={60} color='#FF6347' className='mx-auto mb-4' />
          <h2 className='text-xl font-semibold text-white mb-2'>Engine & Transmission</h2>
          <p className='text-gray-300 text-sm'>
            Expert repair and tuning of engines and transmissions to ensure performance, mileage, and reliability.
          </p>
        </div>

        <div className='bg-zinc-900 p-8 rounded-2xl w-full sm:w-[45%] lg:w-[30%] text-center shadow-md shadow-gray-800 hover:scale-105 transition-all duration-300'>
          <GiCarBattery size={60} color='#00BFFF' className='mx-auto mb-4' />
          <h2 className='text-xl font-semibold text-white mb-2'>Battery & Electricals</h2>
          <p className='text-gray-300 text-sm'>
            Complete battery check, replacement, and electrical troubleshooting for modern and hybrid vehicles.
          </p>
        </div>

        <div className='bg-zinc-900 p-8 rounded-2xl w-full sm:w-[45%] lg:w-[30%] text-center shadow-md shadow-gray-800 hover:scale-105 transition-all duration-300'>
          <GiSteeringWheel size={60} color='#ADFF2F' className='mx-auto mb-4' />
          <h2 className='text-xl font-semibold text-white mb-2'>Steering & Suspension</h2>
          <p className='text-gray-300 text-sm'>
            Smooth and safe handling through suspension tuning, alignment, and steering system maintenance.
          </p>
        </div>

        <div className='bg-zinc-900 p-8 rounded-2xl w-full sm:w-[45%] lg:w-[30%] text-center shadow-md shadow-gray-800 hover:scale-105 transition-all duration-300'>
          <FaTruckPickup size={60} color='#FF7F50' className='mx-auto mb-4' />
          <h2 className='text-xl font-semibold text-white mb-2'>Body Repair & Paint</h2>
          <p className='text-gray-300 text-sm'>
            Professional denting, painting, and detailing to restore your car’s factory finish and shine.
          </p>
        </div>

        <div className='bg-zinc-900 p-8 rounded-2xl w-full sm:w-[45%] lg:w-[30%] text-center shadow-md shadow-gray-800 hover:scale-105 transition-all duration-300'>
          <FaOilCan size={60} color='#FFA500' className='mx-auto mb-4' />
          <h2 className='text-xl font-semibold text-white mb-2'>Oil & Lubrication</h2>
          <p className='text-gray-300 text-sm'>
            Complete lubrication service for engine, gearbox, and brakes ensuring smooth operation and longer life.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Car;
