# Kaytherix Industries - Premium Rare Earth Metals Website

A premium, multi-page industrial website for Kaytherix Industries, a global refiner and supplier of rare earth elements, strategic metals, and advanced materials.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git (optional)

### Installation

```bash
# 1. Navigate to the project directory (if not already there)
cd website3

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser and visit
http://localhost:3000
```

The application will be available at `http://localhost:3000` and will reload on file changes.

## 📁 Project Structure

```
website3/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with fonts & metadata
│   ├── page.tsx                 # Homepage
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── contact/
│   │   └── page.tsx             # Contact & Inquiry page
│   ├── industries/
│   │   └── page.tsx             # Industries Served page
│   ├── manufacturing/
│   │   └── page.tsx             # Manufacturing & Refining page
│   └── products/
│       ├── page.tsx             # Products Hub (all products, filterable)
│       └── [category]/[product]/
│           └── page.tsx         # Individual product detail pages
│
├── components/                  # Reusable React components
│   ├── Navigation.tsx           # Header/Navigation bar
│   ├── Hero.tsx                 # Hero section with animations
│   ├── Footer.tsx               # Footer
│   ├── SectionHeader.tsx        # Reusable section titles
│   ├── ProductCard.tsx          # Product card component
│   └── InquiryForm.tsx          # Contact/RFQ/Consultation form
│
├── data/                        # Product data & constants
│   ├── index.ts                 # Consolidated product list, industries, services
│   ├── light-rare-earths.ts     # 7 light rare earth products
│   ├── heavy-rare-earths.ts     # 8 heavy rare earth products
│   └── strategic-metals.ts      # 8+ strategic metals
│
├── lib/                         # Utility functions & types
│   └── types.ts                 # TypeScript interfaces and types
│
├── styles/                      # Global styles
│   └── globals.css              # Tailwind directives + custom utilities
│
├── public/                      # Static assets
│   └── images/                  # Placeholder image directories
│
├── tailwind.config.ts           # Tailwind CSS configuration (dark theme, teal colors)
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies & scripts
└── README.md                    # This file
```

## 🎨 Design System

### Color Palette
- **Primary (Teal):** `#1B9B8E` (from Kaytherix logo)
- **Dark Gray:** `#0F0F0F`, `#1A1A1A`, `#2A2A2A` (slate-950, 900, 800)
- **Accents:** Metallic gold (`#D4AF37`), silver (`#C0C0C0`), copper (`#B87333`)

### Typography
- **Serif (Headlines):** Playfair Display
- **Sans-serif (Body):** Inter

### Effects
- Glow effects with teal accent shadows
- Smooth animations with Framer Motion
- Brushed metal textures
- Dark industrial luxury aesthetic

## 📄 Pages Overview

### Homepage (`/`)
- Cinematic hero section with animations
- Featured Light Rare Earth Elements
- Featured Heavy Rare Earth Elements
- Featured Strategic & Specialty Metals
- Industries Served overview
- Why Choose Kaytherix section
- Multiple CTAs for inquiries and RFQs

### About Us (`/about`)
- Company mission and positioning
- Core capabilities (Manufacturing, Quality Assurance)
- Services list
- Certifications & Compliance
- Contact CTA

### Products (`/products`)
- Searchable product catalog (23+ products)
- Category filtering:
  - Light Rare Earths
  - Heavy Rare Earths
  - Strategic & Specialty Metals
  - Advanced Materials (placeholder)
  - Industrial Chemicals (placeholder)
  - Precision Substrates (placeholder)
- Product grid cards with purity grades

### Product Detail (`/products/[category]/[product]`)
- Product name, symbol, atomic number/weight, CAS number
- Scientific overview
- Available forms (12+ options)
- Purity grades
- Applications (EV, semiconductor, aerospace, magnets, optical, catalysts, metallurgy)
- Technical specifications
- Storage requirements & packaging options
- RFQ inquiry form

### Industries Served (`/industries`)
- 15 industries with descriptions
- Key materials for each industry
- Advanced solutions overview
- Application highlights
- Contact CTA

### Manufacturing & Refining (`/manufacturing`)
- Refinement systems overview
- Quality & testing capabilities
- Complete manufacturing process flow (6 steps)
- Advanced capabilities
- Consultation CTA

### Contact & Inquiry (`/contact`)
- Email, phone, WhatsApp contact info
- Main inquiry form
- RFQ submission
- Technical consultation
- Export inquiry
- FAQ section (6 common questions)

## 🔧 Configuration

### Tailwind CSS
Configuration located in `tailwind.config.ts`:
- Custom color palette with teal primary
- Extended typography system (Playfair Display, Inter)
- Custom animations (float, glow-pulse)
- Metallic and brushed metal utilities
- Glow effect shadows

