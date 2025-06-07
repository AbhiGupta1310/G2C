import React, { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, RefreshCw, Clock } from "lucide-react";

interface RateData {
  gold22k: number;
  gold24k: number;
  silver: number;
  lastUpdated: string;
}

interface TrendData {
  gold22k: "up" | "down";
  gold24k: "up" | "down";
  silver: "up" | "down";
}

const LiveRates: React.FC = () => {
  const [rates, setRates] = useState<RateData>({
    gold22k: 5240,
    gold24k: 5720,
    silver: 74.5,
    lastUpdated: new Date().toLocaleString(),
  });

  const [trends, setTrends] = useState<TrendData>({
    gold22k: "up",
    gold24k: "up",
    silver: "down",
  });

  const [isUpdating, setIsUpdating] = useState(false);

  const updateRates = async () => {
    setIsUpdating(true);

    try {
      const response = await fetch(
        "https://api.metalpriceapi.com/v1/latest?api_key=d780830f8d26f7087c677e68f875c1d7&base=USD&currencies=XAU,XAG,INR"
      );
      const data = await response.json();

      if (data.success) {
        const { XAU, XAG, INR } = data.rates;

        const usdPerXAU = 1 / XAU;
        const usdPerXAG = 1 / XAG;

        const inrPerXAU = usdPerXAU * INR;
        const inrPerXAG = usdPerXAG * INR;

        // Raw international price per gram
        const gold24kBase = inrPerXAU / 31.1035;
        const silverBase = inrPerXAG / 31.1035;

        // Retail adjustments
        const importDuty = 0.0; // 5% import duty
        const gst = 0.03;
        const localPremium = 300;

        const gold24k = gold24kBase * (1 + importDuty + gst) + localPremium;
        const gold22k = gold24k * 0.916;
        const silver = silverBase; // You may adjust similarly if needed

        setTrends({
          gold22k: gold22k > rates.gold22k ? "up" : "down",
          gold24k: gold24k > rates.gold24k ? "up" : "down",
          silver: silver > rates.silver ? "up" : "down",
        });

        setRates({
          gold22k: parseFloat(gold22k.toFixed(2)),
          gold24k: parseFloat(gold24k.toFixed(2)),
          silver: parseFloat(silver.toFixed(2)),
          lastUpdated: new Date().toLocaleString(),
        });
      } else {
        console.error("API Error:", data.error);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    updateRates();
    const interval = setInterval(updateRates, 300000);
    return () => clearInterval(interval);
  }, []);

  const RateCard = ({
    title,
    rate,
    unit,
    trend,
    change,
  }: {
    title: string;
    rate: number;
    unit: string;
    trend: "up" | "down";
    change: string;
  }) => (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-xl p-4 md:p-6 hover:border-yellow-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-yellow-400/20">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>
        <div
          className={`flex items-center space-x-1 ${
            trend === "up" ? "text-green-400" : "text-red-400"
          }`}
        >
          {trend === "up" ? (
            <TrendingUp size={14} />
          ) : (
            <TrendingDown size={14} />
          )}
          <span className="text-xs md:text-sm">
            {trend === "up" ? "+" : "-"}
            {change}
          </span>
        </div>
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400">
          ₹{rate.toLocaleString()}
        </span>
        <span className="text-gray-400 text-xs md:text-sm">{unit}</span>
      </div>
      <div className="mt-2 md:mt-3 text-xs text-gray-500">
        Based on Indian retail market
      </div>
    </div>
  );

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 md:px-6 mb-4 md:mb-6">
            <TrendingUp className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">
              Live Market Rates
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif mb-3 md:mb-4">
            Today's <span className="shimmer-text">Gold & Silver Rates</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Get the best prices based on current Indian retail market. Updated
            regularly for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <RateCard
            title="Gold 22K"
            rate={rates.gold22k}
            unit="per gram"
            trend={trends.gold22k}
            change="15"
          />
          <RateCard
            title="Gold 24K"
            rate={rates.gold24k}
            unit="per gram"
            trend={trends.gold24k}
            change="18"
          />
          <RateCard
            title="Silver"
            rate={rates.silver}
            unit="per gram"
            trend={trends.silver}
            change="0.25"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl p-4 md:p-6">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <Clock className="w-5 h-5 text-yellow-400" />
            <div>
              <p className="text-white font-medium text-sm md:text-base">
                Last Updated
              </p>
              <p className="text-gray-400 text-xs md:text-sm">
                {rates.lastUpdated}
              </p>
            </div>
          </div>

          <button
            onClick={updateRates}
            disabled={isUpdating}
            className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            <RefreshCw
              className={`w-4 h-4 ${isUpdating ? "animate-spin" : ""}`}
            />
            <span>{isUpdating ? "Updating..." : "Refresh Rates"}</span>
          </button>
        </div>

        <div className="mt-6 md:mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-3xl mx-auto px-4">
            * Rates are indicative retail prices including import duty, GST, and
            premium. Actual prices may vary slightly by location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveRates;
