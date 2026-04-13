import { Link } from "react-router-dom";
import { Users, BookOpen, Award, Star, Target, ArrowRight, Sparkles, Calculator, Beaker, Atom, FlaskConical, GraduationCap, FileText, TrendingUp, Zap, Brain } from "lucide-react";
import { motion } from "framer-motion";

const subjects = [
  {
    name: "English",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    description: "Master literature, language, and communication",
    topics: [
      { title: "Literature Analysis", desc: "Shakespeare, poetry, and modern texts", icon: BookOpen },
      { title: "Language Techniques", desc: "Metaphor, persuasion, and rhetoric", icon: Sparkles },
      { title: "Essay Writing", desc: "Structured arguments and analysis", icon: FileText },
      { title: "Creative Writing", desc: "Narrative and descriptive skills", icon: Brain },
    ]
  },
  {
    name: "Maths",
    icon: Calculator,
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    description: "Advanced mathematics for GCSE success",
    topics: [
      { title: "Algebra", desc: "Equations, expressions, and manipulation", icon: Calculator },
      { title: "Geometry", desc: "Angles, shapes, theorems, and proofs", icon: Target },
      { title: "Statistics", desc: "Data handling and probability", icon: TrendingUp },
      { title: "Trigonometry", desc: "Sin, cos, tan, and functions", icon: Sparkles },
    ]
  },
  {
    name: "Biology",
    icon: Beaker,
    color: "from-green-500 to-green-600",
    bgLight: "bg-green-50",
    borderColor: "border-green-200",
    description: "Explore living organisms and life processes",
    topics: [
      { title: "Cell Biology", desc: "Structure, division, and specialization", icon: Beaker },
      { title: "Human Biology", desc: "Organ systems and body functions", icon: Brain },
      { title: "Genetics", desc: "DNA, inheritance, and evolution", icon: Sparkles },
      { title: "Ecology", desc: "Ecosystems and environmental impact", icon: TrendingUp },
    ]
  },
  {
    name: "Chemistry",
    icon: FlaskConical,
    color: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-200",
    description: "Understand matter, reactions, and elements",
    topics: [
      { title: "Atomic Structure", desc: "Elements and periodic table", icon: Atom },
      { title: "Chemical Reactions", desc: "Equations, rates, and energy", icon: FlaskConical },
      { title: "Acids & Bases", desc: "pH, neutralization, and salts", icon: Beaker },
      { title: "Organic Chemistry", desc: "Hydrocarbons and polymers", icon: Sparkles },
    ]
  },
  {
    name: "Physics",
    icon: Atom,
    color: "from-indigo-500 to-indigo-600",
    bgLight: "bg-indigo-50",
    borderColor: "border-indigo-200",
    description: "Master forces, energy, and the physical world",
    topics: [
      { title: "Forces & Motion", desc: "Newton's laws and momentum", icon: Zap },
      { title: "Energy", desc: "Transfers, conservation, efficiency", icon: TrendingUp },
      { title: "Electricity", desc: "Circuits, current, and resistance", icon: Sparkles },
      { title: "Waves", desc: "Sound, light, and radiation", icon: Atom },
    ]
  },
];

const benefits = [
  { icon: Target, title: "Exam Focused", desc: "GCSE preparation", color: "text-orange-600", bg: "bg-orange-100" },
  { icon: Users, title: "Small Groups", desc: "Max 6 students", color: "text-blue-600", bg: "bg-blue-100" },
  { icon: Award, title: "Expert Tutors", desc: "Subject specialists", color: "text-purple-600", bg: "bg-purple-100" },
  { icon: TrendingUp, title: "Track Progress", desc: "Regular reports", color: "text-emerald-600", bg: "bg-emerald-100" },
];

