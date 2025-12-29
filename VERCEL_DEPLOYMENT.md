# 🚀 Vercel Deployment Guide

## ✅ Code Already Pushed to GitHub

Your updated code is now live at:
**Repository**: `apexnova-consulting/apexnovawebsite`
**Branch**: `main`
**Commit**: `1b24526` - Complete AI Governance rebuild

---

## 🚀 Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended for First Deploy)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Log in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find `apexnova-consulting/apexnovawebsite`
   - Click "Import"

3. **Configure Project**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Add Environment Variables** (Optional for now)
   ```
   RESEND_API_KEY=your_key_here           # Email service (optional)
   STRIPE_SECRET_KEY=sk_your_key         # Payments - Phase 2
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_your_key
   NEXT_PUBLIC_GA_ID=G-8SS5JWNLS6        # Already in .env
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Vercel will provide your production URL

---

### Option 2: Vercel CLI (Quick Deploy)

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Navigate to project
cd "/Users/mikenielson/Desktop/ApexNova Consulting Website"

# Deploy to production
vercel --prod

# Follow the prompts:
# - Link to existing project? Yes
# - Which scope? Select your account
# - Link to apexnova-consulting/apexnovawebsite? Yes
# - Override settings? No (use defaults)
```

---

## 🌐 Custom Domain Setup

### Connect apexnovaconsulting.com

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add domain: `apexnovaconsulting.com`
   - Add domain: `www.apexnovaconsulting.com`

2. **Update DNS Records** (at your domain registrar)
   
   **For Root Domain** (`apexnovaconsulting.com`):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For WWW** (`www.apexnovaconsulting.com`):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Verify SSL**
   - Vercel automatically provisions SSL certificate
   - Usually takes 1-5 minutes
   - Site will be HTTPS-ready

---

## 📊 Post-Deployment Checklist

### Immediate (5 minutes)
- [ ] Visit your production URL
- [ ] Test all pages load correctly
- [ ] Click through all navigation links
- [ ] Test AI Risk Scanner interaction
- [ ] Check mobile responsiveness
- [ ] Verify forms work (no actual emails will send without RESEND_API_KEY)

### Within 24 Hours
- [ ] Set up Google Analytics events
- [ ] Configure error monitoring (Sentry/LogRocket)
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Check Core Web Vitals in Vercel Analytics
- [ ] Review build logs for any warnings

### Before Marketing Launch
- [ ] Add real client testimonials
- [ ] Replace placeholder logos
- [ ] Update contact information
- [ ] Set up RESEND_API_KEY for email notifications
- [ ] Configure Stripe for certification payments
- [ ] Add privacy policy and terms pages
- [ ] Set up cookie consent banner
- [ ] Configure retargeting pixels (LinkedIn, Google)

---

## 🔧 Environment Variables for Production

Add these in Vercel Dashboard → Settings → Environment Variables:

### Essential (Phase 1)
```bash
# Already configured in code
NEXT_PUBLIC_GA_ID=G-8SS5JWNLS6
```

### Optional (Can add later)
```bash
# Email Service (for lead notifications)
RESEND_API_KEY=re_your_key_here

# Public URL (for email links)
NEXT_PUBLIC_URL=https://www.apexnovaconsulting.com
```

### Phase 2 (When ready for payments)
```bash
# Stripe Integration
STRIPE_SECRET_KEY=sk_live_your_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret

# Certification Product IDs
STRIPE_BASIC_PRICE_ID=price_basic_id
STRIPE_PRO_PRICE_ID=price_pro_id
STRIPE_ENTERPRISE_PRICE_ID=price_enterprise_id
```

---

## 🚨 Troubleshooting

### Build Fails in Vercel

**Error: "Module not found"**
```bash
# Solution: Clear node_modules and reinstall locally
rm -rf node_modules .next
npm install
npm run build

# If successful, commit and push again
git add package-lock.json
git commit -m "fix: Update dependencies"
git push origin main
```

