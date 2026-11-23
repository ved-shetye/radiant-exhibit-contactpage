# radiant-exhibit-contactpage

Contact Us page for Radiant Exhibits built with Astro, Tailwind CSS, Web3Forms inquiry integration, and Calendly consultation scheduling.

## 🚀 Features

- **Hero Banner:** "Contact Us" title with responsive typography and slow-zoom background.
- **Contact Details:** Showroom address (150 Milner Ave, Unit #19, Toronto), local line, toll-free number, and direct sales email.
- **Interactive Google Maps Embed:** Location embed with 1-click directions.
- **Web3Forms Inquiry Form:** "Send Us an Inquiry" form with name, company, email, phone, reason for inquiry dropdown, notes, anti-spam honeypot, and URL parameter tracking.
- **Book a Free Consultation:** Calendly inline appointment booking widget with video consultation info.

## 📁 Project Structure

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Banner.astro              # Contact Us Hero Banner
│   │   ├── ContactSection.astro      # Address, Phones, Map Embed & Inquiry Form
│   │   ├── ConsultationSection.astro # Book a Free Consultation & Calendly Embed
│   │   ├── Navbar.astro              # Navigation bar with dropdowns & top bar
│   │   └── Footer.astro              # Radiant Exhibits footer
│   ├── layouts/
│   │   └── Layout.astro              # Base layout with ChatBot & Floating Call button
│   ├── pages/
│   │   ├── index.astro               # Contact Us page
│   │   └── thankyou.astro            # Post-submission thank you page
│   └── styles/
│       └── global.css                # Tailwind CSS v4 setup & animations
└── package.json
```

## 🧞 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the build locally |