const SecondaryOnline = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" animate={{ y: [0, 40, 0] }} transition={{ duration: 10, repeat: Infinity }} />
          <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" animate={{ y: [0, -50, 0] }} transition={{ duration: 12, repeat: Infinity }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <GraduationCap className="h-4 w-4 text-yellow-300" />
                <span className="text-white text-sm font-semibold">Secondary Education · Years 7-11</span>
              </motion.div>

              <h1 className="font-heading text-5xl sm:text-6xl font-extrabold mb-6 text-white leading-tight">
                Achieve Top<br /><span className="text-yellow-300">GCSE Grades</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-4 leading-relaxed">Expert online tutoring for KS3 and GCSE students</p>
              <p className="text-base text-white/80 mb-8 leading-relaxed">Exam-focused lessons with specialist subject tutors to help you reach your full potential</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/50 transition-all hover:scale-105">
                  Start Free Trial <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/fees" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-heading font-bold text-lg px-8 py-4 rounded-2xl transition-all">
                  View Pricing
                </Link>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div key={benefit.title} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} whileHover={{ scale: 1.05, y: -5 }}>
                    <div className={`w-12 h-12 rounded-xl ${benefit.bg} flex items-center justify-center mb-3`}>
                      <Icon className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                    <h3 className="font-heading font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-white/80">{benefit.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20" style={{ backgroundColor: '#fef4e7' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block bg-gradient-to-r from-orange-600 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">Exam-Focused Curriculum</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">All GCSE Subjects Covered</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Complete coverage of KS3 and GCSE curriculum</p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, i) => {
              const Icon = subject.icon;
              return (
                <motion.div key={subject.name} className={`bg-white rounded-3xl border-2 ${subject.borderColor} p-8 hover:shadow-2xl transition-all group`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -10 }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-slate-900">{subject.name}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6">{subject.description}</p>

                  <div className="space-y-3">
                    {subject.topics.map((topic) => {
                      const TopicIcon = topic.icon;
                      return (
                        <div key={topic.title} className={`p-3 rounded-xl ${subject.bgLight} border ${subject.borderColor} hover:shadow-md transition-all`}>
                          <div className="flex items-start gap-3">
                            <TopicIcon className="h-4 w-4 text-slate-600 mt-0.5 shrink-0" />
                            <div>
                              <h4 className="font-semibold text-slate-900 text-sm mb-1">{topic.title}</h4>
                              <p className="text-xs text-slate-600 leading-relaxed">{topic.desc}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl font-extrabold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600">Choose the plan that works for you</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div className="bg-white rounded-3xl border-2 border-orange-200 p-8 hover:shadow-2xl transition-all relative" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border-2 border-white">
                  <Star className="h-3.5 w-3.5 fill-white" />
                  Popular Choice
                </div>
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg mt-2">
                <Users className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold mb-2">Group Sessions</h3>
              <p className="text-slate-600 mb-6">Max 6 students · Interactive learning</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Pay as you go</span>
                  <span className="font-bold text-2xl">£20<span className="text-sm text-slate-600">/hr</span></span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Weekly</span>
                  <span className="font-bold text-2xl">£55<span className="text-sm text-slate-600">/wk</span></span>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-400">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold block">Monthly ⭐</span>
                      <span className="text-xs text-slate-600">Best value</span>
                    </div>
                    <span className="font-bold text-3xl text-orange-600">£210<span className="text-sm">/mo</span></span>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="block text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-heading font-bold py-4 rounded-2xl transition-all hover:shadow-xl">
                Book Now
              </Link>
            </motion.div>

            <motion.div className="bg-white rounded-3xl border-2 border-purple-200 p-8 hover:shadow-2xl transition-all" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold mb-2">1-on-1 Sessions</h3>
              <p className="text-slate-600 mb-6">Personal attention · Faster progress</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Pay as you go</span>
                  <span className="font-bold text-2xl">£40<span className="text-sm text-slate-600">/hr</span></span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Weekly</span>
                  <span className="font-bold text-2xl">£110<span className="text-sm text-slate-600">/wk</span></span>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-400">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold block">Monthly ⭐</span>
                      <span className="text-xs text-slate-600">Best value</span>
                    </div>
                    <span className="font-bold text-3xl text-purple-600">£420<span className="text-sm">/mo</span></span>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="block text-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-heading font-bold py-4 rounded-2xl transition-all hover:shadow-xl">
                Book Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTRjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GraduationCap className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6 text-white">Ready to Achieve Top Grades?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">Join hundreds of successful GCSE students and start your journey to academic excellence</p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-yellow-400/50 transition-all hover:scale-105">
              Book Free Trial <ArrowRight className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecondaryOnline;
