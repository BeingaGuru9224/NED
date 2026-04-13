import { Link } from "react-router-dom";
import {
  Clock, FileText, CheckCircle, ArrowRight, Target,
  BarChart3, Award, Star, Users, TrendingUp,
  ClipboardList, Sparkles, Upload, GraduationCap,
  BookOpen, BookCopy, PenLine,
} from "lucide-react";
import heroImg from "@/assets/hero-exam-prep.jpg";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const mockLevels = [
  { icon: BookCopy, level: "11+ Entrance", timing: "45–60 min", subjects: "Verbal Reasoning, Non-Verbal, Maths, English", boards: "GL Assessment & CEM" },
  { icon: BookOpen, level: "KS2 SATs", timing: "As per SATs schedule", subjects: "Reading, Grammar & Punctuation, Maths", boards: "National Curriculum" },
  { icon: FileText, level: "GCSE", timing: "Full paper timing", subjects: "English, Maths, Sciences & more", boards: "AQA, Edexcel, OCR, WJEC" },
  { icon: GraduationCap, level: "A-Level", timing: "Full paper timing", subjects: "Maths, Sciences, Economics & more", boards: "AQA, Edexcel, OCR" },
];

const process = [
  { icon: ClipboardList, step: "01", title: "Book Your Mock", desc: "Choose your subject, level, and exam board. We'll send you the paper and full instructions." },
  { icon: Clock, step: "02", title: "Sit Under Exam Conditions", desc: "Complete the full paper at home under strict timed conditions — no notes, no interruptions." },
  { icon: Upload, step: "03", title: "Submit Your Paper", desc: "Photograph or scan your completed paper and upload it via Google Classroom." },
  { icon: PenLine, step: "04", title: "Receive Marked Feedback", desc: "Your tutor marks the paper with detailed written comments on every question within 5 working days." },
  { icon: BarChart3, step: "05", title: "Review & Action Plan", desc: "A follow-up session goes through the paper in detail and sets a targeted improvement plan." },
];

const pricing = [
  {
    label: "Single Mock Exam",
    price: "£25",
    note: "Includes tutor marking, written feedback report & review session",
    highlight: false,
    features: ["Full-length past paper", "Tutor-marked with comments", "Grade boundary comparison", "Written feedback report", "Follow-up review session"],
  },
  {
    label: "Mock Bundle × 3",
    price: "£65",
    note: "Three full mocks with feedback — best value for exam season",
    highlight: true,
    features: ["3 full-length past papers", "All 3 tutor-marked", "Grade boundary comparisons", "3 written feedback reports", "3 follow-up review sessions"],
  },
];

const faqs = [
  { q: "How do I submit my completed mock exam?", a: "Students photograph or scan their completed paper and upload it via Google Classroom. We confirm receipt and return marked feedback within 5 working days." },
  { q: "How long does marking take?", a: "We aim to return marked papers with written feedback within 5 working days of submission." },
  { q: "Can I sit multiple mocks?", a: "Yes. We recommend sitting at least two or three mocks in the run-up to exams. Bundle pricing is available for multiple sittings." },
  { q: "Are mocks available for all levels?", a: "Yes. We offer mocks for 11+, KS2 SATs, GCSE (all major subjects), and A-Level." },
  { q: "Is the feedback detailed?", a: "Yes. Tutors provide written comments on every question, a total score, a grade boundary comparison, and a personalised action plan for improvement." },
  { q: "Do I need to be enrolled in sessions to book a mock?", a: "No. Mock exams are available as a standalone service. You don't need to be enrolled in regular sessions." },
];

