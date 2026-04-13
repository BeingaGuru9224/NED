import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Download, Calendar, Mail, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import jsPDF from "jspdf";

const EnrollmentSuccess = () => {
  const navigate = useNavigate();
  const [enrollmentData, setEnrollmentData] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("enrollment");
    if (!data) {
      navigate("/fees");
      return;
    }
    setEnrollmentData(JSON.parse(data));
  }, [navigate]);

  const generatePDF = () => {
    if (!enrollmentData) return;

    const { plan, studentName, parentName, email, phone, hoursPerWeek, startDate, paymentId, enrollmentDate } = enrollmentData;
    const totalMonthly = plan.price * parseInt(hoursPerWeek) * 4;

    const doc = new jsPDF();
    
    // Set colors
    const primaryColor = [21, 85, 224]; // #1555E0
    const textColor = [51, 51, 51];
    const lightGray = [156, 163, 175];

    // Header with logo area
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 40, 'F');
    
    // Company name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Nesture Education', 20, 20);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Online Tuition Excellence', 20, 28);

    // Receipt title
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('ENROLLMENT RECEIPT', 20, 55);

    // Payment ID and Date
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text(`Payment ID: ${paymentId}`, 20, 63);
    doc.text(`Date: ${new Date(enrollmentDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`, 20, 69);

    // Divider line
    doc.setDrawColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.line(20, 75, 190, 75);

    // Student Information Section
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('STUDENT INFORMATION', 20, 85);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    let yPos = 93;
    
    doc.setFont('helvetica', 'bold');
    doc.text('Student Name:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(studentName, 70, yPos);
    
    yPos += 7;
    doc.setFont('helvetica', 'bold');
    doc.text('Year Group:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(enrollmentData.yearGroup, 70, yPos);

    // Parent Information Section
    yPos += 15;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PARENT/GUARDIAN INFORMATION', 20, yPos);

    yPos += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Name:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(parentName, 70, yPos);
    
    yPos += 7;
    doc.setFont('helvetica', 'bold');
    doc.text('Email:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(email, 70, yPos);
    
    yPos += 7;
    doc.setFont('helvetica', 'bold');
    doc.text('Phone:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(phone, 70, yPos);

    // Enrollment Details Section
    yPos += 15;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('ENROLLMENT DETAILS', 20, yPos);

    yPos += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Selected Plan:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(plan.name, 70, yPos);
    
    yPos += 7;
    doc.setFont('helvetica', 'bold');
    doc.text('Hourly Rate:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(`£${plan.price} per hour`, 70, yPos);
    
    yPos += 7;
    doc.setFont('helvetica', 'bold');
    doc.text('Hours per Week:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(`${hoursPerWeek} hours`, 70, yPos);
    
    yPos += 7;
    doc.setFont('helvetica', 'bold');
    doc.text('Start Date:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(new Date(startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }), 70, yPos);

    // Payment Summary Box
    yPos += 15;
    doc.setFillColor(245, 247, 250);
    doc.rect(20, yPos - 5, 170, 25, 'F');
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text('MONTHLY PAYMENT', 25, yPos + 3);
    
    doc.setFontSize(18);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`£${totalMonthly}`, 25, yPos + 13);
    
    doc.setFontSize(9);
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text(`(${hoursPerWeek} hours × 4 weeks × £${plan.price}/hour)`, 25, yPos + 19);

    // What's Included Section
    yPos += 35;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text("WHAT'S INCLUDED", 20, yPos);

    yPos += 8;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const included = [
      '✓ Live Zoom lessons with expert tutors',
      '✓ Google Classroom access with resources',
      '✓ Discord community support 24/7',
      '✓ Weekly progress tracking and reports',
      '✓ Homework support and marking',
      '✓ Cancel anytime, no long-term contract'
    ];

    included.forEach((item) => {
      doc.text(item, 25, yPos);
      yPos += 6;
    });

    // Footer
    yPos = 270;
    doc.setDrawColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.line(20, yPos, 190, yPos);
    
    yPos += 7;
    doc.setFontSize(9);
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text('Nesture Education | Online Tuition Excellence', 20, yPos);
    doc.text('📞 0203 305 7998 | ✉ hello@nestureeducation.com', 20, yPos + 5);
    doc.text('Thank you for choosing Nesture Education!', 20, yPos + 10);

    // Save the PDF
    doc.save(`Nesture-Receipt-${paymentId}.pdf`);
  };

  if (!enrollmentData) return null;

  const { plan, studentName, parentName, email, hoursPerWeek, startDate, paymentId } = enrollmentData;
  const totalMonthly = plan.price * parseInt(hoursPerWeek) * 4;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Success Animation */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.div
              className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="h-12 w-12 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
                Enrollment Successful! 🎉
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                Welcome to Nesture Education, {studentName}!
              </p>
              <p className="text-muted-foreground">
                Your learning journey starts here
              </p>
            </motion.div>
          </motion.div>

          {/* Enrollment Details Card */}
          <motion.div
            className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Enrollment Details</h2>
                <p className="text-sm text-muted-foreground">Payment ID: {paymentId}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Student Name</p>
                <p className="font-semibold text-foreground">{studentName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Parent/Guardian</p>
                <p className="font-semibold text-foreground">{parentName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Selected Plan</p>
                <p className="font-semibold text-foreground">{plan.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Hours per Week</p>
                <p className="font-semibold text-foreground">{hoursPerWeek} hours</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Start Date</p>
                <p className="font-semibold text-foreground">{new Date(startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Monthly Fee</p>
                <p className="font-heading text-2xl font-extrabold text-primary">£{totalMonthly}</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                <strong>Confirmation email sent to:</strong> {email}
              </p>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What Happens Next?</h2>
            
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Check Your Email",
                  desc: "We've sent a confirmation email with your enrollment details and next steps.",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Calendar,
                  title: "Schedule Your First Session",
                  desc: "Our team will contact you within 24 hours to schedule your first lesson.",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: MessageCircle,
                  title: "Join Our Community",
                  desc: "You'll receive an invite to our Discord server and Google Classroom.",
                  color: "from-emerald-500 to-emerald-600",
                },
              ].map(({ icon: Icon, title, desc, color }, i) => (
                <motion.div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-xl border-2 border-slate-200 hover:border-primary hover:shadow-md transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-md`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-base font-bold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={generatePDF}
                className="w-full h-12 bg-slate-100 hover:bg-slate-200 text-foreground font-heading font-bold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download PDF Receipt
              </button>
            </motion.div>
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/"
                className="block w-full h-12 bg-primary hover:bg-primary/90 text-white font-heading font-bold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Support Info */}
          <motion.div
            className="text-center mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-sm text-muted-foreground mb-2">
              Questions? We're here to help!
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <a href="tel:02033057998" className="text-primary hover:underline font-semibold">
                📞 0203 305 7998
              </a>
              <a href="mailto:hello@nestureeducation.com" className="text-primary hover:underline font-semibold">
                ✉️ Email Us
              </a>
              <a href="https://wa.me/442033057998" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSuccess;
