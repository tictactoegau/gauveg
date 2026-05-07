GauVeg Website Version 6
========================

This is the latest full install-ready package.

Version 6 updates:
- Logo image is separate from the GauVeg text.
- Header and footer text are real HTML text again, so the text is bold, crisp, and easy to adjust in CSS.
- New centered icon-only cow logo included:
  assets/logos/logo-header-emblem.png
- New Sattvic diet photo included:
  assets/images/sattvic-meal.png
- New Gau Seva image included and CSS realigned so the image is not cut off:
  assets/images/gau-seva.jpg

Included:
- index.html
- styles.css
- contact-form.js
- code.gs
- README.txt
- assets/

Install:
1. Upload index.html, styles.css, contact-form.js, and the assets folder to GitHub Pages or your hosting.
2. Do not upload code.gs to GitHub Pages; it belongs in Google Apps Script.
3. For the contact form:
   - Create a Google Sheet.
   - Open Extensions > Apps Script.
   - Paste code.gs.
   - Replace YOUR_EMAIL@example.com with your real email.
   - Deploy as Web App.
   - Copy the Web App URL.
   - In contact-form.js, replace PASTE_YOUR_DEPLOYED_GOOGLE_APPS_SCRIPT_URL_HERE with that URL.

PayPal donate link:
https://www.paypal.com/donate/?hosted_button_id=8T9EJ3S82WH7Y
