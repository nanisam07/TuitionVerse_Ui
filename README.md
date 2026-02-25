# Tuitionverse – Frontend Platform

Modern, responsive, and high-performance frontend for the Tuitionverse home-tutor discovery platform.

This project is built with a product-first approach, focusing on performance, scalability, clean UI, and a conversion-oriented user experience.

---

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next/font for optimized typography

---

## Key Features

### Hero Section
- Product-focused layout with live tutor preview
- Animated headline and staggered content reveal
- Trust indicators for parent confidence
- Fully responsive across devices

### Pricing Section
- Monthly / Yearly toggle
- Highlighted featured plan
- Scroll-based reveal animations
- Mobile-optimized card layout

### UI System
- Reusable component architecture
- Consistent spacing, radius, and shadow system
- Accessible and responsive form controls
- Optimized typography using next/font


## Project Structure
  app
├─ layout.tsx
├─ page.tsx
├─ globals.css
└─ fonts.ts

components
├─ hero
│ └─ Hero.tsx
├─ pricing
│ └─ Pricing.tsx
└─ ui
└─ button.tsx

public
└─ images

---
## Getting Started

### 1. Install dependencies

```bash
npm install
2. Run development server
npm run dev

Application runs at:

http://localhost:3000 

3. Production build
npm run build
npm start

Customization
Update Pricing Plans

Edit:

components/pricing/Pricing.tsx
Update Hero Content

Edit:

components/hero/Hero.tsx
Theme & Typography

Edit:

app/globals.css
app/fonts.ts
Deployment

Recommended platform: Vercel

Steps:

Push repository to GitHub

Import project into Vercel

Deploy

Maintainer

Samuel Victor
Founder - Idea2Site


---

# If you want, next I can give you:

A **second internal README for developers** (with setup rules, animation conventions, component guidelines), while keeping this one **client-facing and clean**.