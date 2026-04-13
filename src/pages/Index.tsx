import { Link } from "react-router-dom";
import { CheckCircle, Users, BookOpen, Award, Star, Monitor, MessageSquare, FileText, Target, BarChart3, ClipboardList, TrendingUp, ArrowRight, Zap, Shield, Video, Headphones, GraduationCap, Laptop, Sparkles, Heart, Globe } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import heroHome from "@/assets/hero-home.jpg";

// Animated Counter Component with continuous loop
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { 
      duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1
    });
    return controls.stop;
  }, [count, value, duration]);

  return <motion.span>{rounded}</motion.span>;
}

const stats = [
  { value: "200+", label: "Students Enrolled", icon: Users, color: "from-blue-500/20 to-blue-600/10" },
  { value: "9+", label: "Online Courses", icon: BookOpen, color: "from-orange-400/20 to-orange-500/10" },
  { value: "15+", label: "Expert Tutors", icon: Award, color: "from-emerald-500/20 to-emerald-600/10" },
  { value: "98%", label: "Satisfaction Rate", icon: Star, color: "from-violet-500/20 to-violet-600/10" },
];

const features = [
  { icon: Target, title: "Personalised Learning Plans", desc: "Every student gets a bespoke roadmap built around their strengths, gaps, and goals.", color: "text-[#1555E0]", bg: "bg-[#1555E0]/10" },
  { icon: Users, title: "Small Group Classes", desc: "Max 6 students per group — focused attention, real interaction, rapid progress.", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: BarChart3, title: "Real-Time Progress Tracking", desc: "Live dashboards showing performance metrics, attendance, and improvement trends.", color: "text-emerald-600", bg: "bg-emerald-600/10" },
  { icon: Shield, title: "DBS-Checked Expert Tutors", desc: "Every tutor is background-verified, degree-qualified, and UK curriculum trained.", color: "text-violet-600", bg: "bg-violet-600/10" },
  { icon: Monitor, title: "100% Online Learning", desc: "Live Zoom lessons, Google Classroom resources, and Discord community support.", color: "text-[#1555E0]", bg: "bg-[#1555E0]/10" },
  { icon: Zap, title: "Comprehensive Subject Coverage", desc: "From Primary basics to A-Level advanced topics, plus modern skills like Python programming.", color: "text-orange-500", bg: "bg-orange-500/10" },
];

const steps = [
  { num: "01", icon: ClipboardList, title: "Free Assessment", desc: "We evaluate your child's current level to identify gaps and set a clear baseline." },
  { num: "02", icon: Target, title: "Custom Study Plan", desc: "A tailored roadmap with weekly targets, subject priorities, and milestones." },
  { num: "03", icon: BookOpen, title: "Expert-Led Lessons", desc: "Small group live sessions by specialist tutors using exam-aligned materials." },
  { num: "04", icon: FileText, title: "Regular Testing", desc: "Fortnightly mock tests and topic quizzes to sharpen exam technique." },
  { num: "05", icon: TrendingUp, title: "Progress Reports", desc: "Detailed monthly reports with data-driven insights and tutor recommendations." },
];

const stages = [
  { label: "Primary Education", sub: "KS1 & KS2 · Ages 5–11", path: "/online-tuition/primary", icon: BookOpen, color: "from-blue-500 to-blue-600" },
  { label: "Secondary Education", sub: "KS3 · Years 7–9", path: "/online-tuition/secondary", icon: GraduationCap, color: "from-violet-500 to-violet-600" },
  { label: "GCSE Preparation", sub: "Years 9–11 · All Subjects", path: "/online-tuition/gcse-years-9-10", icon: FileText, color: "from-emerald-500 to-emerald-600" },
  { label: "A-Level Courses", sub: "Advanced Level Studies", path: "/courses", icon: Laptop, color: "from-orange-500 to-orange-600" },
  { label: "Programming & Tech", sub: "Python & Digital Skills", path: "/courses", icon: Target, color: "from-rose-500 to-rose-600" },
];

const sessions = [
  { label: "Study Material", path: "/online-tuition/study-material", icon: BookOpen },
  { label: "Q&As / Quiz", path: "/online-tuition/qanda", icon: MessageSquare },
  { label: "Past Papers", path: "/online-tuition/past-papers", icon: FileText },
  { label: "Mock Exams", path: "/online-tuition/mock-exams", icon: ClipboardList },
];