**Error: "API route failed"**
- This is expected without RESEND_API_KEY
- API routes return success with warning message
- Add RESEND_API_KEY when ready for email notifications

### Site Loads Slowly

**Check Vercel Analytics**
- Dashboard → Analytics → Core Web Vitals
- Look for large images or slow components
- Consider lazy loading for below-fold content

### DNS Not Resolving

**Wait 24-48 hours** for DNS propagation
**Check DNS**: https://dnschecker.org
**Clear browser cache**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

---

## 📈 Monitoring & Analytics

### Vercel Analytics (Included)
- Real-time visitor stats
- Core Web Vitals tracking
- Geographic distribution
- Speed insights

### Google Analytics 4
- Already configured: `G-8SS5JWNLS6`
- Custom events to add:
  - `risk_scan_start`
  - `risk_scan_complete`
  - `audit_booking_click`
  - `certification_inquiry`
  - `industry_page_view`

### Recommended Tools
- **Error Monitoring**: Sentry (free tier)
- **Session Replay**: LogRocket or Microsoft Clarity
- **Uptime Monitoring**: Better Uptime (free tier)
- **Heat Maps**: Hotjar (free tier)

---

## 🔄 Auto-Deploy Setup

### Already Configured! ✅

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes locally
npm run dev

# Commit and push
git add .
git commit -m "feat: Add new feature"
git push origin main

# Vercel automatically:
# 1. Detects the push
# 2. Runs build
# 3. Deploys to production
# 4. Sends you notification
```

### Preview Deployments

Every git branch gets a preview URL:
```bash
# Create feature branch
git checkout -b feature/new-page

# Make changes and push
git push origin feature/new-page

# Vercel creates preview URL like:
# apexnovawebsite-abc123.vercel.app
```

---

## 📊 Expected Build Time

- **First Deploy**: 3-5 minutes
- **Subsequent Deploys**: 1-2 minutes
- **Preview Builds**: 1-2 minutes

---

## 🎯 Next Steps After Deployment

### Week 1: Validation
1. Share with trusted clients for feedback
2. Monitor Vercel Analytics for traffic
3. Test all conversion funnels
4. Fix any bugs discovered

### Week 2: Optimization
1. Set up error monitoring
2. Configure custom GA4 events
3. Add heat mapping tool
4. Optimize images if needed

### Week 3: Launch
1. Announce on LinkedIn
2. Email existing client list
3. Start Google Ads campaign
4. Begin content marketing

---

## 💡 Pro Tips

### Performance
- Vercel automatically optimizes images
- Uses CDN for global delivery
- Caches static assets
- Provides analytics out of the box

### Security
- SSL certificate automatic
- DDoS protection included
- Environment variables encrypted
- Preview deployments password-protected (optional)

### Scaling
- Auto-scales to handle traffic spikes
- No server management needed
- Pay-as-you-grow pricing
- 99.99% uptime SLA

---

## 📞 Support Resources

### Vercel
- **Documentation**: https://vercel.com/docs
- **Support**: https://vercel.com/support
- **Status**: https://vercel-status.com

### This Project
- **GitHub Repo**: https://github.com/apexnova-consulting/apexnovawebsite
- **Documentation**: See IMPLEMENTATION_SUMMARY.md
- **Quick Start**: See QUICK_START.md

---

## ✅ Deployment Summary

**Status**: ✅ Ready to Deploy  
**Method**: Vercel Dashboard or CLI  
**Time**: 3-5 minutes  
**Cost**: Free tier (covers most startups)  
**SSL**: Automatic  
**Domain**: Ready for custom domain  

---

## 🎉 You're All Set!

Your AI Governance platform is production-ready and pushed to GitHub. Just connect it to Vercel and you're live!

**Next Command**:
```bash
vercel --prod
```

Or use the Vercel Dashboard at: https://vercel.com/dashboard

---

*Deployment guide created: December 28, 2025*

