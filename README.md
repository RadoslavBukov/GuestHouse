# 🏠 Meraklii Guest House Website

A modern, responsive website for Meraklii Guest House in Smilyan, Bulgaria.

**Live Site:** https://meraklii-smilyan.com/

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Deployment](#deployment)
- [Pages & Routes](#pages--routes)
- [Key Functionalities](#key-functionalities)
- [Image Optimization](#image-optimization)
- [SEO & Performance](#seo--performance)
- [Contact & Support](#contact--support)
- [License](#license)

---

## 📖 Project Overview

Meraklii is a fully functional, static website showcasing a Bulgarian guest house with accommodations, amenities, and contact information. The site is fully responsive, supports mobile and desktop devices, and is optimized for search engines.

**Key Stats:**
- **Type:** Static Website (no database)
- **Language:** Bulgarian (Bulgarian, English support ready)
- **Hosting:** bcloud.club
- **Created By:** Radoslav Bukov

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| 📄 **HTML5** | Semantic markup and structure |
| 🎨 **CSS3** | Styling, layout, and responsive design |
| ⚙️ **JavaScript (ES6)** | Interactivity and functionality |
| 📚 **jQuery** | DOM manipulation and plugin support |
| 🎠 **OWL Carousel** | Image sliders and carousels |
| 🗂️ **Isotope** | Gallery filtering and layout |
| 🔆 **Magnific Popup** | Lightbox and image popups |
| 📐 **Bootstrap Grid** | Responsive layout framework |
| 📨 **EmailJS** | Email functionality for contact forms |
| ⭐ **Font Awesome 6** | Icon library |
| 📅 **Bootstrap Datepicker** | Date selection for bookings |
| 📋 **Chosen Select** | Enhanced dropdown menus |

---

## ✨ Features

### Core Features
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Image Gallery** - Filterable gallery with lightbox functionality
- ✅ **Room Showcase** - Detailed pages for double, triple, and quad rooms
- ✅ **Amenities Display** - Dedicated pages for different facilities (BBQ, Mehana, Relax Zone, etc.)
- ✅ **Contact Form** - Fully functional contact form using EmailJS
- ✅ **Image Sliders** - Main hero slider and room detail sliders
- ✅ **Booking Interface** - Date picker for room availability
- ✅ **Mobile Menu** - Touch-friendly navigation for mobile devices
- ✅ **Social Media Integration** - Open Graph meta tags for social sharing
- ✅ **SEO Optimized** - sitemap.xml, structured meta tags, and semantic HTML

### Advanced Features
- 📱 **Mobile-First Design** - Optimized for all screen sizes
- 🖼️ **Image Optimization** - Separate optimized images folder for performance
- 🎨 **Smooth Animations** - CSS transitions and jQuery animations
- ♿ **Accessibility** - Semantic HTML and ARIA labels
- 📊 **Analytics Ready** - Meta tags for tracking and analytics

---

## 📁 Project Structure

```
GuestHouse/
├── 📄 index.html                    # Main landing page
├── 📄 rooms.html                    # Rooms overview page
├── 📄 double_room.html              # Double room details
├── 📄 triple_room.html              # Triple room details
├── 📄 quad_room.html                # Quad room details
├── 📄 gallery.html                  # Gallery page
├── 📄 childs_corner.html            # Children's area page
├── 📄 entire_house.html             # Full house overview
├── 📄 mehana.html                   # Tavern/Mehana page
├── 📄 outside_bbq.html              # BBQ area page
├── 📄 relax_zone.html               # Relaxation area page
├── 📄 contacts.html                 # Contact page with form
├── 📄 404.html                      # Custom 404 error page
├── 🗺️ sitemap.xml                   # SEO sitemap
├── 📦 package.json                  # NPM dependencies
├── 📚 README.md                     # This file
│
├── 📁 templates/
│   ├── 📁 css/
│   │   ├── 🎨 styles.css            # Main stylesheet
│   │   ├── 🎨 custom.css            # Custom styles
│   │   ├── 🎨 404.css               # Error page styles
│   │   └── 📁 fonts/
│   │       └── 📁 FontAwesome/       # Font Awesome icons
│   └── 📁 js/
│       ├── ⚙️ template.js           # Main functionality (sliders, menus, datepickers)
│       ├── 📨 sendEmail.js          # Email sending logic (EmailJS)
│       ├── 📨 emailSender.js        # Email form handler
│       ├── 🛠️ helper.js             # Utility functions
│       ├── ❌ 404.js                # 404 page logic
│       ├── 📚 jquery.js             # jQuery library
│       ├── 🔆 jquery.magnific-popup.min.js      # Lightbox plugin
│       ├── 🎠 owl.carousel.min.js               # Carousel plugin
│       ├── 🗂️ isotope.pkgd.min.js               # Gallery filtering
│       └── 📸 imagesloaded.pkgd.min.js          # Image loading detection
│
├── 🏠 guesthouse/
│   ├── 📁 plugin/
│   │   └── 🔐 login.js              # Login/logout functionality
│   ├── 📁 content/
│   │   └── 🎨 content.css           # Additional content styles
│   └── 📁 slider/
│       ├── 🎨 slider.css            # Slider-specific styles
│       └── ⚙️ slider.js             # Slider functionality
│
├── 📸 images/                       # High-quality images
│   ├── 👶 childs_corner/
│   ├── 🏠 entire_house/
│   │   └── 🖼️ full_size/
│   ├── 🍽️ mehana/
│   ├── 🍖 outside_bbq/
│   ├── 🧘 relax_zone/
│   └── 🛏️ rooms/
│       ├── 🛏️ double/
│       ├── 👥 quadroom/
│       └── 3️⃣ triple/
│
├── 🖼️ images_optimized/             # Compressed/optimized images
│   ├── 👶 childs_corner/
│   ├── 🏠 entire_house/
│   ├── 🍽️ mehana/
│   ├── 🍖 outside_bbq/
│   ├── 🧘 relax_zone/
│   └── 🛏️ rooms/
│       ├── 🛏️ double/
│       ├── 👥 quadroom/
│       └── 3️⃣ triple/
│
├── 🎨 logo/                         # Guest house branding
├── 📷 photos/                       # Additional photo assets
├── 📦 node_modules/                 # NPM packages
└── 🔧 .git/                         # Git repository data
```

---

## 🚀 Installation & Setup

### ✅ Prerequisites
- 🟢 Node.js and npm (for dependency management)
- 🌐 A modern web browser
- 📝 Code editor (VS Code recommended)

### ⚡ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RadoslavBukov/GuestHouse.git
   cd GuestHouse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure EmailJS (Optional for local testing):**
   - 📧 The contact form uses EmailJS. Update the service configuration in [templates/js/sendEmail.js](templates/js/sendEmail.js) with your EmailJS credentials
   - 🔗 Sign up at https://www.emailjs.com/

4. **Run locally:**
   - 🖥️ Use a local server (e.g., Live Server extension in VS Code)
   - 🖥️ Or use Node.js HTTP server: `npx http-server`
   - 🌐 Visit: http://localhost:8080 (or your configured port)

---

## 📦 Dependencies

📥 Managed via `package.json`:

```json
{
  "dependencies": {
    "@emailjs/browser": "^3.11.0"
  }
}
```

**🌐 Third-party Libraries (CDN-based):**
- 📚 jQuery
- 📐 Bootstrap (grid system)
- 🎠 OWL Carousel
- 🗂️ Isotope
- 🔆 Magnific Popup
- ⭐ Font Awesome 6
- 📅 Bootstrap Datepicker
- 📋 Chosen Select

---

## 🌐 Pages & Routes

| Page | URL | Description |
|------|-----|-------------|
| 🏠 Home | `/index.html` | Main landing page with hero slider |
| 🛏️ Rooms | `/rooms.html` | Overview of all available rooms |
| 🛏️ Double Room | `/double_room.html` | Double room details and booking |
| 3️⃣ Triple Room | `/triple_room.html` | Triple room details and booking |
| 👥 Quad Room | `/quad_room.html` | Quad room details and booking |
| 🖼️ Gallery | `/gallery.html` | Complete photo gallery with filters |
| 👶 Child's Corner | `/childs_corner.html` | Kids entertainment area |
| 🏠 Entire House | `/entire_house.html` | Full property overview |
| 🍽️ Mehana (Tavern) | `/mehana.html` | Traditional tavern/dining area |
| 🍖 BBQ Area | `/outside_bbq.html` | Outdoor BBQ facilities |
| 🧘 Relax Zone | `/relax_zone.html` | Spa and relaxation amenities |
| 📞 Contacts | `/contacts.html` | Contact form and information |
| ❌ 404 Error | `/404.html` | Custom error page |

---

## 🎯 Key Functionalities

### 1. 🎠 **Hero Slider**
- Automatic carousel rotation on homepage
- Non-draggable desktop, touch-optimized mobile
- Integration with OWL Carousel

### 2. 📱 **Mobile Navigation**
- Menu cloned to mobile view
- Toggle functionality with smooth animation
- Responsive breakpoints for various devices

### 3. 🖼️ **Image Gallery**
- Isotope-based filtering by category
- Magnific Popup lightbox
- Lazy loading with ImagesLoaded library
- Optimized image preloading

### 4. 📧 **Contact Form**
- Form validation
- EmailJS integration for sending emails
- Error/success message display
- Accessible form structure

### 5. 📅 **Room Booking Interface**
- Bootstrap Datepicker for date selection
- Minimum date validation (starting from today)
- Multiple room date range selection

### 6. 🎠 **Room Detail Sliders**
- Individual image sliders for each room
- Autoplay and manual controls
- Responsive image display

### 7. ♿ **Accessibility**
- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Color contrast compliance

---

## 🖼️ Image Optimization

The project maintains two image folders:

- 🖼️ **`/images/`** - Original, high-quality images
- ⚡ **`/images_optimized/`** - Compressed versions for web delivery

**📂 Current Structure:**
- 👶 `childs_corner/` - Children's activity photos
- 🏠 `entire_house/` - Full property views
- 🍽️ `mehana/` - Tavern/dining area photos
- 🍖 `outside_bbq/` - Outdoor BBQ facility photos
- 🧘 `relax_zone/` - Spa and relaxation area photos
- 🛏️ `rooms/` - Room-specific photos (double, triple, quad)

**💡 Recommendation:** Use optimized images for production to improve load times.

---

## 🔍 SEO & Performance

### 🎯 SEO Features
- ✅ Semantic HTML5 markup
- ✅ Meta descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card integration
- ✅ LinkedIn metadata
- ✅ XML sitemap ([sitemap.xml](sitemap.xml))
- ✅ Mobile-friendly design (Mobile-First approach)
- ✅ Structured URLs with descriptive names
- ✅ Google Search Console integration
- ✅ Responsive viewport configuration

### ⚡ Performance Optimizations
- ✅ Optimized image folder for web
- ✅ Minified CSS and JavaScript
- ✅ CDN-based library delivery
- ✅ Lazy loading capabilities
- ✅ Efficient CSS media queries
- ✅ Browser caching support

### 📊 Current Metrics
- 🖥️ Hosted on bcloud.club (reliable hosting provider)
- 🔍 Indexed in Google Search Console
- 📱 Responsive across all major devices

---

## 📧 Contact Form Setup

The contact form uses **EmailJS** to send emails directly from the browser:

1. **Sign up** at https://www.emailjs.com/
2. **Create a service** (e.g., Gmail service)
3. **Create an email template**
4. **Update configuration** in [templates/js/sendEmail.js](templates/js/sendEmail.js):
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```

**📝 Form Fields:**
- 👤 Name
- 📧 Email
- 📱 Phone
- 💬 Message

---

## 🚢 Deployment

### 📦 Current Deployment
- 🖥️ **Host:** bcloud.club
- 🌐 **Domain:** https://meraklii-smilyan.com/
- 📄 **Type:** Static hosting

### 🔄 Deploying Updates
1. Commit changes to git
2. Push to main branch (if configured with auto-deploy)
3. Or manually upload files to hosting server

### 🔗 Alternative Deployment Options
- ⚡ **Vercel** - Zero-config deployment from GitHub
- 🎯 **Netlify** - Drag-and-drop or git integration
- 🐙 **GitHub Pages** - Free static hosting
- ☁️ **AWS S3 + CloudFront** - For high-traffic sites

---

## 📱 Responsive Design Breakpoints

The website is optimized for:
- 📱 **Mobile:** 320px - 767px
- 📱 **Tablet:** 768px - 1024px
- 🖥️ **Desktop:** 1025px+

Breakpoints configured in:
- [templates/css/styles.css](templates/css/styles.css)
- [templates/css/custom.css](templates/css/custom.css)

---

## 🔐 Security Notes

⚠️ **Important:** This is a static website with no backend. 

**🛡️ Security Considerations:**
- 📧 Contact form uses EmailJS (external service)
- 📄 No sensitive data stored on server
- ✅ All client-side validation only
- 📋 Review EmailJS privacy policy for data handling
- 🔒 Consider HTTPS-only (already implemented)

---

## 🐛 Troubleshooting

### 🖼️ Images Not Loading
- ✓ Check image paths (use relative paths)
- ✓ Verify images exist in `/images/` or `/images_optimized/`
- ✓ Clear browser cache (Ctrl+Shift+Delete)

### 📧 Contact Form Not Sending
- ✓ Verify EmailJS credentials are correct
- ✓ Check browser console for errors (F12)
- ✓ Ensure network requests are allowed
- ✓ Verify email service is configured in EmailJS

### 🎠 Sliders Not Working
- ✓ Check jQuery is loaded before plugins
- ✓ Verify OWL Carousel plugin is included
- ✓ Check browser console for JavaScript errors

### 📱 Mobile Menu Not Appearing
- ✓ Test in device view (F12 → Toggle Device Toolbar)
- ✓ Verify CSS media queries are loaded
- ✓ Check mobile menu container markup

---

## 👨‍💻 Developer Information

👤 **Author:** Radoslav Bukov  
📄 **Copyright:** © 2023 Radoslav Bukov  
🐙 **GitHub:** [RadoslavBukov](https://github.com/RadoslavBukov)

---

## 📄 License

📋 This project is owned and maintained by Radoslav Bukov. All rights reserved © 2023.

---

## 📸 Screenshots

![Desktop View](https://raw.githubusercontent.com/RadoslavBukov/GuestHouse/main/photos/laptop.png)
*Desktop view of the website*

![Tablet View](https://raw.githubusercontent.com/RadoslavBukov/GuestHouse/main/photos/tablet.png)
*Tablet responsive design*

![Mobile View](https://raw.githubusercontent.com/RadoslavBukov/GuestHouse/main/photos/phone.png)
*Mobile optimized interface*

![Summary](https://raw.githubusercontent.com/RadoslavBukov/GuestHouse/main/photos/summary.png)
*Complete website summary*

---

## 📞 Contact Information

**🏠 Guest House Meraklii:**
- 📱 Phone: +359 886 442 616
- 📧 Email: meraklii_smilyan@mail.bg
- 🌐 Website: https://meraklii-smilyan.com/
- 📍 Location: Smilyan, Bulgaria

---

## ✅ Changelog

- 🎉 **v1.0** (2023) - Initial website launch
- 🚀 **v1.1** - SEO and performance optimizations
- 📱 **v1.2** - Mobile responsiveness improvements
- 📧 **v1.3** - EmailJS integration for contact form

---

## 🙏 Acknowledgments

Special thanks to:
- 💖 Open source community for amazing libraries
- 🖥️ bcloud.club for reliable hosting
- 📨 EmailJS for email service integration
- 🌟 All visitors to Meraklii Guest House