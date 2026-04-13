import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import OnlineTuition from "./pages/OnlineTuition";
import Fees from "./pages/Fees";
import Enroll from "./pages/Enroll";
import EnrollmentSuccess from "./pages/EnrollmentSuccess";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Online Tuition pages
import PrimaryOnline from "./pages/online-tuition/PrimaryOnline";
import SecondaryOnline from "./pages/online-tuition/SecondaryOnline";
import GCSEYears910 from "./pages/online-tuition/GCSEYears910";
import GCSEYear11 from "./pages/online-tuition/GCSEYear11";
import GCSEExamPractice from "./pages/online-tuition/GCSEExamPractice";
import StudyMaterial from "./pages/online-tuition/StudyMaterial";
import QAndA from "./pages/online-tuition/QAndA";
import PastPapers from "./pages/online-tuition/PastPapers";
import MockExams from "./pages/online-tuition/MockExams";

const queryClient = new QueryClient();

const Layout = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <>
      <ScrollToTop />
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/online-tuition" element={<OnlineTuition />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/enrollment-success" element={<EnrollmentSuccess />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Online Tuition Pages */}
        <Route path="/online-tuition/primary" element={<PrimaryOnline />} />
        <Route path="/online-tuition/secondary" element={<SecondaryOnline />} />
        <Route path="/online-tuition/gcse-years-9-10" element={<GCSEYears910 />} />
        <Route path="/online-tuition/gcse-year-11" element={<GCSEYear11 />} />
        <Route path="/online-tuition/gcse-exam-practice" element={<GCSEExamPractice />} />
        <Route path="/online-tuition/study-material" element={<StudyMaterial />} />
        <Route path="/online-tuition/qanda" element={<QAndA />} />
        <Route path="/online-tuition/past-papers" element={<PastPapers />} />
        <Route path="/online-tuition/mock-exams" element={<MockExams />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
