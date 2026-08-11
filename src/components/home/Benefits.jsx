import { FiTruck, FiShield, FiRefreshCw, FiHeadphones } from "react-icons/fi";

function Benefits() {
  const benefits = [
    {
      icon: FiTruck,
      title: "Free Shipping",
      description: "Free shipping on orders over $100.",
    },
    {
      icon: FiShield,
      title: "Secure Payment",
      description: "Your payment information is always protected.",
    },
    {
      icon: FiRefreshCw,
      title: "Easy Returns",
      description: "Simple and hassle-free return process.",
    },
    {
      icon: FiHeadphones,
      title: "24/7 Support",
      description: "Our team is always here to help you.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl border border-gray-100 p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="rounded-full bg-blue-100 p-4 text-blue-600">
                <Icon size={28} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {benefit.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Benefits;
