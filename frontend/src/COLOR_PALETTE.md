# CareerPath AI - Color Palette Guide

This document outlines the complete color system used throughout the CareerPath AI application.

## 🎨 Primary Brand Colors

### Main Gradient Colors
- **Blue**: `#3B82F6` - Primary brand color, used for main actions and highlights
- **Purple**: `#8B5CF6` - Secondary brand color, used in gradients
- **Pink**: `#EC4899` - Accent brand color, used in gradients and highlights

### Usage
- Hero sections: `bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]`
- Buttons: `bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]`
- Cards: `bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]`

## 🌑 Dark Theme Colors

### Backgrounds
- **Primary**: `#1F2937` - Main dark background (cards, containers)
- **Secondary**: `#1A202C` - Page background
- **Tertiary**: `#111827` - Deepest background
- **Topbar**: `#2D3748` - Top navigation bar

### Borders
- **Default**: `#374151` - Standard border color
- **Light**: `#4B5563` - Light border variant
- **Dark**: `#1F2937` - Dark border variant

## 📝 Text Colors

- **Primary**: `#FFFFFF` - Main white text
- **Secondary**: `#E2E8F0` - Light gray text
- **Tertiary**: `#94A3B8` - Muted gray text
- **Muted**: `#6B7280` - Very muted text

## ✅ Status Colors

### Success
- **Text**: `#10B981` - Green text
- **Background**: `#1E3A2E` - Dark green background
- **Border**: `#065F46` - Green border

### Error
- **Text**: `#F87171` - Red text
- **Background**: `#4A1E1E` - Dark red background
- **Border**: `#7F1D1D` - Red border

### Warning
- **Text**: `#F59E0B` - Amber text
- **Background**: `#4A3A1E` - Dark amber background

## 👤 Gender-Based Colors

### Male
- **Primary**: `#3B82F6` (Blue)
- **Light**: `#60A5FA`
- **Dark**: `#1E40AF`
- **Background**: `#1E3A5F`
- **Border**: `#60A5FA`

### Female
- **Primary**: `#EC4899` (Pink)
- **Light**: `#F472B6`
- **Dark**: `#BE185D`
- **Background**: `#4A1E3D`
- **Border**: `#F472B6`

### Other
- **Primary**: `#8B5CF6` (Purple)
- **Light**: `#A78BFA`
- **Dark**: `#6D28D9`
- **Background**: `#3D1E4A`
- **Border**: `#A78BFA`

## 📊 Stat Card Backgrounds

- **Blue**: `#1E3A5F` - For blue-themed stats
- **Purple**: `#3D1E4A` - For purple-themed stats
- **Green**: `#1E3A2E` - For green-themed stats
- **Pink**: `#4A1E3D` - For pink-themed stats
- **Amber**: `#4A3A1E` - For amber-themed stats

## 🎯 Additional Accent Colors

- **Cyan**: `#06B6D4`
- **Teal**: `#14B8A6`
- **Indigo**: `#6366F1`
- **Violet**: `#8B5CF6`
- **Fuchsia**: `#D946EF`
- **Rose**: `#F43F5E`
- **Orange**: `#F97316`
- **Amber**: `#F59E0B`
- **Emerald**: `#10B981`
- **Sky**: `#0EA5E9`

## 📐 Usage Examples

### Gradient Backgrounds
```jsx
// Hero section
className="bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]"

// Card header
className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]"

// Subtle gradient
className="bg-gradient-to-r from-[#1E3A5F] to-[#3D1E4A]"
```

### Dark Theme Cards
```jsx
className="bg-[#1F2937] border border-[#374151]"
```

### Text Colors
```jsx
className="text-white"           // Primary text
className="text-[#E2E8F0]"       // Secondary text
className="text-[#94A3B8]"       // Tertiary/muted text
```

### Gender-Based Profile Borders
```jsx
// Male
className="border-2 border-[#60A5FA]"

// Female
className="border-2 border-[#F472B6]"

// Other
className="border-2 border-[#A78BFA]"
```

## 🎨 Color Harmony

The color palette is designed to work harmoniously:
- **Primary triad**: Blue → Purple → Pink creates vibrant gradients
- **Dark backgrounds**: Provide contrast for bright accents
- **Muted text**: Ensures readability without overwhelming
- **Gender colors**: Blue (male), Pink (female), Purple (other) maintain brand consistency

## 📱 Responsive Considerations

All colors maintain contrast ratios for accessibility:
- Text on dark backgrounds: Minimum 4.5:1 ratio
- Interactive elements: Clear hover states
- Focus indicators: Visible focus rings

## 🔄 Theme Consistency

All pages use the same color system:
- **Home**: Gradient hero with brand colors
- **Roadmap**: Dark cards with gradient headers
- **AI Assistant**: Dark chat interface with brand accents
- **Dashboard**: Consistent stat cards and feature cards
- **Profile**: Gender-matched colors throughout
