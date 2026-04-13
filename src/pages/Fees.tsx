import { Check, Star, Sparkles, ArrowRight, Users, Target, Zap, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const pricingOptions = [
  {
    id: "primary-group",
    name: "Primary",
    subtitle: "Group",
    icon: Users,
    color: "from-blue-600 to-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    prices: [
      { id: "pg-payg", label: "Pay as you go", price: 14, period: "/hr" },
      { id: "pg-weekly", label: "Weekly", price: 39, period: "/week", sessions: "3 sessions" },
      { id: "pg-monthly", label: "Monthly", price: 150, period: "/mo", recommended: true, sessions: "12 sessions" },
    ],
    features: ["Max 6 students", "Live Zoom lessons", "All materials included"],
  },
  {
    id: "primary-1on1",
    name: "Primary",
    subtitle: "1-on-1",
    icon: Target,
    color: "from-emerald-600 to-emerald-700",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    prices: [
      { id: "p1-payg", label: "Pay as you go", price: 28, period: "/hr" },
      { id: "p1-weekly", label: "Weekly", price: 78, period: "/week", sessions: "3 sessions" },
      { id: "p1-monthly", label: "Monthly", price: 150, period: "/mo", recommended: true, sessions: "12 sessions" },
    ],
    features: ["Personal attention", "Custom pace", "Flexible schedule"],
  },
  {
    id: "secondary-group",
    name: "Secondary",
    subtitle: "Group",
    icon: Users,
    color: "from-indigo-600 to-indigo-700",
    bgLight: "bg-indigo-50",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-700",
    popular: true,
    prices: [
      { id: "sg-payg", label: "Pay as you go", price: 20, period: "/hr" },
      { id: "sg-weekly", label: "Weekly", price: 55, period: "/week", sessions: "3 sessions" },
      { id: "sg-monthly", label: "Monthly", price: 210, period: "/mo", recommended: true, sessions: "12 sessions" },
    ],
    features: ["Max 6 students", "Exam focused", "Progress tracking"],
  },
  {
    id: "secondary-1on1",
    name: "Secondary",
    subtitle: "1-on-1",
    icon: Target,
    color: "from-violet-600 to-violet-700",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-700",
    prices: [
      { id: "s1-payg", label: "Pay as you go", price: 40, period: "/hr" },
      { id: "s1-weekly", label: "Weekly", price: 110, period: "/week", sessions: "3 sessions" },
      { id: "s1-monthly", label: "Monthly", price: 420, period: "/mo", recommended: true, sessions: "12 sessions" },
    ],
    features: ["Intensive support", "Rapid progress", "Exam preparation"],
  },
];

