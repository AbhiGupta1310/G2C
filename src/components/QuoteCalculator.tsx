import React, { useState } from "react";
import { Calculator, Zap, Info, TrendingUp } from "lucide-react";

const QuoteCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    metal: "gold",
    purity: "22k",
    weight: "",
    weightUnit: "grams",
  });

  const [estimate, setEstimate] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const rates = {
    gold: {
      "18k": 8100,
      "22k": 9040,
      "24k": 9860,
    },
    silver: {
      sterling: 70,
      pure: 74.5,
    },
    diamond: {
      low: 25000,
      medium: 45000,
      high: 80000,
    },
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setShowResult(false);
  };

  const calculateEstimate = () => {
    const weight = parseFloat(formData.weight);
    if (!weight || weight <= 0) return;

    let baseRate = 0;

    if (formData.metal === "gold") {
      baseRate = rates.gold[formData.purity as keyof typeof rates.gold];
    } else if (formData.metal === "silver") {
      baseRate = rates.silver[formData.purity as keyof typeof rates.silver];
    } else if (formData.metal === "diamond") {
      baseRate = rates.diamond[formData.purity as keyof typeof rates.diamond];
    }

    // Convert to grams if needed
    const weightInGrams =
      formData.weightUnit === "grams" ? weight : weight * 10;

    // Calculate estimate with 85% of market rate (typical buying rate)
    const estimatedValue = Math.round(weightInGrams * baseRate * 0.85);

    setEstimate(estimatedValue);
    setShowResult(true);
  };

  const handleWhatsAppQuote = () => {
    const message = `Hi! I want to sell my ${formData.metal} (${
      formData.purity
    }) weighing ${formData.weight} ${
      formData.weightUnit
    }. Based on your calculator, the estimate is ₹${estimate?.toLocaleString()}. Please provide accurate quote.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-400/20 border border-green-400/30 rounded-full px-6 py-2 mb-6">
            <Calculator className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              Free Quote Calculator
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            Get Instant <span className="shimmer-text">Price Estimate</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Calculate the approximate value of your gold, silver, or diamonds
            instantly. Get a professional quote in seconds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Calculator className="w-6 h-6 text-yellow-400" />
                <span>Price Calculator</span>
              </h3>

              <div className="space-y-6">
                {/* Metal Type */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Select Metal Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["gold", "silver", "diamond"].map((metal) => (
                      <button
                        key={metal}
                        onClick={() => handleInputChange("metal", metal)}
                        className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 capitalize ${
                          formData.metal === metal
                            ? "bg-yellow-400 text-black"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        {metal}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Purity */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    {formData.metal === "diamond" ? "Quality" : "Purity"}
                  </label>
                  <select
                    value={formData.purity}
                    onChange={(e) =>
                      handleInputChange("purity", e.target.value)
                    }
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                  >
                    {formData.metal === "gold" && (
                      <>
                        <option value="18k">18 Karat</option>
                        <option value="22k">22 Karat</option>
                        <option value="24k">24 Karat</option>
                      </>
                    )}
                    {formData.metal === "silver" && (
                      <>
                        <option value="sterling">
                          Sterling Silver (92.5%)
                        </option>
                        <option value="pure">Pure Silver (99.9%)</option>
                      </>
                    )}
                    {formData.metal === "diamond" && (
                      <>
                        <option value="low">Commercial Grade</option>
                        <option value="medium">Premium Grade</option>
                        <option value="high">Investment Grade</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Weight
                  </label>
                  <div className="flex space-x-3">
                    <input
                      type="number"
                      placeholder="Enter weight"
                      value={formData.weight}
                      onChange={(e) =>
                        handleInputChange("weight", e.target.value)
                      }
                      className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                    />
                    <select
                      value={formData.weightUnit}
                      onChange={(e) =>
                        handleInputChange("weightUnit", e.target.value)
                      }
                      className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                    >
                      <option value="grams">Grams</option>
                      <option value="tola">Tola</option>
                    </select>
                  </div>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateEstimate}
                  disabled={!formData.weight}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5 inline mr-2" />
                  Calculate Estimate
                </button>
              </div>
            </div>

            {/* Result Section */}
            <div className="bg-gradient-to-br from-green-900/50 to-black border border-green-400/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span>Your Estimate</span>
              </h3>

              {!showResult ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calculator className="w-12 h-12 text-gray-600" />
                  </div>
                  <p className="text-gray-400 text-lg">
                    Enter your details and click calculate to see your estimate
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="bg-green-400/20 border border-green-400/30 rounded-xl p-6 mb-6">
                    <p className="text-green-400 text-sm font-medium mb-2">
                      Estimated Value
                    </p>
                    <p className="text-4xl font-bold text-white mb-2">
                      ₹{estimate?.toLocaleString()}
                    </p>
                    <p className="text-green-400 text-sm">
                      For {formData.weight} {formData.weightUnit} of{" "}
                      {formData.purity} {formData.metal}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={handleWhatsAppQuote}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      📱 Send Quote via WhatsApp
                    </button>

                    <button
                      onClick={() => window.open("tel:+919876543210", "_self")}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      📞 Call for Accurate Quote
                    </button>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Info className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-gray-300">
                        <strong className="text-yellow-400">Disclaimer:</strong>{" "}
                        This is an estimated value based on current market
                        rates. Final price depends on physical verification,
                        purity testing, and live market conditions at the time
                        of transaction.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Current Rates Reference */}
          <div className="mt-8 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">
              Today's Reference Rates (Per Gram)
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <p className="text-gray-400">Gold 22K</p>
                <p className="text-yellow-400 font-bold">₹5,240</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">Gold 24K</p>
                <p className="text-yellow-400 font-bold">₹5,720</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">Silver</p>
                <p className="text-gray-300 font-bold">₹74.50</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">Our Rate</p>
                <p className="text-green-400 font-bold">85% of Market</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