const testimonials = [
  { name: "Priya Sharma", role: "Parent of Year 6 Student", text: "My daughter's SATs results jumped from a 3 to a 5 in just six months. The tutors genuinely care and make learning enjoyable.", rating: 5 },
  { name: "James Okafor", role: "GCSE Student", text: "I was struggling with triple science and felt completely lost. Nesture broke everything down and I ended up with three 8s!", rating: 5 },
  { name: "Fatima Ahmed", role: "Parent of A-Level Student", text: "The online sessions are just as effective as in-person. My son's predicted grades went from CCD to AAB. Worth every penny.", rating: 5 },
  { name: "David Chen", role: "Year 11 Student", text: "The exam practice papers and timed conditions really prepared me. My maths grade went from a 4 to a 7.", rating: 5 },
  { name: "Sarah Williams", role: "Parent of Year 3 Student", text: "Nesture identified gaps in my daughter's reading comprehension that her school missed entirely. She's now top of her class.", rating: 5 },
  { name: "Ahmed Hassan", role: "A-Level Student", text: "My chemistry tutor was incredible. She explained mechanisms in ways that actually made sense. Got an A* when predicted a B.", rating: 5 },
];

const scrollTestimonials = [...testimonials, ...testimonials];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* HERO - Refined modern design with proper typography */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1555E0] via-[#1e6ef5] to-[#2d7ff9]">
        {/* Subtle Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              y: [0, 30, 0], 
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ 
              y: [0, -40, 0], 
              x: [0, -30, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                <span className="text-white text-sm font-semibold">98% Parent Satisfaction</span>
              </motion.div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
                Transform Your
                <br />
                <span className="text-yellow-300">Child's Future</span>
                <br />
                With Expert Online Tutoring
              </h1>

              <p className="text-lg sm:text-xl text-white/95 mb-3 font-medium leading-relaxed">
                Live lessons. Real results. Proven success.
              </p>
              
              <p className="text-base text-white/85 mb-8 leading-relaxed max-w-xl">
                Join 200+ students achieving their best grades through personalised online tuition from Primary to A-Level. We offer comprehensive courses in Maths, English, Science, Programming, and Test Preparation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/online-tuition" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all">
                    Start Learning Today <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/fees" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-heading font-semibold text-base px-8 py-4 rounded-xl transition-all">
                    View Pricing
                  </Link>
                </motion.div>
              </div>

              {/* Trust Badges - Refined */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: TrendingUp, label: "Results", color: "bg-blue-500/20" },
                  { icon: Heart, label: "Confidence", color: "bg-pink-500/20" },
                  { icon: Shield, label: "Safety", color: "bg-emerald-500/20" },
                  { icon: Target, label: "Structure", color: "bg-orange-500/20" },
                ].map(({ icon: Icon, label, color }, i) => (
                  <motion.div
                    key={label}
                    className="flex flex-col items-center gap-2 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className={`w-12 h-12 rounded-xl ${color} backdrop-blur-sm flex items-center justify-center border border-white/20`}>
                      <Icon className="text-white h-6 w-6" />
                    </div>
                    <span className="text-white/90 font-medium text-sm">{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image - Clean floating cards */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main Image Container */}
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={heroHome} 
                    alt="Students learning with Nesture Education" 
                    className="w-full h-auto object-cover aspect-[4/3]" 
                    width={1920} 
                    height={1080}
                    loading="eager"
                  />
                </motion.div>

                {/* Floating Stats Cards - Clean design */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-slate-900">200+</div>
                      <div className="text-xs text-slate-600">Students</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Award className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-slate-900">15+</div>
                      <div className="text-xs text-slate-600">Expert Tutors</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 px-5 py-3 rounded-xl shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-gray-900" />
                    <div>
                      <div className="text-2xl font-bold leading-none">98%</div>
                      <div className="text-xs font-medium">Satisfaction</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PLATFORM BAR */}
      <section className="py-4 sm:py-6 bg-gradient-to-r from-secondary via-secondary/50 to-secondary border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-14 text-muted-foreground">
            {[
              { icon: Video, label: "Zoom Lessons" },
              { icon: Monitor, label: "Google Classroom" },
              { icon: MessageSquare, label: "Discord Community" },
              { icon: Headphones, label: "24/7 Support" },
              { icon: Globe, label: "Learn Anywhere" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 sm:gap-2 font-medium" style={{ fontSize: 'clamp(0.75rem, 0.6875rem + 0.3vw, 0.875rem)' }}>
                <Icon className="text-primary shrink-0" style={{ width: 'clamp(0.875rem, 0.8125rem + 0.3vw, 1rem)', height: 'clamp(0.875rem, 0.8125rem + 0.3vw, 1rem)' }} />
                <span className="whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS - Compact design without icons */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: '#fef4e7' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Impact
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3">
              Trusted by Families Across the UK
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real students
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { value: 200, label: "Students Enrolled", color: "from-blue-500 to-blue-600", bgLight: "bg-blue-50" },
              { value: 9, label: "Online Courses", color: "from-orange-500 to-orange-600", bgLight: "bg-orange-50" },
              { value: 15, label: "Expert Tutors", color: "from-emerald-500 to-emerald-600", bgLight: "bg-emerald-50" },
              { value: 98, label: "Satisfaction Rate", color: "from-violet-500 to-violet-600", bgLight: "bg-violet-50", isPercent: true },
            ].map(({ value, label, color, bgLight, isPercent }, i) => (
              <motion.div
                key={label}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500`}></div>
                
                {/* Card */}
                <motion.div
                  className={`relative ${bgLight} rounded-3xl p-8 border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all h-full`}
                  whileHover={{ y: -10 }}
                >
                  {/* Number with animation */}
                  <div className="text-center mb-4">
                    <div className={`font-heading text-5xl sm:text-6xl font-extrabold bg-gradient-to-br ${color} bg-clip-text text-transparent inline-block`}>
                      <AnimatedCounter value={value} />
                      {isPercent ? '%' : '+'}
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-slate-700 font-semibold text-sm text-center uppercase tracking-wide">
                    {label}
                  </p>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${color} opacity-5 rounded-bl-full`}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR STAGE */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-yellow-50 via-orange-50/30 to-red-50/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Find Your Level</span>
            <h2 className="section-heading mt-3 mb-4">Choose Your Learning Stage</h2>
            <p className="section-subtext mx-auto">Comprehensive programmes covering Maths, English, Science, Programming, and Test Preparation</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {stages.map(({ label, sub, path, icon: Icon, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link
                  to={path}
                  className="group relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 block"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500`}></div>
                  <div className="relative flex items-start gap-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-heading text-base font-bold text-foreground mb-1">{label}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{sub}</p>
                      <div className="flex items-center gap-1 text-primary font-semibold text-xs">
                        Learn More <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Why Choose Nesture</span>
            <h2 className="section-heading mt-3 mb-4">What Makes Us Different</h2>
            <p className="section-subtext mx-auto">We don't just teach subjects. We build confidence, sharpen exam technique, and create lifelong learners.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {features.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <div 
                key={title} 
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-STEP SYSTEM */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Process</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              The Nesture 5-Step System
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A structured, data-driven approach that turns struggling students into confident, high-achieving learners.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {steps.map(({ num, icon: Icon, title, desc }, i) => (
              <motion.div 
                key={num} 
                className={`relative flex items-start gap-6 bg-white rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl ${
                  i === 2 ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-primary/40'
                }`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                {/* Icon Badge */}
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                    i === 2 ? 'bg-gradient-to-br from-primary to-blue-600' : 'bg-gradient-to-br from-slate-200 to-slate-300'
                  }`}>
                    <Icon className={`h-7 w-7 ${i === 2 ? 'text-white' : 'text-slate-600'}`} />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className={`font-heading text-xl font-bold mb-2 ${i === 2 ? 'text-primary' : 'text-foreground'}`}>
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Step Number */}
                <motion.div 
                  className="flex-shrink-0 hidden sm:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm ${
                    i === 2 ? 'bg-primary/20 text-primary' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {num}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Book Your Free Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Success Stories</span>
            <h2 className="section-heading mt-3 mb-4">What Our Families Say</h2>
            <p className="section-subtext mx-auto">Real results from real students and parents</p>
          </div>
        </div>
        
        <div className="mb-8 overflow-hidden">
          <div className="flex animate-scroll-left gap-6 w-max">
            {scrollTestimonials.map((t, i) => (
              <div key={`row1-${i}`} className="bg-card rounded-3xl border-2 border-border p-8 w-[420px] shrink-0 hover:shadow-2xl hover:border-primary/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-base leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll-right gap-6 w-max">
            {[...scrollTestimonials].reverse().map((t, i) => (
              <div key={`row2-${i}`} className="bg-card rounded-3xl border-2 border-border p-8 w-[420px] shrink-0 hover:shadow-2xl hover:border-primary/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-base leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3fa8] via-[#1555E0] to-[#1e6ef5]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-white text-sm font-semibold font-heading">Limited Spaces Available</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
              Ready to Transform Your Child's Grades?
            </h2>
            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join hundreds of families who've trusted Nesture Education to unlock their child's full academic potential. Start with a free assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/online-tuition" className="btn-accent text-base px-8 py-4 h-14">
                Start Learning Today <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn-outline-white text-base px-8 py-4 h-14">
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> No commitment required</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Free initial assessment</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
