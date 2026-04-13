# Stripe Integration Guide for Nesture Education

## Overview
This guide explains how to integrate Stripe payment processing into your enrollment system.

## Prerequisites

### 1. Create a Stripe Account
1. Go to https://stripe.com
2. Sign up for a free account
3. Complete business verification (required for live payments)
4. Get your API keys from the Dashboard

### 2. Required Information for Stripe Account
- Business name: Nesture Education
- Business type: Education/Tutoring Services
- Business address
- Bank account details (for payouts)
- Tax ID/VAT number (if applicable)
- Director/Owner information

## Implementation Steps

### Step 1: Install Stripe Dependencies

```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

For backend (Node.js/Express):
```bash
npm install stripe
```

### Step 2: Get Your API Keys

From Stripe Dashboard (https://dashboard.stripe.com/apikeys):

**Test Mode Keys** (for development):
- Publishable key: `pk_test_...`
- Secret key: `sk_test_...`

**Live Mode Keys** (for production):
- Publishable key: `pk_live_...`
- Secret key: `sk_live_...`

⚠️ **IMPORTANT**: Never expose secret keys in frontend code!

### Step 3: Environment Variables

Create `.env` file in your project root:

```env
# Frontend (Vite)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here

# Backend
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

Add to `.gitignore`:
```
.env
.env.local
.env.production
```

### Step 4: Backend API Setup

You'll need a backend server to handle payments securely. Here's what you need:

#### Option A: Node.js/Express Backend

**File: `server/index.js`**

```javascript
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Create Payment Intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency, metadata } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: currency || 'gbp',
      metadata: {
        studentName: metadata.studentName,
        parentEmail: metadata.parentEmail,
        plan: metadata.plan,
        hoursPerWeek: metadata.hoursPerWeek,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Subscription (for recurring payments)
app.post('/api/create-subscription', async (req, res) => {
  try {
    const { email, paymentMethodId, priceId, metadata } = req.body;

    // Create or retrieve customer
    let customer;
    const existingCustomers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: email,
        name: metadata.parentName,
        metadata: {
          studentName: metadata.studentName,
        },
      });
    }

    // Attach payment method to customer
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customer.id,
    });

    // Set as default payment method
    await stripe.customers.update(customer.id, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      expand: ['latest_invoice.payment_intent'],
      metadata: metadata,
    });

    res.json({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Webhook endpoint for Stripe events
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment succeeded:', paymentIntent.id);
      // Update database, send confirmation email
      break;

    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      console.log('Payment failed:', failedPayment.id);
      // Notify user, update database
      break;

    case 'customer.subscription.created':
      const subscription = event.data.object;
      console.log('Subscription created:', subscription.id);
      break;

    case 'customer.subscription.deleted':
      const deletedSub = event.data.object;
      console.log('Subscription cancelled:', deletedSub.id);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### Option B: Serverless Functions (Vercel/Netlify)

**File: `api/create-payment-intent.js`** (Vercel)

```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency, metadata } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: currency || 'gbp',
      metadata: metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

### Step 5: Frontend Integration

**File: `src/lib/stripe.ts`**

```typescript
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);
```

**File: `src/components/StripePaymentForm.tsx`**

```typescript
import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useToast } from '@/hooks/use-toast';

interface StripePaymentFormProps {
  amount: number;
  onSuccess: (paymentIntentId: string) => void;
}

export const StripePaymentForm = ({ amount, onSuccess }: StripePaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/enrollment-success`,
      },
      redirect: 'if_required',
    });

    if (error) {
      toast({
        title: 'Payment Failed',
        description: error.message,
        variant: 'destructive',
      });
      setLoading(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      onSuccess(paymentIntent.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-heading font-bold text-base rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : `Pay £${amount}`}
      </button>
    </form>
  );
};
```

**Update: `src/pages/Enroll.tsx`**

```typescript
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe';
import { StripePaymentForm } from '@/components/StripePaymentForm';

// In Step 4, replace the mock payment form with:

{step === 4 && (
  <div className="space-y-6">
    <div>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
        Payment Information
      </h2>
      <p className="text-muted-foreground text-sm">Secure payment processing</p>
    </div>

    <Elements
      stripe={stripePromise}
      options={{
        mode: 'payment',
        amount: totalMonthly * 100, // in cents
        currency: 'gbp',
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#1555E0',
          },
        },
      }}
    >
      <StripePaymentForm
        amount={totalMonthly}
        onSuccess={(paymentIntentId) => {
          // Store enrollment data
          const enrollmentData = {
            ...formData,
            plan: selectedPlan,
            enrollmentDate: new Date().toISOString(),
            status: 'active',
            paymentId: paymentIntentId,
          };
          
          localStorage.setItem('enrollment', JSON.stringify(enrollmentData));
          navigate('/enrollment-success');
        }}
      />
    </Elements>
  </div>
)}
```

### Step 6: Create Stripe Products & Prices

In Stripe Dashboard:

1. Go to **Products** → **Add Product**
2. Create products for each plan:

```
Product: Primary & KS3 Online Tuition
Price: £8/hour (or create recurring price: £64/month for 2 hours/week)
Billing: Recurring monthly

