# Environment Variables Setup

Copy these variables to your `.env.local` file (for local development) and Vercel Dashboard (for production).

## Required Variables

```env
# Resend Email API (Required for sending roadmap PDFs)
RESEND_API_KEY=re_your_resend_api_key_here

# Supabase Configuration (Required for lead storage)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Site URL (for email links)
NEXT_PUBLIC_URL=http://localhost:3000
# For production: NEXT_PUBLIC_URL=https://www.apexnovaconsulting.com
```

## Optional Variables

```env
# Google Site Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_google_verification_code

# Stripe Keys (for future payment features)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret
```

## How to Get These Values

### Resend API Key
1. Go to https://resend.com
2. Sign up / log in
3. Go to API Keys
4. Create new key
5. Copy the key (starts with `re_`)

### Supabase Credentials
1. Go to https://supabase.com
2. Create new project
3. Go to Project Settings → API
4. Copy:
   - Project URL (under "Project URL")
   - Anon key (under "Project API keys" → anon/public)

### For Vercel Production
1. Go to your Vercel project
2. Settings → Environment Variables
3. Add each variable above
4. Redeploy to apply changes

