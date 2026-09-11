import React from "react";

const Hero = () => {
  return (
    <div
      className="relative min-h-[620px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url(/purplebg2.jpg)" }}
    >
      <div className="absolute inset-0 bg-purple-950/50"></div>

      <div className="relative z-10 text-white px-6 max-w-4xl">
        <img src="/powerbase-logo.jpg" alt="Powerbase Ministries" className="w-20 h-20 object-cover rounded-full mx-auto mb-6 border-4 border-white" />
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Powerbase Ministry International
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover, Recover and Shape Destinies.
        </p>
        <a href="#messages" className="inline-block rounded-full bg-white text-purple-800 px-7 py-3 font-semibold hover:bg-yellow-300">Join Us This Sunday</a>
      </div>
    </div>
  );
};

export default Hero;
