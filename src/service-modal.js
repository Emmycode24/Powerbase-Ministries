const ServiceModal = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <div className="text-4xl mb-4">{service.icon}</div>

        <h3 className="text-2xl font-bold text-purple-600 mb-2">
          {service.title}
        </h3>

        <p className="text-gray-700 mb-4">
          {service.description}
        </p>

        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Day:</strong> {service.dayLabel}</p>
          <p><strong>Time:</strong> {service.time}</p>
          <p><strong>Category:</strong> {service.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