const Fees = () => {
  const [selectedPrices, setSelectedPrices] = useState<Record<string, string>>({});
  const [activeLevel, setActiveLevel] = useState<"primary" | "secondary">("secondary");

  const handlePriceSelect = (cardId: string, priceId: string) => {
    setSelectedPrices(prev => ({ ...prev, [cardId]: priceId }));
  };

  const handleBookNow = (cardId: string) => {
    const selectedPrice = selectedPrices[cardId];
    if (!selectedPrice) {
      alert("Please select a pricing option first");
      return;
    }
    
    const card = pricingOptions.find(p => p.id === cardId);
    const price = card?.prices.find(p => p.id === selectedPrice);
    
    // Mock purchase process
    const confirmed = confirm(
      `Booking Details:\n\n` +
      `Programme: ${card?.name} ${card?.subtitle}\n` +
      `Plan: ${price?.label}\n` +
      `Price: £${price?.price}${price?.period}\n\n` +
      `Proceed to payment?`
    );
    
    if (confirmed) {
      alert("Redirecting to payment gateway...\n\n(This is a mock process. In production, this would integrate with Stripe or another payment provider)");
    }
  };

  // Filter cards based on active level
  const filteredCards = pricingOptions.filter(card => 
    activeLevel === "primary" 
      ? card.id.startsWith("primary")
      : card.id.startsWith("secondary")
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1555E0] via-[#1e6ef5] to-[#2d7ff9] py-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300 fill-yellow-300" />
              <span className="text-white text-sm font-semibold">Transparent Pricing</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-4 text-white leading-tight">
              Affordable Excellence in
              <br />
              <span className="text-yellow-300">Online Tuition</span>
            </h1>
            <p className="text-lg text-white/90 mb-3 leading-relaxed">
              Quality education shouldn't break the bank. Clear pricing, no hidden fees.
            </p>
            <p className="text-sm text-white/70">
              All prices include live lessons, materials, and ongoing support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards - 4 in a row */}
      <section className="py-16" style={{ backgroundColor: '#fef4e7' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-4 shadow-sm">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="text-slate-700 text-sm font-semibold">Flexible Plans</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-3">Choose Your Programme</h2>
            <p className="text-base text-slate-600 mb-6">Select a pricing option and book now</p>
            
            {/* Toggle Switch */}
            <div className="inline-flex items-center bg-white border-2 border-slate-200 rounded-full p-1 shadow-sm">
              <button
                onClick={() => setActiveLevel("primary")}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                  activeLevel === "primary"
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Primary
              </button>
              <button
                onClick={() => setActiveLevel("secondary")}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                  activeLevel === "secondary"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Secondary
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            {filteredCards.map((card, i) => {
              const Icon = card.icon;
              const selectedPriceId = selectedPrices[card.id];
              
              return (
                <motion.div
                  key={card.id}
                  className={`relative bg-white rounded-2xl border-2 ${
                    card.popular ? `${card.borderColor} shadow-xl` : "border-slate-200"
                  } p-5 pt-6 hover:shadow-2xl transition-all`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${card.bgLight} rounded-full -mr-16 -mt-16 opacity-50`}></div>
                  
                  {card.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl border-2 border-white">
                        <Star className="h-3.5 w-3.5 fill-white" />
                        Popular Choice
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-4 relative z-10">
                    <h3 className="font-heading text-base font-bold text-foreground mb-0.5">{card.name}</h3>
                    <p className={`text-xs font-semibold ${card.textColor}`}>{card.subtitle}</p>
                  </div>

                  {/* Pricing Options - Selectable */}
                  <div className="space-y-2 mb-4 relative z-10">
                    {card.prices.map((price) => (
                      <button
                        key={price.id}
                        onClick={() => handlePriceSelect(card.id, price.id)}
                        className={`w-full text-left p-2.5 rounded-xl border-2 transition-all ${
                          selectedPriceId === price.id
                            ? `${card.borderColor} ${card.bgLight} shadow-md`
                            : price.recommended
                            ? "border-amber-300 bg-amber-50"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-slate-700">{price.label}</span>
                          {price.recommended && !selectedPriceId && (
                            <span className="text-[9px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded">⭐ BEST</span>
                          )}
                          {selectedPriceId === price.id && (
                            <div className={`w-5 h-5 rounded-full ${card.bgLight} flex items-center justify-center`}>
                              <Check className={`h-3.5 w-3.5 ${card.textColor}`} />
                            </div>
                          )}
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="font-heading text-xl font-extrabold text-slate-900">£{price.price}</span>
                          <span className="text-[10px] text-slate-500">{price.period}</span>
                        </div>
                        {price.sessions && (
                          <span className="text-[10px] text-slate-500">{price.sessions}</span>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4 pb-4 border-t border-slate-200 pt-4 relative z-10">
                    {card.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 mb-1.5">
                        <div className={`w-4 h-4 rounded-full ${card.bgLight} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Check className={`h-2.5 w-2.5 ${card.textColor}`} />
                        </div>
                        <span className="text-[11px] text-slate-600 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleBookNow(card.id)}
                    className={`w-full font-heading font-bold text-sm px-4 py-3 rounded-xl transition-all relative z-10 ${
                      selectedPriceId
                        ? `bg-gradient-to-r ${card.color} text-white hover:shadow-lg hover:scale-105`
                        : "bg-slate-100 text-slate-400 cursor-not-allowed"
                    }`}
                    disabled={!selectedPriceId}
                  >
                    {selectedPriceId ? "Book Now →" : "Select a plan"}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Badge */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              <Zap className="h-4 w-4 text-amber-500" />
              <span className="text-slate-700 text-sm font-medium">First session satisfaction guaranteed or your money back</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Everything Included</h2>
            <p className="text-sm text-muted-foreground">No hidden costs. All you need for success.</p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { text: "Live Zoom lessons", bgColor: "bg-blue-100", textColor: "text-blue-600", borderColor: "border-blue-100", hoverBorder: "hover:border-blue-300" },
              { text: "Expert tutors", bgColor: "bg-emerald-100", textColor: "text-emerald-600", borderColor: "border-emerald-100", hoverBorder: "hover:border-emerald-300" },
              { text: "All materials", bgColor: "bg-indigo-100", textColor: "text-indigo-600", borderColor: "border-indigo-100", hoverBorder: "hover:border-indigo-300" },
              { text: "Progress reports", bgColor: "bg-violet-100", textColor: "text-violet-600", borderColor: "border-violet-100", hoverBorder: "hover:border-violet-300" },
              { text: "Homework support", bgColor: "bg-blue-100", textColor: "text-blue-600", borderColor: "border-blue-100", hoverBorder: "hover:border-blue-300" },
              { text: "Past papers", bgColor: "bg-emerald-100", textColor: "text-emerald-600", borderColor: "border-emerald-100", hoverBorder: "hover:border-emerald-300" },
              { text: "Mock exams", bgColor: "bg-indigo-100", textColor: "text-indigo-600", borderColor: "border-indigo-100", hoverBorder: "hover:border-indigo-300" },
              { text: "Discord community", bgColor: "bg-violet-100", textColor: "text-violet-600", borderColor: "border-violet-100", hoverBorder: "hover:border-violet-300" },
              { text: "Parent portal", bgColor: "bg-blue-100", textColor: "text-blue-600", borderColor: "border-blue-100", hoverBorder: "hover:border-blue-300" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                className={`flex items-center gap-3 bg-white rounded-xl p-3 border-2 ${item.borderColor} ${item.hoverBorder} hover:shadow-md transition-all`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center shrink-0`}>
                  <Check className={`h-4 w-4 ${item.textColor}`} />
                </div>
                <span className="text-foreground text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-[#1555E0] via-[#1e6ef5] to-[#2d7ff9]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-4 w-4 text-yellow-300" />
              <span className="text-white text-sm font-semibold">Start Your Learning Journey</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Book a free assessment and see how affordable quality education can be.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Book Free Assessment <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fees;
