import { Video, Monitor, MessageSquare, BookOpen } from "lucide-react";
import TuitionPageTemplate from "@/components/TuitionPageTemplate";
import heroImg from "@/assets/hero-gcse.jpg";

const GCSEYears910 = () => (
  <TuitionPageTemplate
    heroImage={heroImg}
    badge="💻 Online · GCSE Years 9-10"
    title={<>GCSE Online Tuition<br /><span className="text-accent">Years 9 & 10</span></>}
    subtitle="Start GCSE preparation early and build knowledge systematically from Year 9. Our curriculum is sequenced logically so students arrive in Year 11 confident, well-practised, and ahead of their class."
    isOnline
    platformInfo={{
      heading: "Our Platform",
      items: [
        { icon: Video, title: "Zoom Lessons", desc: "Live interactive sessions" },
        { icon: Monitor, title: "Google Classroom", desc: "Resources & tests" },
        { icon: MessageSquare, title: "Discord", desc: "Subject channels" },
      ],
    }}
    whatsCovered={{
      heading: "What We Cover",
      items: [
        "All major GCSE subjects matched to your child's exam board (AQA, Edexcel, OCR)",
        "English Language & Literature: comprehension, writing, analysis",
        "Mathematics: algebra, geometry, statistics, ratio, number",
        "Biology, Chemistry, Physics (combined or triple science)",
        "Computer Science: programming, data representation, networks",
        "Curriculum sequenced in logical topic order across Years 9 and 10",
        "Regular topic tests set on Google Classroom",
        "Grade predictions updated every half-term",
      ],
    }}
    howLessonsWork={{
      heading: "How Online GCSE Sessions Work",
      items: [
        { icon: Video, title: "Live Zoom Lessons", desc: "Interactive teaching with worked examples, past questions, and real-time Q&A." },
        { icon: Monitor, title: "Google Classroom", desc: "Full resource library: revision notes, flashcard decks, past papers, homework." },
        { icon: MessageSquare, title: "Discord Channels", desc: "Dedicated channels per subject for peer study, Q&A, and revision discussions." },
        { icon: BookOpen, title: "Regular Testing", desc: "Topic tests every fortnight to ensure concepts stick and gaps are caught early." },
      ],
    }}
    whatStudentsGet={[
      "Curriculum matched to student's specific exam board (AQA, Edexcel, OCR)",
      "Topics taught in logical, sequential order across two years",
      "Regular topic tests set on Google Classroom",
      "Grade predictions updated every half-term",
      "Access to a full resource library: revision notes, flashcards, past papers",
      "Discord server with dedicated channels per subject for peer study",
      "Monthly progress reports sent to parents",
    ]}
    whoItsFor={[
      "Students in Years 9 and 10 at the start of their GCSE courses",
      "Those who want to build strong foundations before the Year 11 push",
      "Students who want to stay ahead of their school curriculum",
      "Families seeking affordable, high-quality GCSE support from home",
      "Students preparing for multiple GCSE subjects simultaneously",
    ]}
    tutorCredentials="Our online GCSE tutors are experienced with AQA, Edexcel, and OCR specifications. They teach using exam-board-specific resources and mark schemes, ensuring students learn exactly what their specific examiners are looking for."
    pricing={[
      { label: "Group Session", price: "£8", note: "Max 6 students · Exam board matched" },
    ]}
    testimonials={[
      { text: "Starting GCSE support in Year 9 was the best decision we made. By Year 11 my daughter was well ahead of her class.", author: "Helen", role: "Parent of Year 11 student" },
      { text: "The topic tests every fortnight catch gaps early. My son never falls behind because issues are caught immediately.", author: "David", role: "Parent of Year 10 student" },
      { text: "Grade predictions updated every half-term keep us informed. No surprises, just steady upward progress.", author: "Sarah", role: "Parent of Year 9 student" },
      { text: "My daughter does 3 subjects online and the quality across all of them is consistently excellent.", author: "James", role: "Parent of Year 10 student" },
    ]}
    faqs={[
      { q: "Is it too early to start GCSE tuition in Year 9?", a: "Not at all. In fact, it's ideal. Many schools begin GCSE content in Year 9, and starting early allows us to build deep understanding rather than rushing through content in Year 11." },
      { q: "Which exam boards do you cover?", a: "We cover AQA, Edexcel, and OCR. When you enrol, we match resources and teaching to your child's specific exam board." },
      { q: "How many subjects can my child study?", a: "There's no limit. Students can attend sessions for as many subjects as they need. Many attend 2 to 3 subjects per week." },
      { q: "How often should they attend?", a: "We recommend at least one session per subject per week. For subjects where significant gaps exist, two sessions per week accelerates progress." },
    ]}
    heroButtons={{
      primary: { label: "Enrol Online", to: "/online-tuition" },
      secondary: { label: "View Fees", to: "/fees" },
    }}
  />
);

export default GCSEYears910;
