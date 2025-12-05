# 🚀 CareerPath AI

A modern career roadmap generator powered by AI, helping users plan their learning journey with personalized roadmaps and AI assistance.

## ✨ Features

- 🔐 User Authentication (Register/Login)
- 🗺️ AI-Powered Career Roadmap Generation
- 💬 Interactive AI Assistant (RoboGuide)
- 💾 Save and Manage Roadmaps
- 📱 Mobile-Responsive Design
- 🌙 Dark Mode Support
- 👤 User Profile Management

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide React Icons

### Backend
- Node.js
- Express.js
- PostgreSQL (Neon)
- JWT Authentication
- Google Gemini AI
- bcrypt

## 📦 Installation

### Prerequisites
- Node.js (v18+)
- PostgreSQL database (Neon recommended)
- Google Gemini API key

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env  # Create .env file
# Edit .env with your credentials
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env  # Create .env file
# Edit .env with your backend URL
npm run dev
```

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy**: See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for a fast deployment guide.

### Recommended Platforms
- **Frontend**: Vercel or Netlify (Free)
- **Backend**: Render or Railway (Free tier available)
- **Database**: Neon PostgreSQL (Free tier)

## 📱 Mobile Access

Once deployed, your app will be accessible from any device via the deployment URL. No app installation required - works in any modern browser!

## 🔧 Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:5173
GEMINI_API_KEY=your-api-key
PORT=5000
```

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:5000
```

## 📄 License

ISC

## 👨‍💻 Author

Your Name

---

**Ready to deploy?** Check out [QUICK_DEPLOY.md](./QUICK_DEPLOY.md)!
