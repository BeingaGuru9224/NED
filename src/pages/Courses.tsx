import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const categories = ["All", "Math", "Science", "English", "Programming", "Test Prep"];

const Courses = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? courses : courses.filter((c) => c.category === active);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-3">Subjects We Cover</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">From primary basics to A-Level mastery — find the right course for every stage of your child's learning journey</p>
        </div>
      </section>

      {/* Subjects Table */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card border border-border rounded-2xl overflow-hidden max-w-2xl mx-auto">
            <div className="grid grid-cols-2 bg-primary text-primary-foreground font-semibold text-sm">
              <div className="px-6 py-3">Key Stage</div>
              <div className="px-6 py-3">Subjects Available</div>
            </div>
            {[
              { stage: "Primary (KS1–KS2)", subjects: "English, Maths, SATs, 11+" },
              { stage: "Secondary (KS3)", subjects: "English, Maths, Science" },
              { stage: "GCSE", subjects: "English Lang & Lit, Maths, Sciences" },
              { stage: "A-Level", subjects: "Maths, Biology, Chemistry" },
              { stage: "All Ages", subjects: "One-to-one tailored support" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? "bg-card" : "bg-secondary/50"}`}>
                <div className="px-6 py-3 font-medium text-foreground">{row.stage}</div>
                <div className="px-6 py-3 text-muted-foreground">{row.subjects}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">All lessons follow UK curriculum standards and exam board specifications.</p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <div key={course.id} className="animate-fade-in">
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">No courses found in this category.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
