import { Link } from "react-router-dom";
import {
  FileText, CheckCircle, ArrowRight, Download, BookOpen,
  Target, Award, Star, Users, Clock, Sparkles,
  PenLine, Search, GraduationCap, BookCopy,
} from "lucide-react";
import heroImg from "@/assets/hero-exam-prep.jpg";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const examBoards = [
  { icon: FileText, board: "AQA", levels: "GCSE & A-Level", subjects: "English, Maths, Sciences, Humanities" },
  { icon: FileText, board: "Edexcel / Pearson", levels: "GCSE & A-Level", subjects: "English, Maths, Sciences, Business" },
  { icon: FileText, board: "OCR", levels: "GCSE & A-Level", subjects: "Sciences, Computer Science, Humanities" },
  { icon: FileText, board: "WJEC / Eduqas", levels: "GCSE & A-Level", subjects: "English, Maths, Sciences" },
  { icon: BookCopy, board: "GL Assessment & CEM", levels: "11+ Entrance", subjects: "Verbal Reasoning, Non-Verbal, Maths, English" },
  { icon: BookOpen, board: "KS2 SATs", levels: "Year 6", subjects: "English Reading, Grammar & Punctuation, Maths" },
];

const features = [
  {
    icon: Download,
    title: "Full Paper Library",
    desc: "Years of past papers organised by subject, level, and exam board — all downloadable as PDFs, available 24/7.",
    tag: "Core Resource",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: CheckCircle,
    title: "Official Mark Schemes",
    desc: "Every paper comes with the official mark scheme so students understand exactly how marks are awarded.",
    tag: "Included Free",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: FileText,
    title: "Examiner Reports",
    desc: "Where available, examiner reports highlight the most common mistakes students make — invaluable for exam prep.",
    tag: "Examiner Insight",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: PenLine,
    title: "Tutor Annotations",
    desc: "Selected papers include tutor-annotated versions highlighting high-value questions and common error patterns.",
    tag: "Expert Guidance",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  {
    icon: Clock,
    title: "Timed Practice Guidance",
    desc: "Step-by-step guidance on how to sit papers under timed, exam-condition settings to build real exam stamina.",
    tag: "Exam Technique",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Search,
    title: "Tutor-Led Review",
    desc: "Bring completed papers to sessions and tutors will go through them in detail, focusing on technique and errors.",
    tag: "Personalised",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const faqs = [
  { q: "Which exam boards are covered?", a: "We cover AQA, Edexcel, OCR, and WJEC for GCSE and A-Level, plus GL Assessment and CEM for 11+, and KS2 SATs papers." },
  { q: "Are mark schemes included?", a: "Yes. Every past paper comes with the full official mark scheme and, where available, the examiner report." },
  { q: "Can tutors review my completed papers?", a: "Yes. Bring your completed papers to sessions and tutors will go through them with you, focusing on technique and common errors." },
  { q: "How far back do the papers go?", a: "Our library includes papers going back several years for most subjects. We prioritise the most recent papers as these are most relevant to current specifications." },
  { q: "Are papers available for all subjects?", a: "We cover all core subjects at GCSE and A-Level, plus 11+ and SATs. Contact us for a full subject list." },
];

const testimonials = [
  { text: "Having all the past papers in one place on Google Classroom is so convenient. My son uses them every week.", author: "Rachel M.", role: "Parent of Year 11 student" },
  { text: "The tutor went through my daughter's past paper in detail and it made a huge difference to her technique.", author: "Omar H.", role: "Parent of Year 13 student" },
  { text: "The mark schemes are a game changer. My son finally understands what examiners actually want.", author: "Priya S.", role: "Parent of Year 10 student" },
  { text: "The examiner reports highlighted exactly where my daughter was losing marks. Her grade jumped two levels.", author: "James T.", role: "Parent of Year 11 student" },
  { text: "We did three papers a week in the run-up to GCSEs. The library had everything we needed.", author: "Aisha K.", role: "Parent of Year 11 student" },
];

const scrollTestimonials = [...testimonials, ...testimonials];

const PastPapers = () => (
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
              Online · Past Papers
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] mb-6 text-white">
              Past<br />
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">Papers</span>
            </h1>
            <p className="text-white/80 text-xl max-w-lg mb-4 leading-relaxed">
              Real exam practice. Official mark schemes. Expert feedback.
            </p>
            <p className="text-white/60 text-base max-w-lg mb-10 leading-relaxed">
              A full library of past papers for 11+, SATs, GCSE, and A-Level — all with official mark schemes and examiner reports. Know exactly how to score maximum marks.
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
              <img src={heroImg} alt="Past papers" className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -top-4 -left-4 bg-white text-foreground px-4 py-2.5 rounded-2xl shadow-xl font-heading font-bold text-sm flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> All Exam Boards
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2.5 rounded-2xl shadow-xl font-heading font-bold text-sm flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Mark Schemes Included
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
            { icon: Download, label: "PDF Downloads" },
            { icon: CheckCircle, label: "Mark Schemes" },
            { icon: FileText, label: "Examiner Reports" },
            { icon: BookOpen, label: "Tutor-Led Review" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-medium">
              <Icon className="h-4 w-4 text-primary" /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FEATURES */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">What's Included</span>
          <h2 className="section-heading mt-2 mb-4">More Than Just Papers</h2>
          <p className="section-subtext mx-auto">Past papers are most effective when combined with mark schemes, examiner insight, and tutor feedback. We provide all of it.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, desc, tag, iconBg, iconColor }) => (
            <div key={title} className="group bg-card rounded-3xl border border-border p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </div>
                  <span className="text-xs font-bold bg-secondary text-muted-foreground px-3 py-1 rounded-full font-heading">{tag}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* EXAM BOARDS */}
    <section className="py-16 lg:py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <span className="section-label">Coverage</span>
            <h2 className="section-heading mt-2 mb-6">Every Exam Board.<br />Every Level.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From KS2 SATs to A-Level, we have papers for every major exam board — all with official mark schemes and, where available, examiner reports.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "AQA, Edexcel, OCR & WJEC covered",
                "GL Assessment & CEM for 11+",
                "KS2 SATs papers included",
                "Papers updated as new ones are released",
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
            {examBoards.map(({ icon: Icon, board, levels, subjects }, i) => (
              <div key={i} className={`flex items-start gap-4 px-6 py-4 ${i < examBoards.length - 1 ? "border-b border-border" : ""} hover:bg-secondary/50 transition-colors group`}>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="font-heading font-bold text-foreground text-sm group-hover:text-primary transition-colors">{board}</div>
                  <div className="text-xs text-primary/70 font-medium mt-0.5">{levels}</div>
                  <div className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{subjects}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* HOW TO USE */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label !text-accent">Process</span>
          <h2 className="section-heading mt-2 mb-4">How to Use Past Papers<br />Effectively</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Download, step: "01", title: "Download the Paper", desc: "Find your subject and exam board in Google Classroom and download the paper as a PDF." },
            { icon: Clock, step: "02", title: "Sit Under Timed Conditions", desc: "Complete the full paper in one sitting under strict timed conditions — just like the real exam." },
            { icon: CheckCircle, step: "03", title: "Mark with the Scheme", desc: "Use the official mark scheme to self-assess. Note every question where marks were lost." },
            { icon: Search, step: "04", title: "Review with Your Tutor", desc: "Bring the marked paper to your next session. Your tutor will analyse errors and build a targeted action plan." },
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
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-card rounded-3xl border border-border p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-foreground">What Students Get</h3>
            </div>
            <ul className="space-y-3.5">
              {[
                "Full library of past papers by subject and exam board",
                "Complete official mark schemes for every paper",
                "Examiner reports highlighting common errors",
                "Tutor-annotated papers on selected topics",
                "Guidance on timed, exam-condition practice",
                "Tutor-led paper review sessions",
                "Papers organised by year, subject, and board",
                "Access via Google Classroom on any device",
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
                "Learners who want to practise under real exam conditions",
                "Students who want to understand mark scheme requirements",
                "Those who want to identify and address recurring mistakes",
                "Students aiming to maximise their exam technique",
                "Anyone who wants to feel fully prepared on exam day",
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
    <section className="py-16 lg:py-20 overflow-hidden bg-secondary/30">
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
              Everything you need to know about our past paper library. Still have questions? We're happy to help.
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
          <Target className="h-4 w-4 text-accent" /> Start practising today
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-5 text-white leading-tight">
          Practice with Real Papers.<br />
          <span className="text-accent">Score Maximum Marks.</span>
        </h2>
        <p className="text-white/70 max-w-lg mx-auto text-lg mb-10">
          Enrol today and get instant access to our full past paper library with mark schemes and examiner reports.
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

export default PastPapers;
