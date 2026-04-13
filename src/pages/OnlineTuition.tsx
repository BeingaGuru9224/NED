import { Link } from "react-router-dom";
import { CheckCircle, Video, Monitor, MessageSquare, Clock, FileText, Users, ArrowRight, BookOpen, GraduationCap, Laptop, Headphones, X, Check, PlayCircle, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import heroOnline from "@/assets/hero-online-tuition.jpg";

const stages = [
  { label: "Primary Online Tuition", link: "/online-tuition/primary", icon: BookOpen },
  { label: "Secondary Online Tuition (KS3)", link: "/online-tuition/secondary", icon: GraduationCap },
  { label: "GCSE Online (Years 9–10)", link: "/online-tuition/gcse-years-9-10", icon: FileText },
  { label: "Online Exam Preparation", link: "/online-tuition/gcse-exam-practice", icon: Clock },
  { label: "GCSE Online (Year 11)", link: "/online-tuition/gcse-year-11", icon: Laptop },
];

type TimetableKey = "primary" | "secondary" | "gcse" | "year11";

const timetableData: Record<TimetableKey, { time: string; days: (string | null)[] }[]> = {
  primary: [
    { time: "16:00", days: ["Primary Maths", null, "Primary English", null, "Primary Maths", "Primary English", null] },
    { time: "17:00", days: [null, "Primary English", null, "Primary Maths", null, "Primary Maths", "Primary English"] },
  ],
  secondary: [
    { time: "10:00", days: [null, null, null, null, null, "Secondary Science", null] },
    { time: "17:00", days: ["Secondary Maths", null, "Secondary Maths", null, null, null, "Secondary Science"] },
    { time: "18:00", days: [null, "Secondary English", null, "Secondary English", null, null, null] },
  ],
  gcse: [
    { time: "10:00", days: [null, null, null, null, null, null, "GCSE Physics"] },
    { time: "11:00", days: [null, null, null, null, null, "GCSE Biology", null] },
    { time: "13:00", days: [null, null, null, null, null, null, "GCSE Chemistry"] },
    { time: "14:00", days: [null, null, null, null, null, "GCSE Physics", null] },
    { time: "16:00", days: [null, null, null, null, null, null, "GCSE Chemistry"] },
    { time: "17:00", days: [null, "GCSE Maths", null, null, null, null, null] },
    { time: "18:00", days: [null, null, null, "GCSE Maths", null, null, null] },
    { time: "19:00", days: ["GCSE English", null, null, null, "GCSE English", null, null] },
  ],
  year11: [
    { time: "11:00", days: [null, null, null, null, null, null, "Year 11 Physics"] },
    { time: "12:00", days: [null, null, null, null, null, "Year 11 Biology", null] },
    { time: "13:00", days: [null, null, null, null, null, "Year 11 Physics", null] },
    { time: "17:00", days: [null, null, null, "Year 11 English", null, null, null] },
    { time: "18:00", days: ["Year 11 Maths", null, null, null, null, null, "Year 11 Chemistry"] },
    { time: "19:00", days: [null, null, "Year 11 English", null, null, "Year 11 Maths", "Year 11 Biology"] },
  ],
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const comparisonRows = [
  {
    feature: "Student Support",
    others: "Generic email or chat bot replies",
    eds: "Moderated Discord with real tutors available daily",
  },
  {
    feature: "Homework Help",
    others: "Confusing worksheets, no follow-up",
    eds: "15–30 min guided help session every week to review homework",
  },
  {
    feature: "Lesson Delivery",
    others: "Often glitchy or custom platforms",
    eds: "Zoom for lessons, Google Classroom for homework — stable, familiar tools",
  },
  {
    feature: "Transparency & Pricing",
    others: 'Free trial → £2,000 surprise cost',
    eds: "Clear rates: £8/hr (KS2–GCSE), £10/hr (A-Level), £60/hr (1-to-1)",
  },
  {
    feature: "Commitment",
    others: "Locked-in long contracts",
    eds: "Monthly rolling plan — no long-term commitment",
  },
];

const subjects = [
  {
    title: "Primary (KS2 — Years 5–6)",
    items: ["English & Maths", "11+ Preparation (CEM-style)", "SATs Support (Year 6)"],
  },
  {
    title: "Secondary (KS3 — Years 7–8)",
    items: ["English, Maths & Science", "Foundation building before GCSE"],
  },
  {
    title: "GCSE (Years 9–11)",
    items: ["English Language & Literature", "Maths (Foundation & Higher)", "Biology, Chemistry, Physics", "GCSE Resit Preparation"],
  },
  {
    title: "A-Level (Years 12–13)",
    items: ["Maths (Foundation & Higher)", "Biology", "Chemistry"],
  },
  {
    title: "1-to-1 Tuition (All Levels)",
    items: ["Fully personalised support with flexible scheduling"],
  },
];

const pricingTiers = [
  {
    title: "KS2–GCSE (Group)",
    price: "8",
    popular: true,
    features: ["Google Classroom access", "Private Discord support", "Flexible learning hours"],
  },
  {
    title: "A-Level (Group)",
    price: "10",
    popular: false,
    features: ["Google Classroom access", "Private Discord support", "Flexible learning hours"],
  },
  {
    title: "1-to-1 (All Levels)",
    price: "60",
    popular: false,
    features: ["Google Classroom access", "Private Discord support", "Flexible learning hours"],
  },
];

const OnlineTuition = () => {
  const [activeTab, setActiveTab] = useState<TimetableKey>("primary");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1555E0] via-[#1e6ef5] to-[#2d7ff9]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                <span className="text-white text-sm font-semibold">💻 Online Learning Made Personal</span>
              </motion.div>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-white">
                Online Tuition by
                <br />
                <span className="text-yellow-300">Nesture Education</span>
              </h1>

              <p className="text-xl text-white/95 mb-3 font-medium">
                Live lessons. Real tutors. Fully supported. 100% online.
              </p>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                Tired of online tuition that doesn't deliver? At Nesture Education, we keep it simple — live small-group lessons, caring tutors, and real support that gets results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all">
                    Get Started Today <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/fees" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-heading font-bold text-base px-8 py-4 rounded-xl transition-all">
                    View Pricing
                  </Link>
                </motion.div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Video, label: "Live Zoom" },
                  { icon: Monitor, label: "Google Class" },
                  { icon: MessageSquare, label: "Discord" },
                  { icon: Users, label: "Max 6/Group" },
                ].map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    className="flex flex-col items-center gap-2 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="h-6 w-6 text-yellow-300" />
                    </div>
                    <span className="text-white/90 text-xs font-medium">{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={heroOnline}
                    alt="Students learning online with Nesture Education"
                    className="w-full h-auto object-cover aspect-[4/3]"
                    width={1920}
                    height={1080}
                  />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-2xl shadow-xl font-heading font-bold"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-gray-900" />
                    <div>
                      <div className="text-2xl leading-none">100%</div>
                      <div className="text-xs opacity-80">Online</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Choose Your Stage */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Choose Your Stage</span>
            <h2 className="section-heading mt-3 mb-4">Quickly Find the Right Support</h2>
            <p className="section-subtext mx-auto">Select the stage that matches your child's year group</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {stages.map(({ label, link, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link
                  to={link}
                  className="group flex items-center gap-4 bg-white border-2 border-slate-200 rounded-2xl p-5 hover:border-primary hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="font-heading font-bold text-foreground text-sm flex-1">{label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Timetable */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-label">Weekly Timetable</span>
            <h2 className="section-heading mt-3 mb-4">Our Structured Schedule</h2>
            <p className="section-subtext mx-auto">Organised sessions for different educational levels</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {(["primary", "secondary", "gcse", "year11"] as TimetableKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-heading font-bold transition-all ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {tab === "year11" ? "Year 11" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="text-left p-4 font-heading font-bold text-foreground w-20">Time</th>
                  {days.map((d) => (
                    <th key={d} className="p-4 font-heading font-bold text-foreground text-center">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetableData[activeTab].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-4 font-heading font-bold text-muted-foreground">{row.time}</td>
                    {row.days.map((cell, j) => (
                      <td key={j} className="p-3 text-center">
                        {cell ? (
                          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg">
                            {cell}
                          </span>
                        ) : null}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Parents Trust */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-4">Why Parents Trust Nesture Online</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Live, structured lessons — not pre-recorded YouTube sessions",
              "Simple setup — Zoom for classes, Google Classroom for work, Discord for support",
              "Real support — we're there when students have questions",
              "Homework that matters — weekly tasks with actual feedback",
              "Flexible, honest pricing — because no two families are the same",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="flex items-start gap-4 bg-white border-2 border-slate-200 rounded-xl p-5 hover:border-primary hover:shadow-lg transition-all"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">What Sets Us Apart!</span>
            <h2 className="section-heading mt-3 mb-4">Nesture vs Other Platforms</h2>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-5 font-heading font-bold text-foreground">Feature</th>
                  <th className="p-5 font-heading font-bold text-destructive text-center">Other Platforms</th>
                  <th className="p-5 font-heading font-bold text-primary text-center">Nesture Online</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-5 font-heading font-bold text-foreground">{row.feature}</td>
                    <td className="p-5 text-center">
                      <div className="flex items-start gap-2 justify-center">
                        <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-left">{row.others}</span>
                      </div>
                    </td>
                    <td className="p-5 text-center bg-primary/5">
                      <div className="flex items-start gap-2 justify-center">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium text-left">{row.eds}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-3xl mx-auto mt-10 text-center">
            <p className="text-muted-foreground italic">
              If you're tired of platforms that promise everything but leave your child struggling alone — Nesture is different.
            </p>
            <p className="text-foreground font-heading font-bold mt-2">
              Here, your child is seen, supported, and set up to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-yellow-50 via-orange-50/30 to-red-50/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">How It Works</span>
            <h2 className="section-heading mt-3 mb-4">Three Pillars of Success</h2>
            <p className="section-subtext mx-auto">Our online programme is built on live teaching, interactive resources, and consistent support</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Live Zoom */}
            {[
              {
                icon: Video,
                title: "Live Zoom Lessons",
                desc: "Each session is taught live by our DBS-checked, UK-based tutors. Lessons follow a set timetable and mirror what students are learning in school — or go beyond it.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Monitor,
                title: "Google Classroom Access",
                desc: "Weekly homework and practice packs, class slides and summary notes, feedback and tracked progress.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: PlayCircle,
                title: "Lesson Recordings",
                desc: "Missed a lesson? No problem. Every session is recorded and uploaded for students to review anytime.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: MessageSquare,
                title: "Discord Homework Help",
                desc: "Homework help, quick questions between lessons, peer support and tutor guidance.",
                color: "from-emerald-500 to-emerald-600",
              },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-primary hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="mb-5"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </motion.div>
                <h3 className="font-heading text-xl font-extrabold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn From Anywhere */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Learn From Anywhere, With Structure</h2>
            <p className="section-subtext mx-auto">Nesture Online Tuition is ideal for:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              "Students around the country who want top-tier support",
              "Families who prefer the flexibility of learning from home",
              "Students balancing studies with other commitments",
              "Parents who want accountability and regular feedback",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <p className="text-foreground text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Curriculum</span>
            <h2 className="section-heading mt-3 mb-4">Subjects We Offer Online</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subjects.map((subject) => (
              <div key={subject.title} className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="font-heading text-base font-extrabold text-foreground mb-4">{subject.title}</h3>
                <ul className="space-y-2">
                  {subject.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Pricing</span>
            <h2 className="section-heading mt-3 mb-4">Simple, Affordable Pricing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.title}
                className={`bg-card rounded-2xl p-8 border-2 relative flex flex-col ${
                  tier.popular ? "border-primary shadow-xl" : "border-border"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full font-heading">
                    POPULAR
                  </span>
                )}
                <h3 className="font-heading text-lg font-extrabold text-foreground mb-4">{tier.title}</h3>
                <div className="mb-6">
                  <span className="font-heading text-5xl font-extrabold text-foreground">£{tier.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">/hour</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center ${tier.popular ? "btn-primary" : "btn-outline"}`}
                >
                  Get Started <ArrowRight className="h-4 w-4 inline ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-sm">
            All online students receive full access to Google Classroom and our private Discord support community — included in every plan.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1555E0] via-[#1e6ef5] to-[#2d7ff9]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a free consultation and see how Nesture Online can support your child's learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all">
                  Book Free Consultation <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/fees" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-heading font-bold text-base px-8 py-4 rounded-xl transition-all">
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnlineTuition;
