const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-emerald-600 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Start Your Healthy Journey?
        </h2>
        <p className="text-xl opacity-90">
          Join thousands of happy customers choosing organic
        </p>
        <button className="bg-white text-emerald-600 px-10 py-4 rounded-full hover:bg-stone-100 transition-all hover:scale-105 font-bold text-lg">
          Shop Collection
        </button>
      </div>
    </section>
  );
};

export default CTASection;
