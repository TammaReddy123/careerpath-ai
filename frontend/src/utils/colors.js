// CareerPath AI Color Palette
// Centralized color system for consistent theming across the application

export const colors = {
  // Primary Brand Colors (Main gradient colors)
  primary: {
    blue: '#3B82F6',        // Primary blue - main brand color
    purple: '#8B5CF6',      // Primary purple - secondary brand color
    pink: '#EC4899',        // Primary pink - accent brand color
    lightBlue: '#60A5FA',   // Light blue accent
    darkBlue: '#1E3A5F',    // Dark blue for backgrounds
    darkPurple: '#3D1E4A',  // Dark purple for backgrounds
  },

  // Dark Theme Backgrounds
  dark: {
    bgPrimary: '#1F2937',     // Main dark background (cards, containers)
    bgSecondary: '#1A202C',   // Secondary dark background (page background)
    bgTertiary: '#111827',     // Tertiary dark background
    bgTopbar: '#2D3748',      // Topbar background
    border: '#374151',         // Border color
    borderLight: '#4B5563',    // Light border
    borderDark: '#1F2937',     // Dark border
  },

  // Text Colors
  text: {
    primary: '#FFFFFF',       // Primary white text
    secondary: '#E2E8F0',      // Secondary light text
    tertiary: '#94A3B8',       // Tertiary muted text
    muted: '#6B7280',          // Muted text
    dark: '#1F2937',           // Dark text for light backgrounds
  },

  // Gradient Combinations (for Tailwind classes)
  gradients: {
    hero: 'from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]',
    primary: 'from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]',
    bluePurple: 'from-[#3B82F6] to-[#8B5CF6]',
    purplePink: 'from-[#8B5CF6] to-[#EC4899]',
    bluePink: 'from-[#3B82F6] to-[#EC4899]',
    subtle: 'from-[#1E3A5F] to-[#3D1E4A]',
    blueGradient: 'from-[#1E3A5F] to-[#3B82F6]',
    purpleGradient: 'from-[#3D1E4A] to-[#8B5CF6]',
    pinkGradient: 'from-[#4A1E3D] to-[#EC4899]',
  },

  // Status Colors
  status: {
    success: '#10B981',        // Green for success
    successDark: '#1E3A2E',    // Dark green background
    error: '#F87171',          // Red for errors
    warning: '#F59E0B',        // Amber for warnings
    warningDark: '#4A3A1E',    // Dark amber background
    info: '#3B82F6',           // Blue for info
  },

  // Error States
  error: {
    bg: '#4A1E1E',             // Dark red background
    border: '#7F1D1D',         // Red border
    text: '#F87171',           // Red text
  },

  // Success States
  success: {
    bg: '#1E3A2E',             // Dark green background
    border: '#065F46',         // Green border
    text: '#10B981',           // Green text
  },

  // Interactive Elements
  interactive: {
    hover: '#2563EB',          // Blue hover
    active: '#1D4ED8',         // Darker blue active
    focus: '#3B82F6',          // Focus ring
    hoverDark: '#374151',      // Dark hover state
  },

  // Gender-based Colors
  gender: {
    male: {
      primary: '#3B82F6',      // Blue
      light: '#60A5FA',        // Light blue
      dark: '#1E40AF',         // Dark blue
      bg: '#1E3A5F',           // Dark blue background
      gradient: 'from-blue-500 to-blue-600',
      border: 'border-blue-400',
      borderColor: '#60A5FA',
    },
    female: {
      primary: '#EC4899',      // Pink
      light: '#F472B6',        // Light pink
      dark: '#BE185D',         // Dark pink
      bg: '#4A1E3D',           // Dark pink background
      gradient: 'from-pink-500 to-pink-600',
      border: 'border-pink-400',
      borderColor: '#F472B6',
    },
    other: {
      primary: '#8B5CF6',      // Purple
      light: '#A78BFA',        // Light purple
      dark: '#6D28D9',         // Dark purple
      bg: '#3D1E4A',           // Dark purple background
      gradient: 'from-purple-500 to-purple-600',
      border: 'border-purple-400',
      borderColor: '#A78BFA',
    },
  },

  // Card Colors
  card: {
    bg: '#1F2937',             // Card background
    border: '#374151',         // Card border
    hover: '#374151',          // Card hover state
    shadow: 'shadow-lg',       // Card shadow
  },

  // Button Colors
  button: {
    primary: '#3B82F6',       // Primary button
    secondary: '#8B5CF6',      // Secondary button
    gradient: 'from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]',
    hover: '#2563EB',          // Button hover
  },

  // Additional Complementary Colors
  accent: {
    cyan: '#06B6D4',           // Cyan accent
    teal: '#14B8A6',          // Teal accent
    indigo: '#6366F1',         // Indigo accent
    violet: '#8B5CF6',        // Violet (same as purple)
    fuchsia: '#D946EF',       // Fuchsia accent
    rose: '#F43F5E',          // Rose accent
    orange: '#F97316',        // Orange accent
    amber: '#F59E0B',         // Amber accent
    emerald: '#10B981',       // Emerald (same as success)
    sky: '#0EA5E9',           // Sky blue
  },

  // Background Variants for Stats/Features
  statBg: {
    blue: '#1E3A5F',          // Blue stat background
    purple: '#3D1E4A',        // Purple stat background
    green: '#1E3A2E',         // Green stat background
    pink: '#4A1E3D',          // Pink stat background
    amber: '#4A3A1E',         // Amber stat background
  },
};

// Helper function to get gradient classes
export const getGradient = (type = 'primary') => {
  return colors.gradients[type] || colors.gradients.primary;
};

// Helper function to get gender colors
export const getGenderColor = (gender) => {
  return colors.gender[gender] || colors.gender.other;
};

// CSS Custom Properties for dynamic theming
export const cssVariables = {
  '--color-primary-blue': colors.primary.blue,
  '--color-primary-purple': colors.primary.purple,
  '--color-primary-pink': colors.primary.pink,
  '--color-bg-primary': colors.dark.bgPrimary,
  '--color-bg-secondary': colors.dark.bgSecondary,
  '--color-text-primary': colors.text.primary,
  '--color-text-secondary': colors.text.secondary,
  '--color-border': colors.dark.border,
};
