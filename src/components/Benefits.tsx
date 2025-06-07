import React, { useEffect, useRef } from 'react';
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  Award,
  CheckCircle,
  Banknote
} from 'lucide-react';

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Zap,
      title: "Instant Cash",
      description: "Get cash in hand within minutes. No waiting, no delays. We test and pay immediately.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20"
    },
    {
      icon: Shield,
      title: "Certified Testing",
      description: "Advanced Karatmeter testing ensures accurate purity assessment. Transparent process you can watch.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/20"
    },
    {
      icon: TrendingUp,
      title: "Best Market Rates",
      description: "We offer competitive rates based on live gold prices. No hidden charges or deductions.",
      color: "text-green-400",
      bgColor: "bg-green-400/20"
    },
    {
      icon: CheckCircle,
      title: "No Melting Required",
      description: "Keep your jewelry intact. We buy based on weight and purity without melting your precious items.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/20"
    }
  ];

  const features = [
    { icon: Clock, text: "Open 7 Days a Week" },
    { icon: Users, text: "10,000+ Happy Customers" },
    { icon: Award, text: "Licensed & Certified" },
    { icon: Banknote, text: "Cash or Bank Transfer" }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 md:px-6 mb-4 md:mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold font-serif mb-4 md:mb-6">
            Why <span className="shimmer-text">GET 2 CASH</span> is Your Best Choice
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4">
            Experience the difference with our professional, transparent, and customer-first approach to precious metal buying.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="reveal group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 md:p-8 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-6 h-6 md:w-8 md:h-8 ${benefit.color}`} />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-yellow-400 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed text-sm md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="reveal bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-2xl p-6 md:p-8">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Additional <span className="text-yellow-400">Benefits</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base">More reasons to trust GET 2 CASH with your precious metals</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-2 md:mb-3 group-hover:bg-yellow-400/30 transition-colors">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                </div>
                <p className="text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors text-center">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="reveal text-center mt-12 md:mt-16">
          <h4 className="text-base md:text-lg font-semibold text-yellow-400 mb-4 md:mb-6">Trusted & Certified By</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {[
              { name: "BIS Certified", code: "BIS" },
              { name: "Karatmeter", code: "KM" },
              { name: "Licensed Buyer", code: "LB" },
              { name: "ISO Certified", code: "ISO" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 md:space-x-3 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">{badge.code}</span>
                </div>
                <span className="text-gray-400 text-xs md:text-sm">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;