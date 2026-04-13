import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";

const classItems = [
  { 
    name: "Primary Education", 
    path: "/online-tuition/primary",
  },
  { 
    name: "Secondary Education", 
    path: "/online-tuition/secondary",
  },
];

const resourceItems = [
  { name: "Study Material", path: "/online-tuition/study-material" },
  { name: "Q&As / Quiz", path: "/online-tuition/qanda" },
  { name: "Past Papers", path: "/online-tuition/past-papers" },
  { name: "Mock Exams", path: "/online-tuition/mock-exams" },
];

function DesktopDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150); };

  return (
    <div className="relative flex items-center" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-xl shadow-xl z-50 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); setMobileDropdown(null); }, [location.pathname]);

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-primary ${location.pathname === path ? "text-primary" : "text-muted-foreground"}`;

  return (
    <>
      {/* Marquee Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden" style={{ fontSize: 'clamp(0.625rem, 0.5625rem + 0.3vw, 0.75rem)' }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-4 sm:mx-8 flex-shrink-0">
              🎓 Personalised Online Tutoring  |  Free Initial Assessment  |  Live Zoom Lessons  |  Small Groups of Max 6 Students  |  98% Parent Satisfaction Rate  |  Call 0203 305 7998
            </span>
          ))}
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ minHeight: '64px' }}>
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="font-heading font-extrabold text-foreground" style={{ fontSize: 'clamp(1rem, 0.875rem + 0.5vw, 1.25rem)' }}>Nesture</span>
              <span className="font-heading font-extrabold text-primary" style={{ fontSize: 'clamp(1rem, 0.875rem + 0.5vw, 1.25rem)' }}>Education</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className={navLinkClass("/") + " py-2"}>Home</Link>
              <Link to="/about" className={navLinkClass("/about") + " py-2"}>About Us</Link>

              <DesktopDropdown label="Sessions">
                <div className="py-1">
                  {classItems.map((category) => (
                    <Link 
                      key={category.name}
                      to={category.path} 
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </DesktopDropdown>

              <DesktopDropdown label="Resources">
                {resourceItems.map((item) => (
                  <Link key={item.name} to={item.path} className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                    {item.name}
                  </Link>
                ))}
              </DesktopDropdown>

              <Link to="/fees" className={navLinkClass("/fees") + " py-2"}>Fees</Link>
              <Link to="/contact" className={navLinkClass("/contact") + " py-2"}>Contact Us</Link>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact" className="btn-accent whitespace-nowrap">
                Free Trial Classes
              </Link>
            </div>

            {/* Mobile toggle */}
            <button 
              className="lg:hidden p-2 touch-manipulation" 
              onClick={() => setIsOpen(!isOpen)}
              style={{ minWidth: '44px', minHeight: '44px' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
              <Link to="/" className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary touch-manipulation" style={{ minHeight: '44px' }}>Home</Link>
              <Link to="/about" className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary touch-manipulation" style={{ minHeight: '44px' }}>About Us</Link>

              <button
                onClick={() => setMobileDropdown(mobileDropdown === "classes" ? null : "classes")}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-muted-foreground hover:text-primary touch-manipulation"
                style={{ minHeight: '44px' }}
              >
                Sessions
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdown === "classes" ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdown === "classes" && (
                <div className="pl-4 border-l-2 border-primary/20 ml-2 mb-2">
                  {classItems.map((category) => (
                    <Link 
                      key={category.name}
                      to={category.path} 
                      className="block py-2 text-sm text-foreground hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}

              <button
                onClick={() => setMobileDropdown(mobileDropdown === "resources" ? null : "resources")}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-muted-foreground hover:text-primary touch-manipulation"
                style={{ minHeight: '44px' }}
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdown === "resources" ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdown === "resources" && (
                <div className="pl-4 border-l-2 border-primary/20 ml-2 mb-2">
                  {resourceItems.map((item) => (
                    <Link key={item.name} to={item.path} className="block py-2 text-sm text-muted-foreground hover:text-primary">{item.name}</Link>
                  ))}
                </div>
              )}

              <Link to="/fees" className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary touch-manipulation" style={{ minHeight: '44px' }}>Fees</Link>
              <Link to="/contact" className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary touch-manipulation" style={{ minHeight: '44px' }}>Contact Us</Link>

              <div className="pt-4">
                <Link to="/contact" className="btn-accent w-full text-center block">
                  Free Trial Classes
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
