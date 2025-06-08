import React, { useEffect, useState } from "react";
import {
  Phone,
  Calculator,
  Star,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Sona Do Paisa Lo";

  useEffect(() => {
    setIsVisible(true);

    // Reset typed text to ensure clean start
    setTypedText("");

    let index = 0;
    let typingInterval: NodeJS.Timeout;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
    };

    const delayBeforeTyping = setTimeout(startTyping, 500);

    return () => {
      clearTimeout(delayBeforeTyping);
      clearInterval(typingInterval);
    };
  }, [fullText]);

  const handleCallNow = () => {
    window.open("tel:+917827071798", "_self");
  };

  const handleGetQuote = () => {
    scrollToSection("quote");
  };

  return (
    <section className="pt-10 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-yellow-400/10 to-transparent animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-orange-400/10 to-transparent animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-6 md:space-y-10"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mt-6 mb-4 md:mt-20 md:mb-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 md:px-6">
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <span className="text-yellow-400 text-xs md:text-sm font-medium">
                Trusted by 1500+ Customers
              </span>
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold font-serif shimmer-text text-shadow-gold"
          >
            GET 2 CASH
          </motion.h1>

          {/* Slogan with blinking cursor */}
          <motion.h2
            className="text-xl md:text-3xl lg:text-5xl font-bold text-yellow-400 font-serif h-10 md:h-16 flex justify-center items-center overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span>{typedText}</span>
            {typedText.length < fullText.length && (
              <span className="animate-blink ml-1">|</span>
            )}
          </motion.h2>

          {/* Subtitle */}
          <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-2 leading-relaxed"
            >
              Get{" "}
              <span className="text-yellow-400 font-semibold">
                Instant Cash
              </span>{" "}
              for Gold, Silver, Diamonds & Coins
            </motion.p>
            <p className="text-sm md:text-base lg:text-lg text-gray-400">
              Best Rates • Certified Testing • No Melting Required
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-6"
          >
            {[
              {
                icon: <TrendingUp className="text-green-400" />,
                label: "Live Market Rates",
              },
              {
                icon: <Shield className="text-blue-400" />,
                label: "100% Safe & Secure",
              },
              {
                icon: <Clock className="text-yellow-400" />,
                label: "Instant Payment",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 bg-black/40 rounded-full px-3 py-2 md:px-4"
              >
                {item.icon}
                <span className="text-gray-300 text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <button
              onClick={handleCallNow}
              className="group flex items-center justify-center space-x-2 md:space-x-3 bg-green-600 hover:bg-green-700 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 md:w-6 md:h-6 group-hover:animate-bounce" />
              <span>Call Now - +91 78270 71798</span>
            </button>

            <button
              onClick={handleGetQuote}
              className="group flex items-center justify-center space-x-2 md:space-x-3 gold-gradient hover:shadow-2xl hover:shadow-yellow-500/25 px-6 py-3 md:px-8 md:py-4 rounded-full text-black text-sm md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto gold-gradient-hover"
            >
              <Calculator className="w-4 h-4 md:w-6 md:h-6 group-hover:animate-bounce" />
              <span>Get Instant Quote</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={fadeUp} className="text-center opacity-80">
            <p className="text-gray-400 text-xs md:text-sm mb-3">
              Trusted &amp; Certified Gold Buyers
            </p>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center items-center gap-4 md:gap-8"
            >
              {[
                { bg: "bg-yellow-400", label: "BIS", text: "BIS Certified" },
                { bg: "bg-blue-500", label: "KM", text: "Karatmeter" },
                { bg: "bg-green-500", label: "LB", text: "Licensed Buyer" },
              ].map((item, i) => (
                <motion.div
                  variants={fadeUp}
                  key={i}
                  className="flex items-center space-x-2"
                >
                  <div
                    className={`w-6 h-6 md:w-8 md:h-8 ${item.bg} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-xs">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs text-white">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-yellow-400 rounded-full mt-2" />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
