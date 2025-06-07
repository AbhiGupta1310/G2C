import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Excellent service! Got the best rate for my gold jewelry. The testing process was transparent and they paid immediately. Highly recommended!",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Very professional team. They explained everything clearly and offered better rates than other gold buyers. Quick and hassle-free experience.",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Sold my old silver items here. They were honest about the pricing and the whole process took just 15 minutes. Great experience!",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Amit Singh",
      location: "Pune",
      rating: 5,
      text: "Best gold buyers in the city! Fair pricing, quick service, and very trustworthy. They even offered me tea while waiting. Excellent customer service!",
      image:
        "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Sunita Agarwal",
      location: "Jaipur",
      rating: 5,
      text: "I was skeptical about selling my family jewelry, but their professional approach and transparent testing convinced me. Got excellent value!",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Vikram Rao",
      location: "Bangalore",
      rating: 5,
      text: "Needed quick cash for emergency. GET 2 CASH helped me within 30 minutes. Fair rates and instant payment. Lifesaver!",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-400/20 border border-green-400/30 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-green-400" fill="currentColor" />
            <span className="text-green-400 text-sm font-medium">
              Customer Reviews
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            What Our <span className="shimmer-text">Customers Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience with GET 2 CASH.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-8 md:p-12 shadow-2xl">
            <Quote className="w-12 h-12 text-yellow-400/50 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Customer Image */}
              <div className="text-center md:text-left">
                <div className="w-32 h-32 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-yellow-400/30 mb-4">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center md:justify-start mb-2">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
                <h4 className="text-xl font-bold text-white">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-yellow-400 font-medium">
                  {testimonials[currentSlide].location}
                </p>
              </div>

              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                  "{testimonials[currentSlide].text}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-yellow-400 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10,000+", label: "Happy Customers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "₹50Cr+", label: "Paid to Customers" },
            { number: "99%", label: "Customer Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        {/* <div className="mt-12 text-center bg-gradient-to-r from-blue-400/10 to-green-400/10 border border-blue-400/20 rounded-xl p-8">
          <h4 className="text-xl font-bold text-white mb-4">See More Reviews</h4>
          <p className="text-gray-400 mb-6">Check out our reviews on Google My Business and other platforms</p>
          <button
            onClick={() => window.open('https://www.google.com/search?q=GET+2+CASH+reviews', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            📍 View Google Reviews
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
