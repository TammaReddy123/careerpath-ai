# 🔧 Fix: "Cannot connect to backend server" Error

## ✅ Good News!

Your `VITE_API_BASE_URL` is correctly set to: `https://careerpath-backend-32dz.onrender.com`

The error means the frontend knows where the backend is, but can't connect to it.

---

## 🔍 Step 1: Check if Backend is Running

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Click on your backend service** (`careerpath-backend-32dz`)
3. **Check the status**:
   - ✅ **"Live"** = Backend is running (go to Step 2)
   - ⚠️ **"Sleeping"** = Backend is sleeping (go to Step 3)
   - ❌ **"Failed"** = Backend has errors (go to Step 4)

---

## ⚠️ Step 2: If Backend is "Sleeping" (Render Free Tier)

Render free tier services sleep after 15 minutes of inactivity.

### Quick Fix:
1. **Wake it up**: Open your backend URL in a browser:
   ```
   https://careerpath-backend-32dz.onrender.com
   ```
   You should see: "Backend Running ✅"

2. **Then try your frontend again** - it should work!

### Permanent Fix (Optional):
- Upgrade to Render paid plan (services don't sleep)
- Or use a service like Railway, Fly.io, or Heroku

---

## 🔧 Step 3: Check CORS Configuration

### In Render Dashboard:

1. Go to your backend service
2. Click **Environment** tab
3. Check if `FRONTEND_URL` is set:
   ```
   FRONTEND_URL=https://your-frontend.vercel.app
   ```
   (Replace with your actual Vercel frontend URL)

4. **If missing or wrong**:
   - Add/Update: `FRONTEND_URL` = `https://your-frontend.vercel.app`
   - Click **Save Changes**
   - Render will auto-redeploy

5. **Wait 2-3 minutes** for redeployment
6. **Try again**

---

## 🐛 Step 4: Check Backend Logs

1. Go to Render Dashboard → Your backend service
2. Click **Logs** tab
3. Look for errors:
   - Database connection errors?
   - Missing environment variables?
   - Port conflicts?

4. **Common issues**:
   - Missing `DATABASE_URL`
   - Missing `JWT_SECRET`
   - Missing `GEMINI_API_KEY`

---

## ✅ Step 5: Test Backend Directly

### Test 1: Health Check
Open in browser:
```
https://careerpath-backend-32dz.onrender.com/api/health
```

**Expected**: `{"status":"ok","message":"Backend is running"}`

**If error**: Backend is not running properly

### Test 2: Root Endpoint
Open in browser:
```
https://careerpath-backend-32dz.onrender.com
```

**Expected**: `Backend Running ✅`

**If error**: Backend is not deployed correctly

---

## 🔍 Step 6: Verify Environment Variables in Render

Make sure these are set in Render → Environment:

```
✅ DATABASE_URL=your-neon-database-url
✅ JWT_SECRET=your-secret-key
✅ FRONTEND_URL=https://your-frontend.vercel.app
✅ GEMINI_API_KEY=your-gemini-key
✅ NODE_ENV=production
✅ PORT=10000
```

---

## 🚀 Step 7: Force Redeploy Backend

1. Go to Render Dashboard → Your backend service
2. Click **Manual Deploy** → **Deploy latest commit**
3. Wait for deployment to complete (2-5 minutes)
4. Check logs for any errors
5. Try frontend again

---

## 📝 Quick Checklist

- [ ] Backend status is "Live" (not "Sleeping")
- [ ] `FRONTEND_URL` is set in Render (matches your Vercel URL)
- [ ] All environment variables are set in Render
- [ ] Backend health check works: `/api/health`
- [ ] Backend root works: `/`
- [ ] No errors in Render logs
- [ ] Backend was recently deployed

---

## 🆘 Still Not Working?

### Check Browser Console (F12):
1. Open your frontend site
2. Press F12 → **Console** tab
3. Look for CORS errors or network errors
4. Check **Network** tab → See if requests are being made

### Common CORS Error:
```
Access to fetch at '...' from origin '...' has been blocked by CORS policy
```

**Fix**: Make sure `FRONTEND_URL` in Render matches your Vercel URL exactly

---

## 📞 Need More Help?

1. **Check Render logs** for specific errors
2. **Check browser console** for network errors
3. **Verify backend URL** is correct
4. **Test backend endpoints** directly in browser

---

## ✅ Expected Result

After fixing:
- ✅ Backend is "Live" on Render
- ✅ Health check works
- ✅ Frontend can connect
- ✅ Registration/Login works
- ✅ No CORS errors
