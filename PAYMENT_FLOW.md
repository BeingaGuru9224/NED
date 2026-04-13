# Payment & Enrollment Flow Documentation

## Overview
This document describes the complete payment and enrollment flow for Nesture Education's online tuition platform.

## User Journey

### 1. Browse & Select Plan
- User visits `/fees` page
- Reviews available plans:
  - Primary & KS3 (£8/hour)
  - GCSE Years 9-11 (£8/hour)
  - A-Level (£10/hour)
  - 1-to-1 Tuition (£25/hour)
- Clicks "Get Started" on desired plan

### 2. Enrollment Process (`/enroll`)
The enrollment is divided into 4 steps with progress tracking:

#### Step 1: Student Information
- Student full name (required)
- Age (required)
- Year group (required, dropdown)
- Subjects of interest (optional)

#### Step 2: Parent/Guardian Information
- Parent full name (required)
- Email address (required, validated)
- Phone number (required)

#### Step 3: Learning Preferences
- Hours per week (1-6+, dropdown)
- Preferred start date (date picker, minimum today)
- Real-time monthly cost calculation displayed

#### Step 4: Payment Information
- Card number (test card: 4242 4242 4242 4242)
- Cardholder name
- Expiry date (MM/YY format)
- CVV (3 digits, password field)
- Secure payment badge displayed
- Loading state during processing

### 3. Payment Processing (Mock)
- 2-second simulated payment processing
- Generates unique payment ID (format: PAY-XXXXXXXXX)
- Stores enrollment data in localStorage
- Redirects to success page

### 4. Success Page (`/enrollment-success`)
- Animated success confirmation
- Displays complete enrollment details:
  - Student name
  - Parent name
  - Selected plan
  - Hours per week
  - Start date
  - Monthly fee
  - Payment ID
- Shows "What Happens Next" steps:
  1. Check email for confirmation
  2. Schedule first session (24-hour contact)
  3. Join Discord & Google Classroom
- Actions available:
  - Download receipt (JSON format)
  - Return to home
- Support contact information displayed

## Order Summary Sidebar
Displayed throughout enrollment process:
- Selected plan details
- Hourly rate
- Hours per week
- Monthly total calculation
- Included features checklist:
  - Live Zoom lessons
  - Google Classroom access
  - Discord community support
  - Progress tracking
  - Cancel anytime

## Technical Implementation

### Routes
```typescript
/enroll                 - Main enrollment page
/enrollment-success     - Success confirmation page
```

### Query Parameters
```
/enroll?plan=gcse       - Pre-select GCSE plan
/enroll?plan=primary-ks3 - Pre-select Primary plan
/enroll?plan=alevel     - Pre-select A-Level plan
/enroll?plan=one-to-one - Pre-select 1-to-1 plan
```

### Data Storage
Currently uses localStorage for demo purposes:
```javascript
localStorage.setItem("enrollment", JSON.stringify({
  studentName,
  studentAge,
  yearGroup,
  subjects,
  parentName,
  email,
  phone,
  hoursPerWeek,
  startDate,
  cardNumber, // Last 4 digits only in production
  plan,
  enrollmentDate,
  status: "active",
  paymentId
}));
```

### Form Validation
- Step-by-step validation before proceeding
- Email format validation
- Required field checks
- Toast notifications for errors
- Minimum date validation for start date

### Payment Security (Mock)
Current implementation:
- Test card number: 4242 4242 4242 4242
- Any future expiry date
- Any 3-digit CVV
- 2-second processing simulation

## Production Considerations

### Backend Integration Required
1. **Payment Gateway Integration**
   - Stripe, PayPal, or similar
   - PCI DSS compliance
   - Secure token handling
   - Webhook for payment confirmation

2. **Database Schema**
   ```sql
   enrollments:
     - id (UUID)
     - student_name
     - student_age
     - year_group
     - subjects
     - parent_name
     - email
     - phone
     - hours_per_week
     - start_date
     - plan_id
     - payment_id
     - status (pending, active, cancelled)
     - created_at
     - updated_at
   
   payments:
     - id (UUID)
     - enrollment_id (FK)
     - amount
     - currency (GBP)
     - status (pending, completed, failed, refunded)
     - payment_method
     - transaction_id
     - created_at
   ```

3. **Email Notifications**
   - Confirmation email to parent
   - Receipt with payment details
   - Welcome email with next steps
   - Admin notification for new enrollment

4. **Security Enhancements**
   - HTTPS only
   - CSRF protection
   - Rate limiting
   - Input sanitization
   - Secure session management
   - Never store full card details

5. **User Dashboard**
   - View enrollment details
   - Manage payment methods
   - Update preferences
   - View upcoming sessions
   - Access learning materials
   - Track progress

## Testing

### Test Cards (Stripe format)
```
Success: 4242 4242 4242 4242
Decline: 4000 0000 0000 0002
Insufficient funds: 4000 0000 0000 9995
```

### Test Scenarios
1. Complete enrollment with all fields
2. Validation errors at each step
3. Back navigation between steps
4. Plan selection via URL parameter
5. Payment processing simulation
6. Success page data display
7. Receipt download

## Future Enhancements
1. Multiple payment methods (card, bank transfer, PayPal)
2. Subscription management
3. Automatic recurring billing
4. Discount codes/vouchers
5. Referral program
6. Family/sibling discounts
7. Payment history
8. Invoice generation
9. Refund processing
10. Trial period option

## Support
For payment-related queries:
- Phone: 0203 305 7998
- Email: hello@nestureeducation.com
- WhatsApp: +44 203 305 7998
