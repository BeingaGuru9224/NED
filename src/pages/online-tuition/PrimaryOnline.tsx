import { Link } from "react-router-dom";
import { CheckCircle, Users, BookOpen, Award, Star, Target, ArrowRight, Sparkles, Calculator, Beaker, Wrench, Clock as ClockIcon, Globe, Video, Monitor, MessageSquare, Heart, TrendingUp, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-primary.jpg";

const subjects = [
  {
    name: "English",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    description: "Build strong reading, writing, and communication skills",
    topics: [
      { title: "Reading & Comprehension", desc: "Phonics, fluency, inference, and text analysis", icon: BookOpen },
      { title: "Creative Writing", desc: "Stories, descriptions, planning and editing", icon: Sparkles },
      { title: "Grammar & Spelling", desc: "Sentence structure, punctuation, and spelling rules", icon: Target },
      { title: "Speaking & Listening", desc: "Presentations, discussions, and communication", icon: MessageSquare },
    ]
  },
  {
    name: "Maths",
    icon: Calculator,
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    description: "Master numbers, problem-solving, and mathematical thinking",
    topics: [
      { title: "Number & Calculations", desc: "Addition, subtraction, multiplication, division", icon: Calculator },
      { title: "Fractions & Decimals", desc: "Understanding and working with fractions", icon: Target },
      { title: "Measurement", desc: "Length, weight, volume, time, and money", icon: TrendingUp },
      { title: "Geometry & Shapes", desc: "2D/3D shapes, angles, and spatial reasoning", icon: Sparkles },
    ]
  },
  {
    name: "Science",
    icon: Beaker,
    color: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-200",
    description: "Explore the natural world through experiments",
    topics: [
      { title: "Living Things", desc: "Plants, animals, habitats, and life cycles", icon: Heart },
      { title: "Materials", desc: "Properties and uses of different materials", icon: Beaker },
      { title: "Forces & Motion", desc: "Pushes, pulls, friction, and magnets", icon: Zap },
      { title: "Earth & Space", desc: "Solar system, seasons, and day/night", icon: Globe },
    ]
  },
  {
    name: "Design & Technology",
    icon: Wrench,
    color: "from-orange-500 to-orange-600",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
    description: "Develop creativity and practical skills",
    topics: [
      { title: "Design Process", desc: "Planning, designing, and evaluating", icon: Target },
      { title: "Materials & Tools", desc: "Working safely with tools", icon: Wrench },
      { title: "Structures", desc: "Building strong and stable structures", icon: Shield },
      { title: "Food Technology", desc: "Cooking, nutrition, and healthy eating", icon: Heart },
    ]
  },
  {
    name: "History",
    icon: ClockIcon,
    color: "from-amber-500 to-amber-600",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    description: "Discover the past and understand our present",
    topics: [
      { title: "Stone Age to Iron Age", desc: "Early humans and prehistoric Britain", icon: ClockIcon },
      { title: "Romans & Anglo-Saxons", desc: "Invasions, settlements, and culture", icon: Shield },
      { title: "Medieval Britain", desc: "Castles, knights, and feudal system", icon: Award },
      { title: "Tudors & Victorians", desc: "Henry VIII and Industrial Revolution", icon: BookOpen },
    ]
  },
  {
    name: "Geography",
    icon: Globe,
    color: "from-teal-500 to-teal-600",
    bgLight: "bg-teal-50",
    borderColor: "border-teal-200",
    description: "Explore the world, its people, and places",
    topics: [
      { title: "Locational Knowledge", desc: "Countries, continents, and capitals", icon: Globe },
      { title: "Place Knowledge", desc: "Comparing regions and countries", icon: Target },
      { title: "Human Geography", desc: "Population, settlements, and land use", icon: Users },
      { title: "Physical Geography", desc: "Mountains, rivers, climate, and weather", icon: TrendingUp },
    ]
  },
];

const benefits = [
  { icon: Users, title: "Small Groups", desc: "Max 6 students per class", color: "text-blue-600", bg: "bg-blue-100" },
  { icon: Video, title: "Live Lessons", desc: "Interactive Zoom sessions", color: "text-emerald-600", bg: "bg-emerald-100" },
  { icon: Award, title: "Expert Tutors", desc: "Qualified teachers", color: "text-purple-600", bg: "bg-purple-100" },
  { icon: TrendingUp, title: "Track Progress", desc: "Regular reports", color: "text-orange-600", bg: "bg-orange-100" },
];

const PrimaryOnline = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern & Engaging */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="text-white text-sm font-semibold">Primary Education · Ages 5-11</span>
              </motion.div>

              <h1 className="font-heading text-5xl sm:text-6xl font-extrabold mb-6 text-white leading-tight">
                Learn, Grow,
                <br />
                <span className="text-yellow-300">Succeed</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-4 leading-relaxed">
                Fun, interactive online lessons for Primary students
              </p>
              
              <p className="text-base text-white/80 mb-8 leading-relaxed">
                All subjects covered with engaging activities, games, and expert tutors who make learning enjoyable
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/50 transition-all hover:scale-105">
                  Start Free Trial <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/fees" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-heading font-bold text-lg px-8 py-4 rounded-2xl transition-all">
                  View Pricing
                </Link>
              </div>
            </motion.div>

            {/* Right - Stats Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
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

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Subjects Section - Card Grid */}
      <section className="py-20" style={{ backgroundColor: '#fef4e7' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              Complete Curriculum
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              All Subjects Covered
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive coverage of the National Curriculum for Primary Education
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, i) => {
              const Icon = subject.icon;
              return (
                <motion.div
                  key={subject.name}
                  className={`bg-white rounded-3xl border-2 ${subject.borderColor} p-8 hover:shadow-2xl transition-all group`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Icon Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-slate-900">{subject.name}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6">{subject.description}</p>

                  {/* Topics */}
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

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-extrabold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600">Choose the plan that works for your family</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Group Sessions */}
            <motion.div
              className="bg-white rounded-3xl border-2 border-blue-200 p-8 hover:shadow-2xl transition-all"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold mb-2">Group Sessions</h3>
              <p className="text-slate-600 mb-6">Max 6 students · Interactive learning</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Pay as you go</span>
                  <span className="font-bold text-2xl">£14<span className="text-sm text-slate-600">/hr</span></span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Weekly</span>
                  <span className="font-bold text-2xl">£39<span className="text-sm text-slate-600">/wk</span></span>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-400">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold block">Monthly ⭐</span>
                      <span className="text-xs text-slate-600">Best value</span>
                    </div>
                    <span className="font-bold text-3xl text-blue-600">£150<span className="text-sm">/mo</span></span>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="block text-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-heading font-bold py-4 rounded-2xl transition-all hover:shadow-xl">
                Book Now
              </Link>
            </motion.div>

            {/* 1-on-1 Sessions */}
            <motion.div
              className="bg-white rounded-3xl border-2 border-emerald-200 p-8 hover:shadow-2xl transition-all"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold mb-2">1-on-1 Sessions</h3>
              <p className="text-slate-600 mb-6">Personal attention · Faster progress</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Pay as you go</span>
                  <span className="font-bold text-2xl">£28<span className="text-sm text-slate-600">/hr</span></span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Weekly</span>
                  <span className="font-bold text-2xl">£78<span className="text-sm text-slate-600">/wk</span></span>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-400">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold block">Monthly ⭐</span>
                      <span className="text-xs text-slate-600">Best value</span>
                    </div>
                    <span className="font-bold text-3xl text-emerald-600">£150<span className="text-sm">/mo</span></span>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="block text-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-heading font-bold py-4 rounded-2xl transition-all hover:shadow-xl">
                Book Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTRjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6 text-white">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join hundreds of happy students and see the difference expert tutoring makes
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-yellow-400/50 transition-all hover:scale-105">
              Book Free Trial <ArrowRight className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrimaryOnline;
