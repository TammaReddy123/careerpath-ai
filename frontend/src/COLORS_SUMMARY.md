# 🎨 CareerPath AI - Complete Color Reference

## Primary Brand Colors (Gradient Triad)

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Blue** | `#3B82F6` | Primary brand color, buttons, links, focus states |
| **Purple** | `#8B5CF6` | Secondary brand color, gradients, accents |
| **Pink** | `#EC4899` | Accent brand color, gradients, highlights |

## Dark Theme Backgrounds

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary BG** | `#1F2937` | Cards, containers, main dark background |
| **Secondary BG** | `#1A202C` | Page background, deepest containers |
| **Tertiary BG** | `#111827` | Alternative dark background |
| **Topbar BG** | `#2D3748` | Top navigation bar background |
| **Border** | `#374151` | Standard borders, dividers |
| **Border Light** | `#4B5563` | Light border variant |

## Text Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Text** | `#FFFFFF` | Main white text |
| **Secondary Text** | `#E2E8F0` | Light gray text |
| **Tertiary Text** | `#94A3B8` | Muted gray text |
| **Muted Text** | `#6B7280` | Very muted text |

## Status Colors

| Status | Text | Background | Border |
|--------|------|------------|--------|
| **Success** | `#10B981` | `#1E3A2E` | `#065F46` |
| **Error** | `#F87171` | `#4A1E1E` | `#7F1D1D` |
| **Warning** | `#F59E0B` | `#4A3A1E` | - |

## Gender-Based Profile Colors

### Male
- Primary: `#3B82F6` (Blue)
- Light: `#60A5FA`
- Dark: `#1E40AF`
- Background: `#1E3A5F`
- Border: `#60A5FA`

### Female
- Primary: `#EC4899` (Pink)
- Light: `#F472B6`
- Dark: `#BE185D`
- Background: `#4A1E3D`
- Border: `#F472B6`

### Other
- Primary: `#8B5CF6` (Purple)
- Light: `#A78BFA`
- Dark: `#6D28D9`
- Background: `#3D1E4A`
- Border: `#A78BFA`

## Stat Card Backgrounds

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Blue Stat** | `#1E3A5F` | Blue-themed statistics |
| **Purple Stat** | `#3D1E4A` | Purple-themed statistics |
| **Green Stat** | `#1E3A2E` | Green-themed statistics |
| **Pink Stat** | `#4A1E3D` | Pink-themed statistics |
| **Amber Stat** | `#4A3A1E` | Amber-themed statistics |

## Additional Accent Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Cyan** | `#06B6D4` | Accent highlights |
| **Teal** | `#14B8A6` | Accent highlights |
| **Indigo** | `#6366F1` | Accent highlights |
| **Fuchsia** | `#D946EF` | Accent highlights |
| **Rose** | `#F43F5E` | Accent highlights |
| **Orange** | `#F97316` | Accent highlights |
| **Amber** | `#F59E0B` | Warning, highlights |
| **Emerald** | `#10B981` | Success, highlights |
| **Sky** | `#0EA5E9` | Accent highlights |

## Gradient Combinations

### Primary Gradients
- **Hero**: `from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]`
- **Blue-Purple**: `from-[#3B82F6] to-[#8B5CF6]`
- **Purple-Pink**: `from-[#8B5CF6] to-[#EC4899]`
- **Blue-Pink**: `from-[#3B82F6] to-[#EC4899]`

### Subtle Gradients
- **Subtle**: `from-[#1E3A5F] to-[#3D1E4A]`
- **Blue Gradient**: `from-[#1E3A5F] to-[#3B82F6]`
- **Purple Gradient**: `from-[#3D1E4A] to-[#8B5CF6]`
- **Pink Gradient**: `from-[#4A1E3D] to-[#EC4899]`

## Component-Specific Colors

### Buttons
- Primary: `#3B82F6`
- Hover: `#2563EB`
- Gradient: `from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]`

### Cards
- Background: `#1F2937`
- Border: `#374151`
- Hover: `#374151`

### Input Fields
- Background: `#1F2937`
- Border: `#374151`
- Focus Ring: `#3B82F6`
- Placeholder: `#94A3B8`

## Quick Reference Classes

```jsx
// Gradients
className="bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]"

// Dark backgrounds
className="bg-[#1F2937] border border-[#374151]"

// Text colors
className="text-white"           // Primary
className="text-[#E2E8F0]"       // Secondary
className="text-[#94A3B8]"       // Tertiary

// Gender borders
className="border-2 border-[#60A5FA]"    // Male
className="border-2 border-[#F472B6]"    // Female
className="border-2 border-[#A78BFA]"     // Other
```

## Color Harmony Rules

1. **Primary Triad**: Blue → Purple → Pink creates vibrant, modern gradients
2. **Dark Base**: All dark backgrounds use gray scale from `#111827` to `#2D3748`
3. **Text Hierarchy**: White → Light Gray → Muted Gray for readability
4. **Gender Colors**: Blue (male), Pink (female), Purple (other) maintain brand consistency
5. **Status Colors**: Green (success), Red (error), Amber (warning) for clear feedback

## Accessibility

All color combinations meet WCAG AA standards:
- Text on dark backgrounds: 4.5:1 minimum contrast
- Interactive elements: Clear hover/focus states
- Status indicators: High contrast for visibility
