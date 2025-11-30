import { Leaf, Heart, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "100% Organic",
    desc: "Certified organic products",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health First",
    desc: "Nutrient-rich selections",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Fast Delivery",
    desc: "Fresh to your door",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-stone-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
