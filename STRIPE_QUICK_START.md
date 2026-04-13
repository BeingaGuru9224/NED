# Stripe Integration - Quick Start

## What You Need

### 1. Stripe Account
- Sign up at https://stripe.com
- Free to create
- No monthly fees
- Only pay per transaction (1.5% + 20p in UK)

### 2. Backend Server
You MUST have a backend because:
- Secret keys cannot be exposed in frontend
- Payment processing must be server-side
- Webhooks need a server endpoint

**Options:**
- Node.js/Express server
- Serverless functions (Vercel/Netlify)
- Supabase Edge Functions
- Firebase Cloud Functions

### 3. What You'll Get from Stripe

After signing up:
```
Test Keys (for development):
- Publishable Key: pk_test_xxxxx (safe for frontend)
- Secret Key: sk_test_xxxxx (NEVER expose this!)

Live Keys (for production):
- Publishable Key: pk_live_xxxxx
- Secret Key: sk_live_xxxxx
```

## Minimum Implementation Steps

### Step 1: Install Packages

```bash
# Frontend
npm install @stripe/stripe-js @stripe/react-stripe-js

# Backend
npm install stripe express cors
```

### Step 2: Create Backend Endpoint

**File: `server.js`** (simplest version)

```javascript
const express = require('express');
const stripe = require('stripe')('sk_test_YOUR_SECRET_KEY');
const app = express();

app.use(express.json());

app.post('/create-payment', async (req, res) => {
  const { amount } = req.body;
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Convert to pence
    currency: 'gbp',
  });
  
  res.json({ clientSecret: paymentIntent.client_secret });
});

app.listen(3001);
```

### Step 3: Update Frontend

Replace the mock payment in `Enroll.tsx` with Stripe Elements.

### Step 4: Test

Use test card: `4242 4242 4242 4242`

## Cost Example

For £64/month subscription:
- Stripe fee: £1.16 (1.5% + 20p)
- You receive: £62.84

## Do You Need This Now?

**Use Mock Payment If:**
- Still building/testing the website
- Not ready to handle real money
- Want to show investors/stakeholders first
- Need to test user flow

**Use Real Stripe If:**
- Ready to accept real payments
- Have backend infrastructure
- Completed business verification
- Ready to handle customer support

## Recommended Approach

1. **Phase 1** (Current): Use mock payment to test everything
2. **Phase 2**: Set up Stripe account and get verified
3. **Phase 3**: Build backend API
4. **Phase 4**: Integrate Stripe on frontend
5. **Phase 5**: Test thoroughly with test cards
6. **Phase 6**: Go live with real payments

## Questions?

**Q: Can I use Stripe without a backend?**
A: No, you need a backend for security. Secret keys must never be in frontend code.

**Q: How long does Stripe verification take?**
A: Usually 1-2 business days for UK businesses.

**Q: What if I don't have a backend developer?**
A: Options:
- Use Vercel/Netlify serverless functions (easier)
- Hire a developer for 1-2 days
- Use a payment platform like Gumroad (simpler but higher fees)

**Q: Can I start with test mode?**
A: Yes! Test mode is perfect for development. Switch to live when ready.

**Q: Do I need PCI compliance?**
A: No! Stripe handles all card data. You never touch sensitive information.

## Next Steps

1. Read full guide: `STRIPE_INTEGRATION_GUIDE.md`
2. Create Stripe account
3. Decide on backend approach
4. Start with test mode
5. Test thoroughly
6. Go live when ready

## Support

- Stripe Docs: https://stripe.com/docs
- Stripe Support: https://support.stripe.com
- Test Cards: https://stripe.com/docs/testing
