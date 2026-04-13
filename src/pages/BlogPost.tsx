import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

const blogPosts: BlogPostData[] = [
  {
    slug: "how-to-prepare-your-child-for-sats",
    title: "How to Prepare Your Child for SATs: A Parent's Complete Guide",
    excerpt: "SATs can feel daunting for both parents and children. Here's a practical, stress-free approach to preparation that actually works.",
    date: "28 March 2026",
    readTime: "7 min read",
    category: "Exam Prep",
    content: [
      "SATs — Standard Assessment Tests — are a milestone in every primary school child's education. Taken at the end of Year 2 and Year 6, they assess reading, grammar, punctuation, spelling, and mathematics. For many families, the approach of SATs brings a mix of anticipation and anxiety. But with the right preparation, your child can walk into that exam room feeling calm, confident, and ready.",
      "## Start Early, But Don't Overdo It",
      "The best SATs preparation doesn't begin in the final few weeks before the exam. Instead, it's a gradual, consistent process that builds over months. We recommend starting structured revision at least 6 months before the tests. This gives your child time to identify weak areas, practise regularly, and build confidence without last-minute cramming.",
      "At Nesture Education, we begin SATs preparation in the autumn term for Year 6 students. Our tutors assess each child's baseline level and create a personalised revision plan that targets their specific gaps. This means no wasted time on topics they've already mastered.",
      "## Create a Realistic Revision Timetable",
      "A structured timetable is essential, but it needs to be realistic. For primary-aged children, we recommend short, focused revision sessions of 20-30 minutes, with regular breaks. Trying to force a 10-year-old to revise for two hours straight is counterproductive — it leads to frustration, fatigue, and negative associations with learning.",
      "Here's a sample weekly plan: Monday and Wednesday — Maths (20 mins). Tuesday and Thursday — English reading and comprehension (20 mins). Friday — Grammar, punctuation, and spelling (20 mins). Saturday — One full practice paper under timed conditions. Sunday — Rest day.",
      "## Use Past Papers Wisely",
      "Past papers are one of the most valuable preparation tools available. They familiarise your child with the format, timing, and style of questions they'll encounter. However, it's important to use them strategically rather than simply working through them one after another.",
      "Start with untimed papers to build familiarity. Then move to timed conditions as the exam approaches. After each paper, review the answers together. Don't just mark right or wrong — discuss why an answer was incorrect and how to approach similar questions differently next time.",
      "## Managing Test-Day Nerves",
      "Exam anxiety is real, even for young children. Here are practical strategies that work: Normalise the experience by talking about tests positively. Ensure they get a good night's sleep the night before. Have a calm, nutritious breakfast on the morning. Arrive at school with plenty of time. Remind them that SATs are just one measure and don't define them.",
      "## How Nesture Education Can Help",
      "Our SATs preparation programme combines small-group teaching (maximum 6 students) with regular mock tests in exam conditions. Every child receives a personalised revision pack, monthly progress reports, and access to our Google Classroom resource library. Our tutors are primary specialists who understand exactly what the SATs examiners are looking for.",
      "Whether your child needs to build foundational skills or push for those higher scores, our structured approach has helped hundreds of students achieve their best results. Contact us today for a free assessment."
    ],
  },
  {
    slug: "5-study-habits-every-gcse-student-should-build",
    title: "5 Study Habits Every GCSE Student Should Build Before Year 11",
    excerpt: "Year 11 is intense. Students who develop these five key habits early find themselves better prepared, less stressed, and more confident.",
    date: "22 March 2026",
    readTime: "5 min read",
    category: "Study Tips",
    content: [
      "Year 11 is often described as the most challenging year of secondary school. With mock exams, coursework deadlines, and the pressure of final GCSEs, students who haven't built strong study habits can quickly feel overwhelmed. The good news? Starting early — ideally in Year 9 or 10 — gives students the foundation they need to thrive.",
      "## 1. Active Recall Over Passive Reading",
      "The single most effective study technique is active recall — testing yourself on material rather than simply re-reading notes. Research consistently shows that students who practise retrieval retain information significantly longer than those who just highlight and review.",
      "Practical tip: After reading a chapter or set of notes, close the book and write down everything you can remember. Then check what you missed. This simple exercise is more effective than reading the same notes three times over.",
      "## 2. Spaced Repetition",
      "Cramming might feel productive in the moment, but it's one of the least effective ways to learn. Spaced repetition — reviewing material at gradually increasing intervals — leads to much stronger long-term retention. The pattern is simple: review new material after 1 day, then 3 days, then 1 week, then 2 weeks, then monthly.",
      "Apps like Anki or even simple flashcard systems can automate this process. At Nesture Education, we build spaced repetition into our lesson structure so students naturally revisit topics at the optimal time.",
      "## 3. Timed Practice Under Exam Conditions",
      "Knowing the content is only half the battle. GCSE exams test not just knowledge but the ability to apply it under time pressure. Students who regularly practise under timed conditions develop crucial skills: time management, concise writing, and the ability to move on when stuck.",
      "We recommend starting timed practice from Year 10. Even 15-minute timed question sets build the exam muscle. By Year 11, students should be completing full past papers regularly — ideally fortnightly.",
      "## 4. Organised Note-Taking Systems",
      "Effective notes aren't just a record of what was taught — they're a revision tool. Students should develop a consistent system early. Whether it's the Cornell method, mind maps, or colour-coded summaries, the key is structure and consistency.",
      "Top students often maintain a separate 'mistakes book' where they record errors from practice papers and homework. This becomes an incredibly powerful revision resource before exams, as it targets their specific weak points.",
      "## 5. Consistent Sleep and Break Routines",
      "This isn't just wellness advice — it's backed by cognitive science. Sleep is when the brain consolidates learning. Students who regularly get 8-9 hours of sleep retain significantly more information than those who sacrifice sleep for extra revision.",
      "Similarly, regular breaks during study sessions (the Pomodoro technique of 25 minutes work / 5 minutes break is popular) prevent cognitive fatigue and maintain focus. A student who studies for 2 hours with breaks will outperform one who studies for 3 hours straight.",
      "## Building These Habits at Nesture",
      "Our GCSE programme doesn't just teach content — we teach students how to learn. From Year 9, we introduce active recall techniques, timed practice, and structured revision methods alongside curriculum content. By the time students reach Year 11, these habits are second nature."
    ],
  },
  {
    slug: "online-vs-in-centre-tuition-which-is-right",
    title: "Online vs In-Centre Tuition: Which Is Right for Your Child?",
    excerpt: "Both options have their strengths. We break down the differences to help you choose the best learning environment for your child.",
    date: "15 March 2026",
    readTime: "6 min read",
    category: "Guidance",
    content: [
      "One of the most common questions we hear from parents is: 'Should my child learn online or come to your centre?' It's a great question, and the honest answer is: it depends on your child. Both options deliver excellent results, but they suit different personalities, schedules, and learning styles.",
      "## The Case for Online Tuition",
      "Online tuition has exploded in popularity since 2020, and for good reason. When done well, it's just as effective as in-person teaching — and in some cases, more so. Here's why many families choose online:",
      "**Convenience and flexibility.** No commute means more time for other activities. Students can learn from anywhere with an internet connection. This is particularly valuable for families with busy schedules or those who live outside East London.",
      "**Lower cost.** Our online sessions start at just £8 per hour compared to £12 for in-centre. The savings come from reduced overheads, and we pass those directly to families.",
      "**Technology-enhanced learning.** Our online platform uses Zoom for live interaction, Google Classroom for resources and homework, and Discord for community support. Students have access to recorded lesson replays, digital flashcards, and a full resource library 24/7.",
      "**Comfort zone.** Some students — particularly teenagers — actually engage more from the comfort of their own room. Without the social pressures of a physical classroom, they're more willing to ask questions and participate.",
      "## The Case for In-Centre Tuition",
      "There's something special about face-to-face learning that technology can't fully replicate. Our Newbury Park centre provides a dedicated learning environment that many students thrive in.",
      "**Structured environment.** The centre provides a quiet, distraction-free space designed for learning. There's no TV, no siblings, no temptation to check social media. Students know that when they walk through our doors, it's time to focus.",
      "**Social interaction.** Learning alongside peers creates motivation, healthy competition, and a sense of community. Many of our in-centre students form study friendships that extend beyond our walls.",
      "**Immediate physical support.** Tutors can look over a student's shoulder, point to specific parts of their work, and provide hands-on guidance in a way that's slightly more natural in person.",
      "**Printed resources.** While all our materials are available digitally, many students and parents prefer physical worksheets, past papers, and textbooks. Our centre provides these as standard.",
      "## Making the Right Choice",
      "Consider your child's personality: Do they focus better in a structured environment, or are they self-disciplined at home? Think about logistics: Is the commute practical? Does the online schedule fit better? Consider their age: Younger children often benefit from the structure of in-centre, while older students tend to adapt well to online. And remember: you can always switch. Many of our families start with one format and transition to the other as their child's needs change.",
      "## The Hybrid Option",
      "Increasingly, families are choosing a hybrid approach — some sessions online, some in-centre. This gives students the best of both worlds: the convenience of online learning during the week, with the focused intensity of in-centre sessions at weekends.",
      "Whatever you choose, the quality of teaching at Nesture Education remains the same. Our tutors, resources, and methodology are consistent across both formats. The only difference is the delivery method."
    ],
  },
  {
    slug: "why-small-group-tuition-outperforms-large-classes",
    title: "Why Small Group Tuition Outperforms Large Classes",
    excerpt: "Research consistently shows that smaller group sizes lead to better outcomes. Here's the science behind our maximum-6-per-group policy.",
    date: "8 March 2026",
    readTime: "4 min read",
    category: "Education",
    content: [
      "Walk into any school classroom and you'll find 25 to 30 students sharing the attention of a single teacher. It's not the teacher's fault — they're doing their best with the resources available. But the reality is that in a class of 30, it's mathematically impossible for every student to receive the individual attention they need.",
      "## The Research Is Clear",
      "The Tennessee STAR study — one of the largest and most rigorous educational experiments ever conducted — followed over 11,000 students and found that smaller class sizes led to significant improvements in academic achievement. Students in smaller classes scored higher on standardised tests, were more likely to take advanced courses, and had higher graduation rates.",
      "More recent research from the Education Endowment Foundation (EEF) in the UK confirms that reducing group sizes has a positive impact on attainment, particularly for disadvantaged students. The evidence is strongest when group sizes drop below 8 students.",
      "## Why 6 Is Our Maximum",
      "At Nesture Education, we cap every group session at 6 students. This isn't arbitrary — it's the sweet spot where several important dynamics come together:",
      "**Every student gets heard.** In a group of 6, every child has the opportunity to answer questions, ask for clarification, and engage in discussion during every single lesson. There's nowhere to hide, which means passive learners become active participants.",
      "**The tutor knows each student.** With 6 students, our tutors develop a deep understanding of each child's strengths, weaknesses, learning style, and personality. They notice when a student is confused, disengaged, or struggling — and they can intervene immediately.",
      "**Peer learning happens naturally.** Small groups create natural collaboration. Students learn from each other's questions, explanations, and approaches. A student who understands a concept can help explain it to a peer, which reinforces their own understanding while supporting others.",
      "**Differentiation is practical.** In a group of 6, a skilled tutor can provide different challenge levels within the same lesson. Advanced students can tackle extension problems while others work on consolidation, all within the same session.",
      "## The Cost Comparison",
      "Some parents ask why they shouldn't just opt for 1-to-1 tuition if smaller is better. While 1-to-1 tuition is certainly effective (and we offer it for those who need it), small group tuition at Nesture Education offers excellent value. At £8-15 per hour depending on level and format, it's a fraction of the cost of private tutoring — while still delivering the personalised attention that large classes can't provide.",
      "## Real Results",
      "The proof is in the outcomes. Our students consistently achieve grade improvements of 1-2 grades within a single term. Parent satisfaction sits at 98%, and the vast majority of families continue with us term after term. Small groups work because they combine the best of individual attention with the motivational benefits of collaborative learning.",
      "If your child is in a school class of 30 and falling behind — or not reaching their full potential — small group tuition could be the missing piece."
    ],
  },
  {
    slug: "a-level-maths-common-mistakes-and-how-to-avoid-them",
    title: "A-Level Maths: Common Mistakes and How to Avoid Them",
    excerpt: "From integration errors to probability misconceptions, our A-Level maths tutors share the most frequent mistakes and how to eliminate them.",
    date: "1 March 2026",
    readTime: "8 min read",
    category: "A-Level",
    content: [
      "A-Level Mathematics is one of the most popular and most challenging subjects students can take. It's also one where small mistakes can cost significant marks. Our A-Level maths tutors have marked thousands of practice papers and seen the same errors come up again and again. Here are the most common mistakes — and how to avoid them.",
      "## 1. Sign Errors in Algebra",
      "It sounds basic, but sign errors are the single most common mistake in A-Level maths papers. They typically occur when expanding brackets, rearranging equations, or working with negative numbers in fractions. A single sign error can cascade through an entire solution, turning a potentially perfect answer into zero marks.",
      "**How to avoid it:** Write out every step. Don't try to do too much in your head. When you expand a bracket like -(3x - 2), write it as -3x + 2, not -3x - 2. Check your signs at each step, especially when the next step depends on the previous one.",
      "## 2. Forgetting the Constant of Integration",
      "When finding an indefinite integral, the constant of integration (+C) is essential. Forgetting it typically costs 1 mark per question — and in a paper where you might integrate 4-5 times, that's 4-5 marks dropped for no reason.",
      "**How to avoid it:** Make it a habit. Every time you integrate without limits, write +C immediately. Don't wait until you've finished the problem. Write it as part of the integration step itself.",
      "## 3. Incorrect Use of the Chain Rule",
      "The chain rule is fundamental to A-Level differentiation, yet students regularly apply it incorrectly — particularly with trigonometric and exponential functions. The most common error is forgetting to multiply by the derivative of the inner function.",
      "**How to avoid it:** Always identify your inner and outer functions before differentiating. Write them down separately if it helps. For example, if y = sin(3x²), identify the outer function as sin(u) and the inner function as u = 3x². Differentiate each, then multiply.",
      "## 4. Probability Distribution Errors",
      "In statistics, students frequently confuse when to use different probability distributions, or make errors in setting up calculations. Common mistakes include: using the binomial distribution when conditions aren't met, forgetting to standardise in normal distribution questions, and misinterpreting 'at least' and 'at most' in probability questions.",
      "**How to avoid it:** Before starting any probability question, explicitly identify which distribution applies and why. Write down the parameters. For 'at least' questions, remember that P(X ≥ k) = 1 - P(X < k) = 1 - P(X ≤ k-1).",
      "## 5. Poor Exam Technique in Proof Questions",
      "Proof by contradiction, proof by induction, and algebraic proof are areas where many students lose marks not because they can't do the maths, but because they don't structure their answers properly. Examiners need to see a logical flow with clear statements.",
      "**How to avoid it:** Learn the standard proof structures and follow them rigorously. For proof by induction: state the base case, state the inductive hypothesis, prove the inductive step, and write a conclusion. Miss any of these and you'll lose marks, even if the algebra is correct.",
      "## 6. Not Showing Working in 'Show That' Questions",
      "When a question says 'show that', the answer is given — but students still need to demonstrate every step of the working. Many students skip steps because the answer is obvious to them. Examiners can only award marks for working that's written down.",
      "**How to avoid it:** Treat 'show that' questions as if the answer hasn't been given. Write out every line of algebra. The more working you show, the more marks you can earn. Even if you make an error partway through, you'll pick up method marks for correct working.",
      "## Getting Expert Help",
      "At Nesture Education, our A-Level maths tutors don't just teach content — they teach exam technique. Students practise with past papers and receive detailed feedback showing exactly where marks are being lost. Many of our students find that fixing these common mistakes adds 10-15 marks to their overall paper score."
    ],
  },
  {
    slug: "the-role-of-parents-in-their-childs-academic-success",
    title: "The Role of Parents in Their Child's Academic Success",
    excerpt: "You don't need to be a subject expert to support your child's learning. Small changes can make a transformative difference.",
    date: "22 February 2026",
    readTime: "5 min read",
    category: "Parenting",
    content: [
      "One of the most important factors in a child's academic success isn't their school, their tutor, or their natural ability — it's the support they receive at home. Research consistently shows that parental involvement is one of the strongest predictors of educational achievement, regardless of socioeconomic background.",
      "But what does 'involvement' actually mean? You don't need a degree in mathematics or English to make a significant difference. Here are practical, evidence-based strategies that any parent can implement.",
      "## Create a Consistent Study Environment",
      "Every child needs a dedicated space for homework and revision. It doesn't need to be a separate room — a clear section of the kitchen table works perfectly. What matters is consistency: the same space, at roughly the same time, with minimal distractions.",
      "Remove or limit access to phones, tablets, and TV during study time. Research from the London School of Economics found that banning mobile phones in schools led to a 6.4% improvement in test scores — the same principle applies at home.",
      "## Show Interest Without Taking Over",
      "Ask about what your child is learning, but resist the urge to do the work for them. Good questions include: 'What was the most interesting thing you learned today?', 'Can you explain this topic to me?', and 'Where did you get stuck?' These questions promote reflection and metacognition — thinking about thinking — which is a powerful learning strategy.",
      "If your child asks for help with a subject you're not confident in, don't panic. You can still support them by helping them find resources, encouraging them to ask their teacher or tutor, or simply sitting with them while they work through it.",
      "## Set Realistic Expectations",
      "High expectations are important, but they need to be realistic and tied to effort rather than outcomes. Praising a child for working hard is more effective than praising them for being 'smart'. Growth mindset research by Carol Dweck at Stanford University shows that children who believe ability can be developed through effort perform significantly better than those who believe intelligence is fixed.",
      "Avoid comparing your child to siblings, classmates, or friends. Every child's academic journey is unique, and comparisons create pressure that undermines confidence and motivation.",
      "## Communicate with Teachers and Tutors",
      "Stay in regular contact with your child's school and, if applicable, their tutor. Attend parents' evenings, read progress reports, and don't hesitate to raise concerns early. The earlier an academic issue is identified, the easier it is to address.",
      "At Nesture Education, we send monthly progress reports to every parent and offer regular consultation opportunities. We believe that the triangle of student, parent, and tutor working together produces the best results.",
      "## Model a Love of Learning",
      "Children learn by example. If they see you reading, asking questions, and engaging with the world intellectually, they're more likely to value learning themselves. This doesn't mean you need to study quantum physics — reading a newspaper, listening to a podcast, or learning a new skill all demonstrate that learning is a lifelong pursuit.",
      "## Manage Exam Stress Proactively",
      "As exams approach, many children experience anxiety. Parents can help by: maintaining normal routines, ensuring adequate sleep, providing nutritious meals, and keeping perspective. Remind your child that while exams are important, they're not the only measure of their worth or their future.",
      "If anxiety becomes severe, don't dismiss it. Talk to your child, speak to their school, and consider whether professional support might be helpful. At Nesture, our tutors are trained to recognise signs of exam stress and adjust their approach accordingly.",
      "## The Partnership That Works",
      "The most successful students we see at Nesture Education are those whose parents are engaged, supportive, and communicative. You don't need to be a teacher — you need to be a cheerleader, a provider of structure, and a safe space where your child feels comfortable admitting when they're struggling. That combination, paired with expert teaching, is incredibly powerful."
    ],
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-extrabold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="hero-section py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold font-heading mb-4">{post.category}</span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {post.content.map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return <h2 key={i} className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">{paragraph.replace("## ", "")}</h2>;
                }
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return <p key={i} className="text-foreground font-semibold">{paragraph.replace(/\*\*/g, "")}</p>;
                }
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{
                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                  }} />
                );
              })}
            </div>

            {/* Related Posts */}
            <div className="mt-20 pt-12 border-t border-border">
              <h3 className="font-heading text-2xl font-extrabold text-foreground mb-8">Related Posts</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {otherPosts.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
                    <div className="bg-card rounded-xl border border-border p-5 h-full hover:border-primary/50 transition-colors">
                      <span className="text-xs font-bold text-primary font-heading">{p.category}</span>
                      <h4 className="font-heading text-sm font-bold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">{p.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" /> {p.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
