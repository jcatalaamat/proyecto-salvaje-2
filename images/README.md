# Images Directory

This directory contains all images for the Proyecto Salvaje application.

## Directory Structure

```
images/
└── property/
    ├── property-photo-01.jpeg (198K) - WhatsApp photo
    ├── property-photo-02.jpeg (121K)
    ├── property-photo-03.jpeg (42K)
    ├── property-photo-04.jpg (743K)
    ├── property-photo-05.jpg (489K)
    ├── property-photo-06.jpg (706K)
    ├── property-photo-07.jpg (92K)
    ├── property-photo-08.jpg (352K)
    ├── property-photo-09.jpg (201K)
    ├── property-screenshot-01.png (5.3M)
    ├── property-screenshot-02.png (6.0M)
    ├── property-screenshot-03.png (5.6M)
    ├── property-screenshot-04.png (5.1M)
    └── property-screenshot-05.png (3.8M)
```

## Usage in React Components

All images can be referenced directly using absolute paths from the public directory:

```jsx
// Property photos
<img src="/images/property/property-photo-01.jpeg" alt="Property view" />
<img src="/images/property/property-screenshot-01.png" alt="Aerial view" />
```

## Image Categories

### Property Photos (JPEG/JPG format)
- **property-photo-01.jpeg** through **property-photo-09.jpg**: Various property and land photos
- Sizes range from 42K to 743K
- Good for gallery displays, testimonials, or feature sections

### Property Screenshots (PNG format)
- **property-screenshot-01.png** through **property-screenshot-05.png**: Aerial/overview screenshots
- Larger files (3.8M to 6.0M) - high quality images
- Best for hero sections, location maps, or prominent displays
- Consider optimizing these for web if needed

## Potential Use Cases

1. **InvestmentPage** ([src/pages/InvestmentPage.tsx](../../src/pages/InvestmentPage.tsx))
   - Replace map placeholder with screenshots
   - Add property gallery section
   - Use in location highlights

2. **Landing Page Hero** ([src/App.tsx](../../src/App.tsx))
   - Background images for hero section
   - Feature callouts with property photos

3. **LandSection Component** ([src/components/LandSection.tsx](../../src/components/LandSection.tsx))
   - Showcase the actual land with photos
   - Visual storytelling

## Source

All images downloaded from: https://www.elzapotal.com.mx
Downloaded on: October 13, 2025
