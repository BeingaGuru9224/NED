import { Link } from "react-router-dom";
import {
  BookOpen, FileText, Video, Monitor, CheckCircle, ArrowRight,
  Download, Layers, BookMarked, Star, Sparkles, GraduationCap,
  BookCopy, Users, RefreshCw,
} from "lucide-react";
import heroImg from "@/assets/hero-online.jpg";

const resources = [
  {
    icon: FileText,
    title: "Topic Notes",
    desc: "Clear, concise notes for every topic — written by specialist tutors and mapped to the current national curriculum and exam board specifications.",
    tag: "Core Resource",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    icon: Video,
    title: "Video Walkthroughs",
    desc: "Short tutor-recorded videos explaining key concepts, worked examples, and the most common exam pitfalls students fall into.",
    tag: "Visual Learning",
    tagColor: "bg-accent/10 text-accent",
  },
  {
    icon: Download,
    title: "Printable Worksheets",
    desc: "PDF worksheets for every topic — print at home or complete digitally on any device. Includes answer sheets for self-marking.",
    tag: "Practice",
    tagColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: BookMarked,
    title: "Revision Checklists",
    desc: "Tick-off checklists so students always know exactly what they've covered and what still needs attention before exams.",
    tag: "Organisation",
    tagColor: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Layers,
    title: "Summary Sheets",
    desc: "One-page topic summaries — perfect for last-minute revision the night before a test or exam.",
    tag: "Quick Revision",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    icon: Monitor,
    title: "Google Classroom",
    desc: "All materials organised by subject and topic in one place, accessible 24/7 on any device — laptop, tablet, or phone.",
    tag: "Always Available",
    tagColor: "bg-accent/10 text-accent",
  },
];

const subjects = [
  { icon: BookOpen, stage: "Primary (KS1 & KS2)", topics: "Phonics, Reading, Writing, Maths, Science, SATs prep" },
  { icon: BookCopy, stage: "11+ Preparation", topics: "Verbal Reasoning, Non-Verbal Reasoning, Maths, English" },
  { icon: BookOpen, stage: "Secondary (KS3)", topics: "English, Maths, Biology, Chemistry, Physics" },
  { icon: FileText, stage: "GCSE (Years 9–11)", topics: "English Lang & Lit, Maths, Triple Science, Computer Science" },
  { icon: GraduationCap, stage: "A-Level", topics: "Maths, Further Maths, Biology, Chemistry, Physics, Economics" },
];

const whatStudentsGet = [
  { icon: FileText, text: "Full topic notes for every subject and year group" },
  { icon: Video, text: "Tutor-recorded video walkthroughs for every topic" },
  { icon: Download, text: "Printable PDF worksheets — digital or print-friendly" },
  { icon: CheckCircle, text: "Revision checklists to track what's been covered" },
  { icon: Layers, text: "One-page summary sheets for last-minute revision" },
  { icon: Monitor, text: "24/7 access via Google Classroom on any device" },
  { icon: RefreshCw, text: "Materials updated every academic year" },
  { icon: BookMarked, text: "Mapped to current exam board mark schemes" },
];

const testimonials = [
  { text: "The study notes are so well-organised. My daughter uses them every evening and her confidence has completely transformed.", author: "Priya S.", role: "Parent of Year 10 student" },
  { text: "Having video walkthroughs alongside the notes means my son can revisit anything he didn't understand in class.", author: "James O.", role: "Parent of Year 8 student" },
  { text: "The revision checklists are brilliant — my daughter finally knows exactly what she needs to cover before her GCSEs.", author: "Fatima A.", role: "Parent of Year 11 student" },
  { text: "Everything is in Google Classroom so there's no hunting around. It's all there, organised and ready to use.", author: "David C.", role: "Parent of Year 9 student" },
  { text: "My son went from dreading revision to actually enjoying it. The materials make everything feel manageable.", author: "Rachel M.", role: "Parent of Year 7 student" },
  { text: "The summary sheets are a lifesaver the night before a test. Concise, clear, and exactly what's needed.", author: "Omar H.", role: "Parent of Year 13 student" },
];

const scrollTestimonials = [...testimonials, ...testimonials];

