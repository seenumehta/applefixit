# AppleFixit Website - Quick Start Guide

## 🎯 What You Just Got

A complete, production-ready Next.js website for AppleFixit with:
- ✅ **8 Professional Sections** (Hero, Services, Why Us, Brands, Reviews, Locations, Contact Form, Footer)
- ✅ **Mobile-Responsive Design** (works perfectly on all screen sizes)
- ✅ **Modern Animations** (smooth transitions and hover effects)
- ✅ **Form with Validation** (client & server-side)
- ✅ **API Integration Ready** (for email/database)
- ✅ **SEO Optimized** (metadata, structured data)
- ✅ **Easy to Customize** (well-organized component structure)

## ⚡ Quick Start (3 Steps)

### Step 1: Install Node.js
If you haven't already, download and install Node.js from: **https://nodejs.org/**
Choose the LTS version and follow the installer.

### Step 2: Install Dependencies
Open terminal in this project folder and run:
```bash
npm install
```
This will download all required packages (only needs to be done once).

### Step 3: Start Development Server
```bash
npm run dev
```

Then open your browser to: **http://localhost:3000**

**That's it!** 🎉 Your website is now live locally.

---

## 📚 Available Commands

```bash
# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🎨 Key Features to Explore

1. **Sticky Navigation** - Scroll to test smooth navigation
2. **Reviews Carousel** - Auto-rotates every 5 seconds (click dots to manually select)
3. **Contact Form** - Try submitting to see validation
4. **Mobile Menu** - Resize browser below 768px to see mobile hamburger menu
5. **Hover Effects** - Hover over cards and buttons for smooth animations

---

## 🔧 Customization Guide

### 1. Update Business Information
Edit `app/components/Locations.jsx`:
- Change store addresses
- Update phone numbers
- Modify opening hours
- Update Google rating

Edit `app/components/Reviews.jsx`:
- Update customer testimonials
- Add/remove reviews

### 2. Change Colors
Edit `tailwind.config.js` (search for `--color-blue`):
```js
'brand': {
  'blue': '#007AFF',  // Change to your color
}
```

### 3. Add Your Logo
Place your logo image in `public/images/` and update `app/components/Navbar.jsx`:
```jsx
<img src="/images/logo.png" alt="AppleFixit" />
```

### 4. Update Meta Information
Edit `app/layout.tsx` to change:
- Website title
- Description
- Keywords
- Open Graph images

### 5. Add/Remove Services
Edit `app/components/Services.jsx`:
```jsx
const services = [
  { name: 'Your Service', description: '...', icon: '📱' },
  // ...
];
```

---

## 📧 Setting Up Form Emails (Optional)

Currently, form submissions are logged to browser console. To send emails:

### Option 1: Use Resend (Easiest)
1. Sign up at https://resend.com (free tier available)
2. Get your API key
3. Create `.env.local` file in project root:
```
RESEND_API_KEY=your_api_key_here
```
4. Update `app/api/contact/route.js` to send emails

### Option 2: Use Gmail
1. Enable 2-factor authentication on Gmail
2. Create an "App Password"
3. Add to `.env.local`:
```
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=contact@applefixit.in
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/applefixit.git
git push -u origin main
```

2. Go to https://vercel.com
3. Click "New Project" → Import your GitHub repo
4. Click "Deploy"
5. Wait for deployment to complete
6. Get your live URL

### Custom Domain
In Vercel Dashboard → Settings → Domains:
- Add `applefixit.in`
- Add `applefixit.shop`
- Follow DNS setup instructions from your registrar

---

## 📁 File Structure Explained

```
applefixit/
├── app/
│   ├── components/        # React components (each is a section)
│   ├── api/              # Backend API routes (form handling)
│   ├── globals.css       # Global styles & animations
│   ├── layout.tsx        # Main layout (navbar, footer)
│   └── page.jsx          # Home page (imports all sections)
├── public/               # Images, icons, static files
├── package.json          # Project dependencies
├── tailwind.config.js    # Design configuration
└── README.md             # Full documentation
```

---

## 🎯 Next Steps

1. ✅ **Install Node.js**
2. ✅ **Run `npm install`**
3. ✅ **Run `npm run dev`**
4. ✅ **Test at http://localhost:3000**
5. ✅ **Customize with your info**
6. ✅ **Deploy to Vercel**

---

## 🆘 Troubleshooting

**"npm: command not found"**
→ Install Node.js from nodejs.org

**"Port 3000 already in use"**
→ Run: `npm run dev -- -p 3001`

**"Module not found"**
→ Run: `rm -rf node_modules package-lock.json` then `npm install`

**Form not submitting**
→ Check browser console (F12) for errors. API is ready for email integration.

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev

---

**Happy building! 🚀 Your AppleFixit website is ready to launch.**
