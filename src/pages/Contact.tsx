import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, CheckCircle2, ArrowRight, ArrowLeft, GraduationCap, BookOpen, Loader2, Users, UserCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1: Choose Level
    level: "", // "primary" or "secondary"
    
    // Step 2: Choose Subject
    subject: "",
    
    // Step 3: Choose Group Type & Plan
    groupType: "", // "group" or "one-to-one"
    plan: "", // "pay-as-you-go", "weekly", "monthly"
    
    // Step 4: Personal Information
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    studentName: "",
    studentAge: "",
    yearGroup: "",
    
    // Step 5: Additional Details
    preferredDays: "",
    preferredTime: "",
    startDate: "",
    comments: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    if (step === 1 && !formData.level) {
      toast({ title: "Please select a level", variant: "destructive" });
      return false;
    }
    if (step === 2 && !formData.subject) {
      toast({ title: "Please select a subject", variant: "destructive" });
      return false;
    }
    if (step === 3 && (!formData.groupType || !formData.plan)) {
      toast({ title: "Please select group type and plan", variant: "destructive" });
      return false;
    }
    if (step === 4) {
      if (!formData.parentName || !formData.parentEmail || !formData.parentPhone || !formData.studentName || !formData.yearGroup) {
        toast({ title: "Please fill in all required fields", variant: "destructive" });
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.parentEmail)) {
        toast({ title: "Please enter a valid email", variant: "destructive" });
        return false;
      }
    }
    // Step 5 has no required fields, but we validate that we're on step 5
    if (step === 5) {
      // All previous steps must be completed
      if (!formData.level || !formData.subject || !formData.groupType || !formData.plan || 
          !formData.parentName || !formData.parentEmail || !formData.parentPhone || 
          !formData.studentName || !formData.yearGroup) {
        toast({ title: "Please complete all previous steps", variant: "destructive" });
        return false;
      }
    }
    return true;
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // CRITICAL: Ensure we're on step 5
    if (step !== 5) {
      console.log("❌ Submission blocked: Not on step 5. Current step:", step);
      toast({
        title: "Cannot Submit",
        description: "Please complete all 5 steps before submitting.",
        variant: "destructive",
      });
      return;
    }

    // STRICT VALIDATION: Check ALL required fields from ALL steps
    const missingFields = [];
    
    // Step 1 validation
    if (!formData.level) missingFields.push("Level (Step 1)");
    
    // Step 2 validation
    if (!formData.subject) missingFields.push("Subject (Step 2)");
    
    // Step 3 validation
    if (!formData.groupType) missingFields.push("Group Type (Step 3)");
    if (!formData.plan) missingFields.push("Plan (Step 3)");
    
    // Step 4 validation - ALL required fields
    if (!formData.parentName || formData.parentName.trim() === "") missingFields.push("Parent Name (Step 4)");
    if (!formData.parentEmail || formData.parentEmail.trim() === "") missingFields.push("Parent Email (Step 4)");
    if (!formData.parentPhone || formData.parentPhone.trim() === "") missingFields.push("Parent Phone (Step 4)");
    if (!formData.studentName || formData.studentName.trim() === "") missingFields.push("Student Name (Step 4)");
    if (!formData.yearGroup) missingFields.push("Year Group (Step 4)");
    
    // Email validation
    if (formData.parentEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.parentEmail)) {
        missingFields.push("Valid Email Address (Step 4)");
      }
    }
    
    // If any required fields are missing, show error and prevent submission
    if (missingFields.length > 0) {
      console.log("❌ Submission blocked: Missing fields:", missingFields);
      toast({
        title: "Missing Required Information",
        description: `Please fill in: ${missingFields.join(", ")}`,
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Prepare complete data for webhook - ALL fields guaranteed to have values
      const webhookData = {
        submittedAt: new Date().toISOString(),
        level: formData.level, // Required - validated above
        subject: formData.subject, // Required - validated above
        groupType: formData.groupType === "group" ? "Group" : "1-on-1", // Required - validated above
        plan: formData.plan, // Required - validated above
        pricing: getPricing(formData.groupType, formData.plan), // Calculated from required fields
        parentName: formData.parentName.trim(), // Required - validated above
        parentEmail: formData.parentEmail.trim(), // Required - validated above
        parentPhone: formData.parentPhone.trim(), // Required - validated above
        studentName: formData.studentName.trim(), // Required - validated above
        studentAge: formData.studentAge || "Not provided", // Optional
        yearGroup: formData.yearGroup, // Required - validated above
        preferredDays: formData.preferredDays || "Not specified", // Optional
        preferredTime: formData.preferredTime || "Not specified", // Optional
        startDate: formData.startDate || "As soon as possible", // Optional
        comments: formData.comments || "None", // Optional
        source: "Website Contact Form",
      };

      console.log("=== SENDING TO WEBHOOK ===");
      console.log("✅ Step 5 confirmed");
      console.log("✅ All required fields filled");
      console.log(JSON.stringify(webhookData, null, 2));
      console.log("==========================");

      // Send to Make.com webhook
      const webhookUrl = "https://hook.eu2.make.com/sr6d82b2nc1cfk4o5sqnvw679tuty4cl";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Wait for response to complete
      await response.text();

      console.log("✅ Webhook sent successfully!");

      // Show success message only after webhook succeeds
      setShowSuccess(true);
      
      // Reset form after 4 seconds
      setTimeout(() => {
        setFormData({
          level: "", subject: "", groupType: "", plan: "",
          parentName: "", parentEmail: "", parentPhone: "",
          studentName: "", studentAge: "", yearGroup: "",
          preferredDays: "", preferredTime: "", startDate: "", comments: "",
        });
        setStep(1);
        setShowSuccess(false);
      }, 4000);

    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at hello@nestureeducation.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPricing = (groupType: string, plan: string) => {
    if (groupType === "group") {
      if (plan === "pay-as-you-go") return "£14/hour";
      if (plan === "weekly") return "£39 (3 sessions/week)";
      if (plan === "monthly") return "£150/month (recommended)";
    } else {
      if (plan === "pay-as-you-go") return "£28/hour";
      if (plan === "weekly") return "£78 (3 sessions/week)";
      if (plan === "monthly") return "£300/month (recommended)";
    }
    return "";
  };

  const subjects = {
    primary: ["English", "Maths", "Science", "Design & Technology", "History", "Geography"],
    secondary: ["English", "Maths", "Biology", "Physics", "Chemistry"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1555E0] via-[#1e6ef5] to-[#2d7ff9] py-16">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading font-extrabold text-white mb-4 text-4xl md:text-5xl">
              Enroll Today
            </h1>
            <p className="text-white/95 text-lg mb-2">
              Complete our simple enrollment form in just 5 steps
            </p>
            <p className="text-white/80 text-sm">
              We'll contact you within 24 hours to confirm your enrollment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: MapPin, title: "Location", info: "Serving UK Students", color: "from-blue-500 to-blue-600" },
              { icon: Phone, title: "Phone", info: "0203 305 7998", color: "from-emerald-500 to-emerald-600" },
              { icon: Mail, title: "Email", info: "hello@nestureeducation.com", color: "from-orange-500 to-orange-600" },
              { icon: MessageSquare, title: "WhatsApp", info: "Chat with us", color: "from-violet-500 to-violet-600" },
            ].map(({ icon: Icon, title, info, color }, i) => (
              <motion.div
                key={title}
                className="bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-primary hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground">{info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                          step >= num ? "bg-primary text-white" : "bg-white border-2 border-slate-300 text-slate-400"
                        }`}
                      >
                        {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
                      </div>
                    </div>
                    {num < 5 && (
                      <div className={`h-1 flex-1 mx-2 transition-all ${step > num ? "bg-primary" : "bg-slate-300"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <motion.div
              className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <form onSubmit={handleSubmit} onKeyDown={(e) => {
                // Prevent Enter key from submitting the form unless we're on step 5
                if (e.key === 'Enter' && step !== 5) {
                  e.preventDefault();
                  handleNext();
                }
              }}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Choose Level */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <h2 className="text-3xl font-bold mb-2">Choose Education Level</h2>
                        <p className="text-muted-foreground">Select the appropriate level for the student</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                          { 
                            value: "primary", 
                            label: "Primary", 
                            icon: BookOpen, 
                            desc: "Years 1-6",
                            details: "Ages 5-11 • KS1 & KS2"
                          },
                          { 
                            value: "secondary", 
                            label: "Secondary", 
                            icon: GraduationCap, 
                            desc: "Years 7-13",
                            details: "Ages 11-18 • KS3, GCSE & A-Level"
                          },
                        ].map(({ value, label, icon: Icon, desc, details }) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, level: value, subject: "" }))}
                            className={`p-8 rounded-2xl border-2 transition-all text-center group hover:scale-105 ${
                              formData.level === value
                                ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-xl shadow-primary/20"
                                : "border-slate-200 hover:border-primary/50 hover:shadow-lg"
                            }`}
                          >
                            <Icon className={`w-12 h-12 mx-auto mb-4 transition-colors ${
                              formData.level === value ? "text-primary" : "text-slate-400 group-hover:text-primary"
                            }`} />
                            <h3 className="font-bold text-2xl mb-2">{label}</h3>
                            <p className="text-lg font-semibold text-primary mb-1">{desc}</p>
                            <p className="text-sm text-muted-foreground">{details}</p>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Choose Subject */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <h2 className="text-3xl font-bold mb-2">Choose Subject</h2>
                        <p className="text-muted-foreground">Select the subject you need help with</p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {(formData.level === "primary" ? subjects.primary : subjects.secondary).map((subject) => (
                          <button
                            key={subject}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, subject }))}
                            className={`p-6 rounded-xl border-2 transition-all font-bold text-center hover:scale-105 ${
                              formData.subject === subject
                                ? "border-primary bg-primary text-white shadow-lg shadow-primary/30"
                                : "border-slate-200 hover:border-primary/50 hover:shadow-md"
                            }`}
                          >
                            {subject}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Choose Group Type & Plan */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <h2 className="text-3xl font-bold mb-2">Choose Your Plan</h2>
                        <p className="text-muted-foreground">Select class type and payment plan</p>
                      </div>

                      {/* Group Type */}
                      <div>
                        <label className="text-sm font-semibold mb-3 block text-center">Class Type</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            { 
                              value: "group", 
                              label: "Group Classes", 
                              icon: Users,
                              desc: "Small groups (4-6 students)",
                              benefit: "Learn with peers"
                            },
                            { 
                              value: "one-to-one", 
                              label: "1-on-1 Tuition", 
                              icon: UserCircle,
                              desc: "Individual attention",
                              benefit: "Personalized learning"
                            },
                          ].map(({ value, label, icon: Icon, desc, benefit }) => (
                            <button
                              key={value}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, groupType: value, plan: "" }))}
                              className={`p-6 rounded-xl border-2 transition-all text-center group hover:scale-105 ${
                                formData.groupType === value
                                  ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg"
                                  : "border-slate-200 hover:border-primary/50"
                              }`}
                            >
                              <Icon className={`w-10 h-10 mx-auto mb-3 ${
                                formData.groupType === value ? "text-primary" : "text-slate-400 group-hover:text-primary"
                              }`} />
                              <h3 className="font-bold text-lg mb-1">{label}</h3>
                              <p className="text-sm text-muted-foreground mb-1">{desc}</p>
                              <p className="text-xs text-primary font-semibold">{benefit}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Plan Selection */}
                      {formData.groupType && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <label className="text-sm font-semibold mb-3 block text-center">Payment Plan</label>
                          <div className="space-y-3">
                            {[
                              { 
                                value: "pay-as-you-go", 
                                label: "Pay as you go", 
                                price: formData.groupType === "group" ? "£14/hour" : "£28/hour",
                                desc: "Flexible, no commitment"
                              },
                              { 
                                value: "weekly", 
                                label: "Weekly Plan", 
                                price: formData.groupType === "group" ? "£39 (3 sessions/week)" : "£78 (3 sessions/week)",
                                desc: "Regular weekly sessions"
                              },
                              { 
                                value: "monthly", 
                                label: "Monthly Plan", 
                                price: formData.groupType === "group" ? "£150/month" : "£300/month", 
                                recommended: true,
                                desc: "Best value with progress monitoring"
                              },
                            ].map(({ value, label, price, recommended, desc }) => (
                              <button
                                key={value}
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, plan: value }))}
                                className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-center justify-between hover:scale-[1.02] ${
                                  formData.plan === value
                                    ? "border-primary bg-gradient-to-r from-primary/10 to-primary/5 shadow-lg"
                                    : "border-slate-200 hover:border-primary/50"
                                }`}
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-bold text-lg">{label}</h3>
                                    {recommended && (
                                      <span className="bg-gradient-to-r from-primary to-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                                        Recommended
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-primary font-bold text-lg mb-1">{price}</p>
                                  <p className="text-xs text-muted-foreground">{desc}</p>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                  formData.plan === value ? "border-primary bg-primary" : "border-slate-300"
                                }`}>
                                  {formData.plan === value && (
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {/* Step 4: Personal Information */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <h2 className="text-3xl font-bold mb-2">Personal Information</h2>
                        <p className="text-muted-foreground">Tell us about yourself and the student</p>
                      </div>

                      <div className="space-y-5">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                          <h3 className="font-bold text-sm mb-3 text-blue-900">Parent/Guardian Details</h3>
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-semibold mb-2 block">Full Name *</label>
                              <Input
                                name="parentName"
                                value={formData.parentName}
                                onChange={handleInputChange}
                                placeholder="John Smith"
                                className="h-12 bg-white"
                                required
                              />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-semibold mb-2 block">Email Address *</label>
                                <Input
                                  name="parentEmail"
                                  type="email"
                                  value={formData.parentEmail}
                                  onChange={handleInputChange}
                                  placeholder="your@email.com"
                                  className="h-12 bg-white"
                                  required
                                />
                              </div>
                              <div>
                                <label className="text-sm font-semibold mb-2 block">Phone Number *</label>
                                <Input
                                  name="parentPhone"
                                  type="tel"
                                  value={formData.parentPhone}
                                  onChange={handleInputChange}
                                  placeholder="07XXX XXXXXX"
                                  className="h-12 bg-white"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                          <h3 className="font-bold text-sm mb-3 text-purple-900">Student Details</h3>
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-semibold mb-2 block">Student Name *</label>
                              <Input
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleInputChange}
                                placeholder="Sarah Smith"
                                className="h-12 bg-white"
                                required
                              />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-semibold mb-2 block">Student Age</label>
                                <Input
                                  name="studentAge"
                                  type="number"
                                  value={formData.studentAge}
                                  onChange={handleInputChange}
                                  placeholder="14"
                                  className="h-12 bg-white"
                                  min="5"
                                  max="18"
                                />
                              </div>
                              <div>
                                <label className="text-sm font-semibold mb-2 block">
                                  Year Group * 
                                  <span className="text-xs font-normal text-muted-foreground ml-1">(School year)</span>
                                </label>
                                <select
                                  name="yearGroup"
                                  value={formData.yearGroup}
                                  onChange={handleInputChange}
                                  className="w-full h-12 px-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-white"
                                  required
                                >
                                  <option value="">Select year</option>
                                  {Array.from({ length: 13 }, (_, i) => i + 1).map((year) => (
                                    <option key={year} value={`Year ${year}`}>Year {year}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Additional Details */}
                  {step === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="text-3xl font-bold mb-2">Additional Details</h2>
                        <p className="text-muted-foreground">Help us schedule your sessions</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-semibold mb-2 block">Preferred Days</label>
                          <Input
                            name="preferredDays"
                            value={formData.preferredDays}
                            onChange={handleInputChange}
                            placeholder="e.g. Monday, Wednesday, Friday"
                            className="h-12"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-semibold mb-2 block">Preferred Time</label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="w-full h-12 px-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                          >
                            <option value="">Select time</option>
                            <option value="morning">Morning (9 AM - 12 PM)</option>
                            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                            <option value="evening">Evening (5 PM - 8 PM)</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-sm font-semibold mb-2 block">Preferred Start Date</label>
                          <Input
                            name="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="h-12"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-semibold mb-2 block">Additional Comments</label>
                          <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleInputChange}
                            placeholder="Any special requirements or questions?"
                            className="w-full h-24 px-3 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={handleBack}
                      variant="outline"
                      className="flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                  )}
                  
                  {step < 5 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="ml-auto flex items-center gap-2"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Enrollment
                          <CheckCircle2 className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You for Enrolling!</h3>
              <p className="text-muted-foreground mb-4">
                We've received your enrollment request. Our team will contact you within 24 hours to confirm your sessions.
              </p>
              <p className="text-sm text-muted-foreground">
                Check your email for confirmation details.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
