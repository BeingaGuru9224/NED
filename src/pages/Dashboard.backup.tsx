import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download,
  RefreshCw,
  Mail,
  Phone,
  BookOpen,
  Calendar,
  Clock,
  Home,
  CheckCircle,
  AlertCircle,
  GraduationCap,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface EnrollmentData {
  submittedAt: string;
  level: string;
  subject: string;
  groupType: string;
  plan: string;
  pricing: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  studentName: string;
  studentAge: string;
  yearGroup: string;
  preferredDays: string;
  preferredTime: string;
  startDate: string;
  comments: string;
  source: string;
}

const Dashboard = () => {
  const [enrollments, setEnrollments] = useState<EnrollmentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEnrollment, setSelectedEnrollment] = useState<EnrollmentData | null>(null);

  const fetchEnrollments = async () => {
    setIsLoading(true);
    try {
      const FETCH_WEBHOOK_URL = "https://hook.eu2.make.com/o4ng9qltpv5b9y8f9w8f40tmya1fb7tv";
      
      console.log("Fetching data from webhook...");
      const response = await fetch(FETCH_WEBHOOK_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const rawData = await response.text();
      console.log("Raw response text:", rawData);
      
      let data: unknown;
      try {
        data = JSON.parse(rawData);
      } catch (e) {
        console.error("Failed to parse JSON:", e);
        throw new Error("Invalid JSON response from webhook");
      }
      
      console.log("Parsed webhook data:", data);
      console.log("Data type:", typeof data);
      console.log("Is array:", Array.isArray(data));
      
      let enrollmentsData: EnrollmentData[] = [];
      
      // Make.com Array Aggregator returns array directly
      if (Array.isArray(data)) {
        console.log("Processing array data, length:", data.length);
        console.log("First item:", data[0]);
        
        enrollmentsData = data.map((item: Record<string, unknown>, index: number) => {
          console.log(`Processing item ${index}:`, item);
          
          // Handle both numeric keys and named keys
          const enrollment = {
            submittedAt: item['0'] || item.submittedAt || '',
            level: item['1'] || item.level || '',
            subject: item['2'] || item.subject || '',
            groupType: item['3'] || item.groupType || '',
            plan: item['4'] || item.plan || '',
            pricing: item['5'] || item.pricing || '',
            parentName: item['6'] || item.parentName || '',
            parentEmail: item['7'] || item.parentEmail || '',
            parentPhone: item['8'] || item.parentPhone || '',
            studentName: item['9'] || item.studentName || '',
            studentAge: item['10'] || item.studentAge || '',
            yearGroup: item['11'] || item.yearGroup || '',
            preferredDays: item['12'] || item.preferredDays || '',
            preferredTime: item['13'] || item.preferredTime || '',
            startDate: item['14'] || item.startDate || '',
            comments: item['15'] || item.comments || '',
            source: item['16'] || item.source || '',
          };
          
          console.log(`Mapped enrollment ${index}:`, enrollment);
          return enrollment;
        });
      } else if (data && typeof data === 'object') {
        console.log("Data is object, checking for nested arrays...");
        // Handle nested structure
        const dataArray = data.array || data.data || data.enrollments || [data];
        console.log("Extracted array:", dataArray);
        
        enrollmentsData = dataArray.map((item: Record<string, unknown>) => ({
          submittedAt: item['0'] || item.submittedAt || '',
          level: item['1'] || item.level || '',
          subject: item['2'] || item.subject || '',
          groupType: item['3'] || item.groupType || '',
          plan: item['4'] || item.plan || '',
          pricing: item['5'] || item.pricing || '',
          parentName: item['6'] || item.parentName || '',
          parentEmail: item['7'] || item.parentEmail || '',
          parentPhone: item['8'] || item.parentPhone || '',
          studentName: item['9'] || item.studentName || '',
          studentAge: item['10'] || item.studentAge || '',
          yearGroup: item['11'] || item.yearGroup || '',
          preferredDays: item['12'] || item.preferredDays || '',
          preferredTime: item['13'] || item.preferredTime || '',
          startDate: item['14'] || item.startDate || '',
          comments: item['15'] || item.comments || '',
          source: item['16'] || item.source || '',
        }));
      }
      
      console.log("Final processed enrollments:", enrollmentsData);
      console.log("Total enrollments:", enrollmentsData.length);
      
      // Add a small delay for smooth transition
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setEnrollments(enrollmentsData);
      
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const stats = {
    total: enrollments.length,
    primary: enrollments.filter((e) => e.level?.toLowerCase() === "primary").length,
    secondary: enrollments.filter((e) => e.level?.toLowerCase() === "secondary").length,
    thisWeek: enrollments.filter((e) => {
      if (!e.submittedAt) return false;
      const date = new Date(e.submittedAt);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return date > weekAgo;
    }).length,
  };

  const exportToCSV = () => {
    const headers = [
      "Date", "Student", "Age", "Year", "Level", "Subject", "Type", "Plan", 
      "Pricing", "Parent", "Email", "Phone", "Days", "Time", "Start", "Comments"
    ];

    const csvContent = [
      headers.join(","),
      ...enrollments.map((e) =>
        [
          new Date(e.submittedAt).toLocaleDateString(),
          e.studentName,
          e.studentAge,
          e.yearGroup,
          e.level,
          e.subject,
          e.groupType,
          e.plan,
          e.pricing,
          e.parentName,
          e.parentEmail,
          e.parentPhone,
          e.preferredDays,
          e.preferredTime,
          e.startDate,
          `"${e.comments}"`
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `enrollments-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      {/* Premium Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">Nesture Education</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Admin Dashboard
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={fetchEnrollments}
                variant="outline"
                size="sm"
                disabled={isLoading}
                className="hidden sm:flex border-slate-300 hover:border-primary hover:text-primary transition-colors"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button 
                onClick={exportToCSV} 
                size="sm" 
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25"
              >
                <Download className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Export CSV</span>
              </Button>
              <Link to="/">
                <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                  <Home className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Premium KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-8">
          {[
            { 
              label: "Total Enrollments", 
              value: stats.total, 
              gradient: "from-blue-500 to-indigo-600",
              bgColor: "bg-white",
              borderColor: "border-blue-200",
              textColor: "text-blue-600",
              change: "+12%",
              changeColor: "text-green-600 bg-green-50"
            },
            { 
              label: "Primary Students", 
              value: stats.primary, 
              gradient: "from-emerald-500 to-teal-600",
              bgColor: "bg-white",
              borderColor: "border-emerald-200",
              textColor: "text-emerald-600",
              change: "+8%",
              changeColor: "text-green-600 bg-green-50"
            },
            { 
              label: "Secondary Students", 
              value: stats.secondary, 
              gradient: "from-purple-500 to-violet-600",
              bgColor: "bg-white",
              borderColor: "border-purple-200",
              textColor: "text-purple-600",
              change: "+15%",
              changeColor: "text-green-600 bg-green-50"
            },
            { 
              label: "This Week", 
              value: stats.thisWeek, 
              gradient: "from-orange-500 to-amber-600",
              bgColor: "bg-white",
              borderColor: "border-orange-200",
              textColor: "text-orange-600",
              change: "+23%",
              changeColor: "text-green-600 bg-green-50"
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`relative ${stat.bgColor} rounded-2xl p-6 shadow-sm border-2 ${stat.borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-t-2xl`} />
              
              <div className="relative pt-2">
                {/* Header with change indicator */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-bold ${stat.changeColor} px-2.5 py-1 rounded-full`}>
                    <ArrowUpRight className="w-3 h-3" />
                    {stat.change}
                  </div>
                </div>
                
                {/* Value */}
                <div className={`text-5xl font-black ${stat.textColor} mb-1 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.value}
                </div>
                
                {/* Bottom accent line */}
                <div className={`h-1 w-16 bg-gradient-to-r ${stat.gradient} rounded-full mt-3 group-hover:w-full transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Summary Bar */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-600">
              Showing <span className="font-bold text-slate-900 text-base">{enrollments.length}</span> enrollment{enrollments.length !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="text-xs text-slate-500">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Compact Enrollments Table */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-slate-200 rounded-full"></div>
              <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
            <p className="text-slate-600 mt-6 font-medium">Loading enrollments...</p>
            <p className="text-slate-400 text-sm mt-2">Please wait while we fetch the latest data</p>
          </div>
        ) : enrollments.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-12 shadow-sm border border-slate-200 text-center"
          >
            <AlertCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Enrollments Found</h3>
            <p className="text-slate-600 mb-4">No enrollment data available yet</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {enrollments.map((enrollment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.05, 0.5) }}
                className="group bg-white rounded-2xl shadow-md border-2 border-slate-200 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Colored top border indicator */}
                <div className={`h-2 bg-gradient-to-r ${
                  enrollment.level?.toLowerCase() === "primary" 
                    ? "from-emerald-400 via-emerald-500 to-teal-500" 
                    : "from-purple-400 via-purple-500 to-violet-500"
                }`} />
                
                <div className="p-7 lg:p-8">
                  <div className="flex flex-col xl:flex-row gap-7">
                    {/* Left: Student Info */}
                    <div className="flex-1 space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 pb-5 border-b-2 border-slate-100">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">
                              {enrollment.studentName}
                            </h3>
                            <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-xs font-bold">Enrolled</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <span className="font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg">{enrollment.yearGroup}</span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-600 font-medium">{enrollment.studentAge} years old</span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 font-medium">{new Date(enrollment.submittedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-end">
                          <span className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap shadow-md ${
                            enrollment.level?.toLowerCase() === "primary"
                              ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                              : "bg-gradient-to-r from-purple-500 to-violet-500 text-white"
                          }`}>
                            {enrollment.level}
                          </span>
                          <span className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap shadow-md ${
                            enrollment.groupType?.toLowerCase() === "group"
                              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                              : "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                          }`}>
                            {enrollment.groupType}
                          </span>
                        </div>
                      </div>

                      {/* Course Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-md transition-all">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <BookOpen className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-blue-600 font-bold uppercase tracking-wide mb-1">Subject</div>
                            <div className="text-base font-black text-slate-900 truncate">{enrollment.subject}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-100 hover:border-green-300 hover:shadow-md transition-all">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Calendar className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-green-600 font-bold uppercase tracking-wide mb-1">Start Date</div>
                            <div className="text-base font-black text-slate-900 truncate">{enrollment.startDate}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-md transition-all">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Clock className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-orange-600 font-bold uppercase tracking-wide mb-1">Time Slot</div>
                            <div className="text-base font-black text-slate-900 capitalize truncate">{enrollment.preferredTime}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-md transition-all">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Calendar className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-purple-600 font-bold uppercase tracking-wide mb-1">Days</div>
                            <div className="text-base font-black text-slate-900 truncate">{enrollment.preferredDays || "Flexible"}</div>
                          </div>
                        </div>
                      </div>

                      {/* Comments */}
                      {enrollment.comments && enrollment.comments !== "None" && enrollment.comments.trim() !== "" && (
                        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-5 shadow-sm">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                              <span className="text-white text-sm font-black">!</span>
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-black text-amber-900 uppercase tracking-wide mb-2">Additional Notes</div>
                              <p className="text-sm text-amber-900 leading-relaxed font-medium">{enrollment.comments}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Contact & Pricing Card */}
                    <div className="xl:w-[400px] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 rounded-2xl p-7 border-2 border-slate-300 shadow-lg">
                      <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-slate-300">
                        <h4 className="font-black text-slate-900 text-base uppercase tracking-wider flex items-center gap-2">
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                          Contact Info
                        </h4>
                      </div>
                      
                      <div className="space-y-4">
                        {/* Parent Name */}
                        <div className="bg-white rounded-xl p-5 shadow-md border-2 border-slate-200">
                          <div className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-2">Parent/Guardian</div>
                          <div className="font-black text-slate-900 text-xl">{enrollment.parentName}</div>
                        </div>

                        {/* Email */}
                        <a
                          href={`mailto:${enrollment.parentEmail}`}
                          className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md border-2 border-slate-200 hover:border-primary hover:shadow-xl transition-all group/email"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0 group-hover/email:scale-110 transition-all shadow-lg">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-1">Email</div>
                            <div className="text-sm font-bold text-slate-900 truncate group-hover/email:text-primary transition-colors">{enrollment.parentEmail}</div>
                          </div>
                        </a>

                        {/* Phone */}
                        <a
                          href={`tel:${enrollment.parentPhone}`}
                          className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md border-2 border-slate-200 hover:border-green-500 hover:shadow-xl transition-all group/phone"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover/phone:scale-110 transition-all shadow-lg">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-1">Phone</div>
                            <div className="text-sm font-bold text-slate-900 group-hover/phone:text-green-600 transition-colors">{enrollment.parentPhone}</div>
                          </div>
                        </a>

                        {/* Pricing */}
                        <div className="bg-gradient-to-br from-primary via-blue-600 to-indigo-600 rounded-xl p-6 shadow-xl text-white mt-6 border-2 border-blue-400">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-xs font-black uppercase tracking-widest opacity-90">Payment Plan</div>
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <div className="font-black text-lg capitalize mb-3 opacity-95">{enrollment.plan.replace(/-/g, ' ')}</div>
                          <div className="text-4xl font-black tracking-tight">{enrollment.pricing}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
