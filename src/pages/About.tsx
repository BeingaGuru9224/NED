import { Users, BookOpen, Award, Target, Heart, GraduationCap, Star, ArrowRight, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroAbout from "@/assets/hero-about.jpg";
import heroCommunity from "@/assets/hero-community.jpg";
import heroHome from "@/assets/hero-home.jpg";
import heroOnline from "@/assets/hero-online.jpg";

const values = [
  { icon: Target, title: "Personalisation", desc: "Every student is unique. We tailor our teaching to individual strengths, weaknesses, learning styles, and goals.", color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest academic standards. Our tutors stay current with curriculum changes and exam board updates.", color: "from-purple-500 to-purple-600", bg: "bg-purple-50" },
  { icon: Heart, title: "Care", desc: "Academic growth happens when students feel safe and supported. We build genuine relationships that nurture confidence.", color: "from-pink-500 to-pink-600", bg: "bg-pink-50" },
  { icon: Users, title: "Community", desc: "Learning thrives in connection. Our Discord server and group sessions create a supportive ecosystem around every student.", color: "from-orange-500 to-orange-600", bg: "bg-orange-50" },
];

const milestones = [
  { year: "2015", event: "Founded with 3 tutors and 20 students", icon: Sparkles },
  { year: "2017", event: "Expanded team and introduced GCSE exam prep programmes", icon: TrendingUp },
  { year: "2019", event: "Launched A-Level tuition with 500+ active learners", icon: GraduationCap },
  { year: "2020", event: "Transitioned to 100% online with Zoom + Google Classroom + Discord", icon: Zap },
  { year: "2022", event: "Reached 5,000 students taught milestone", icon: Users },
  { year: "2024", event: "Surpassed 10,000 students with 50+ qualified tutors", icon: Award },
];

const tutors = [
  { name: "Ms. Helen Carter", subject: "Primary & KS3 English", qualification: "BA English Literature (UCL), PGCE", bio: "8 years of classroom experience specialising in building reading confidence.", initials: "HC", color: "from-blue-400 to-blue-600", image: heroHome },
  { name: "Dr. James Okonkwo", subject: "GCSE & A-Level Science", qualification: "PhD Biochemistry (Imperial)", bio: "Brings real-world laboratory experience into engaging science lessons.", initials: "JO", color: "from-green-400 to-green-600", image: heroCommunity },
  { name: "Mrs. Fiona Bradley", subject: "GCSE English & A-Level Lit", qualification: "MA English (Oxford), PGCE", bio: "Analytical approach helping hundreds achieve top grades in essays.", initials: "FB", color: "from-purple-400 to-purple-600", image: heroOnline },
  { name: "Prof. Richard Tan", subject: "A-Level & Further Maths", qualification: "MSc Mathematics (Cambridge)", bio: "Structured problem-solving method demystifying complex calculus.", initials: "RT", color: "from-orange-400 to-orange-600", image: heroAbout },
];

const stats = [
  { icon: Users, value: "200+", label: "Active Students", color: "from-blue-500/20 to-blue-600/10" },
  { icon: BookOpen, value: "10+", label: "Online Courses", color: "from-purple-500/20 to-purple-600/10" },
  { icon: GraduationCap, value: "15+", label: "Expert Tutors", color: "from-orange-500/20 to-orange-600/10" },
  { icon: Star, value: "98%", label: "Satisfaction", color: "from-pink-500/20 to-pink-600/10" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - Enhanced with modern graphics */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ y: [0, 50, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ y: [0, -60, 0], x: [0, -40, 0], scale: [1.2, 1, 1.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/30 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <span className="text-white text-sm font-bold tracking-wide">ABOUT NESTURE EDUCATION</span>
              </motion.div>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8 text-white">
                Built by
                <br />
                <span className="text-yellow-300">Educators</span>,
                <br />
                Driven by Results
              </h1>

              <p className="text-xl text-white/95 mb-6 leading-relaxed max-w-xl font-medium">
                Since 2015, we've been transforming academic outcomes for thousands of students across the UK through personalised online tuition.
              </p>

              <p className="text-base text-white/80 mb-10 leading-relaxed max-w-xl">
                Our mission is simple: make quality education accessible, engaging, and results-driven for every student.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/online-tuition" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-yellow-400/50 transition-all">
                    Explore Courses <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-heading font-bold text-lg px-10 py-5 rounded-2xl transition-all">
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main Image with Enhanced Styling */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 mix-blend-overlay"></div>
                  <img
                    src={heroAbout}
                    alt="Nesture Education tutors"
                    className="w-full h-auto object-cover aspect-[4/3]"
                    width={1024}
                    height={768}
                  />
                </motion.div>

                {/* Floating Stats Cards */}
                <motion.div
                  className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 border-2 border-yellow-400"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-heading text-3xl font-bold text-foreground">200+</div>
                      <div className="text-xs text-muted-foreground font-semibold">Students</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-7 py-4 rounded-2xl shadow-2xl font-heading font-bold border-4 border-white"
                  initial={{ scale: 0, rotate: 10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-center">
                    <div className="text-3xl leading-none mb-1">🎓 Est. 2015</div>
                    <div className="text-sm opacity-90 font-bold">10+ Years Excellence</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center gap-2">
                    <Star className="h-6 w-6 fill-white" />
                    <div>
                      <div className="font-heading text-2xl font-bold">98%</div>
                      <div className="text-xs font-semibold">Satisfaction</div>
                    </div>
                  </div>
                </motion.div>
              </div>
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

      {/* Stats - Enhanced with animations */}
      <section className="py-20" style={{ backgroundColor: '#fef4e7' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Impact
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-slate-900 mb-3">
              Trusted by Families Nationwide
            </h2>
            <p className="text-lg text-slate-600">Real results from real students</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={label}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative text-center p-8 bg-white rounded-3xl border-2 border-slate-200 hover:border-primary hover:shadow-2xl transition-all">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div className="font-heading text-5xl font-extrabold text-foreground mb-2">{value}</div>
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">{label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - Enhanced */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
                Our Story
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                From a Small Classroom to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Thousands of Success Stories</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-2xl border-2 border-blue-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base">
                    Nesture Education was born from a simple observation: too many bright students were falling behind because they didn't receive the right support at the right time.
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-purple-50 rounded-2xl border-2 border-purple-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base">
                    We set out to change that. Starting with a commitment to small-group teaching, we built a model that delivers personalised, high-quality online tuition at accessible prices.
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base">
                    When COVID-19 hit, we didn't just adapt — we innovated. Our online model using Zoom, Google Classroom, and Discord has become our strength, allowing us to reach students across the UK.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Decorative background elements */}
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl"></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-3xl rotate-3"></div>
                
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay"></div>
                  <img
                    src={heroCommunity}
                    alt="Online education community"
                    className="relative w-full object-cover aspect-[4/3]"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                </motion.div>

                {/* Floating achievement badge */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white px-6 py-4 rounded-2xl shadow-2xl border-4 border-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8" />
                    <div>
                      <div className="font-heading text-2xl font-bold">10,000+</div>
                      <div className="text-xs font-semibold">Students Taught</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Enhanced with better cards */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#fef4e7' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">What We Stand For</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc, color, bgLight }, i) => (
              <motion.div
                key={title}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
                
                <motion.div
                  className={`relative bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all h-full ${bgLight}`}
                  whileHover={{ y: -10 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl mx-auto`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold text-slate-900 text-center mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-center">
                    {desc}
                  </p>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${color} opacity-5 rounded-bl-full`}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Enhanced with modern design */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Milestones That Matter</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">A decade of growth, innovation, and student success</p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>

            <div className="space-y-8">
              {milestones.map(({ year, event, icon: Icon }, i) => (
                <motion.div
                  key={year}
                  className="relative flex gap-8 group"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Icon with glow */}
                  <motion.div
                    className="flex-shrink-0 relative z-10"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-2xl">
                      <Icon className="h-8 w-8" />
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className="flex-1 bg-white rounded-2xl border-2 border-slate-200 p-6 group-hover:border-primary group-hover:shadow-2xl transition-all"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-2xl">
                        {year}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-150 transition-transform"></div>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed font-medium">{event}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Enhanced with stunning design */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb]"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -left-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-5 w-5 text-yellow-300 fill-yellow-300" />
              <span className="text-white text-sm font-bold">JOIN OUR COMMUNITY</span>
            </motion.div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-white leading-tight">
              Join the Nesture Family
            </h2>
            <p className="text-white/95 text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              Join hundreds of students learning online and achieving their best grades through expert tuition. Your success story starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/online-tuition" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-yellow-400/50 transition-all">
                  Start Online Today <ArrowRight className="h-6 w-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-heading font-bold text-lg px-10 py-5 rounded-2xl transition-all">
                  Book Free Assessment
                </Link>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-semibold">DBS Checked Tutors</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-semibold">98% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-semibold">10+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
