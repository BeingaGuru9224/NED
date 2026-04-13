import { Video, Monitor, MessageSquare, Zap } from "lucide-react";
import TuitionPageTemplate from "@/components/TuitionPageTemplate";
import heroImg from "@/assets/hero-gcse.jpg";

const GCSEYear11 = () => (
  <TuitionPageTemplate
    heroImage={heroImg}
    badge="💻 Online · GCSE Year 11"
    title={<>GCSE Online Tuition<br /><span className="text-accent">Year 11</span> (Final Push)</>}
    subtitle="Designed specifically for Year 11 students in their exam year. Intensive pacing, weekly mock papers, priority topics, and a dedicated 'panic line' for urgent questions during exam season."
    isOnline
    platformInfo={{
      heading: "Our Platform",
      items: [
        { icon: Video, title: "Zoom Lessons", desc: "Intensive live sessions" },
        { icon: Monitor, title: "Google Classroom", desc: "Papers & checklists" },
        { icon: MessageSquare, title: "WhatsApp", desc: "Panic line access" },
      ],
    }}
    whatsCovered={{
      heading: "What the Year 11 Programme Includes",
      items: [
        "Intensive pacing to cover all remaining GCSE content",
        "Exam technique coaching: how to structure answers for maximum marks",
        "Weekly timed mock papers with tutor feedback within 48 hours",
        "Prioritisation sessions identifying which topics give the most marks",
        "How to allocate revision time across subjects effectively",
        "Live Q&A sessions every fortnight for exam questions",
        "Personalised revision checklist for each student",
        "Topic-by-topic mark scheme breakdowns and examiner reports",
      ],
    }}
    howLessonsWork={{
      heading: "How the Year 11 Programme Works",
      items: [
        { icon: Zap, title: "Intensive Pacing", desc: "Cover remaining content quickly, then shift to exam practice and technique." },
        { icon: Video, title: "Weekly Mocks", desc: "Timed mock papers every week with detailed tutor feedback within 48 hours." },
        { icon: Monitor, title: "Revision Resources", desc: "Personalised revision checklist, mark scheme breakdowns, examiner reports." },
        { icon: MessageSquare, title: "Panic Line", desc: "WhatsApp access to your tutor for urgent questions during exam season." },
      ],
    }}
    whatStudentsGet={[
      "Weekly timed mock papers with tutor feedback turnaround within 48 hours",
      "Prioritisation sessions identifying which topics give the most marks with least effort",
      "Live Q&A sessions every fortnight for open exam questions",
      "Dedicated 'panic line' with WhatsApp access to tutor during exam season",
      "Personalised revision checklist tailored to their exam board",
      "Topic-by-topic mark scheme breakdowns with examiner reports",
      "Upgrade option to 1-to-1 at £25/hr for full personalisation",
    ]}
    whoItsFor={[
      "Year 11 students in their final GCSE exam year",
      "Those who feel behind and need to catch up quickly",
      "Students who know the content but need exam technique coaching",
      "Anyone who wants intensive, structured support in the final months",
      "Students seeking maximum grade improvement in minimum time",
    ]}
    tutorCredentials="Our Year 11 programme tutors are GCSE exam specialists who understand the pressure of the final year. They are experienced at delivering intensive, high-impact sessions that focus on the topics and techniques most likely to improve grades quickly."
    pricing={[
      { label: "Group Session", price: "£8", note: "Year 11 intensive pacing" },
      { label: "1-to-1 Upgrade", price: "£25", note: "Full personalisation · WhatsApp access" },
    ]}
    testimonials={[
      { text: "In September of Year 11, my son was predicted 3s and 4s. By May he achieved 6s and 7s. Relentless in the best way.", author: "James", role: "Parent of Year 11 student" },
      { text: "The panic line WhatsApp access saved my daughter during exam week. Quick answers when she needed them most.", author: "Karen", role: "Parent of Year 11 student" },
      { text: "Weekly mock papers meant my son walked into every exam feeling like he'd already done it. Confidence was sky-high.", author: "Ahmed", role: "Parent of Year 11 student" },
      { text: "We joined in January and still saw massive improvement by May. The intensive pacing really works.", author: "Claire", role: "Parent of Year 11 student" },
    ]}
    faqs={[
      { q: "When is the latest I can join?", a: "Students can join at any point during Year 11. Even with just a few weeks until exams, our intensive approach can make a measurable difference to grades." },
      { q: "How many sessions per week do you recommend?", a: "For Year 11 students, we recommend 2 to 3 sessions per week minimum, covering the subjects most in need. During the final weeks, daily sessions are available." },
      { q: "Can I do both Year 11 group and 1-to-1?", a: "Absolutely. Many students combine group sessions for broader subject coverage with 1-to-1 sessions for their weakest areas. This is often the most effective approach." },
      { q: "Do you offer a holiday intensive?", a: "Yes. We run intensive holiday programmes during half-term and Easter specifically designed for Year 11 students approaching their exams." },
    ]}
    heroButtons={{
      primary: { label: "Enrol Online", to: "/online-tuition" },
      secondary: { label: "View Fees", to: "/fees" },
    }}
  />
);

export default GCSEYear11;
