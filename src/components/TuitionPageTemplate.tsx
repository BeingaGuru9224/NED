import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Users, Award, BookOpen, Star, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LucideIcon } from "lucide-react";

interface PricingTier {
  label: string;
  price: string;
  note?: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface HowItWorksItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface TuitionPageProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  heroImage?: string;
  heroButtons?: { primary: { label: string; to?: string; href?: string }; secondary: { label: string; to?: string; href?: string } };
  whatsCovered: { heading: string; items: string[] };
  howLessonsWork: { heading: string; items: HowItWorksItem[] };
  whatStudentsGet: string[];
  whoItsFor: string[];
  tutorCredentials?: string;
  pricing: PricingTier[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  isOnline?: boolean;
  platformInfo?: { heading: string; items: { icon: LucideIcon; title: string; desc: string }[] };
}

const TuitionPageTemplate = ({
  badge,
  title,
  subtitle,
  heroImage,
  heroButtons,
  whatsCovered,
  howLessonsWork,
  whatStudentsGet,
  whoItsFor,
  tutorCredentials,
  pricing,
  testimonials,
  faqs,
  isOnline,
  platformInfo,
}: TuitionPageProps) => {
  const primaryBtn = heroButtons?.primary || { label: "Get Started", to: "/contact" };
  const secondaryBtn = heroButtons?.secondary || { label: "View Fees", to: "/fees" };

  // Double testimonials for infinite scroll
  const scrollTestimonials = [...testimonials, ...testimonials];

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
                <span className="text-white text-sm font-semibold">{badge}</span>
              </motion.div>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-white">
                {title}
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">{subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {primaryBtn.to ? (
                    <Link to={primaryBtn.to} className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all">
                      {primaryBtn.label} <ArrowRight className="h-5 w-5" />
                    </Link>
                  ) : (
                    <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all">
                      {primaryBtn.label} <ArrowRight className="h-5 w-5" />
                    </Link>
                  )}
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to={secondaryBtn.to || "/fees"} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-heading font-bold text-base px-8 py-4 rounded-xl transition-all">
                    {secondaryBtn.label}
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {heroImage && (
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
                      src={heroImage}
                      alt=""
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
                        <div className="text-2xl leading-none">98%</div>
                        <div className="text-xs opacity-80">Success</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Platform Info (Online pages) */}
      {platformInfo && (
        <section className="py-6 bg-secondary border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-muted-foreground">
              {platformInfo.items.map(({ icon: Icon, title: t }) => (
                <div key={t} className="flex items-center gap-2 text-sm font-medium">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What's Covered */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Curriculum</span>
              <h2 className="section-heading mt-3 mb-4">{whatsCovered.heading}</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {whatsCovered.items.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3 bg-white rounded-xl border-2 border-slate-200 p-4 hover:border-primary hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Lessons Work */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-yellow-50 via-orange-50/30 to-red-50/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">{isOnline ? "How a Session Works" : "How Lessons Work"}</span>
            <h2 className="section-heading mt-3 mb-4">{howLessonsWork.heading}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howLessonsWork.items.map(({ icon: Icon, title: t, desc }, i) => (
              <motion.div
                key={t}
                className="text-center group bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-primary hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(221,83%,38%)] to-[hsl(221,83%,48%)] text-white flex items-center justify-center mx-auto shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                </motion.div>
                <span className="text-xs font-bold text-primary font-heading">STEP {i + 1}</span>
                <h3 className="font-heading text-base font-bold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">{t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Students Get + Who It's For */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <BookOpen className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="font-heading text-xl font-extrabold text-foreground">What Students Get</h3>
              </div>
              <ul className="space-y-3">
                {whatStudentsGet.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="h-6 w-6 text-orange-600" />
                </motion.div>
                <h3 className="font-heading text-xl font-extrabold text-foreground">Who It's For</h3>
              </div>
              <ul className="space-y-3">
                {whoItsFor.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <CheckCircle className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" /> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tutor Credentials */}
      {tutorCredentials && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="font-heading text-lg font-bold text-foreground">Our Tutors</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{tutorCredentials}</p>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Pricing</span>
            <h2 className="section-heading mt-3 mb-4">Transparent & Affordable</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {pricing.map((tier, i) => (
              <motion.div
                key={tier.label}
                className="bg-white rounded-2xl border-2 border-slate-200 p-8 min-w-[260px] flex-1 max-w-sm text-center hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{tier.label}</h3>
                <div className="font-heading text-4xl font-extrabold text-primary mb-1">{tier.price}</div>
                <p className="text-muted-foreground text-sm mb-4">per hour</p>
                {tier.note && <p className="text-xs text-muted-foreground bg-slate-100 rounded-lg px-3 py-2">{tier.note}</p>}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/enroll?plan=gcse" className="btn-primary w-full text-center mt-6">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Scrolling Marquee */}
      {testimonials.length > 0 && (
        <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading mb-4">What Families Say</h2>
            </div>
          </div>
          {/* Row 1 - scrolls left */}
          <div className="mb-6 overflow-hidden">
            <div className="flex animate-scroll-left gap-6 w-max">
              {scrollTestimonials.map((t, i) => (
                <div key={`left-${i}`} className="bg-card rounded-2xl border border-border p-6 w-[350px] shrink-0">
                  <Quote className="h-6 w-6 text-primary/20 mb-3" />
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                  <div>
                    <div className="font-heading font-bold text-foreground text-sm">{t.author}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Row 2 - scrolls right (if enough testimonials) */}
          {testimonials.length > 2 && (
            <div className="overflow-hidden">
              <div className="flex animate-scroll-right gap-6 w-max">
                {[...scrollTestimonials].reverse().map((t, i) => (
                  <div key={`right-${i}`} className="bg-card rounded-2xl border border-border p-6 w-[350px] shrink-0">
                    <Quote className="h-6 w-6 text-primary/20 mb-3" />
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                    <div>
                      <div className="font-heading font-bold text-foreground text-sm">{t.author}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">FAQs</span>
            <h2 className="section-heading mt-3 mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <AccordionItem value={`faq-${i}`} className="bg-white border-2 border-slate-200 rounded-xl px-6 hover:border-primary transition-all">
                    <AccordionTrigger className="font-heading font-semibold text-foreground text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
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
              Book your free assessment today. No obligation, no pressure. Let us show you what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/fees" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-heading font-bold text-base px-8 py-4 rounded-xl transition-all">
                  View All Fees
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TuitionPageTemplate;
