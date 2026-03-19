import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const indianTiers = [
  { amount: "₹1,000", value: 1000, label: "Provide STEM kits for 5 students" },
  { amount: "₹5,000", value: 5000, label: "Fund satellite training for a school" },
  { amount: "₹10,000", value: 10000, label: "Sponsor a future space leader's journey" },
];

const internationalTiers = [
  { amount: "$25", label: "Enable STEM access for a young innovator" },
  { amount: "$100", label: "Support satellite education for a classroom" },
  { amount: "$250", label: "Champion a girl's path to space science" },
];

const DonationSection = () => {
  const [tab, setTab] = useState<"india" | "international">("india");
  const [selected, setSelected] = useState(1);
  const [customAmount, setCustomAmount] = useState("");

  const handleIndianDonation = () => {
    let amount: number;
    if (customAmount) {
      amount = parseFloat(customAmount);
    } else if (selected >= 0 && selected < indianTiers.length) {
      amount = indianTiers[selected].value;
    } else {
      amount = indianTiers[0].value;
    }
    if (!amount || amount <= 0 || isNaN(amount)) {
      alert("Please enter a valid donation amount");
      return;
    }
    const razorpayUrl = `https://pages.razorpay.com/pl_SJgBlR0rJkwotY/view?amount=${amount}`;
    window.location.href = razorpayUrl;
  };

  const handleInternationalDonation = () => {
    window.open("https://buy.stripe.com/fZu7sE8Hu556f7YdFi9bO01", "_blank");
  };

  const switchTab = (newTab: "india" | "international") => {
    setTab(newTab);
    setSelected(1);
    setCustomAmount("");
  };

  return (
    <section id="donate" className="py-32 midnight-gradient starfield-bg relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-aurora tracking-[0.2em] uppercase text-xs mb-4 font-medium">Support the Mission</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Generosity Powers
            <br />
            a Global Movement.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every contribution fuels satellite education, hands-on STEM training, and mentorship
            for 12,000 girls across 108 nations — shaping the next generation of space scientists,
            engineers, and innovators.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="max-w-2xl mx-auto">
          {/* Tab Switcher */}
          <div className="flex rounded-xl border border-border overflow-hidden mb-8">
            <button
              onClick={() => switchTab("india")}
              className={`flex-1 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ${
                tab === "india"
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              🇮🇳 Donate from India (INR)
            </button>
            <button
              onClick={() => switchTab("international")}
              className={`flex-1 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ${
                tab === "international"
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              🌍 International Donors (USD)
            </button>
          </div>

          {tab === "india" ? (
            <>
              <p className="text-muted-foreground text-sm mb-6 text-center">
                Contributions from Indian donors are processed in INR via Razorpay. Tax exemption receipts under Section 80G available upon request.
              </p>
              <div className="space-y-4 mb-8">
                {indianTiers.map((tier, i) => (
                  <motion.button
                    key={tier.amount}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => { setSelected(i); setCustomAmount(""); }}
                    className={`w-full flex items-center justify-between p-5 rounded-xl border transition-all duration-300 text-left ${
                      selected === i && !customAmount
                        ? "border-accent bg-accent/5 shadow-[0_0_20px_hsl(var(--gold)/0.1)]"
                        : "border-border bg-card hover:border-muted-foreground/30"
                    }`}
                  >
                    <span className="font-display text-xl font-semibold">{tier.amount}</span>
                    <span className="text-muted-foreground text-sm">{tier.label}</span>
                  </motion.button>
                ))}

                <div
                  className={`flex items-center p-5 rounded-xl border transition-all duration-300 ${
                    customAmount
                      ? "border-accent bg-accent/5 shadow-[0_0_20px_hsl(var(--gold)/0.1)]"
                      : "border-border bg-card"
                  }`}
                >
                  <span className="text-muted-foreground mr-3 font-display text-xl">₹</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelected(-1); }}
                    className="bg-transparent border-none outline-none text-foreground font-display text-xl w-full placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(43 72% 52% / 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleIndianDonation}
                className="w-full py-5 bg-accent text-accent-foreground font-bold text-lg rounded-xl transition-all duration-300"
              >
                Donate Now (INR)
              </motion.button>
            </>
          ) : (
            <>
              <p className="text-muted-foreground text-sm mb-6 text-center">
                International contributions are processed securely in USD via Stripe. Your support transcends borders and empowers girls worldwide to reach for the stars.
              </p>
              <div className="space-y-4 mb-8">
                {internationalTiers.map((tier, i) => (
                  <motion.div
                    key={tier.amount}
                    whileHover={{ scale: 1.01 }}
                    className="w-full flex items-center justify-between p-5 rounded-xl border border-border bg-card text-left"
                  >
                    <span className="font-display text-xl font-semibold">{tier.amount}</span>
                    <span className="text-muted-foreground text-sm">{tier.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(43 72% 52% / 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleInternationalDonation}
                className="w-full py-5 bg-accent text-accent-foreground font-bold text-lg rounded-xl transition-all duration-300"
              >
                Donate Now (USD)
              </motion.button>
            </>
          )}

          <p className="text-center text-muted-foreground/60 text-xs mt-6">
            Indian donations are processed securely via Razorpay. International donations are processed via Stripe. For queries, reach out to us at support@shakthisat.com.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DonationSection;
