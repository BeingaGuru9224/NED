import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  enrolled: number;
  maxEnrollment: number;
  image: string;
}

const CourseCard = ({ course }: { course: Course }) => {
  const enrollmentPercent = Math.round((course.enrolled / course.maxEnrollment) * 100);

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">📚 {course.category}</span>
        </div>
        <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-card-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">by {course.instructor}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-sm font-semibold text-accent">{course.rating}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(course.rating) ? "fill-accent text-accent" : "text-border"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({course.reviews})</span>
        </div>

        {/* Enrollment Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>{course.enrolled} enrolled</span>
            <span>{enrollmentPercent}%</span>
          </div>
          <Progress value={enrollmentPercent} className="h-2" />
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">£{course.price}<span className="text-xs font-normal text-muted-foreground">/hr</span></span>
            {course.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">£{course.originalPrice}</span>
            )}
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90">Enrol Now</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
