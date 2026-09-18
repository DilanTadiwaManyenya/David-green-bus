# Deployment Guide

## Quick Deploy to Vercel

### Step 1: Build
```bash
npm run build
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "build: prepare for production deployment"
git push origin main
```

### Step 3: Deploy on Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Set Project Name: `david-green-bus`
4. Add Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Click "Deploy"

Your site will be live at `https://your-site.vercel.app`

## Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., davidgreenbus.co.za)
3. Update DNS records as instructed

## Monitor Performance

- Vercel Analytics
- Sentry for error tracking
- Google Analytics (optional)

## Security Checklist

- [ ] Change admin password in `AuthContext.jsx`
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Setup CORS in Supabase
- [ ] Configure Row Level Security policies
- [ ] Monitor Supabase usage

## Support

Contact: Aubaub36@gmail.com