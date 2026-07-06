# Image Asset Guide

## Images Already Integrated
✅ **Hero Section (LIVE)**
- `frontend/public/images/her01.jpg` - Left hero image
- `frontend/public/images/hero2.jpg` - Right hero image

## Images Ready to Add (Insert into `/assets` folder, then we'll move them)

### Collections Section
- `collection-fashion.jpg` - Fashion collection thumbnail
- `collection-commercial.jpg` - Commercial collection thumbnail
- `collection-portraits.jpg` - Portraits collection thumbnail

### Testimonial Section
- `testimonial.jpg` - Testimonial background/portrait

### CTA ("Your next campaign") Section
- `cta-left.jpg` - Left campaign visual
- `cta-right.jpg` - Right campaign visual

### Journey Section
- `journey-left.jpg` - Left journey image
- `journey-right.jpg` - Right journey image

### Footer
- `featured-footer.jpg` - Featured work in footer

## How to Add Images

1. **Place images in `/assets` folder** with the names listed above
2. **Run this command** to copy them to the frontend:
   ```bash
   cp "/home/y7z/photography booking site/assets"/*.jpg "/home/y7z/photography booking site/frontend/public/images/"
   ```
3. Images will automatically appear on the page

## Image Specifications

### Recommended Sizes (for optimal UX)
- **Hero images** (hero1, hero2): 600x400px or similar 3:2 ratio
- **Collection images**: 400x280px or similar
- **Testimonial image**: 400x500px or similar 4:5 ratio
- **CTA images**: 400x300px or similar
- **Journey images**: 400x320px or similar
- **Footer image**: 400x240px or similar

### File Format
- JPG format (already configured)
- Optimize before uploading (< 200KB each for web performance)

## Frontend Auto-Fallback
If an image is missing, the component will:
- Display a gray placeholder background
- Not show a broken image icon
- Allow content to display normally

This ensures the page remains visually appealing even if some images are delayed or missing.
