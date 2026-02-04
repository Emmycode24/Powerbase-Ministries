import React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Trophy, Flame, Target, Eye } from "lucide-react";
import pastorImg from "./pb logo - Copy.jpg";

const pastors = [
  { name: "REV. Dr John Chinedu Oliver", role: "SETMAN", img: pastorImg },
  { name: "Pastor Priestley Abrahams", role: "Lead Pastor", img: pastorImg },
  { name: "Pastor Augustine Chinomso", role: "Head-quarters Pastor", img: pastorImg },
  { name: "Pastor Charity Richards", role: "Pastor", img: pastorImg },
];

const coreValues = [
  { title: "Faith", icon: Flame },
  { title: "Love", icon: Heart },
  { title: "Excellence", icon: Trophy },
  { title: "Integrity", icon: ShieldCheck },
];
const About = React.memo(() => {
  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--purple)] mb-6">
            About Powerbase Ministry International
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Powerbase Ministry International is a Christ-centered church committed to
            raising believers who walk in{" "}
            <span className="text-[var(--purple)] font-semibold">power</span>,{" "}
            <span className="text-[var(--purple)] font-semibold">purpose</span>, and{" "}
            <span className="text-[var(--purple)] font-semibold">love</span>{" "}
            through the Word of God.
          </p>
        </motion.div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl p-8 shadow hover:shadow-lg hover:bg-purple-500 transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-[var(--purple)] group-hover:text-white transition" />
              <h3 className="text-2xl font-bold text-[var(--purple)] group-hover:text-white transition">
                Our Mission
              </h3>
            </div>

            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed space-y-2">
              <span className="block">
                As we praise and worship in spirit and truth,
              </span>
              <span className="block">
               Thoroughly Empowered by the Holy Spirit,
              </span>
              <span className="block">
                Based on the total, holy, infallible Word of God.
              </span>
              <span className="block">
                United to fight corruption in our society and take our world for Jesus.
              </span>
              <span className="block font-semibold">
                Powerbase is where DESTINIES are DICCOVERED, RECOVERED and SHAPED.
              </span>
              <span className="block">
                True worshippers of the living God are developed for God alone.
              </span>
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl p-8 shadow hover:shadow-lg hover:bg-purple-500 transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-[var(--purple)] group-hover:text-white transition" />
              <h3 className="text-2xl font-bold text-[var(--purple)] group-hover:text-white transition">
                Our Vision
              </h3>
            </div>

            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 font-medium">
              To Discover, Recover, and Shape Destinies.
            </p>
          </motion.div>
        </div>

        {/* CORE VALUES */}
        <div>
          <h3 className="text-3xl font-bold text-center text-[var(--purple)] mb-10">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map(({ title, icon: Icon }) => (
              <motion.div
                key={title}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition group cursor-pointer"
              >
                <Icon
                  size={40}
                  className="mx-auto mb-4 text-gray-700 group-hover:text-[var(--purple)] transition"
                />
                <h4 className="font-semibold text-lg group-hover:text-[var(--purple)] transition">
                  {title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LEADERSHIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-10 shadow"
        >
          <h3 className="text-3xl font-bold text-[var(--purple)] mb-12 text-center">
            Meet Our Pastors
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {pastors.map((pastor) => (
              <motion.div
                key={pastor.name}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-xl shadow-lg p-6 transition cursor-pointer"
              >
                <img
                  src={pastor.img}
                  alt={pastor.name}
                  loading="lazy"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h4 className="text-2xl font-semibold text-[var(--purple)]">
                  {pastor.name}
                </h4>
                <p className="text-gray-700">{pastor.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
});

// No props used
export default About;
