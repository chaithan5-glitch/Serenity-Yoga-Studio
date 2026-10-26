# Serenity Yoga Studio

A responsive website for a fictional online yoga business, built for the **CIA–2 Yoga Website Development Activity** (S-VYASA, Section Intellipaat).

Built with plain **HTML5, CSS3 and vanilla JavaScript**. No frameworks, no build step, no paid services.

> **Demo notice:** Prices, durations, statistics and testimonials are illustrative samples. The website does not process payments. The contact form validates input in the browser only and does not send or store any data.

## Project structure

```
serenity-yoga-studio/
├── index.html    page structure and content
├── style.css     design system, layout, responsive rules
├── script.js     menu, FAQ, program dialog, form validation, image fallbacks
└── README.md     this file
```

## Before you submit: replace the placeholders

1. In `index.html`, search for `your-studio-email.example`, `+91 00000 00000` and `Your studio address`, and replace them with your own details (they appear in the Contact section and the footer).
2. Social media entries are plain-text placeholders. Replace them with your own handles, or make them real links.
3. Open the website on your internet connection and confirm the photos load (see "Images" below).

## Run it locally

**Easiest way:** double-click `index.html`. It opens in your browser.

**With a local server (recommended, closer to real hosting):**

- VS Code: install the free *Live Server* extension, right-click `index.html`, choose **Open with Live Server**.
- Or, if you have Python installed, open a terminal in the project folder and run:
  ```
  python -m http.server 8000
  ```
  then visit http://localhost:8000.

An internet connection is needed for the Google Fonts and the Unsplash photos. Without it, the site still works using fallback fonts and green fallback blocks.

## Deploy on Netlify (free)

1. Create a folder named `serenity-yoga-studio` and save the four files inside it, with exactly these names: `index.html`, `style.css`, `script.js`, `README.md`.
2. Test locally first (see above).
3. Go to https://app.netlify.com/drop and sign up for a free account if asked (you can use your email or GitHub).
4. Drag the whole `serenity-yoga-studio` folder onto the "Drag and drop your site output folder here" area.
5. Wait a few seconds. Netlify shows a link such as `https://random-name-123.netlify.app`. This is your public website link.
6. Optional: open **Site configuration**, then **Change site name**, and choose something like `serenity-yoga-yourname`.
7. Verify: open the link in a new tab (and on your phone), click every menu link, open a program's **View Details**, open a FAQ, and submit the form with empty fields, then with valid data.

## Deploy on GitHub Pages (free)

1. Create a free account at https://github.com.
2. Click **+** (top right), then **New repository**. Name it `serenity-yoga-studio`, set it to **Public**, and click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Drag in `index.html`, `style.css`, `script.js` and `README.md` (the files, not the folder). Click **Commit changes**.
5. Open **Settings**, then **Pages** in the left sidebar.
6. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Choose branch **main** and folder **/ (root)**, then click **Save**.
7. Wait one to three minutes and refresh the Pages screen. A banner shows your URL:
   `https://YOUR-USERNAME.github.io/serenity-yoga-studio/`
8. Verify: open the URL, test the menu, FAQ, program dialogs and the form. If you see a 404, wait a minute and refresh. Make sure the file is called `index.html` (lowercase) and sits in the repository root.

## Images

The site uses free photos from Unsplash by URL, plus inline SVG icons for programs. If a photo does not load, the page shows a green block with a lotus mark, and the hero keeps a solid forest-green background, so nothing looks broken.

To use local images instead, create an `images/` folder, save your photos there, and change the `src` values in `index.html` and the `url(...)` in the `.hero` rule in `style.css`. Use photos you have the right to use.

## How this maps to the evaluation criteria

| Criterion (2 marks each) | Where to find it |
|---|---|
| Website content and business introduction | Hero, trust strip, About (mission, approach, benefits), Why Choose Us, FAQ |
| Presentation of yoga products and services | Programs section: five cards with icon, description, duration, price, View Details and Enroll Now; details dialog |
| Pricing and contact/order section | Pricing section (five prices and the ₹1,499 package), inquiry form with validation and program dropdown |
| Design, creativity and mobile responsiveness | Forest green, beige, sage palette; Fraunces and DM Sans type; arch image motif; breathing guide in the hero; breakpoints at 1024, 860 and 600 px |
| Website functionality and free hosting | Working hamburger menu, smooth scrolling, active nav link, FAQ accordion, dialog, form validation; Netlify and GitHub Pages steps above |

## Final requirements checklist

- [x] Navigation: logo, Home, About, Programs, Pricing, Contact, Join Now, working mobile hamburger menu
- [x] Hero with headline, description, background image, "Explore Programs" and "Start Your Journey" buttons
- [x] Trust strip, clearly labeled as illustrative
- [x] About: mission, approach, benefits, supporting images
- [x] Five program cards with name, icon, description, duration, price (₹) and button; prices labeled illustrative
- [x] Pricing: individual prices, ₹1,499 package, inclusions, Choose Plan / Enroll Now, no false payment claims
- [x] Why Choose Us: six items with icons
- [x] Contact form: name, email, optional phone, program dropdown (5 programs and the package), message, validation, success and error messages, demo labeling
- [x] Placeholder contact details clearly labeled
- [x] Sample testimonials clearly labeled as not real
- [x] FAQ: five questions, accessible accordion
- [x] Footer: logo, description, quick links, program links, contact and social placeholders, copyright
- [x] Responsive layout, semantic HTML, focus states, alt text, skip link, reduced-motion support
- [x] Separate HTML, CSS and JS files with comments
- [ ] **You still need to:** deploy the site and note your real public URL

## Demonstration script for faculty (about 5 minutes)

1. **Introduce (30 s):** "This is Serenity Yoga Studio, an online yoga business website built with HTML, CSS and JavaScript. Prices and testimonials are illustrative samples."
2. **Public URL (15 s):** Show the live Netlify or GitHub Pages link in the address bar. *(Criterion 5)*
3. **Home and content (45 s):** Scroll the hero and trust strip, then the About section: mission, approach, benefits. *(Criterion 1)*
4. **Navigation (30 s):** Click each menu link to show smooth scrolling and the highlighted link. Point out the Join Now button.
5. **Programs (60 s):** Show all five cards. Click **View Details** on Kriya to show the safety note, then **Enroll Now** to jump to the form with the program preselected. *(Criterion 2)*
6. **Pricing (30 s):** Show the five prices and the ₹1,499 package. Mention that it does not process real payments. *(Criterion 3)*
7. **Form (60 s):** Submit empty to show errors. Enter a bad email to show the format error. Submit valid data to show the confirmation, and explain it is a frontend demo. *(Criteria 3 and 5)*
8. **FAQ (20 s):** Open and close a question.
9. **Responsiveness (45 s):** Open browser DevTools (F12), toggle the device toolbar, switch to a phone width, and open the hamburger menu. Show the layout at tablet width too. *(Criterion 4)*
10. **Close (15 s):** Mention accessibility features: keyboard focus, skip link, alt text, reduced-motion support.
