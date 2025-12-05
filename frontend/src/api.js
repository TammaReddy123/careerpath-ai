// Get API base URL from environment variable
// In development: uses Vite proxy (empty string)
// In production: must be set via VITE_API_BASE_URL environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.DEV ? '' : 'https://your-backend-url.onrender.com');

// Only log in development to avoid console spam in production
if (import.meta.env.DEV) {
  console.log("🔗 API Base URL:", API_BASE_URL || '(using Vite proxy)');
  console.log("🔗 Environment:", import.meta.env.MODE);
}

export const api = {
  baseUrl: API_BASE_URL,
};