const testimonials = [
  { text: "The mock exam feedback was incredibly detailed. My son knew exactly what to work on and improved by two grades.", author: "Sarah W.", role: "Parent of Year 11 student" },
  { text: "Sitting a mock at home in proper conditions really helped my daughter get over her exam nerves before the real thing.", author: "David C.", role: "Parent of Year 13 student" },
  { text: "The action plan after the mock was spot on. It focused our revision on exactly the right areas.", author: "Aisha K.", role: "Parent of Year 6 student" },
  { text: "Three mocks over the term made a massive difference. My son went from a grade 5 to a grade 8 in maths.", author: "James O.", role: "Parent of Year 11 student" },
  { text: "The written feedback was more detailed than anything his school provided. Absolutely worth it.", author: "Fatima A.", role: "Parent of Year 10 student" },
];

const scrollTestimonials = [...testimonials, ...testimonials];

const MockExams = () => (
  <div className="min-h-screen">

    {/* HERO */}
    <section className="hero-section relative overflow-hidden py-24 lg:py-32">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 font-heading">
              <Sparkles className="h-4 w-4 text-accent" />
              Online · Mock Exams
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] mb-6 text-white">
              Mock<br />
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">Exams</span>
            </h1>
            <p className="text-white/80 text-xl max-w-lg mb-4 leading-relaxed">
              Full simulation. Expert marking. Personalised action plan.
            </p>
            <p className="text-white/60 text-base max-w-lg mb-10 leading-relaxed">
              Sit full mock exams under real exam conditions from home. Receive detailed tutor-marked feedback, a grade boundary comparison, and a clear plan to maximise your result.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent text-base px-8 py-4 h-auto">
                Book a Mock <ArrowRight className="h-5 w-5" />
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
              <img src={heroImg} alt="Mock exam preparation" className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -top-4 -left-4 bg-white text-foreground px-4 py-2.5 rounded-2xl shadow-xl font-heading font-bold text-sm flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Real Exam Conditions
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2.5 rounded-2xl shadow-xl font-heading font-bold text-sm flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Results in 5 Days
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PLATFORM BAR */}
    <section className="py-5 bg-secondary border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-muted-foreground">
          {[
            { icon: Clock, label: "Real Exam Conditions" },
            { icon: FileText, label: "Tutor-Marked Feedback" },
            { icon: BarChart3, label: "Grade Boundary Comparison" },
            { icon: Target, label: "Personalised Action Plan" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-medium">
              <Icon className="h-4 w-4 text-primary" /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 5-STEP PROCESS */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label !text-accent">Process</span>
          <h2 className="section-heading mt-2 mb-4">From Booking to<br />Action Plan in 5 Steps</h2>
          <p className="section-subtext mx-auto">A clear, structured process designed to maximise your improvement before the real exam.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {process.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="relative text-center group">
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(221,83%,38%)] to-[hsl(221,83%,55%)] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/25 group-hover:scale-110 group-hover:shadow-primary/40 transition-all duration-300">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full font-heading mb-3">STEP {step}</div>
              <h3 className="font-heading text-sm font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* LEVELS TABLE */}
    <section className="py-16 lg:py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <span className="section-label">Coverage</span>
            <h2 className="section-heading mt-2 mb-6">Available for<br />Every Level</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether your child is sitting the 11+, SATs, GCSEs, or A-Levels — we have a full mock exam ready for them, aligned to the current specification.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Aligned to current exam board specifications",
                "Full paper timing enforced",
                "Marked by subject-specialist tutors",
                "Available as standalone or bundled service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-3 w-3 text-primary" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg">
            {mockLevels.map(({ icon: Icon, level, timing, subjects, boards }, i) => (
              <div key={i} className={`flex items-start gap-4 px-6 py-5 ${i < mockLevels.length - 1 ? "border-b border-border" : ""} hover:bg-secondary/50 transition-colors group`}>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="font-heading font-bold text-foreground text-sm group-hover:text-primary transition-colors">{level}</div>
                  <div className="text-xs text-primary/70 font-medium mt-0.5">{timing} · {boards}</div>
                  <div className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{subjects}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* PRICING */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Pricing</span>
          <h2 className="section-heading mt-2 mb-4">Simple, Transparent Pricing</h2>
          <p className="section-subtext mx-auto">No hidden fees. No contracts. Just expert feedback that makes a real difference.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {pricing.map((tier) => (
            <div key={tier.label} className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${tier.highlight ? "border-accent bg-gradient-to-br from-accent/5 to-accent/10 shadow-lg shadow-accent/10" : "border-border bg-card hover:border-primary/40"}`}>
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-5 py-1.5 rounded-full font-heading shadow-lg">
                  BEST VALUE
                </div>
              )}
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{tier.label}</h3>
              <div className={`font-heading text-5xl font-extrabold mb-1 ${tier.highlight ? "text-accent" : "text-primary"}`}>{tier.price}</div>
              <p className="text-xs text-muted-foreground bg-secondary rounded-xl px-4 py-2.5 mt-3 mb-7 leading-relaxed">{tier.note}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className={`h-4 w-4 shrink-0 ${tier.highlight ? "text-accent" : "text-primary"}`} /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`w-full text-center ${tier.highlight ? "btn-accent" : "btn-primary"}`}>
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHAT STUDENTS GET + WHO IT'S FOR */}
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-card rounded-3xl border border-border p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-foreground">What Students Get</h3>
            </div>
            <ul className="space-y-3.5">
              {[
                "Full-length mock exam under real exam conditions",
                "Tutor-marked paper with detailed written feedback",
                "Score benchmarked against current grade boundaries",
                "Personalised action plan for improvement",
                "Follow-up review session with your tutor",
                "Option to sit multiple mocks throughout the year",
                "Feedback returned within 5 working days",
                "Available as standalone or bundled (×3) service",
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
                "Students preparing for 11+, SATs, GCSE, or A-Level",
                "Learners who want to experience real exam pressure",
                "Students who want expert feedback on their performance",
                "Those who want a clear, targeted plan to improve",
                "Students who struggle with exam nerves or time management",
                "Anyone who wants to walk into their exam fully prepared",
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

    {/* TUTOR CREDENTIALS */}
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto bg-card rounded-3xl border border-border p-10 text-center shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Award className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Markers</h3>
          <p className="text-muted-foreground leading-relaxed text-base">
            Mock exams are marked by subject-specialist tutors with extensive exam preparation experience. Many have examiner backgrounds or have worked directly with exam boards. Feedback is detailed, constructive, and laser-focused on maximising marks in the real exam.
          </p>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12 text-center">
        <span className="section-label">Testimonials</span>
        <h2 className="section-heading mt-2">What Families Say</h2>
      </div>
      <div className="mb-5 overflow-hidden">
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
      <div className="overflow-hidden">
        <div className="flex animate-scroll-right gap-5 w-max">
          {[...scrollTestimonials].reverse().map((t, i) => (
            <div key={`b-${i}`} className="bg-card rounded-2xl border border-border p-6 w-[340px] shrink-0 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />)}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-xs font-bold font-heading shrink-0">
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
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <div>
            <span className="section-label">FAQ</span>
            <h2 className="section-heading mt-2 mb-6">Frequently Asked<br />Questions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Everything you need to know about our mock exam service. Still have questions? We're happy to help.
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
          <ClipboardList className="h-4 w-4 text-accent" /> Ready to sit your first mock?
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-5 text-white leading-tight">
          Sit. Get Feedback.<br />
          <span className="text-accent">Walk In Prepared.</span>
        </h2>
        <p className="text-white/70 max-w-lg mx-auto text-lg mb-10">
          Book today. Sit at home. Get expert feedback. Walk into your real exam fully prepared.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-accent text-base px-8 py-4 h-auto">
            Book a Mock Exam <ArrowRight className="h-5 w-5" />
          </Link>
          <Link to="/fees" className="btn-outline-white text-base px-8 py-4 h-auto">
            View All Fees
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default MockExams;
