import { motion } from "framer-motion";
import { Heart, ShieldCheck, Trophy, Flame, Target, Eye } from "lucide-react";
import pastorImg from "./pb logo - Copy.jpg"; // Replace with your pastor images

const pastors = [
  { name: "REV. Dr John Chinedu Oliver", role: "SETMAN", img: pastorImg },
  { name: "Pastor Priestly Abrahams", role: "Lead Pastor", img: pastorImg },
  { name: "Pastor Augustine Chinomso", role: "Head-quarters Pastor", img: pastorImg },
  { name: "Pastor Paul Chinomso", role: "Youth Pastor", img: pastorImg },
];

const coreValues = [
  { title: "Faith", icon: Flame },
  { title: "Love", icon: Heart },
  { title: "Excellence", icon: Trophy },
  { title: "Integrity", icon: ShieldCheck },
];

const About = () => {
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
            About Powerbase Ministries
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Powerbase Ministries is a Christ-centered church committed to
            raising believers who walk in{" "}
            <span className="text-[var(--purple)] font-semibold">power</span>,{" "}
            <span className="text-[var(--purple)] font-semibold">purpose</span>, and{" "}
            <span className="text-[var(--purple)] font-semibold">love</span> through the Word of God.
          </p>
        </motion.div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl p-8 shadow hover:shadow-lg hover:bg-purple-100 transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-[var(--purple)]" />
              <h3 className="text-2xl font-bold text-[var(--purple)]">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 group-hover:text-[var(--purple)] transition-colors duration-300 font-medium">
              To preach the gospel with power, disciple believers, and empower lives to walk in victory and purpose.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl p-8 shadow hover:shadow-lg hover:bg-purple-100 transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-[var(--purple)]" />
              <h3 className="text-2xl font-bold text-[var(--purple)]">Our Vision</h3>
            </div>
            <p className="text-gray-700 group-hover:text-[var(--purple)] transition-colors duration-300 font-medium">
              To raise a generation of spiritually empowered believers impacting their world for Christ.
            </p>
          </motion.div>
        </div>

        {/* CORE VALUES */}
        <div>
          <h3 className="text-3xl font-bold text-center text-[var(--purple)] mb-10">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition group cursor-pointer"
                >
                  <Icon
                    size={40}
                    className="mx-auto mb-4 text-gray-700 group-hover:text-[var(--purple)] transition-colors duration-300"
                  />
                  <h4 className="font-semibold text-lg group-hover:text-[var(--purple)] transition-colors duration-300">
                    {value.title}
                  </h4>
                </motion.div>
              );
            })}
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

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-start">
    {pastors.map((pastor, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="text-center bg-white rounded-xl shadow-lg p-6 transition cursor-pointer"
      >
        <img
          src={pastor.img}
          alt={pastor.name}
          className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
          loading="eager"
        />
        <h4 className="text-2xl font-semibold text-[var(--purple)]">{pastor.name}</h4>
        <p className="text-gray-700">{pastor.role}</p>
      </motion.div>
    ))}
  </div>
</motion.div>
      </div>
  </section>
  );
};
export default About;