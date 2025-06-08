import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredContact: "phone",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mjkrgqrr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          preferredContact: formData.preferredContact,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          preferredContact: "phone",
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Try again.");
    }

    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+91 78270 71798",
      secondary: "+91 85128 45064",
      description: "Call us anytime - we're always available",
      action: () => window.open("tel:+917827071798", "_self"),
      color: "text-green-400",
      bgColor: "bg-green-400/20",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+91 78270 71798",
      secondary: "Quick responses guaranteed",
      description: "Send photos & get instant quotes",
      action: () =>
        window.open(
          "https://wa.me/917827071798?text=Hi! I want to sell my valuables.",
          "_blank"
        ),
      color: "text-green-500",
      bgColor: "bg-green-500/20",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "get2cashinfo@gmail.com",
      // secondary: "support@get2cash.com",
      description: "We respond within 1 hour",
      action: () => window.open("mailto:get2cashinfo@gmail.com", "_self"),
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
    },
    {
      icon: MapPin,
      title: "Visit Store",
      primary: "123 Gold Street, Jewelry Market",
      secondary: "Mumbai, Maharashtra 400001",
      description: "See our process live",
      action: () =>
        window.open(
          "https://maps.google.com/?q=123+Gold+Street+Mumbai",
          "_blank"
        ),
      color: "text-red-400",
      bgColor: "bg-red-400/20",
    },
  ];

  const businessHours = [
    { day: "Monday - Saturday", hours: "10:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "11:00 AM - 6:00 PM" },
    { day: "Public Holidays", hours: "12:00 PM - 5:00 PM" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-400/20 border border-pink-400/30 rounded-full px-6 py-2 mb-6">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-sm font-medium">
              Contact Us
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            Get In <span className="shimmer-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ready to turn your precious metals into instant cash? Contact us
            today for a free consultation and quote. We're just one call away!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Send className="w-6 h-6 text-yellow-400" />
              <span>Send us a Message</span>
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="+91 78270 71798"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["phone", "whatsapp"].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() =>
                          handleInputChange("preferredContact", method)
                        }
                        className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 capitalize ${
                          formData.preferredContact === method
                            ? "bg-yellow-400 text-black"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        {method === "whatsapp" ? "WhatsApp" : "Phone Call"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about the items you want to sell..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </span>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-400 mb-4">
                  Thank you for contacting us. We'll get back to you within 30
                  minutes.
                </p>
                <div className="bg-green-400/20 border border-green-400/30 rounded-lg p-4">
                  <p className="text-green-400 text-sm">
                    Expect a call or WhatsApp message from us shortly!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  onClick={method.action}
                  className="group bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:transform hover:scale-105"
                >
                  <div
                    className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className={`w-6 h-6 ${method.color}`} />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {method.title}
                  </h4>

                  <p className="text-gray-300 text-sm mb-1">{method.primary}</p>
                  <p className="text-gray-400 text-xs mb-3">
                    {method.secondary}
                  </p>
                  <p className="text-gray-500 text-xs">{method.description}</p>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-6 h-6 text-yellow-400" />
                <h4 className="text-xl font-bold text-white">Business Hours</h4>
              </div>

              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
                  >
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-yellow-400 font-medium">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
                <p className="text-yellow-400 text-sm font-medium mb-1">
                  Emergency Services Available
                </p>
                <p className="text-gray-400 text-xs">
                  Need immediate assistance?
                  <br />
                  Call our emergency line: +91 78270 71798
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <span>Visit Our Store</span>
                </h4>
                <p className="text-gray-400 mt-2">
                  123 Gold Street, Jewelry Market
                  <br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>

              <div className="h-64 bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-500 mb-4">Interactive Map</p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=123+Gold+Street+Mumbai",
                        "_blank"
                      )
                    }
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                  >
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-400/10 to-orange-400/10 border border-red-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              Need <span className="text-red-400">Immediate</span> Cash?
            </h4>
            <p className="text-gray-400 mb-6">
              Emergency situations require immediate solutions. We're here to
              help you get cash quickly and safely.
            </p>
            <button
              onClick={() => window.open("tel:+917827071798", "_self")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              🚨 Emergency Hotline: +91 78270 71798
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
