const Terms = () => (
  <div className="min-h-screen">
    <section className="hero-section py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-4 text-white">Terms & Conditions</h1>
        <p className="text-white/85 max-w-lg mx-auto text-lg">Last updated: 30 March 2026</p>
      </div>
    </section>
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground space-y-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">1. Overview</h2>
            <p>These Terms and Conditions govern your use of Nesture Education's website and tuition services. By enrolling a student or using our services, you agree to be bound by these terms.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">2. Enrolment & Registration</h2>
            <p>To enrol a student, a parent or guardian must complete our registration process and provide accurate information including the student's name, age, year group, and contact details. Enrolment is subject to availability and is confirmed upon receipt of the first payment.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">3. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fees are charged monthly in advance and are due on the first of each month</li>
              <li>All prices are listed in GBP and include VAT where applicable</li>
              <li>Payment can be made via bank transfer or card payment</li>
              <li>Late payments may result in suspension of services until the account is settled</li>
              <li>We reserve the right to adjust fees with 30 days' written notice</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">4. Cancellation & Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We offer a 14-day money-back guarantee for new enrolments</li>
              <li>After the initial 14-day period, one month's written notice is required to cancel</li>
              <li>Refunds for individual missed sessions are not provided unless cancelled with 24 hours' notice</li>
              <li>Sessions cancelled by Nesture Education will be rescheduled or credited</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">5. Attendance & Missed Sessions</h2>
            <p>Students are expected to attend all scheduled sessions. If a student cannot attend, parents must notify us at least 24 hours in advance. Sessions missed without notice cannot be refunded or rescheduled. We may offer catch-up resources on Google Classroom for missed sessions.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">6. Student Conduct</h2>
            <p>Students are expected to behave respectfully towards tutors and fellow students during online sessions. Disruptive behaviour may result in removal from a session. Repeated incidents may lead to suspension or termination of enrolment without refund.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">7. Safeguarding</h2>
            <p>All Nesture Education tutors are DBS-checked and trained in safeguarding. We follow UK safeguarding guidelines and have a designated safeguarding lead. Any concerns about a child's welfare will be handled in accordance with local authority protocols.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">8. Intellectual Property</h2>
            <p>All teaching materials, worksheets, lesson plans, and content provided by Nesture Education remain our intellectual property. Materials may not be reproduced, distributed, or shared without written permission.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">9. Limitation of Liability</h2>
            <p>While we strive to deliver the highest quality tuition, we cannot guarantee specific exam results or academic outcomes. Our services supplement school education and are not a replacement for it. We are not liable for any indirect or consequential losses arising from the use of our services.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">10. Contact</h2>
            <p>For questions about these terms, please contact us at:</p>
            <p className="mt-2"><strong className="text-foreground">Email:</strong> hello@nestureeducation.com<br /><strong className="text-foreground">Phone:</strong> 0203 305 7998</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Terms;
