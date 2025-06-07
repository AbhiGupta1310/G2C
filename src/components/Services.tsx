import React, { useEffect, useRef } from "react";
import { Zap, Award } from "lucide-react";

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "🟡",
      title: "Cash for Gold",
      description:
        "Get instant cash for your gold jewelry, coins, bars, and ornaments. We accept all forms of gold.",
      features: [
        "All Purity Levels",
        "Instant Testing",
        "Best Market Rates",
        "No Melting Required",
      ],
      color: "border-yellow-400/50 hover:border-yellow-400",
      bgGradient: "from-yellow-400/10 to-orange-400/10",
    },
    {
      icon: "⚪",
      title: "Cash for Silver",
      description:
        "Silver jewelry, coins, utensils, and artifacts - we buy all types of silver items at competitive rates.",
      features: [
        "Sterling Silver",
        "Pure Silver",
        "Antique Items",
        "Bulk Purchases",
      ],
      color: "border-gray-400/50 hover:border-gray-300",
      bgGradient: "from-gray-400/10 to-gray-500/10",
    },
    {
      icon: "💎",
      title: "We Buy Diamonds",
      description:
        "Professional diamond evaluation and purchasing. Certified gemologists ensure accurate pricing.",
      features: [
        "Certified Evaluation",
        "All Cuts & Sizes",
        "Loose & Set Diamonds",
        "GIA Certified",
      ],
      color: "border-blue-400/50 hover:border-blue-400",
      bgGradient: "from-blue-400/10 to-purple-400/10",
    },
    {
      icon: "🪙",
      title: "Coins & Antiques",
      description:
        "Rare coins, antique jewelry, and collectible items. We specialize in vintage and heritage pieces.",
      features: [
        "Rare Coins",
        "Vintage Jewelry",
        "Heritage Items",
        "Collector Pieces",
      ],
      color: "border-amber-400/50 hover:border-amber-400",
      bgGradient: "from-amber-400/10 to-yellow-600/10",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Bring Your Items",
      description: "Visit our store with your gold, silver, diamonds, or coins",
    },
    {
      step: "02",
      title: "Professional Testing",
      description: "We test purity using certified Karatmeter equipment",
    },
    {
      step: "03",
      title: "Transparent Pricing",
      description: "Get the best rates based on current market prices",
    },
    {
      step: "04",
      title: "Instant Payment",
      description: "Receive cash immediately or bank transfer within minutes",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center space-x-2 bg-blue-400/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            What We <span className="shimmer-text">Buy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional buying services for all types of precious metals and
            gems. Get the best value for your valuables with our transparent and
            certified process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal group bg-gradient-to-br ${service.bgGradient} border ${service.color} rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 hover:transform hover:scale-105`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-400 text-center mb-6 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="reveal bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">4-Step Process</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Simple, transparent, and fast - get cash for your valuables in
              minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {step.title}
                </h4>

                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 reveal">
          <div className="bg-black border border-yellow-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Get Cash?
            </h4>
            <p className="text-gray-400 mb-6">
              Visit our store today or call us for a free consultation. We're
              here to help you get the best value for your precious items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("tel:+917827071798", "_self")}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                📞 Call Now
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/917827071798?text=Hi! I want to sell my valuables. Please assist.",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                💬 WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
