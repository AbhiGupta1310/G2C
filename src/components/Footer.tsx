import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Star,
  Shield,
  Award,
} from "lucide-react";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Get Quote", id: "quote" },
    { label: "About Us", id: "about" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  const services = [
    "Cash for Gold",
    "Cash for Silver",
    "Diamond Buying",
    "Coin Collection",
    "Antique Jewelry",
    "Bulk Purchases",
  ];

  const socialLinks = [
    {
      icon: Facebook,
      url: "https://facebook.com/get2cash",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      url: "https://instagram.com/get2cash",
      color: "hover:text-pink-500",
    },
    {
      icon: Youtube,
      url: "https://youtube.com/@get2cash",
      color: "hover:text-red-500",
    },
    {
      icon: Twitter,
      url: "https://twitter.com/get2cash",
      color: "hover:text-blue-400",
    },
  ];

  const certifications = [
    { name: "BIS Certified", icon: Award },
    { name: "Licensed Buyer", icon: Shield },
    { name: "ISO Certified", icon: Star },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-yellow-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">G2C</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif shimmer-text">
                  GET 2 CASH
                </h3>
                <p className="text-xs text-yellow-400">
                  Instant Gold & Silver Buyers
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for buying precious metals since 2008. We
              provide instant cash with transparent pricing and certified
              testing.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+91 78270 71798</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@get2cash.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-red-400 mt-1" />
                <span>
                  123 Gold Street, Jewelry Market
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Business Hours
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-4 h-4 text-yellow-400" />
                <div>
                  <p className="text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-sm">Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <h5 className="text-white font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h5 className="text-white font-semibold mb-3">Certifications</h5>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-1 bg-gray-800 rounded-full px-3 py-1"
                  >
                    <cert.icon className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs text-gray-400">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">
                1,500+
              </div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">
                ₹15Cr+
              </div>
              <div className="text-gray-400 text-sm">Total Paid</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">12+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">
                4.9/5
              </div>
              <div className="text-gray-400 text-sm">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2024 GET 2 CASH. All rights reserved.</p>
              <p className="mt-1">
                Licensed Gold & Silver Buyers | Reg. No: GB/2008/MH/001
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Refund Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Strip */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-4 text-white text-sm">
            <span className="font-semibold">🚨 Emergency Cash Service:</span>
            <a href="tel:+917827071798" className="font-bold hover:underline">
              +91 78270 71798
            </a>
            <span className="hidden sm:inline">- Available 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
