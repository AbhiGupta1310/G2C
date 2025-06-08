import React, { useEffect, useRef } from "react";
import { Award, Users, TrendingUp, Shield, Clock, Heart } from "lucide-react";

const About: React.FC = () => {
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

  const stats = [
    {
      icon: Users,
      number: "1,500+",
      label: "Happy Customers",
      color: "text-blue-400",
    },
    {
      icon: TrendingUp,
      number: "₹15Cr+",
      label: "Total Paid Out",
      color: "text-green-400",
    },
    {
      icon: Award,
      number: "12+",
      label: "Years Experience",
      color: "text-yellow-400",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Customer Support",
      color: "text-purple-400",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "Every transaction is transparent with live testing and immediate documentation.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
    },
    {
      icon: TrendingUp,
      title: "Best Market Rates",
      description:
        "We continuously monitor market rates to offer you the most competitive prices.",
      color: "text-green-400",
      bgColor: "bg-green-400/20",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We treat every customer like family.",
      color: "text-red-400",
      bgColor: "bg-red-400/20",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description:
        "Licensed buyers with certified equipment and industry-standard processes.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20",
    },
  ];

  const teamMembers = [
    {
      name: "Rajesh Gupta",
      position: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "15+ years in precious metals industry",
    },
    {
      name: "Priya Sharma",
      position: "Chief Evaluator",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Certified gemologist and gold specialist",
    },
    {
      name: "Amit Kumar",
      position: "Customer Relations",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Ensuring every customer leaves satisfied",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center space-x-2 bg-orange-400/20 border border-orange-400/30 rounded-full px-6 py-2 mb-6">
            <Users className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">
              About Us
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            About <span className="shimmer-text">GET 2 CASH</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Your trusted partner for buying precious metals since 2008. We've
            built our reputation on transparency, fair pricing, and exceptional
            customer service.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="reveal">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1634292/pexels-photo-1634292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="GET 2 CASH Store"
                className="w-full h-80 object-cover rounded-2xl border border-yellow-400/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <div className="text-white text-lg font-semibold">
                  EST. 2008
                </div>
                <div className="text-yellow-400">15+ Years of Trust</div>
              </div>
            </div>
          </div>

          <div className="reveal space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 2008 with a simple mission: to provide honest,
              transparent, and fair precious metal buying services. What started
              as a small shop has grown into one of the most trusted names in
              the industry.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe that selling your precious items shouldn't be stressful
              or uncertain. That's why we've invested in state-of-the-art
              testing equipment, trained our staff extensively, and built
              processes that prioritize transparency above all else.
            </p>

            <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">Our Mission</h4>
              <p className="text-gray-300">
                To provide immediate cash for precious metals while ensuring
                complete transparency, fair pricing, and exceptional customer
                experience in every transaction.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="reveal mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div
                  className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="reveal mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Core Values</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every service
              we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-xl"
              >
                <div
                  className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>

                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {value.title}
                </h4>

                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="reveal">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Meet Our <span className="text-yellow-400">Expert Team</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to providing you with the best
              service and fair evaluation of your precious items.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-500"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400/30 group-hover:border-yellow-400/60 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {member.name}
                </h4>

                <p className="text-yellow-400 font-medium mb-3">
                  {member.position}
                </p>

                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal mt-16 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-white mb-4">
              Certifications & <span className="text-yellow-400">Licenses</span>
            </h4>
            <p className="text-gray-400">
              Our credentials that ensure you're dealing with legitimate and
              certified professionals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "BIS Certified", desc: "Bureau of Indian Standards" },
              { name: "Licensed Buyer", desc: "Government Approved" },
              {
                name: "Karatmeter Certified",
                desc: "Accurate Testing Equipment",
              },
              { name: "ISO Certified", desc: "Quality Management" },
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h5 className="text-white font-semibold mb-1">{cert.name}</h5>
                <p className="text-gray-400 text-xs">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
