# ⚡ Quick Deployment Checklist

## 🎯 Quick Steps to Deploy

### 1️⃣ Push to GitHub (5 minutes)
```bash
git init
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/careerpath-ai.git
git push -u origin main
```

### 2️⃣ Deploy Backend on Render (10 minutes)

1. **Sign up**: https://render.com (use GitHub login)
2. **New Web Service** → Connect repo → Select `careerpath-ai`
3. **Settings**:
   - Name: `careerpath-backend`
   - Root Directory: `backend`
   - Build: `npm install`
   - Start: `npm start`
4. **Environment Variables**:
   ```
   DATABASE_URL=your-neon-url
   JWT_SECRET=random-secret-key-here
   FRONTEND_URL=https://your-frontend.vercel.app (set after step 3)
   GEMINI_API_KEY=your-key
   NODE_ENV=production
   ```
5. **Deploy** → Copy backend URL (e.g., `https://careerpath-backend.onrender.com`)

### 3️⃣ Deploy Frontend on Vercel (5 minutes)

1. **Sign up**: https://vercel.com (use GitHub login)
2. **New Project** → Import repo → Select `careerpath-ai`
3. **Settings**:
   - Root Directory: `frontend`
   - Framework: Vite
   - Build: `npm run build`
   - Output: `dist`
4. **Environment Variable**:
   ```
   VITE_API_BASE_URL=https://careerpath-backend.onrender.com
   ```
   (Use the URL from step 2)
5. **Deploy** → Copy frontend URL (e.g., `https://careerpath-ai.vercel.app`)

### 4️⃣ Update Backend CORS (2 minutes)

1. Go to Render → Your backend service
2. **Environment** → Update `FRONTEND_URL` with your Vercel URL
3. **Save** → Auto-redeploys

### ✅ Done! 

Your app is live at: `https://careerpath-ai.vercel.app`

**Test on mobile**: Open the URL in your phone's browser!

---

## 🔑 Generate JWT Secret

Run this command to generate a secure JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Or use online: https://randomkeygen.com/

---

## 📱 Mobile Testing

1. Open browser on your phone
2. Go to: `https://your-app.vercel.app`
3. Test registration, login, roadmap generation
4. Share URL with friends!

---

## 🆘 Need Help?

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.
