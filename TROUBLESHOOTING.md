# 🔧 Troubleshooting Guide

## ❌ "Cannot connect to server" Error After Deployment

If you see this error after deploying your application, it means the frontend cannot reach the backend. Here's how to fix it:

### ✅ Solution: Set Environment Variable

The frontend needs to know where your backend is deployed. You must set the `VITE_API_BASE_URL` environment variable.

#### For Vercel:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://your-backend-url.onrender.com` (your actual Render backend URL)
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. **Redeploy** your frontend (Vercel will auto-redeploy, or go to Deployments → Redeploy)

#### For Netlify:

1. Go to your Netlify site dashboard
2. Click **Site configuration** → **Environment variables**
3. Add a new variable:
   - **Key**: `VITE_API_BASE_URL`
   - **Value**: `https://your-backend-url.onrender.com` (your actual Render backend URL)
4. Click **Save**
5. **Redeploy** your site (go to Deployments → Trigger deploy)

### 🔍 How to Find Your Backend URL

1. Go to your Render dashboard
2. Click on your backend service
3. Copy the URL shown at the top (e.g., `https://careerpath-backend.onrender.com`)
4. Use this URL as your `VITE_API_BASE_URL` value

### ✅ Verify It's Working

After setting the environment variable and redeploying:

1. Open your deployed frontend URL
2. Try to register or login
3. The error should be gone!

### 🐛 Still Not Working?

1. **Check Backend is Running**:
   - Go to Render dashboard
   - Check if your backend service shows "Live" status
   - Check the logs for any errors

2. **Check CORS Settings**:
   - Make sure `FRONTEND_URL` in Render matches your Vercel/Netlify URL
   - Backend should allow requests from your frontend domain

3. **Check Environment Variable**:
   - Make sure `VITE_API_BASE_URL` is set correctly
   - Make sure it starts with `https://` (not `http://`)
   - Make sure there's no trailing slash

4. **Check Browser Console**:
   - Open browser DevTools (F12)
   - Go to Console tab
   - Look for API errors
   - Check Network tab to see if requests are being made

### 📝 Example Environment Variables

**Backend (Render):**
```
DATABASE_URL=postgresql://user:pass@host/dbname
JWT_SECRET=your-secret-key
FRONTEND_URL=https://your-app.vercel.app
GEMINI_API_KEY=your-key
NODE_ENV=production
PORT=10000
```

**Frontend (Vercel/Netlify):**
```
VITE_API_BASE_URL=https://your-backend.onrender.com
```

### 🆘 Need More Help?

- Check the browser console for detailed error messages
- Check Render logs for backend errors
- Make sure both services are deployed and running
- Verify all environment variables are set correctly
