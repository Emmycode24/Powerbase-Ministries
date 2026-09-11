import React from "react";
<<<<<<< HEAD

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

=======
import { motion } from "framer-motion";

const Hero = React.memo(() => (
  <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-700 text-white">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-3xl px-6"
    >
      <h2 className="text-5xl font-bold mb-6">
        Welcome to Powerbase Ministries
      </h2>
      <p className="text-lg mb-8">
        A place to grow in faith, worship in truth, and live in purpose.
      </p>
      <div className="space-x-4">
        <button className="bg-[var(--gold)] text-black px-6 py-3 rounded font-semibold">
          Watch Sermon
        </button>
        <button className="border border-white px-6 py-3 rounded">
          Plan a Visit
        </button>
      </div>
    </motion.div>
  </section>
));

// No props used
>>>>>>> 583d53d57011b56a51b5fb0e108698aa7ea9b18b
export default Hero;
