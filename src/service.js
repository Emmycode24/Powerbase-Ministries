import { motion } from "framer-motion";
import PropTypes from "prop-types";

const services = [
  {
    day: "Sunday",
    title: "Champion’s Hour",
    time: "8:00 AM – 11:00 AM",
  },
  {
    day: "Tuesday",
    title: "Discovery of Destinies",
    time: "6:00 PM – 7:30 PM",
  },
  {
    day: "Thursday",
    title: "Jesus-Night",
    time: "6:00 PM – 7:30 PM",
  },
  
  {
    day: "First Friday",
    title: "Believers Victory Night",
    time: "11:00 PM – 3:00 AM",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-[var(--purple)]"
        >
          Service Times
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition"
            >
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                {service.day}
              </p>

              <h4 className="text-xl font-semibold mb-2 text-[var(--purple)]">
                {service.title}
              </h4>

              <p className="text-gray-700">{service.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {};
export default Services;

