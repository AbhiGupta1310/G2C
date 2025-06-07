import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do you evaluate my gold?",
      answer:
        "We use certified Karatmeter equipment to accurately test the purity of your gold. The process is non-destructive and takes just a few minutes. We test each item individually and show you the results on our digital display. The final price is calculated based on the purity, weight, and current market rates.",
    },
    {
      question: "Do you offer better rates than pawn shops?",
      answer:
        "Yes, we typically offer 80-85% of the current market rate, which is significantly higher than most pawn shops that offer 40-60%. We can offer better rates because we specialize in precious metals and have lower overhead costs. We also don't charge any hidden fees or deductions.",
    },
    {
      question: "Is it safe to sell here?",
      answer:
        "Absolutely! We are licensed buyers with all necessary government approvals. Our store has CCTV surveillance, and we maintain detailed records of every transaction. We also provide proper receipts and documentation. Many of our customers are repeat clients who trust us with their valuable items.",
    },
    {
      question: "Can I get bank transfer instead of cash?",
      answer:
        "Yes, we offer both cash and bank transfer options. For amounts above ₹50,000, we recommend bank transfer for security reasons. Bank transfers are processed immediately using NEFT/RTGS, and you'll receive the amount within a few minutes during banking hours.",
    },
    {
      question: "What documents are required?",
      answer:
        "For transactions up to ₹49,999, you only need a valid photo ID (Aadhaar, PAN, Driving License, or Passport). For amounts above ₹50,000, we also require a PAN card as per government regulations. All photocopies are taken for our records.",
    },
    {
      question: "Do you buy broken or damaged jewelry?",
      answer:
        "Yes, we buy gold and silver in any condition - broken, damaged, outdated designs, or even scrap pieces. The value is determined by weight and purity, not by the design or condition. In fact, you might get better value selling as scrap rather than trying to repair first.",
    },
    {
      question: "How accurate is your online calculator?",
      answer:
        "Our online calculator provides a good estimate based on current market rates, but the final price depends on actual purity testing. The calculator assumes average purity levels, so the actual amount might vary by ±5-10% after physical verification. We always guarantee transparent pricing with no hidden deductions.",
    },
    {
      question: "Can I negotiate the price?",
      answer:
        "Our prices are based on live market rates and standard industry margins, leaving little room for negotiation. However, we do offer the best possible rates in the market. For bulk transactions (over ₹1 lakh), we may offer slightly better rates. We believe in transparent, fair pricing rather than inflated quotes for negotiation.",
    },
    {
      question: "What if I change my mind after selling?",
      answer:
        "Once the transaction is completed and payment is made, the sale is final. However, if you have concerns immediately after the transaction, we're happy to discuss and resolve any issues. We recommend taking time to think before finalizing the sale if you're unsure.",
    },
    {
      question: "How long does the entire process take?",
      answer:
        "The entire process typically takes 15-30 minutes depending on the number of items. Testing takes 2-3 minutes per item, documentation takes 5-10 minutes, and payment is immediate. For bank transfers, processing takes an additional 5-10 minutes during banking hours.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-400/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-400 text-sm font-medium">FAQ</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            Frequently Asked <span className="shimmer-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions
            our customers ask about our services and processes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-yellow-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-700 pt-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-2xl p-12 max-w-3xl mx-auto">
            <HelpCircle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Can't find the answer you're looking for? Our friendly team is
              here to help you with any questions or concerns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("tel:+917827071798", "_self")}
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>📞</span>
                <span>Call Us Now</span>
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/917827071798?text=Hi! I have a question about your services.",
                    "_blank"
                  )
                }
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>💬</span>
                <span>WhatsApp Us</span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-yellow-400/20">
              <p className="text-gray-400 text-sm">
                <strong className="text-yellow-400">
                  Quick Response Guarantee:
                </strong>{" "}
                We respond to all inquiries within 30 minutes during business
                hours.
              </p>
            </div>
          </div>
        </div>

        {/* Knowledge Base Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Looking for more detailed information?
          </p>
          <button
            onClick={() => window.open("#", "_blank")}
            className="text-yellow-400 hover:text-yellow-300 font-medium underline transition-colors duration-300"
          >
            📚 Visit our complete Knowledge Base
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
