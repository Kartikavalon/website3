# Light Mode Conversion & Images Guide

## 🖼️ HOW TO INSERT IMAGES

### Step 1: Add Images to Public Folder
1. Create folder: `public/images/` (if not exists)
2. Create subfolders for organization:
   ```
   public/
   ├── images/
   │   ├── products/
   │   ├── news/
   │   ├── industries/
   │   └── team/
   ```
3. Add your image files (JPG, PNG, WebP)

### Step 2: Use Images in Components
In any component/page, use Next.js Image component:

```tsx
import Image from "next/image";

export default function MyComponent() {
  return (
    <div>
      {/* Static Image */}
      <Image
        src="/images/products/rare-earth-1.jpg"
        alt="Rare Earth Elements"
        width={400}
        height={300}
        className="rounded-lg"
      />
      
      {/* Product Card with Image */}
      <Image
        src={`/images/products/${product.id}.jpg`}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-auto"
      />
    </div>
  );
}
```

### Step 3: Example - Update News Cards with Images

Change in `app/news/page.tsx` line ~110:

**FROM:**
```tsx
<div className="bg-gradient-to-br from-slate-800 to-slate-700 h-48 flex items-center justify-center">
  <div className="text-slate-600 text-center">
    <p className="text-4xl mb-2">📰</p>
    <p className="text-sm">Article Image</p>
  </div>
</div>
```

**TO:**
```tsx
<Image
  src={post.image || "/images/news/default.jpg"}
  alt={post.title}
  width={400}
  height={250}
  className="w-full h-48 object-cover"
/>
```

### Step 4: Image Optimization Tips
- Use Next.js Image component (automatic optimization)
- Recommended sizes:
  - Product images: 400x400px, 600x600px
  - News featured: 800x400px
  - Thumbnails: 200x200px
- Best formats: WebP > JPEG > PNG

---

## 🌅 DARK MODE TO LIGHT MODE CONVERSION

### Color Mapping Reference

| Dark | Light |
|------|-------|
| `bg-slate-950` | `bg-white` |
| `bg-slate-900` | `bg-gray-50` |
| `bg-slate-800` | `bg-gray-100` |
| `bg-slate-700` | `bg-gray-200` |
| `text-slate-100` | `text-gray-900` |
| `text-slate-300` | `text-gray-700` |
| `text-slate-400` | `text-gray-600` |
| `text-slate-500` | `text-gray-500` |
| `border-slate-800` | `border-gray-300` |
| `border-slate-700` | `border-gray-200` |
| `border-slate-600` | `border-gray-200` |

### Quick Conversion Process

**Option A: Using Find & Replace (Fastest)**

1. Open each file
2. Use VS Code Find & Replace (Ctrl+H)
3. Replace all dark colors with light:

```
bg-slate-950 → bg-white
bg-slate-900 → bg-gray-50
bg-slate-800 → bg-gray-100
text-slate-100 → text-gray-900
text-slate-300 → text-gray-700
text-slate-400 → text-gray-600
border-slate-800 → border-gray-300
border-slate-700 → border-gray-200
```

**Files to Update (Priority Order):**

1. `components/Navigation.tsx` - Top priority (users see first)
2. `components/Hero.tsx`
3. `components/Footer.tsx`
4. `components/ProductCard.tsx`
5. `components/SectionHeader.tsx`
6. `components/InquiryForm.tsx`
7. `app/page.tsx` (home)
8. `app/products/page.tsx`
9. `app/products/[category]/[product]/page.tsx`
10. `app/about/page.tsx`
11. `app/industries/page.tsx`
12. `app/manufacturing/page.tsx`
13. `app/news/page.tsx` (already light-friendly)
14. `app/contact/page.tsx`

**Option B: Manual Editing (More Control)**

For each file:
1. Search for `bg-slate-`
2. Replace with appropriate light color
3. Search for `text-slate-`
4. Replace with appropriate light color

### Additional Light Mode Adjustments

After color replacement, update:

1. **Gradient Backgrounds:**
   - Change `from-slate-900 to-slate-950` to `from-blue-50 to-white`
   - Change `from-slate-800 to-slate-700` to `from-gray-100 to-gray-50`

2. **Hover States:**
   - `hover:bg-slate-900` → `hover:bg-gray-100`
   - `hover:text-slate-100` → `hover:text-gray-900`

3. **Focus States (Forms):**
   - `focus:border-primary-600` stays the same
   - `focus:ring-1 focus:ring-primary-600` stays the same

4. **Shadows:**
   - May want to adjust: `shadow-glow-teal` effects for light mode
   - Consider adding subtle shadows instead of glows

### Testing Light Mode

After conversion:
1. Use light backgrounds
2. Ensure text contrast (should be >= 4.5:1 for accessibility)
3. Test on real devices
4. Check hover states
5. Verify button visibility
6. Test form inputs

### Specific File Changes Example

**Navigation.tsx** - Replace these blocks:

```tsx
// BEFORE
bg-slate-950/95 backdrop-blur-md border-b border-slate-800

// AFTER
bg-white/95 backdrop-blur-md border-b border-gray-300
```

```tsx
// BEFORE
text-sm font-sans text-slate-300 hover:text-primary-600

// AFTER
text-sm font-sans text-gray-700 hover:text-primary-600
```

---

## 📝 Implementation Checklist

- [ ] Add images to `public/images/` folder
- [ ] Update News page to use real images
- [ ] Test image loading locally
- [ ] Convert Navigation.tsx to light mode
- [ ] Convert Hero.tsx to light mode
- [ ] Convert Footer.tsx to light mode
- [ ] Update remaining pages
- [ ] Test all pages visually
- [ ] Check mobile responsiveness
- [ ] Deploy to Vercel

---

## 🚀 Quick Start Commands

```bash
# Test locally with new light mode
npm run build

# Start dev server
npm run dev

# View at http://localhost:3000
```

---

## 💡 Pro Tips

1. **Batch Updates:** Use multi-file find & replace
2. **Test as You Go:** Don't wait until everything is done
3. **Keep Dark Mode Optional:** Could make it a toggle for future
4. **Image Optimization:** Use Next.js Image component everywhere
5. **Gradients:** Light gradients should be subtle (use grays/blues)

---

## Need Help?

- Images not showing? Check path: `/images/folder/filename.ext`
- Colors not right? Verify color mappings above
- Deploy issues? Run `npm run build` locally first
