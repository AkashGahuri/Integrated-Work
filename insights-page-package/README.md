# Insights Page Package

A comprehensive, interactive insights page component for Next.js projects with global data visualization, issue tracking, and opportunity matching.

## Features

- 🌍 **Global Insights View**: Interactive world map with regional data
- 📊 **Issue Tracking**: Hierarchical navigation from world → region → country → sector → issues
- 🎯 **Opportunity Matching**: Related opportunities with match scores
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 🗺️ **Atlas View**: Interactive historical timeline and map visualization

## Quick Start

1. **Install Dependencies**:
```bash
npm install framer-motion lucide-react leaflet react-leaflet clsx tailwind-merge
```

2. **Copy Files**:
   - Copy `components/` folder to your project
   - Copy `lib/utils.ts` to your project
   - Copy `InsightsPage.tsx` to your desired location

3. **Add to Your Project**:
```tsx
import InsightsPage from './path/to/InsightsPage'

export default function YourPage() {
  return <InsightsPage />
}
```

## File Structure

```
insights-page-package/
├── README.md
├── InsightsPage.tsx              # Main insights page component
├── components/
│   ├── AtlasView.tsx            # Interactive atlas/map component
│   └── ui/
│       ├── badge.tsx            # Badge component
│       ├── card.tsx             # Card component
│       └── separator.tsx        # Separator component
├── lib/
│   └── utils.ts                 # Utility functions
└── data/
    └── globalData.ts            # Mock data structure
```

## Customization

### Data Structure
The component uses a hierarchical data structure:
- **World** → **Regions** → **Countries** → **Sectors** → **Issues**

### Styling
- Uses Tailwind CSS classes
- Stone color palette for professional look
- Easily customizable via Tailwind config

### Icons
- Uses Lucide React icons
- Replace with your preferred icon library

## Dependencies

### Required
- `framer-motion`: Animations and transitions
- `lucide-react`: Icons
- `leaflet`: Interactive maps
- `react-leaflet`: React wrapper for Leaflet
- `clsx`: Conditional class names
- `tailwind-merge`: Tailwind class merging

### Optional
- `next/link`: For navigation (can be replaced with router)
- `next/dynamic`: For dynamic imports (can be replaced with lazy loading)

## Browser Support

- Modern browsers with ES6+ support
- Leaflet maps require internet connection for tile loading

## License

MIT License - feel free to use in your projects! 