### Environment Variables
Create `.env.local` for development (optional):
```bash
# Future API endpoints
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📦 Dependencies

### Production
- **react** (18.3+) - UI library
- **react-dom** (18.3+) - React DOM utilities
- **next** (14.2+) - React framework
- **framer-motion** (10.16+) - Animations
- **react-icons** (5.0+) - Icon library
- **clsx** (2.1+) - Utility for classNames
- **tailwind-merge** (2.2+) - Merge Tailwind classes

### Development
- **typescript** (5.4+) - Type safety
- **tailwindcss** (3.4+) - CSS framework
- **postcss** (8.4+) - CSS processing
- **autoprefixer** (10.4+) - Vendor prefixes
- **eslint** (8.57+) - Code linting
- **@types/react** & **@types/node** - Type definitions

## 🚀 Build & Deployment

### Development
```bash
npm run dev
# Runs on http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
# Optimized production build
```

### Deployment to Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Push to GitHub
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Go to https://vercel.com
   - Connect GitHub repository
   - Vercel automatically detects Next.js
   - Click Deploy

3. **Alternative: Vercel CLI**
   ```bash
   npm i -g vercel
   vercel
   ```

### Environment Variables (Production)
Set in Vercel Project Settings:
```
NEXT_PUBLIC_API_URL=https://api.kaytherix.com
```

## 📊 Product Database

### Light Rare Earths (7)
Lanthanum (La), Cerium (Ce), Praseodymium (Pr), Neodymium (Nd), Samarium (Sm), Europium (Eu), Gadolinium (Gd)

### Heavy Rare Earths (8)
Terbium (Tb), Dysprosium (Dy), Holmium (Ho), Erbium (Er), Thulium (Tm), Ytterbium (Yb), Lutetium (Lu), Yttrium (Y)

### Strategic & Specialty Metals (8+)
Lithium (Li), Cobalt (Co), Vanadium (V), Gallium (Ga), Germanium (Ge), Zirconium (Zr), Molybdenum (Mo), Tungsten (W), and more

### Data Structure
Each product includes:
- Name, symbol, atomic number/weight, CAS number
- Scientific description
- Purity grades (99.0-99.99999%)
- Available forms (oxide, powder, ingot, foil, nanoparticles, sputtering targets, etc.)
- Applications (EV, semiconductor, aerospace, magnets, optical, catalysts, metallurgy)
- Technical specifications
- Storage requirements
- Packaging options

## ✨ Features

### ✓ Completed
- Responsive design (mobile, tablet, desktop)
- Dark industrial luxury aesthetic
- Smooth animations with Framer Motion
- 23+ product details with comprehensive specs
- Dynamic product pages
- Searchable product catalog
- Category filtering
- Multiple inquiry form types (general, RFQ, technical, export)
- WhatsApp integration
- Comprehensive About, Industries, Manufacturing pages
- SEO-ready structure

### 🔜 Future Enhancements
- CMS integration (Strapi/Sanity/Contentful) for content management
- Blog/news section with full articles
- Advanced search with filters
- Product comparison tool
- Multi-language support (i18n)
- API integration for real-time inventory
- User accounts for saved inquiries
- Advanced analytics and tracking
- Email notification system
- PDF generation for technical datasheets

## 🔍 SEO

### Implemented
- Proper meta tags on all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Responsive design
- Fast page load optimization
- Image optimization
- Structured data ready (schema markup)

### Recommended Next Steps
1. Generate dynamic sitemaps
2. Add structured data (JSON-LD)
3. Submit to Google Search Console
4. Optimize for keywords:
   - "rare earth manufacturer"
   - "strategic metals supplier"
   - "high purity metals"
   - "sputtering targets"
   - "battery materials supplier"

## 🧪 Testing

### Performance Testing
```bash
# Build and test performance
npm run build

# Run Lighthouse audit in browser DevTools
# Target: 90+ performance score
```

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📞 Contact Form Integration

The inquiry forms currently log to console. To integrate with email:

1. **Option A: Nodemailer** (self-hosted)
2. **Option B: SendGrid** (recommended SaaS)
3. **Option C: EmailJS** (client-side solution)
4. **Option D: Formspree** (simple form backend)

Example with Formspree:
```ts
// In InquiryForm.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  });
  // Handle response...
};
```

## 📝 License

This project is proprietary to Kaytherix Industries. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: contactus@kaytherix.com
- Phone: +91-8851294852
- WhatsApp: https://wa.me/918851294852

---

**Last Updated:** May 8, 2026  
**Status:** MVP Complete - Ready for Launch  
**Next Phase:** CMS Integration & Advanced Features
