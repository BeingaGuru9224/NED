import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, CreditCard, Lock, ArrowRight, ArrowLeft, User, Mail, Phone, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const plans = [
  { id: "primary-ks3", name: "Primary & KS3", price: 8, period: "per hour", description: "Years 1-9" },
  { id: "gcse", name: "GCSE (Years 9-11)", price: 8, period: "per hour", description: "Foundation & Higher" },
  { id: "alevel", name: "A-Level", price: 10, period: "per hour", description: "Years 12-13" },
  { id: "one-to-one", name: "1-to-1 Tuition", price: 25, period: "per hour", description: "All Levels" },
];

const Enroll = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const planId = searchParams.get("plan") || "gcse";
  const selectedPlan = plans.find(p => p.id === planId) || plans[1];

  const [formData, setFormData] = useState({
    // Student Info
    studentName: "",
    studentAge: "",
    yearGroup: "",
    subjects: "",
    
    // Parent Info
    parentName: "",
    email: "",
    phone: "",
    
    // Payment Info
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    
    // Preferences
    hoursPerWeek: "2",
    startDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep1 = () => {
    if (!formData.studentName || !formData.studentAge || !formData.yearGroup) {
      toast({ title: "Missing Information", description: "Please fill in all student details", variant: "destructive" });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.parentName || !formData.email || !formData.phone) {
      toast({ title: "Missing Information", description: "Please fill in all parent/guardian details", variant: "destructive" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address", variant: "destructive" });
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (!formData.hoursPerWeek || !formData.startDate) {
      toast({ title: "Missing Information", description: "Please select hours per week and start date", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    setStep(step + 1);
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv) {
      toast({ title: "Missing Payment Info", description: "Please fill in all payment details", variant: "destructive" });
      return;
    }

    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      // Store enrollment data in localStorage (in production, this would be sent to backend)
      const enrollmentData = {
        ...formData,
        plan: selectedPlan,
        enrollmentDate: new Date().toISOString(),
        status: "active",
        paymentId: `PAY-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      };
      
      localStorage.setItem("enrollment", JSON.stringify(enrollmentData));
      
      setLoading(false);
      navigate("/enrollment-success");
    }, 2000);
  };

  const totalMonthly = selectedPlan.price * parseInt(formData.hoursPerWeek || "2") * 4;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Enroll in {selectedPlan.name}
            </h1>
            <p className="text-muted-foreground text-lg">Complete your enrollment in 4 simple steps</p>
          </motion.div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[
                { num: 1, label: "Student Info" },
                { num: 2, label: "Parent Info" },
                { num: 3, label: "Preferences" },
                { num: 4, label: "Payment" },
              ].map(({ num, label }) => (
                <div key={num} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                        step >= num
                          ? "bg-primary text-white"
                          : "bg-white border-2 border-slate-300 text-slate-400"
                      }`}
                    >
                      {step > num ? <CheckCircle className="h-5 w-5" /> : num}
                    </div>
                    <span className="text-xs mt-2 font-medium text-muted-foreground hidden sm:block">{label}</span>
                  </div>
                  {num < 4 && (
                    <div
                      className={`h-1 flex-1 mx-2 transition-all ${
                        step > num ? "bg-primary" : "bg-slate-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Step 1: Student Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Student Information</h2>
                      <p className="text-muted-foreground text-sm">Tell us about the student</p>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">Student Full Name *</label>
                      <Input
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Johnson"
                        className="h-12"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">Age *</label>
                        <Input
                          name="studentAge"
                          type="number"
                          value={formData.studentAge}
                          onChange={handleInputChange}
                          placeholder="e.g. 14"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">Year Group *</label>
                        <select
                          name="yearGroup"
                          value={formData.yearGroup}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Select year group</option>
                          <option value="Year 1">Year 1</option>
                          <option value="Year 2">Year 2</option>
                          <option value="Year 3">Year 3</option>
                          <option value="Year 4">Year 4</option>
                          <option value="Year 5">Year 5</option>
                          <option value="Year 6">Year 6</option>
                          <option value="Year 7">Year 7</option>
                          <option value="Year 8">Year 8</option>
                          <option value="Year 9">Year 9</option>
                          <option value="Year 10">Year 10</option>
                          <option value="Year 11">Year 11</option>
                          <option value="Year 12">Year 12</option>
                          <option value="Year 13">Year 13</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">Subjects of Interest</label>
                      <Input
                        name="subjects"
                        value={formData.subjects}
                        onChange={handleInputChange}
                        placeholder="e.g. Maths, English, Science"
                        className="h-12"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Parent Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Parent/Guardian Information</h2>
                      <p className="text-muted-foreground text-sm">Your contact details</p>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">Full Name *</label>
                      <Input
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. John Johnson"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">Phone Number *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="07XXX XXXXXX"
                        className="h-12"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Preferences */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Learning Preferences</h2>
                      <p className="text-muted-foreground text-sm">Customize your learning schedule</p>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">Hours Per Week *</label>
                      <select
                        name="hoursPerWeek"
                        value={formData.hoursPerWeek}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="1">1 hour per week</option>
                        <option value="2">2 hours per week</option>
                        <option value="3">3 hours per week</option>
                        <option value="4">4 hours per week</option>
                        <option value="5">5 hours per week</option>
                        <option value="6">6+ hours per week</option>
                      </select>
                      <p className="text-xs text-muted-foreground mt-2">
                        Estimated monthly: £{totalMonthly} ({formData.hoursPerWeek} hours × 4 weeks × £{selectedPlan.price}/hour)
                      </p>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">Preferred Start Date *</label>
                      <Input
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="h-12"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Payment */}
                {step === 4 && (
                  <form onSubmit={handlePayment} className="space-y-6">
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Payment Information</h2>
                      <p className="text-muted-foreground text-sm">Secure payment processing</p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                      <Lock className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900">Secure Payment</p>
                        <p className="text-xs text-blue-700">Your payment information is encrypted and secure</p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">Card Number *</label>
                      <Input
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                        className="h-12"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Use test card: 4242 4242 4242 4242</p>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">Cardholder Name *</label>
                      <Input
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="Name on card"
                        className="h-12"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">Expiry Date *</label>
                        <Input
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">CVV *</label>
                        <Input
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          maxLength={3}
                          type="password"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-heading font-bold text-base rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          <CreditCard className="h-5 w-5" />
                          Complete Payment - £{totalMonthly}/month
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Navigation Buttons */}
                {step < 4 && (
                  <div className="flex gap-4 mt-8">
                    {step > 1 && (
                      <button
                        onClick={() => setStep(step - 1)}
                        className="flex-1 h-12 bg-slate-100 hover:bg-slate-200 text-foreground font-heading font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </button>
                    )}
                    <button
                      onClick={handleNext}
                      className="flex-1 h-12 bg-primary hover:bg-primary/90 text-white font-heading font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-lg sticky top-24"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="pb-4 border-b border-slate-200">
                    <p className="text-sm text-muted-foreground mb-1">Selected Plan</p>
                    <p className="font-heading font-bold text-foreground">{selectedPlan.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedPlan.description}</p>
                  </div>

                  <div className="pb-4 border-b border-slate-200">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Hourly Rate</span>
                      <span className="font-semibold text-foreground">£{selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Hours per Week</span>
                      <span className="font-semibold text-foreground">{formData.hoursPerWeek || "2"}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-heading font-bold text-foreground">Monthly Total</span>
                      <span className="font-heading text-2xl font-extrabold text-primary">£{totalMonthly}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Billed monthly, cancel anytime</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Live Zoom lessons</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Google Classroom access</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Discord community support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Progress tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Cancel anytime</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
