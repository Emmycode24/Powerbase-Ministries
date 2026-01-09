const Ministries = () => (
  <section className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center mb-12">
        Our Ministries
      </h3>

      <div className="grid md:grid-cols-4 gap-6">
        {["Children", "Youth", "Women", "Men"].map((m, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">{m}</h4>
            <p>Growing together in faith and love.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Ministries;
