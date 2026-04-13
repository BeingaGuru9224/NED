const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <section className="hero-section py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-4 text-white">Privacy Policy</h1>
        <p className="text-white/85 max-w-lg mx-auto text-lg">Last updated: 30 March 2026</p>
      </div>
    </section>
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground space-y-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p>Nesture Education ("we", "our", "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and share your personal data when you use our website, services, and tuition programmes.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p>We may collect and process the following data:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong className="text-foreground">Personal identification:</strong> Name, email address, phone number, postal address</li>
              <li><strong className="text-foreground">Student information:</strong> Age, year group, school name, subjects of interest</li>
              <li><strong className="text-foreground">Payment information:</strong> Billing details processed securely through our payment provider</li>
              <li><strong className="text-foreground">Usage data:</strong> How you interact with our website, pages visited, time spent</li>
              <li><strong className="text-foreground">Communications:</strong> Records of emails, WhatsApp messages, and form submissions</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and manage tuition services for your child</li>
              <li>To communicate about lessons, progress reports, and scheduling</li>
              <li>To process payments and manage your account</li>
              <li>To send you newsletters and educational content (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share data with trusted third parties who assist us in operating our services, including payment processors, email service providers, and Google Workspace (for Google Classroom). All third parties are required to maintain the confidentiality and security of your data.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">5. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes encrypted connections, secure servers, and restricted access controls.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">7. Cookies</h2>
            <p>Our website uses essential cookies to ensure functionality and analytics cookies to help us understand how visitors use our site. You can control cookie preferences through your browser settings.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:</p>
            <p className="mt-2"><strong className="text-foreground">Email:</strong> hello@nestureeducation.com<br /><strong className="text-foreground">Phone:</strong> 0203 305 7998<br /><strong className="text-foreground">Address:</strong> Newbury Park, Ilford, East London, IG2</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PrivacyPolicy;
