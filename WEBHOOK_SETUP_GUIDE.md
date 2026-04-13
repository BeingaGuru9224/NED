# Webhook Setup Guide for Contact Form

## Current Issue
You have an EMAIL webhook (`y3k6qxftk1rh6niep4cjfcecd67mvoep@hook.eu2.make.com`) but the contact form needs an HTTP webhook.

## How to Fix

### Step 1: Create HTTP Webhook in Make.com

1. Go to [Make.com](https://www.make.com)
2. Open your scenario (or create a new one)
3. **Delete the "Mailhook" module** if it exists
4. Click the **"+"** button to add a new module
5. Search for **"Webhooks"**
6. Select **"Webhooks" → "Custom webhook"**
7. Click **"Create a webhook"**
8. Give it a name: `Nesture Contact Form`
9. Click **"Save"**
10. **COPY THE WEBHOOK URL** - it will look like:
   ```
   https://hook.eu2.make.com/abc123def456ghi789jkl
   ```

### Step 2: Update the Code

1. Open `src/pages/Contact.tsx`
2. Find this line (around line 95):
   ```typescript
   const webhookUrl = "YOUR_WEBHOOK_URL_HERE"; // Replace this!
   ```
3. Replace with your actual webhook URL:
   ```typescript
   const webhookUrl = "https://hook.eu2.make.com/YOUR_ACTUAL_URL";
   ```

### Step 3: Set Up Google Sheets in Make.com

After the webhook module, add:

1. **Google Sheets** → **"Add a row"**
2. Select your spreadsheet
3. Select your sheet
4. Map the fields:
   - Column A: `submittedAt`
   - Column B: `level`
   - Column C: `subject`
   - Column D: `groupType`
   - Column E: `plan`
   - Column F: `pricing`
   - Column G: `parentName`
   - Column H: `parentEmail`
   - Column I: `parentPhone`
   - Column J: `studentName`
   - Column K: `studentAge`
   - Column L: `yearGroup`
   - Column M: `preferredDays`
   - Column N: `preferredTime`
   - Column O: `startDate`
   - Column P: `comments`
   - Column Q: `source`

### Step 4: Test

1. Fill out the contact form on your website
2. Submit it
3. Check the browser console (F12) - you'll see the data being sent
4. Check Make.com - the scenario should run
5. Check Google Sheets - a new row should appear

## Data Structure Being Sent

```json
{
  "submittedAt": "2024-01-15T10:30:00.000Z",
  "level": "Primary",
  "subject": "Maths",
  "groupType": "Group",
  "plan": "monthly",
  "pricing": "£150/month",
  "parentName": "John Smith",
  "parentEmail": "john@example.com",
  "parentPhone": "07123456789",
  "studentName": "Sarah Smith",
  "studentAge": "10",
  "yearGroup": "Year 5",
  "preferredDays": "Monday, Wednesday",
  "preferredTime": "afternoon",
  "startDate": "2024-02-01",
  "comments": "Looking forward to starting",
  "source": "Website Contact Form"
}
```

## Temporary Testing

Right now, the form will:
- ✅ Validate all fields
- ✅ Show success message
- ✅ Log data to browser console (press F12 to see)
- ❌ NOT send to webhook (because URL not configured)

Once you add the correct webhook URL, it will send the data automatically!

## Need Help?

If you're stuck, you can:
1. Check the browser console (F12) to see the data
2. Test the webhook URL directly using Postman or curl
3. Make sure the Make.com scenario is turned ON (toggle switch)