const StudyMaterial = () => (
  <div className="min-h-screen">

    {/* HERO */}
    <section className="hero-section relative overflow-hidden py-24 lg:py-32">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 font-heading">
              <Sparkles className="h-4 w-4 text-accent" />
              Online · Study Materials
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] mb-6 text-white">
              Study<br />
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">Material</span>
            </h1>
            <p className="text-white/80 text-xl max-w-lg mb-4 leading-relaxed">
              Everything your child needs to revise, practise, and excel — all in one place.
            </p>
            <p className="text-white/60 text-base max-w-lg mb-10 leading-relaxed">
              Curriculum-aligned notes, video walkthroughs, worksheets, and revision checklists created by specialist tutors and organised by subject on Google Classroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent text-base px-8 py-4 h-auto">
                Get Access <ArrowRight className="h-5 w-5" />
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
              <img src={heroImg} alt="Study materials" className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -top-4 -left-4 bg-white text-foreground px-4 py-2.5 rounded-2xl shadow-xl font-heading font-bold text-sm flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" /> 6 Resource Types
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2.5 rounded-2xl shadow-xl font-heading font-bold text-sm flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> All Levels Covered
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
            { icon: Monitor, label: "Google Classroom" },
            { icon: FileText, label: "PDF Downloads" },
            { icon: Video, label: "Video Explanations" },
            { icon: BookOpen, label: "All Subjects & Levels" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-medium">
              <Icon className="h-4 w-4 text-primary" /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHAT'S INCLUDED */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Resources</span>
          <h2 className="section-heading mt-2 mb-4">Six Types of Resource.<br />One Place.</h2>
          <p className="section-subtext mx-auto">All created by our tutors. All available the moment you enrol.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map(({ icon: Icon, title, desc, tag, tagColor }) => (
            <div key={title} className="group relative bg-card rounded-3xl border border-border p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full font-heading ${tagColor}`}>{tag}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SUBJECTS */}
    <section className="py-16 lg:py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <span className="section-label">Coverage</span>
            <h2 className="section-heading mt-2 mb-6">Every Level.<br />Every Subject.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From Reception phonics to A-Level calculus — our materials cover the full academic journey, all mapped to current exam board specifications.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Updated every academic year",
                "Mapped to AQA, Edexcel, OCR & WJEC",
                "Reviewed by subject-specialist tutors",
                "Aligned to current mark scheme requirements",
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
            {subjects.map(({ icon: Icon, stage, topics }, i) => (
              <div key={i} className={`flex items-start gap-4 px-6 py-5 ${i < subjects.length - 1 ? "border-b border-border" : ""} hover:bg-secondary/50 transition-colors group`}>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground text-sm group-hover:text-primary transition-colors">{stage}</div>
                  <div className="text-muted-foreground text-xs mt-1 leading-relaxed">{topics}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label !text-accent">How It Works</span>
          <h2 className="section-heading mt-2 mb-4">Access in 3 Simple Steps</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: GraduationCap, step: "01", title: "Enrol", desc: "Sign up for any Nesture online programme and get instant access to all study materials for your level and subjects." },
            { icon: Monitor, step: "02", title: "Open Google Classroom", desc: "All materials are neatly organised by subject and topic. Find exactly what you need in seconds, on any device." },
            { icon: BookOpen, step: "03", title: "Study & Revise", desc: "Work through notes, watch video walkthroughs, complete worksheets, and tick off your revision checklist as you go." },
          ].map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="relative text-center group">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[hsl(221,83%,38%)] to-[hsl(221,83%,55%)] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/25 group-hover:scale-110 group-hover:shadow-primary/40 transition-all duration-300">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full font-heading mb-3">STEP {step}</div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHAT STUDENTS GET */}
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-14">
          <span className="section-label">Included</span>
          <h2 className="section-heading mt-2 mb-4">What Every Student Gets</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {whatStudentsGet.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4 bg-card rounded-2xl border border-border px-5 py-4 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="py-16 lg:py-20 overflow-hidden bg-secondary/30">
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

    {/* CTA */}
    <section className="py-20 lg:py-24 bg-foreground text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 font-heading">
          <BookOpen className="h-4 w-4 text-accent" /> Ready to get started?
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-5 text-white leading-tight">
          Everything Your Child Needs.<br />
          <span className="text-accent">All in One Place.</span>
        </h2>
        <p className="text-white/70 max-w-lg mx-auto text-lg mb-10">
          Enrol today and get instant access to all study materials for your level.
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

export default StudyMaterial;
