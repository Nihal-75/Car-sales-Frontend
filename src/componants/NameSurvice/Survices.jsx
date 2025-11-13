import React from "react";
import Projectscard from "./Survicess";

export const Projects = () => {
  return (
    <div id="Projects" className="bg-black text-white py-16 px-6 md:px-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#f4c542]">
        Luxury Car Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {/* Tesla Model X */}
        <Projectscard
          img="https://images.unsplash.com/photo-1619767886558-efdc259cde1b?auto=format&fit=crop&w=800&q=80"
          title="Tesla Model X"
          main="Electric SUV with autopilot, long range, and futuristic luxury interiors."
          price={9500000}
        />

        {/* BMW M8 */}
        <Projectscard
          img="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80"
          title="BMW M8 Competition"
          main="Twin-turbo V8, carbon fiber body, and track-level performance."
          price={13800000}
        />

        {/* Mercedes AMG GT */}
        <Projectscard
          img="https://images.unsplash.com/photo-1605719125063-8b9ef46f6d98?auto=format&fit=crop&w=800&q=80"
          title="Mercedes AMG GT"
          main="Engineered for speed and elegance — handcrafted performance machine."
          price={17500000}
        />

        {/* Audi R8 */}
        <Projectscard
          img="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=800&q=80"
          title="Audi R8 V10"
          main="Supercar performance with Quattro control and aerodynamic styling."
          price={23000000}
        />

        {/* Porsche 911 */}
        <Projectscard
          img="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80"
          title="Porsche 911 Turbo S"
          main="Iconic design, stunning acceleration, and precision German engineering."
          price={18900000}
        />

        {/* Lamborghini Huracán */}
        <Projectscard
          img="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=800&q=80"
          title="Lamborghini Huracán EVO"
          main="Raging bull power with a V10 engine and thrilling aerodynamic design."
          price={31000000}
        />
      </div>
    </div>
  );
};

export default Projects;
