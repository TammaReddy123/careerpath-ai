// Get API base URL from environment variable
// In development: uses Vite proxy (empty string)
// In production: must be set via VITE_API_BASE_URL environment variable
let API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
let isConfigured = true;

if (import.meta.env.DEV) {
  // Development: use Vite proxy if no explicit URL is set
  if (!API_BASE_URL || API_BASE_URL.includes(':5173')) {
    API_BASE_URL = ''; // Empty string = use Vite proxy to localhost:5000
  }
} else {
  // Production: require explicit backend URL
  if (!API_BASE_URL || API_BASE_URL.trim() === '') {
    isConfigured = false;
    console.error('❌ VITE_API_BASE_URL is not set in production!');
    console.error('Please set VITE_API_BASE_URL environment variable to your backend URL');
    console.error('Example: https://your-backend.onrender.com');
    // Fallback - but this should be set properly
    API_BASE_URL = '';
  }
}

// Log API configuration (helpful for debugging)
if (import.meta.env.DEV) {
  console.log("🔗 API Base URL:", API_BASE_URL || '(using Vite proxy)');
  console.log("🔗 Environment:", import.meta.env.MODE);
} else {
  if (isConfigured) {
    console.log("🔗 API Base URL:", API_BASE_URL);
  } else {
    console.error("⚠️ API Base URL is not configured. API calls will fail!");
    console.error("⚠️ Set VITE_API_BASE_URL in your deployment platform (Vercel/Netlify)");
  }
}

export const api = {
  baseUrl: API_BASE_URL,
  isConfigured: isConfigured,
};


