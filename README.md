# AppleFixit - Premium Mobile Repair & Accessories Website

A modern, professional website for AppleFixit, a premium mobile repair and accessories shop based in Gurugram, India.

## 🌟 Features

- **Modern Design**: Clean, sleek aesthetic inspired by Apple's design language with a bold, trustworthy personality
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **High Performance**: Built with Next.js for optimal speed and SEO
- **Interactive Components**: 
  - Sticky navigation bar with smooth scrolling
  - Animated hero section
  - Service cards with hover effects
  - Customer reviews carousel with auto-play
  - Contact form with validation
  - Location embeds with Google Maps
- **Brand Colors**: Deep black (#0a0a0a) + electric blue (#007AFF) + crisp white
- **Smooth Animations**: Professional transitions and micro-interactions throughout

## 📋 Sections

1. **Hero** - Full-width banner with call-to-action
2. **Services** - Grid of 6 service offerings with icons
3. **Why Choose Us** - 5 key differentiators
4. **Brands Grid** - Showcase of supported brands
5. **Customer Reviews** - Carousel with 4-5 testimonials
6. **Locations** - Two store locations with maps and hours
7. **Contact/Book Form** - Customer inquiry form with validation
8. **Footer** - Navigation links, social media, copyright

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm (or yarn/pnpm)
- A code editor (VS Code recommended)

### Installation

1. **Install Node.js** if you haven't already:
   - Download from [nodejs.org](https://nodejs.org/)
   - Choose the LTS (Long Term Support) version
   - Follow the installation wizard

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

4. **Open your browser** and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
applefixit/
├── app/
│   ├── components/
│   │   ├── Button.jsx           # Reusable button component
│   │   ├── Card.jsx             # Reusable card component
│   │   ├── SectionTitle.jsx      # Section heading component
│   │   ├── Navbar.jsx            # Sticky navigation bar
│   │   ├── Hero.jsx             # Hero section
│   │   ├── Services.jsx         # Services grid
│   │   ├── WhyChooseUs.jsx      # Why choose us section
│   │   ├── BrandsGrid.jsx       # Brands showcase
│   │   ├── Reviews.jsx          # Reviews carousel
│   │   ├── Locations.jsx        # Store locations
│   │   ├── ContactForm.jsx      # Booking form
│   │   └── Footer.jsx           # Footer
│   ├── api/
│   │   └── contact/
│   │       └── route.js         # API endpoint for form submissions
│   ├── globals.css              # Global styles and animations
│   ├── layout.tsx               # Root layout
│   └── page.jsx                 # Home page
├── public/                      # Static assets (images, icons)
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── .gitignore
```

## 🎨 Design System

### Colors
- **Primary Black**: `#0a0a0a`
- **Accent Blue**: `#007AFF`
- **White**: `#FFFFFF`
- **Light Gray**: `#f5f5f5`
- **Dark Gray**: `#333333`
- **Medium Gray**: `#999999`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)

### Spacing
- `xs`: 8px
- `sm`: 16px
- `md`: 24px
- `lg`: 32px
- `xl`: 48px
- `2xl`: 64px

### Animations
- Fade-in transitions
- Scale animations
- Hover effects on cards and buttons
- Carousel auto-play (5-second intervals)

## 🔧 Customization

### Update Brand Information

Edit brand details in individual components:
- `app/components/Navbar.jsx` - Logo and navigation
- `app/components/Locations.jsx` - Store addresses and phone numbers
- `app/components/Services.jsx` - Services offered
- `app/components/Reviews.jsx` - Customer testimonials
- `app/layout.tsx` - Website metadata (title, description)

### Change Colors

Edit the color palette in:
- `tailwind.config.js` - Theme colors
- `app/globals.css` - CSS variables and utilities

### Add New Sections

Create a new component file in `app/components/` and import it in `app/page.jsx`.

### Add Images

Place images in `public/images/` and reference them:
```jsx
<img src="/images/your-image.jpg" alt="Description" />
```

## 📧 Form Submissions

Currently, form submissions are logged to the console. To enable email notifications:

### Option 1: Using Resend (Recommended)
```bash
npm install resend
```

Update `app/api/contact/route.js`:
```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST function:
await resend.emails.send({
  from: 'noreply@applefixit.in',
  to: 'your-email@applefixit.in',
  subject: 'New Repair Booking',
  html: `<p>Name: ${body.name}</p>...`
});
```

Set environment variable: `RESEND_API_KEY=your_api_key`

### Option 2: Using Nodemailer
```bash
npm install nodemailer
```

Similar implementation in the API route.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/applefixit.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project"
4. Import your GitHub repository
5. Deploy!

### Configure Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your domain: `applefixit.in` and `applefixit.shop`
3. Follow DNS configuration instructions from your domain registrar

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Responsive grid layouts
- Touch-friendly buttons and forms
- Mobile hamburger menu
- Optimized images and font sizes

Test on mobile:
```bash
npm run dev
# Open DevTools (F12) → Device Toggle (Ctrl+Shift+M)
```

## ⚡ Performance

Current optimizations:
- Next.js image optimization
- CSS-in-JS with Tailwind
- Code splitting
- Lazy loading components

Check performance:
```bash
npm run build
npm run start
# Open DevTools → Lighthouse
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## 🔒 Security

- Form validation (client + server)
- CORS headers configured
- No sensitive data in frontend code
- Environment variables for secrets

## 📞 Support & Customization

For further customization or issues:
1. Check component-specific comments in code
2. Review Tailwind CSS documentation: [tailwindcss.com](https://tailwindcss.com)
3. Review Next.js documentation: [nextjs.org](https://nextjs.org)

## 📄 License

© 2026 AppleFixit. All rights reserved.

---

**Built with**: Next.js 14, React 18, Tailwind CSS, JavaScript

**Last Updated**: May 2026
