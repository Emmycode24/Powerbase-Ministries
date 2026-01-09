import { motion } from "framer-motion";

const Hero = () => (
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
);

export default Hero;
