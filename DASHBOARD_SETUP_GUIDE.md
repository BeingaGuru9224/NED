# Dashboard Setup Guide

## Overview
The dashboard displays all enrollment data from Google Sheets in a beautiful, filterable interface.

## Current Status
✅ Dashboard page created at `/dashboard`
✅ Beautiful UI with stats, filters, and search
✅ Export to CSV functionality
✅ Mock data for testing

## How to Connect to Google Sheets

### Step 1: Create a Fetch Webhook in Make.com

1. Go to Make.com and create a **NEW scenario**
2. Add **"Webhooks" → "Custom webhook"** as the first module
3. Click "Create a webhook" and name it: `Fetch Enrollments`
4. Copy the webhook URL (e.g., `https://hook.eu2.make.com/XXXXX`)

### Step 2: Add Google Sheets Module

1. After the webhook, add **"Google Sheets" → "Search rows"**
2. Select your spreadsheet and sheet
3. Configure:
   - **Search method**: "Search by all rows"
   - **Maximum number of returned rows**: 1000 (or your preferred limit)
   - **Sort order**: By first column (submission date), descending

### Step 3: Format the Response

1. After Google Sheets, add **"Tools" → "Set multiple variables"**
2. Map the data to match this structure:

```json
[
  {
    "submittedAt": "{{1.submittedAt}}",
    "level": "{{1.level}}",
    "subject": "{{1.subject}}",
    "groupType": "{{1.groupType}}",
    "plan": "{{1.plan}}",
    "pricing": "{{1.pricing}}",
    "parentName": "{{1.parentName}}",
    "parentEmail": "{{1.parentEmail}}",
    "parentPhone": "{{1.parentPhone}}",
    "studentName": "{{1.studentName}}",
    "studentAge": "{{1.studentAge}}",
    "yearGroup": "{{1.yearGroup}}",
    "preferredDays": "{{1.preferredDays}}",
    "preferredTime": "{{1.preferredTime}}",
    "startDate": "{{1.startDate}}",
    "comments": "{{1.comments}}",
    "source": "{{1.source}}"
  }
]
```

3. Add **"Webhooks" → "Webhook response"** module
4. Set **Status**: 200
5. Set **Body**: The array from step 2
6. Set **Headers**: 
   - `Content-Type`: `application/json`
   - `Access-Control-Allow-Origin`: `*`

### Step 4: Update Dashboard Code

1. Open `src/pages/Dashboard.tsx`
2. Find line 42:
   ```typescript
   const FETCH_WEBHOOK_URL = "YOUR_FETCH_WEBHOOK_URL_HERE";
   ```
3. Replace with your webhook URL:
   ```typescript
   const FETCH_WEBHOOK_URL = "https://hook.eu2.make.com/YOUR_ACTUAL_URL";
   ```
4. Uncomment lines 73-75:
   ```typescript
   const response = await fetch(FETCH_WEBHOOK_URL);
   const data = await response.json();
   setEnrollments(data);
   ```
5. Comment out or remove the mock data (lines 77-78)

### Step 5: Test

1. Turn ON your Make.com scenario
2. Go to `http://localhost:8080/dashboard`
3. Click the "Refresh" button
4. Your enrollment data should appear!

## Dashboard Features

### Stats Cards
- Total Enrollments
- Primary Students
- Secondary Students
- Group Classes
- 1-on-1 Sessions

### Filters
- **Search**: By name, email, or subject
- **Level Filter**: Primary/Secondary
- **Plan Filter**: Pay as you go/Weekly/Monthly

### Export
- Click "Export" button to download CSV
- Includes all filtered data

### Enrollment Cards
Each card shows:
- Student name, age, year group
- Subject and level badges
- Plan and pricing
- Preferred days and time
- Parent contact information
- Comments
- Submission timestamp

## Security Note

⚠️ **IMPORTANT**: The dashboard currently has no authentication. Anyone with the URL can view the data.

### To Add Authentication (Recommended):

1. Add a simple password protection:
   ```typescript
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [password, setPassword] = useState("");
   
   const handleLogin = () => {
     if (password === "YOUR_SECURE_PASSWORD") {
       setIsAuthenticated(true);
     }
   };
   ```

2. Or use a proper authentication system like:
   - Supabase Auth
   - Firebase Auth
   - Auth0

## Troubleshooting

### No data showing?
- Check browser console (F12) for errors
- Verify webhook URL is correct
- Make sure Make.com scenario is turned ON
- Check that Google Sheets has data

### CORS errors?
- Make sure you added `Access-Control-Allow-Origin: *` header in Make.com webhook response

### Data format issues?
- Verify the field names match exactly
- Check that dates are in ISO format
- Ensure all fields are strings

## Next Steps

1. Set up the fetch webhook in Make.com
2. Update the webhook URL in Dashboard.tsx
3. Add authentication (recommended)
4. Customize the dashboard design if needed
5. Add more features:
   - Status tracking (pending/confirmed/completed)
   - Email notifications
   - Calendar integration
   - Payment tracking
