export function Hero() {
  return (
    <div className="relative bg-primary-light pt-32 pb-16 overflow-hidden min-h-[90vh]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-world-pattern bg-center bg-no-repeat opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Streamline your path to global opportunities
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Ready to relocate? We help you with every tool needed for a smooth visa application
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Check your eligibility
        </button>
      </div>
      <div className="mt-16 relative z-10 px-4">
        <img
          src="/travel-map.jpg"
          alt="World Map"
          className="w-full max-w-5xl mx-auto h-auto object-cover rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
}