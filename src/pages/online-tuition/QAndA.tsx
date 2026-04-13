import { Link } from "react-router-dom";
import {
  MessageSquare, CheckCircle, ArrowRight, Zap, Target,
  BarChart3, RefreshCw, Star, HelpCircle, Users, Sparkles,
  BookOpen, PenLine, Clock,
} from "lucide-react";
import heroImg from "@/assets/hero-online.jpg";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const quizTypes = [
  {
    icon: Target,
    title: "Topic Quizzes",
    desc: "Short quizzes after every topic to consolidate learning. Multiple choice, short answer, and fill-in-the-blank formats.",
    tag: "After Every Lesson",
    gradient: "from-primary/15 to-primary/5",
    border: "border-primary/20 hover:border-primary/50",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Clock,
    title: "Timed Challenges",
    desc: "Timed quiz mode that simulates real exam pressure. Build speed and accuracy before the actual exam.",
    tag: "Exam Simulation",
    gradient: "from-accent/15 to-accent/5",
    border: "border-accent/20 hover:border-accent/50",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: MessageSquare,
    title: "Live Q&A Sessions",
    desc: "Dedicated Q&A time built into every lesson. Students ask questions, tutors explain, everyone learns.",
    tag: "Every Session",
    gradient: "from-emerald-500/15 to-emerald-500/5",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: RefreshCw,
    title: "Spaced Repetition",
    desc: "Quizzes revisit older topics at intervals to reinforce long-term memory and prevent knowledge fade.",
    tag: "Memory Science",
    gradient: "from-violet-500/15 to-violet-500/5",
    border: "border-violet-500/20 hover:border-violet-500/50",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "Tutors review quiz scores to identify weak areas and adjust upcoming lessons to target those gaps.",
    tag: "Data-Driven",
    gradient: "from-primary/15 to-primary/5",
    border: "border-primary/20 hover:border-primary/50",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: CheckCircle,
    title: "Instant Feedback",
    desc: "Auto-marked quizzes give immediate results with full answer explanations so students learn from every mistake.",
    tag: "Immediate Results",
    gradient: "from-accent/15 to-accent/5",
    border: "border-accent/20 hover:border-accent/50",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const stats = [
  { value: "100+", label: "Quizzes Available", icon: PenLine },
  { value: "5", label: "Subjects Covered", icon: BookOpen },
  { value: "∞", label: "Retakes Allowed", icon: RefreshCw },
  { value: "< 1s", label: "Feedback Speed", icon: Zap },
];

const faqs = [
  { q: "Are quizzes auto-marked?", a: "Yes. Most quizzes are auto-marked and students see their score and full answer explanations immediately after submission — no waiting." },
  { q: "Can tutors see my quiz results?", a: "Yes. Tutors review results after each quiz to understand where each student needs more support and adjust lessons accordingly." },
  { q: "How often are new quizzes added?", a: "We add new quizzes regularly throughout the year, with a particular focus on the run-up to key exam periods." },
  { q: "What subjects are covered?", a: "We cover English, Maths, Science, and a range of GCSE and A-Level subjects. Contact us for a full subject list." },
  { q: "Can I redo a quiz?", a: "Yes. Students can retake quizzes as many times as they like. Retaking quizzes is one of the best ways to reinforce learning." },
];

const testimonials = [
  { text: "The quizzes after each topic really help my son check what he's understood. The instant feedback is brilliant.", author: "Fatima A.", role: "Parent of Year 10 student" },
  { text: "My daughter loves the timed quizzes — it's made her so much more confident going into her GCSEs.", author: "Mark T.", role: "Parent of Year 11 student" },
  { text: "The live Q&A time in every lesson means no question goes unanswered. My son finally feels on top of his work.", author: "Sarah W.", role: "Parent of Year 9 student" },
  { text: "Seeing the quiz scores helped us understand exactly where to focus revision. Really useful for parents too.", author: "Omar H.", role: "Parent of Year 13 student" },
  { text: "My daughter went from hating revision to actually asking to do more quizzes. The format just works.", author: "Priya S.", role: "Parent of Year 8 student" },
];

const scrollTestimonials = [...testimonials, ...testimonials];

const QAndA = () => (
  <div className="min-h-screen">

    {/* HERO */}
    <section className="hero-section relative overflow-hidden py-24 lg:py-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 font-heading">
              <Sparkles className="h-4 w-4 text-accent" />
              Online · Q&As & Quizzes
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] mb-6 text-white">
              Q&As<br />
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">/ Quiz</span>
            </h1>
            <p className="text-white/80 text-xl max-w-lg mb-4 leading-relaxed">
              Test knowledge. Get instant feedback. Close every gap.
            </p>
            <p className="text-white/60 text-base max-w-lg mb-10 leading-relaxed">
              Topic quizzes, timed challenges, and live Q&A sessions — all designed to reinforce learning and build real exam confidence through active recall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent text-base px-8 py-4 h-auto">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/fees" className="btn-outline-white text-base px-8 py-4 h-auto">
                View Fees
              </Link>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-accent/30 to-primary/20 rounded-[2.5rem] rotate-2" />
              <div className="absolute -inset-6 bg-white/5 rounded-[2.5rem] -rotate-1" />
              <img src={heroImg} alt="Quiz and Q&A" className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -top-4 -left-4 bg-white text-foreground px-4 py-2.5 rounded-2xl shadow-xl font-heading font-bold text-sm flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" /> Instant Feedback
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2.5 rounded-2xl shadow-xl font-heading font-bold text-sm flex items-center gap-2">
                <BarChart3 className="h-4 w-4" /> Progress Tracked
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* STATS */}
    <section className="py-12 bg-secondary border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="font-heading text-2xl font-extrabold text-primary mb-1">{value}</div>
              <div className="text-xs text-muted-foreground font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* QUIZ TYPES */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Features</span>
          <h2 className="section-heading mt-2 mb-4">Six Ways We Test<br />& Reinforce Learning</h2>
          <p className="section-subtext mx-auto">Active recall is the most effective revision technique. Our quiz system is built entirely around it.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quizTypes.map(({ icon: Icon, title, desc, tag, gradient, border, iconBg, iconColor }) => (
            <div key={title} className={`group relative bg-card rounded-3xl border-2 ${border} p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </div>
                  <span className="inline-block bg-secondary text-muted-foreground text-xs font-bold px-3 py-1 rounded-full font-heading">{tag}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="py-16 lg:py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label !text-accent">Process</span>
          <h2 className="section-heading mt-2 mb-4">How It Works</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: MessageSquare, step: "01", title: "Lesson Covers Topic", desc: "Tutor teaches the topic with examples, explanations, and interactive discussion." },
            { icon: PenLine, step: "02", title: "Quiz Assigned", desc: "A short topic quiz is assigned via Google Classroom immediately after the lesson." },
            { icon: CheckCircle, step: "03", title: "Instant Results", desc: "Students complete the quiz and see their score with full answer explanations straight away." },
            { icon: BarChart3, step: "04", title: "Tutor Reviews", desc: "Tutors check scores and use the data to personalise the next lesson around weak areas." },
          ].map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(221,83%,38%)] to-[hsl(221,83%,55%)] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full font-heading mb-3">STEP {step}</div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHAT STUDENTS GET + WHO IT'S FOR */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-card rounded-3xl border border-border p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-foreground">What Students Get</h3>
            </div>
            <ul className="space-y-3.5">
              {[
                "Topic quizzes for every subject and level",
                "Timed quiz mode to simulate exam conditions",
                "Auto-marked results with instant answer explanations",
                "Live Q&A time built into every session",
                "Spaced repetition to reinforce long-term memory",
                "Tutor review of quiz performance after every session",
                "Access to full quiz bank via Google Classroom",
                "Unlimited retakes on all quizzes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-3xl border border-border p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-foreground">Who It's For</h3>
            </div>
            <ul className="space-y-3.5">
              {[
                "Students who want to actively test their understanding",
                "Learners preparing for SATs, 11+, GCSE, or A-Level",
                "Students who benefit from immediate feedback",
                "Those who want to identify and close knowledge gaps quickly",
                "Students who struggle to stay motivated during revision",
                "Anyone who wants to build real exam confidence",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8 mb-12 text-center">
        <span className="section-label">Testimonials</span>
        <h2 className="section-heading mt-2">What Families Say</h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-scroll-left gap-5 w-max">
          {scrollTestimonials.map((t, i) => (
            <div key={`a-${i}`} className="bg-card rounded-2xl border border-border p-6 w-[340px] shrink-0 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />)}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold font-heading shrink-0">
                  {t.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground text-sm">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <div>
            <span className="section-label">FAQ</span>
            <h2 className="section-heading mt-2 mb-6">Frequently Asked<br />Questions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Everything you need to know about our Q&A and quiz system. Can't find your answer? Get in touch.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-2xl px-6">
                  <AccordionTrigger className="font-heading font-semibold text-foreground text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-24 bg-foreground text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 font-heading">
          <HelpCircle className="h-4 w-4 text-accent" /> Ready to test your knowledge?
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-5 text-white leading-tight">
          Quiz. Learn. Improve.<br />
          <span className="text-accent">Repeat.</span>
        </h2>
        <p className="text-white/70 max-w-lg mx-auto text-lg mb-10">
          Enrol today and get access to our full quiz bank, live Q&A sessions, and instant feedback tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-accent text-base px-8 py-4 h-auto">
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
          <Link to="/fees" className="btn-outline-white text-base px-8 py-4 h-auto">
            View All Fees
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default QAndA;
