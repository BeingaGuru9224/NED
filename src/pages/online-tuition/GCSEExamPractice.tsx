import { Video, Monitor, FileText, ClipboardList } from "lucide-react";
import TuitionPageTemplate from "@/components/TuitionPageTemplate";
import heroImg from "@/assets/hero-exam-prep.jpg";

const GCSEExamPractice = () => (
  <TuitionPageTemplate
    heroImage={heroImg}
    badge="💻 Online · Exam Practice"
    title={<>GCSE Exam Practice<br /><span className="text-accent">Online Intensive</span> Programme</>}
    subtitle="This isn't curriculum teaching. It's pure exam technique, practice, and feedback. Weekly timed papers, live mark-scheme walkthroughs, and individual annotated scripts. The programme that teaches students how examiners actually mark."
    isOnline
    platformInfo={{
      heading: "Our Platform",
      items: [
        { icon: Video, title: "Zoom Sessions", desc: "Timed papers & walkthroughs" },
        { icon: Monitor, title: "Google Classroom", desc: "Papers & scripts" },
        { icon: FileText, title: "Annotated Feedback", desc: "Within 48 hours" },
      ],
    }}
    whatsCovered={{
      heading: "What the Exam Practice Programme Includes",
      items: [
        "Timed paper sessions every week under real exam conditions via Zoom",
        "Live mark-scheme walkthrough with the tutor after each paper",
        "Common examiner deductions highlighted: missing units, incomplete working, poor command word responses",
        "Students receive their annotated script back within 48 hours",
        "Programme runs in 6-week blocks. Join at the start of any block",
        "12 full past papers across chosen subjects per block",
        "Examiner reports and grade boundaries analysis",
        "Focus on maximising marks with current knowledge",
      ],
    }}
    howLessonsWork={{
      heading: "How Exam Practice Sessions Work",
      items: [
        { icon: ClipboardList, title: "Timed Paper", desc: "Students sit a full past paper under real exam conditions, timed via Zoom." },
        { icon: Video, title: "Live Walkthrough", desc: "Tutor walks through the mark scheme live, showing exactly what earns marks." },
        { icon: FileText, title: "Annotated Script", desc: "Each student receives their annotated paper back within 48 hours." },
        { icon: Monitor, title: "Gap Analysis", desc: "Identify patterns in lost marks and target those specific weaknesses." },
      ],
    }}
    whatStudentsGet={[
      "Weekly timed past paper sessions under real exam conditions",
      "Live mark-scheme walkthroughs after every paper",
      "Common examiner deduction coaching to learn what costs marks",
      "Annotated scripts returned within 48 hours",
      "12 full past papers per 6-week block across chosen subjects",
      "Examiner reports analysis showing exactly what top-scoring answers look like",
      "Grade boundaries analysis so you know exactly where you stand",
      "Individual feedback on every paper, not just a mark",
    ]}
    whoItsFor={[
      "Year 10 and Year 11 students who know the content but lose marks in exams",
      "Students who struggle with exam timing, structure, or technique",
      "Those who want to maximise grades using their existing knowledge",
      "Students who want focused exam practice without full curriculum teaching",
      "Anyone preparing for GCSE mock exams or final exams",
    ]}
    tutorCredentials="Our exam practice tutors are experts in mark-scheme analysis and examiner methodology. They have access to official examiner reports and understand the common patterns that cause students to lose marks unnecessarily."
    pricing={[
      { label: "Group Session", price: "£8", note: "6-week blocks · Join any time" },
    ]}
    testimonials={[
      { text: "The exam practice programme taught my daughter how to actually answer questions the way examiners want. Marks jumped by 2 grades.", author: "Fatima", role: "Parent of Year 11 student" },
      { text: "Getting annotated scripts back within 48 hours meant my son could learn from mistakes while they were fresh.", author: "Tom", role: "Parent of Year 11 student" },
      { text: "My daughter knew the content but kept losing marks. This programme fixed her exam technique and she jumped from 5s to 7s.", author: "Priya", role: "Parent of Year 11 student" },
      { text: "The mark-scheme walkthroughs were eye-opening. My son finally understood what examiners actually want to see.", author: "David", role: "Parent of Year 10 student" },
    ]}
    faqs={[
      { q: "Is this only for Year 11?", a: "No. Year 10 students can join too. In fact, starting exam practice early gives students a significant advantage when they reach Year 11. Building exam technique is a skill that improves with practice." },
      { q: "Which subjects are available?", a: "We offer exam practice across all core GCSE subjects including English, Maths, Biology, Chemistry, Physics, and more. Check availability for your specific subjects when you enrol." },
      { q: "How is this different from normal tuition?", a: "Normal tuition teaches content. This programme assumes you know the content and focuses entirely on exam technique: how to structure answers, manage time, and avoid common mark deductions." },
      { q: "Can I join mid-block?", a: "We recommend starting at the beginning of a 6-week block for the best experience, but you can join mid-block if spaces are available. The next block start date will be confirmed when you enquire." },
      { q: "Will I get individual feedback?", a: "Yes. Every student receives their annotated script back within 48 hours with personalised comments, mark breakdowns, and specific advice on how to improve." },
    ]}
    heroButtons={{
      primary: { label: "Enrol Online", to: "/online-tuition" },
      secondary: { label: "View Fees", to: "/fees" },
    }}
  />
);

export default GCSEExamPractice;