Product: GCSE Online Tuition
Price: £8/hour
Billing: Recurring monthly

Product: A-Level Online Tuition
Price: £10/hour
Billing: Recurring monthly

Product: 1-to-1 Tuition
Price: £25/hour
Billing: Recurring monthly
```

3. Copy the Price IDs (e.g., `price_1234567890`)

### Step 7: Set Up Webhooks

1. Go to **Developers** → **Webhooks** in Stripe Dashboard
2. Click **Add endpoint**
3. Enter your webhook URL: `https://yourdomain.com/api/webhook`
4. Select events to listen for:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the **Signing secret** to your `.env` file

### Step 8: Database Schema

You'll need a database to store enrollment data:

```sql
-- Users/Parents table
CREATE TABLE parents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  stripe_customer_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Students table
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID REFERENCES parents(id),
  name VARCHAR(255) NOT NULL,
  age INTEGER,
  year_group VARCHAR(50),
  subjects TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enrollments table
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id),
  parent_id UUID REFERENCES parents(id),
  plan_id VARCHAR(50) NOT NULL,
  hours_per_week INTEGER NOT NULL,
  start_date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  stripe_subscription_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Payments table
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id UUID REFERENCES enrollments(id),
  stripe_payment_intent_id VARCHAR(255) UNIQUE,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'GBP',
  status VARCHAR(50) NOT NULL,
  payment_method VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Testing

### Test Cards (Stripe provides these)

**Successful payments:**
- `4242 4242 4242 4242` - Visa
- `5555 5555 5555 4444` - Mastercard
- Any future expiry date (e.g., 12/34)
- Any 3-digit CVC

**Failed payments:**
- `4000 0000 0000 0002` - Card declined
- `4000 0000 0000 9995` - Insufficient funds
- `4000 0000 0000 0069` - Expired card

**3D Secure authentication:**
- `4000 0025 0000 3155` - Requires authentication

## Security Best Practices

1. **Never expose secret keys** in frontend code
2. **Use HTTPS** in production
3. **Validate webhook signatures** to prevent fraud
4. **Store minimal card data** (Stripe handles this)
5. **Implement rate limiting** on payment endpoints
6. **Log all payment attempts** for auditing
7. **Use environment variables** for all keys
8. **Enable Stripe Radar** for fraud detection
9. **Set up email notifications** for failed payments
10. **Implement proper error handling**

## Going Live Checklist

- [ ] Complete Stripe account verification
- [ ] Add business bank account
- [ ] Switch to live API keys
- [ ] Update webhook endpoints to production URL
- [ ] Test live payments with real card
- [ ] Set up email notifications
- [ ] Configure tax settings (if applicable)
- [ ] Enable Stripe Radar
- [ ] Set up customer portal for subscription management
- [ ] Implement refund policy
- [ ] Add terms and conditions
- [ ] Set up monitoring and alerts
- [ ] Test webhook handling in production
- [ ] Document payment flow for support team

## Costs

### Stripe Fees (UK)
- **Online payments**: 1.5% + 20p per transaction
- **European cards**: 2.5% + 20p per transaction
- **International cards**: 3.25% + 20p per transaction
- **No monthly fees** or setup costs

### Example Calculation
For a £64 monthly payment:
- Transaction fee: £64 × 1.5% + £0.20 = £1.16
- You receive: £62.84

## Support Resources

- **Stripe Documentation**: https://stripe.com/docs
- **Stripe Dashboard**: https://dashboard.stripe.com
- **API Reference**: https://stripe.com/docs/api
- **Testing Guide**: https://stripe.com/docs/testing
- **Webhooks Guide**: https://stripe.com/docs/webhooks
- **Support**: https://support.stripe.com

## Common Issues & Solutions

### Issue: "No such customer"
**Solution**: Ensure customer is created before creating subscription

### Issue: "Invalid API key"
**Solution**: Check you're using the correct key for test/live mode

### Issue: "Webhook signature verification failed"
**Solution**: Ensure webhook secret matches Stripe dashboard

### Issue: "Payment requires authentication"
**Solution**: Implement 3D Secure handling with `confirmPayment`

## Next Steps

1. Set up backend server (Express/Serverless)
2. Create Stripe account and get API keys
3. Install dependencies
4. Implement payment endpoint
5. Update frontend to use Stripe Elements
6. Test with test cards
7. Set up webhooks
8. Go live!

## Need Help?

Contact Stripe support or hire a developer experienced with:
- Stripe integration
- Payment processing
- PCI compliance
- Webhook handling
- Subscription management
