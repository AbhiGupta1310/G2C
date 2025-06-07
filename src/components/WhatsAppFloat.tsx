import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the widget after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const quickMessages = [
    {
      text: "Hi! I want to sell my gold jewelry. Please assist.",
      emoji: "⚱️",
    },
    {
      text: "I have silver items to sell. What's your current rate?",
      emoji: "⚪",
    },
    {
      text: "I want to get a quote for my diamonds.",
      emoji: "💎",
    },
    {
      text: "Do you buy old coins? I have some rare pieces.",
      emoji: "🪙",
    },
    {
      text: "What documents do I need to bring?",
      emoji: "📄",
    },
  ];

  const sendWhatsAppMessage = (message: string) => {
    const phoneNumber = "917827071798";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  const sendCustomMessage = () => {
    const message =
      "Hi! I'm interested in your gold buying services. Please help me.";
    sendWhatsAppMessage(message);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group">
      {/* Chat Widget */}
      {isOpen && (
        <div
          className="mb-4
            bg-white bg-opacity-95 backdrop-blur-sm
            rounded-2xl
            shadow-[0_10px_15px_-3px_rgba(34,197,94,0.6),0_4px_6px_-2px_rgba(34,197,94,0.5)]
            border border-gray-300
            w-72 md:w-80 max-w-[calc(100vw-2rem)]
            animate-fadeInUp"
        >
          {/* Header */}
          <div className="bg-green-600 text-white p-3 md:p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xs md:text-sm">
                  G2C
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base">
                  GET 2 CASH
                </h4>
                <p className="text-xs opacity-90">
                  Typically replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-green-700 rounded-full p-1 transition-colors"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-3 md:p-4 text-black">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-2 md:p-3 mb-3">
                <p className="text-gray-900 text-xs md:text-sm">
                  👋 Hi there! How can we help you today?
                </p>
              </div>
              <p className="text-gray-800 text-xs mb-3">
                Choose a quick message or start a custom chat:
              </p>
            </div>

            {/* Quick Messages */}
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendWhatsAppMessage(msg.text)}
                  className="w-full text-left p-2 md:p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-xs md:text-sm border border-gray-200 text-black"
                >
                  <span className="mr-2">{msg.emoji}</span>
                  {msg.text}
                </button>
              ))}
            </div>

            {/* Custom Message Button */}
            <button
              onClick={sendCustomMessage}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 md:py-3 px-3 md:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm md:text-base"
            >
              <Send className="w-3 h-3 md:w-4 md:h-4" />
              <span>Start Custom Chat</span>
            </button>

            {/* Footer */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                We respond within 2 minutes • Available 10 AM - 8 PM
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
      >
        {isOpen ? (
          <X className="w-6 h-6 md:w-8 md:h-8" />
        ) : (
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center animate-bounce">
          1
        </div>
      )}

      {/* Tooltip */}
      {!isOpen && (
        <div
          className="absolute right-16 md:right-20 top-1/2 transform -translate-y-1/2
            bg-black text-white text-xs md:text-sm px-2 md:px-3 py-1 md:py-2 rounded-lg whitespace-nowrap
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
        >
          💬 Chat with us on WhatsApp
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloat;
