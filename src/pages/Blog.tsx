import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", "Exam Prep", "Study Tips", "A-Level", "GCSE", "Primary", "Guidance", "Parenting", "Education"];

const categoryColors: Record<string, string> = {
  "Exam Prep": "bg-red-100 text-red-700",
  "Study Tips": "bg-blue-100 text-blue-700",
  "A-Level": "bg-purple-100 text-purple-700",
  "GCSE": "bg-green-100 text-green-700",
  "Primary": "bg-yellow-100 text-yellow-700",
  "Guidance": "bg-teal-100 text-teal-700",
  "Education": "bg-indigo-100 text-indigo-700",
  "Parenting": "bg-pink-100 text-pink-700",
};

const posts = [
  {
    slug: "how-to-prepare-your-child-for-sats",
    title: "How to Prepare Your Child for SATs: A Parent's Complete Guide",
    excerpt: "SATs can feel daunting for both parents and children. Here's a practical, stress-free approach to preparation that actually works, from creating a revision timetable to managing test-day nerves.",
    date: "28 March 2026",
    readTime: "7 min read",
    category: "Exam Prep",
  },
  {
    slug: "5-study-habits-every-gcse-student-should-build",
    title: "5 Study Habits Every GCSE Student Should Build Before Year 11",
    excerpt: "Year 11 is intense. Students who develop these five key habits early find themselves better prepared, less stressed, and more confident when exam season arrives.",
    date: "22 March 2026",
    readTime: "5 min read",
    category: "Study Tips",
  },
  {
    slug: "online-vs-in-centre-tuition-which-is-right",
    title: "Online vs In-Centre Tuition: Which Is Right for Your Child?",
    excerpt: "Both options have their strengths. We break down the differences to help you choose the learning environment that best suits your child's personality, goals, and schedule.",
    date: "15 March 2026",
    readTime: "6 min read",
    category: "Guidance",
  },
  {
    slug: "why-small-group-tuition-outperforms-large-classes",
    title: "Why Small Group Tuition Outperforms Large Classes",
    excerpt: "Research consistently shows that smaller group sizes lead to better outcomes. Here's the science behind our maximum-6-per-group policy and what it means for your child.",
    date: "8 March 2026",
    readTime: "4 min read",
    category: "Education",
  },
  {
    slug: "a-level-maths-common-mistakes-and-how-to-avoid-them",
    title: "A-Level Maths: Common Mistakes and How to Avoid Them",
    excerpt: "From integration errors to probability misconceptions, our A-Level maths tutors share the most frequent mistakes they see and practical strategies to eliminate them.",
    date: "1 March 2026",
    readTime: "8 min read",
    category: "A-Level",
  },
  {
    slug: "the-role-of-parents-in-their-childs-academic-success",
    title: "The Role of Parents in Their Child's Academic Success",
    excerpt: "You don't need to be a subject expert to support your child's learning. Small changes to your home environment and communication can make a transformative difference.",
    date: "22 February 2026",
    readTime: "5 min read",
    category: "Parenting",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <section className="hero-section py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-4 text-white">Nesture Blog</h1>
          <p className="text-white/85 max-w-lg mx-auto text-lg">Tips, insights, and resources to help your child thrive academically, from the tutors who know best.</p>
        </div>
      </section>

      <section className="py-6 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <article className="card-hover overflow-hidden group flex flex-col h-full">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full font-heading ${categoryColors[post.category] || "bg-primary/10 text-primary"}`}>{post.category}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Newsletter Strip */}
          <div className="max-w-6xl mx-auto my-12 hero-section rounded-2xl p-8 lg:p-10 text-center">
            <Mail className="h-8 w-8 mx-auto mb-3 text-accent" />
            <h3 className="font-heading text-xl font-extrabold mb-2 text-white">Get Weekly Study Tips in Your Inbox</h3>
            <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">Join thousands of parents and students receiving our best advice, resources, and offers every week.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input placeholder="Your email address" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
              <button className="btn-accent shrink-0 px-6">Subscribe</button>
            </div>
          </div>

          {filteredPosts.length > 3 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredPosts.slice(3).map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <article className="card-hover overflow-hidden group flex flex-col h-full">
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full font-heading ${categoryColors[post.category] || "bg-primary/10 text-primary"}`}>{post.category}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
