const Contact = () => (
  <section className="pt-32 pb-20 max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-[var(--purple)] mb-6">
      Prayer & Contact
    </h2>

    <form className="bg-white p-8 rounded shadow space-y-4">
      <input className="w-full border p-3 rounded" placeholder="Full Name" />
      <input className="w-full border p-3 rounded" placeholder="Email" />
      <textarea
        className="w-full border p-3 rounded"
        rows="5"
        placeholder="Your prayer request"
      />
      <button className="bg-[var(--purple)] text-white px-6 py-3 rounded">
        Submit
      </button>
    </form>
  </section>
);

export default Contact;
