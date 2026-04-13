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
  ArrowUpRight,
  Eye,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

        {/* Compact Table View */}
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
          <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b-2 border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Level</th>
                    <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Parent</th>
                    <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Plan</th>
                    <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-center text-xs font-black text-slate-700 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <AnimatePresence>
                    {enrollments.map((enrollment, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="hover:bg-slate-50 transition-colors group"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${
                              enrollment.level?.toLowerCase() === "primary" ? "bg-emerald-500" : "bg-purple-500"
                            }`} />
                            <div>
                              <div className="font-bold text-slate-900">{enrollment.studentName}</div>
                              <div className="text-xs text-slate-500">{enrollment.yearGroup} • {enrollment.studentAge} yrs</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            enrollment.level?.toLowerCase() === "primary"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-purple-100 text-purple-700"
                          }`}>
                            {enrollment.level}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-900">{enrollment.subject}</div>
                          <div className="text-xs text-slate-500">{enrollment.groupType}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-900">{enrollment.parentName}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-slate-600">{enrollment.parentEmail}</div>
                          <div className="text-xs text-slate-500">{enrollment.parentPhone}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-primary">{enrollment.pricing}</div>
                          <div className="text-xs text-slate-500 capitalize">{enrollment.plan.replace(/-/g, ' ')}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {new Date(enrollment.submittedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setSelectedEnrollment(enrollment)}
                            className="hover:bg-primary hover:text-white transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedEnrollment} onOpenChange={() => setSelectedEnrollment(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          {selectedEnrollment && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black flex items-center gap-3">
                  {selectedEnrollment.studentName}
                  <span className={`px-4 py-1.5 rounded-xl text-sm font-black ${
                    selectedEnrollment.level?.toLowerCase() === "primary"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                      : "bg-gradient-to-r from-purple-500 to-violet-500 text-white"
                  }`}>
                    {selectedEnrollment.level}
                  </span>
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-5 border-2 border-slate-200">
                    <h3 className="text-xs font-black text-slate-600 uppercase tracking-wide mb-3">Student Info</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Year Group:</span>
                        <span className="font-bold">{selectedEnrollment.yearGroup}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Age:</span>
                        <span className="font-bold">{selectedEnrollment.studentAge} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Type:</span>
                        <span className="font-bold">{selectedEnrollment.groupType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
                    <h3 className="text-xs font-black text-blue-900 uppercase tracking-wide mb-3">Course Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-blue-700">Subject:</span>
                        <span className="font-bold text-blue-900">{selectedEnrollment.subject}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Start Date:</span>
                        <span className="font-bold text-blue-900">{selectedEnrollment.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Time:</span>
                        <span className="font-bold text-blue-900 capitalize">{selectedEnrollment.preferredTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Days:</span>
                        <span className="font-bold text-blue-900">{selectedEnrollment.preferredDays || "Flexible"}</span>
                      </div>
                    </div>
                  </div>

                  {selectedEnrollment.comments && selectedEnrollment.comments !== "None" && selectedEnrollment.comments.trim() !== "" && (
                    <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200">
                      <h3 className="text-xs font-black text-amber-900 uppercase tracking-wide mb-2">Notes</h3>
                      <p className="text-sm text-amber-900">{selectedEnrollment.comments}</p>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-5 border-2 border-slate-200">
                    <h3 className="text-xs font-black text-slate-600 uppercase tracking-wide mb-3">Parent/Guardian</h3>
                    <div className="font-black text-xl text-slate-900 mb-4">{selectedEnrollment.parentName}</div>
                    
                    <div className="space-y-3">
                      <a
                        href={`mailto:${selectedEnrollment.parentEmail}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-primary transition-colors"
                      >
                        <Mail className="w-5 h-5 text-primary" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-slate-500">Email</div>
                          <div className="text-sm font-medium text-slate-900 truncate">{selectedEnrollment.parentEmail}</div>
                        </div>
                      </a>
                      
                      <a
                        href={`tel:${selectedEnrollment.parentPhone}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-green-500 transition-colors"
                      >
                        <Phone className="w-5 h-5 text-green-600" />
                        <div className="flex-1">
                          <div className="text-xs text-slate-500">Phone</div>
                          <div className="text-sm font-medium text-slate-900">{selectedEnrollment.parentPhone}</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-black uppercase tracking-widest">Payment Plan</h3>
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="font-black text-lg capitalize mb-3">{selectedEnrollment.plan.replace(/-/g, ' ')}</div>
                    <div className="text-4xl font-black">{selectedEnrollment.pricing}</div>
                  </div>

                  <div className="bg-slate-100 rounded-xl p-4 border border-slate-200">
                    <div className="text-xs text-slate-500">Enrolled on</div>
                    <div className="font-bold text-slate-900">
                      {new Date(selectedEnrollment.submittedAt).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
