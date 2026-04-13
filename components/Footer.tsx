import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 mb-2">
              <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              <span className="font-heading font-extrabold" style={{ fontSize: 'clamp(1rem, 0.875rem + 0.5vw, 1.25rem)' }}>Nesture</span>
              <span className="font-heading font-extrabold text-primary" style={{ fontSize: 'clamp(1rem, 0.875rem + 0.5vw, 1.25rem)' }}>Education</span>
            </Link>
            <p className="text-background/60 leading-relaxed mb-2" style={{ fontSize: 'clamp(0.8125rem, 0.75rem + 0.3vw, 0.875rem)' }}>
              Personalised online tutoring, empowering students through live lessons, expert tutors, and proven methods.
            </p>
            <div className="space-y-1 text-background/60" style={{ fontSize: 'clamp(0.8125rem, 0.75rem + 0.3vw, 0.875rem)' }}>
              <a href="tel:07899094680" className="flex items-center gap-2 hover:text-accent transition-colors touch-manipulation py-1"><Phone className="h-3.5 w-3.5 shrink-0" /> 07899 094680</a>
              <a href="https://wa.me/447899094680" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors touch-manipulation py-1"><MessageCircle className="h-3.5 w-3.5 shrink-0" /> WhatsApp</a>
              <a href="mailto:hello@nestureeducation.com" className="flex items-center gap-2 hover:text-accent transition-colors touch-manipulation break-all py-1"><Mail className="h-3.5 w-3.5 shrink-0" /> hello@nestureeducation.com</a>
              <div className="flex items-center gap-2 py-1"><MapPin className="h-3.5 w-3.5 shrink-0" /> London, UK</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-2" style={{ fontSize: 'clamp(1rem, 0.9rem + 0.4vw, 1.125rem)' }}>Quick Links</h4>
            <ul className="space-y-0 text-background/60" style={{ fontSize: 'clamp(0.8125rem, 0.75rem + 0.3vw, 0.875rem)' }}>
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Online Tuition", path: "/online-tuition" },
                { name: "Fees", path: "/fees" },
                { name: "Blog", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms" },
              ].map((link) => (
                <li key={link.path}><Link to={link.path} className="hover:text-accent transition-colors touch-manipulation inline-block leading-tight py-0.5">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Online Programmes */}
          <div>
            <h4 className="font-heading font-semibold mb-2" style={{ fontSize: 'clamp(1rem, 0.9rem + 0.4vw, 1.125rem)' }}>Online Programmes</h4>
            <ul className="space-y-0 text-background/60" style={{ fontSize: 'clamp(0.8125rem, 0.75rem + 0.3vw, 0.875rem)' }}>
              {[
                { name: "Primary Online (KS1–KS2)", path: "/online-tuition/primary" },
                { name: "Secondary Online (KS3)", path: "/online-tuition/secondary" },
                { name: "GCSE Years 9–10", path: "/online-tuition/gcse-years-9-10" },
                { name: "GCSE Year 11", path: "/online-tuition/gcse-year-11" },
                { name: "Online Exam Prep", path: "/online-tuition/gcse-exam-practice" },
                { name: "Study Material", path: "/online-tuition/study-material" },
                { name: "Past Papers", path: "/online-tuition/past-papers" },
                { name: "Mock Exams", path: "/online-tuition/mock-exams" },
              ].map((link) => (
                <li key={link.path}><Link to={link.path} className="hover:text-accent transition-colors touch-manipulation inline-block leading-tight py-0.5">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold mb-2" style={{ fontSize: 'clamp(1rem, 0.9rem + 0.4vw, 1.125rem)' }}>Stay Updated</h4>
            <p className="text-background/60 mb-2" style={{ fontSize: 'clamp(0.8125rem, 0.75rem + 0.3vw, 0.875rem)' }}>Get tips, resources, and exclusive offers straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input placeholder="Your email" className="bg-background/10 border-background/20 text-background placeholder:text-background/40 flex-1 h-10" />
              <button className="btn-accent shrink-0 h-10 px-4">
                <Mail className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-2 mt-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="rounded-full bg-background/10 w-9 h-9 flex items-center justify-center hover:bg-accent transition-colors touch-manipulation">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-5 sm:mt-6 pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-background/40" style={{ fontSize: 'clamp(0.75rem, 0.6875rem + 0.3vw, 0.875rem)' }}>
          <span className="text-center sm:text-left">&copy; {new Date().getFullYear()} Nesture Education. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors touch-manipulation py-1">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors touch-manipulation py-1">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
