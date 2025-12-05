# 🚀 Deployment Guide for CareerPath AI

This guide will help you deploy your CareerPath AI application to make it accessible via a URL from mobile devices and other devices.

## 📋 Prerequisites

1. **GitHub Account** - For version control
2. **Render Account** (Free) - For backend deployment: https://render.com
3. **Vercel Account** (Free) - For frontend deployment: https://vercel.com
   - Alternative: Netlify (Free) - https://netlify.com

## 🗄️ Database Setup

Your Neon PostgreSQL database is already configured. Make sure you have:
- Database URL from Neon dashboard
- Database is active (not paused)

## 🔧 Step 1: Prepare Your Code

### 1.1 Push to GitHub

```bash
# Initialize git if not already done
cd c:\Users\jiten\careerpath-ai
git init
git add .
git commit -m "Initial commit - ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/careerpath-ai.git
git branch -M main
git push -u origin main
```

## 🖥️ Step 2: Deploy Backend (Render)

### 2.1 Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Connect your GitHub account

### 2.2 Deploy Backend Service

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Select the repository: `careerpath-ai`
4. Configure:
   - **Name**: `careerpath-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### 2.3 Set Environment Variables in Render

Go to **Environment** section and add:

```
DATABASE_URL=your-neon-database-url-here
JWT_SECRET=generate-a-random-secret-key-here
FRONTEND_URL=https://your-frontend-url.vercel.app
GEMINI_API_KEY=your-gemini-api-key
NODE_ENV=production
PORT=10000
```

**Important Notes:**
- Replace `your-neon-database-url-here` with your actual Neon database URL
- Generate a strong `JWT_SECRET` (you can use: `openssl rand -base64 32`)
- `FRONTEND_URL` will be set after frontend deployment
- You can update `FRONTEND_URL` later after deploying frontend

### 2.4 Deploy

Click **"Create Web Service"** and wait for deployment (5-10 minutes).

**Your backend URL will be**: `https://careerpath-backend.onrender.com` (or similar)

## 🎨 Step 3: Deploy Frontend (Vercel)

### 3.1 Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub
3. Connect your GitHub account

### 3.2 Deploy Frontend

1. Click **"Add New..."** → **"Project"**
2. Import your GitHub repository: `careerpath-ai`
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3.3 Set Environment Variables in Vercel

Go to **Settings** → **Environment Variables** and add:

```
VITE_API_BASE_URL=https://careerpath-backend.onrender.com
```

Replace `https://careerpath-backend.onrender.com` with your actual backend URL from Render.

### 3.4 Deploy

Click **"Deploy"** and wait for deployment (2-3 minutes).

**Your frontend URL will be**: `https://careerpath-ai.vercel.app` (or similar)

## 🔄 Step 4: Update Backend CORS

After frontend is deployed, update the backend `FRONTEND_URL` in Render:

1. Go to Render dashboard → Your backend service
2. Go to **Environment** tab
3. Update `FRONTEND_URL` to include your Vercel URL:
   ```
   FRONTEND_URL=https://careerpath-ai.vercel.app
   ```
4. Click **"Save Changes"** - Render will automatically redeploy

## ✅ Step 5: Test Your Deployment

1. Visit your frontend URL: `https://careerpath-ai.vercel.app`
2. Test registration/login
3. Test roadmap generation
4. Test on mobile device by opening the URL

## 📱 Mobile Access

Your app is now accessible from:
- **Desktop**: Open the Vercel URL in any browser
- **Mobile**: Open the Vercel URL in mobile browser
- **Share**: Share the Vercel URL with anyone

## 🔧 Alternative: Deploy Frontend on Netlify

If you prefer Netlify:

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your repository
5. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Add environment variable:
   - `VITE_API_BASE_URL` = your Render backend URL
7. Deploy

## 🐛 Troubleshooting

### Backend Issues

**Database Connection Error:**
- Check if Neon database is active (not paused)
- Verify `DATABASE_URL` is correct in Render environment variables
- Check Render logs for detailed error messages

**CORS Errors:**
- Make sure `FRONTEND_URL` in backend includes your frontend URL
- Check that URLs don't have trailing slashes

### Frontend Issues

**API Calls Failing:**
- Verify `VITE_API_BASE_URL` is set correctly in Vercel
- Check browser console for errors
- Ensure backend is running (check Render dashboard)

**Build Errors:**
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Try building locally: `npm run build`

## 📝 Environment Variables Summary

### Backend (Render)
```
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
FRONTEND_URL=https://your-frontend.vercel.app
GEMINI_API_KEY=your-key
NODE_ENV=production
```

### Frontend (Vercel/Netlify)
```
VITE_API_BASE_URL=https://your-backend.onrender.com
```

## 🎉 You're Done!

Your CareerPath AI app is now live and accessible from anywhere! Share your frontend URL with users to access it from mobile devices, tablets, or any device with a browser.

## 🔗 Quick Links

- **Render Dashboard**: https://dashboard.render.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Neon Dashboard**: https://console.neon.tech
