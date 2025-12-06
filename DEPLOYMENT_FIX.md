# 🔧 Quick Fix: "Cannot connect to server" Error

## ⚠️ The Problem

After deployment, users see: **"Cannot connect to server"** when trying to register or login.

This happens because the frontend doesn't know where your backend is deployed.

## ✅ The Solution (2 minutes)

### For Vercel:

1. **Go to your Vercel project**: https://vercel.com/dashboard
2. **Click on your project** (careerpath-ai)
3. **Go to Settings** → **Environment Variables**
4. **Add new variable**:
   - **Key**: `VITE_API_BASE_URL`
   - **Value**: `https://your-backend-name.onrender.com` (your actual Render backend URL)
   - **Environments**: Select all (Production, Preview, Development)
5. **Click Save**
6. **Redeploy**: Go to **Deployments** tab → Click **⋯** on latest deployment → **Redeploy**

### For Netlify:

1. **Go to your Netlify site**: https://app.netlify.com
2. **Click on your site**
3. **Go to Site configuration** → **Environment variables**
4. **Add variable**:
   - **Key**: `VITE_API_BASE_URL`
   - **Value**: `https://your-backend-name.onrender.com` (your actual Render backend URL)
5. **Click Save**
6. **Redeploy**: Go to **Deploys** tab → Click **Trigger deploy** → **Deploy site**

## 🔍 How to Find Your Backend URL

1. Go to **Render dashboard**: https://dashboard.render.com
2. Click on your **backend service**
3. Copy the URL shown at the top (e.g., `https://careerpath-backend-abc123.onrender.com`)
4. Use this exact URL as your `VITE_API_BASE_URL` value

## ✅ Verify It's Fixed

1. Wait for redeployment to complete (1-2 minutes)
2. Open your frontend URL
3. Try to register or login
4. The error should be gone! ✅

## 🐛 Still Not Working?

1. **Check the URL format**:
   - ✅ Correct: `https://careerpath-backend.onrender.com`
   - ❌ Wrong: `http://careerpath-backend.onrender.com` (missing 's')
   - ❌ Wrong: `https://careerpath-backend.onrender.com/` (trailing slash)

2. **Check backend is running**:
   - Go to Render dashboard
   - Check if service shows "Live" status
   - Check logs for errors

3. **Check browser console**:
   - Press F12 → Console tab
   - Look for API errors
   - Check if `VITE_API_BASE_URL` is logged

4. **Double-check environment variable**:
   - Make sure it's set for **Production** environment
   - Make sure you **redeployed** after setting it

## 📝 Example

**Backend URL from Render**: `https://careerpath-backend-xyz.onrender.com`

**Set in Vercel/Netlify**:
```
VITE_API_BASE_URL = https://careerpath-backend-xyz.onrender.com
```

**Then redeploy!** 🚀

---

**Need more help?** See `TROUBLESHOOTING.md` for detailed steps.
