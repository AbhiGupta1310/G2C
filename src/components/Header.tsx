import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calculator } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "quote", label: "Get Quote" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    // { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Reviews" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleMenuClick("home")}
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 gold-gradient rounded-full flex items-center justify-center animate-goldGlow">
              <span className="text-black font-anton text-lg md:text-xl">
                G2C
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-anton shimmer-text">
                GET 2 CASH
              </h1>
              <p className="text-xs text-yellow-400 font-light hidden sm:block">
                Instant Gold & Silver Buyers
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-yellow-400 relative ${
                  activeSection === item.id ? "text-yellow-400" : "text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button
              onClick={() => window.open("tel:+917827071798", "_self")}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-3 py-2 lg:px-4 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={14} />
              <span className="hidden lg:inline">Call Now</span>
              <span className="lg:hidden">Call</span>
            </button>
            <button
              onClick={() => handleMenuClick("quote")}
              className="flex items-center space-x-2 gold-gradient hover:shadow-lg hover:shadow-yellow-500/25 px-3 py-2 lg:px-4 rounded-full text-black text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Calculator size={14} />
              <span className="hidden lg:inline">Get Quote</span>
              <span className="lg:hidden">Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-yellow-400/10 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 glass-effect rounded-lg">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-yellow-400/20 text-yellow-400"
                      : "hover:bg-yellow-400/10 text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-yellow-400/20">
                <button
                  onClick={() => window.open("tel:+917827071798", "_self")}
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={() => handleMenuClick("quote")}
                  className="flex items-center justify-center space-x-2 gold-gradient px-4 py-3 rounded-lg text-black text-sm font-medium transition-all duration-300"
                >
                  <Calculator size={16} />
                  <span>Get Instant Quote</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
