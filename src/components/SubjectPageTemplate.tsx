import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, ArrowRight, Star, Clock, Award, BookOpen, Calculator, Beaker, Wrench, Globe, Clock as ClockIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SubjectPageProps {
  level: "Primary" | "Secondary";
  subject: string;
  iconName: string;
  description: string;
  topics: Array<{ title: string; desc: string }>;
  groupPricing: {
    payAsYouGo: string;
    weekly: string;
    monthly: string;
  };
  oneOnOnePricing: {
    payAsYouGo: string;
    weekly: string;
    monthly: string;
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Calculator,
  Beaker,
  Wrench,
  Globe,
  Clock: ClockIcon,
};

const SubjectPageTemplate = ({
  level,
  subject,
  iconName,
  description,
  topics,
  groupPricing,
  oneOnOnePricing,
}: SubjectPageProps) => {
  const Icon = iconMap[iconName] || BookOpen;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1555E0] via-[#1e6ef5] to-[#2d7ff9] py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Icon className="h-4 w-4 text-yellow-300" />
              <span className="text-white text-sm font-semibold">{level} Education</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl font-extrabold mb-6 text-white">
              {level} {subject}
              <br />
              <span className="text-yellow-300">Tuition</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">{description}</p>
            <Link to="/contact" className="btn-accent inline-flex items-center gap-2">
              Book Free Consultation <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">What We Cover</h2>
            <p className="section-subtext mx-auto">Comprehensive {subject} curriculum for {level} students</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topics.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-primary hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <CheckCircle className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Flexible Pricing Options</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Group Sessions */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">Group Sessions</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pay as you go</span>
                  <span className="font-bold text-lg">{groupPricing.payAsYouGo}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Weekly (3 sessions)</span>
                  <span className="font-bold text-lg">{groupPricing.weekly}</span>
                </div>
                <div className="flex justify-between items-center bg-yellow-50 p-2 rounded">
                  <span className="text-sm font-semibold">Monthly ⭐</span>
                  <span className="font-bold text-lg text-primary">{groupPricing.monthly}</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary w-full">Book Group Session</Link>
            </div>

            {/* 1-on-1 Sessions */}
            <div className="bg-white rounded-2xl border-2 border-primary p-6">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">1-on-1 Sessions</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pay as you go</span>
                  <span className="font-bold text-lg">{oneOnOnePricing.payAsYouGo}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Weekly (3 sessions)</span>
                  <span className="font-bold text-lg">{oneOnOnePricing.weekly}</span>
                </div>
                <div className="flex justify-between items-center bg-yellow-50 p-2 rounded">
                  <span className="text-sm font-semibold">Monthly ⭐</span>
                  <span className="font-bold text-lg text-primary">{oneOnOnePricing.monthly}</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary w-full">Book 1-on-1 Session</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Why Choose Our {subject} Tuition?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Award, title: "Expert Tutors", desc: `Qualified ${subject} specialists` },
              { icon: Users, title: "Small Groups", desc: "Max 6 students per class" },
              { icon: Clock, title: "Flexible Times", desc: "Evening & weekend slots" },
              { icon: Star, title: "Proven Results", desc: "98% satisfaction rate" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1555E0] to-[#2d7ff9]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-extrabold mb-6 text-white">
            Ready to Excel in {subject}?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Book a free consultation and see how we can help your child succeed
          </p>
          <Link to="/contact" className="btn-accent inline-flex items-center gap-2">
            Book Free Consultation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SubjectPageTemplate;
