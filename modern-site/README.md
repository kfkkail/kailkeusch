# Kail Keusch - Modern Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, JavaScript, and Bootstrap 5. Features a clean design, contact form with email notifications, and comprehensive SEO optimization.

## 🚀 Features

### Design & User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Accessibility**: Keyboard navigation support and screen reader friendly
- **Performance**: Optimized loading with lazy loading and efficient CSS

### Contact Form
- **Email Notifications**: PHP backend for sending contact form submissions
- **Form Validation**: Client-side and server-side validation
- **User Feedback**: Success/error notifications with auto-dismiss
- **Spam Protection**: Input sanitization and validation

### SEO Optimization
- **Meta Tags**: Comprehensive Open Graph and Twitter Card meta tags
- **Structured Data**: JSON-LD schema markup for search engines
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Search engine crawling instructions
- **Performance**: Optimized for Core Web Vitals

### Technical Features
- **Bootstrap 5**: Modern CSS framework for responsive design
- **Font Awesome**: Professional icons throughout the site
- **Google Fonts**: Inter font family for modern typography
- **Smooth Scrolling**: Enhanced navigation experience
- **Intersection Observer**: Efficient scroll-based animations

## 📁 File Structure

```
modern-site/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── main.js         # JavaScript functionality
├── img/                # Images and assets
├── contact.php         # PHP backend for contact form
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine instructions
└── README.md           # This file
```

## 🛠️ Setup Instructions

### Option 1: Local Development
1. **Clone or download** the files to your local machine
2. **Open `index.html`** in your web browser to view the site
3. **For contact form functionality**, you'll need a local PHP server:
   ```bash
   # Using PHP's built-in server
   cd modern-site
   php -S localhost:8000
   ```
4. **Visit** `http://localhost:8000` in your browser

### Option 2: Web Hosting
1. **Upload all files** to your web hosting server
2. **Ensure PHP is enabled** on your hosting (for contact form)
3. **Update email address** in `contact.php` (line 47):
   ```php
   $to = 'your-email@example.com'; // Change this to your email
   ```
4. **Test the contact form** to ensure emails are being sent

### Option 3: Static Hosting (GitHub Pages, Netlify, etc.)
1. **Remove or comment out** the PHP contact form functionality
2. **Update the JavaScript** to use a form service like Formspree, Netlify Forms, or similar
3. **Upload to your static hosting provider**

## 📧 Contact Form Configuration

### Using PHP (Recommended for full control)
The site includes a PHP backend (`contact.php`) that:
- Validates form inputs
- Sends emails using PHP's `mail()` function
- Logs contact attempts
- Returns JSON responses

### Alternative: Form Services
If you prefer not to use PHP, you can integrate with:

**Formspree:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Netlify Forms:**
```html
<form name="contact" netlify>
```

**EmailJS:**
```javascript
// Add EmailJS script and configure
emailjs.send('service_id', 'template_id', formData);
```

## 🎨 Customization

### Colors
Update the CSS custom properties in `css/styles.css`:
```css
:root {
    --primary-color: #007bff;    /* Main brand color */
    --secondary-color: #6c757d;  /* Secondary color */
    /* ... other colors */
}
```

### Content
- **Personal Information**: Update the HTML with your details
- **Experience**: Modify the experience section with your work history
- **Projects**: Add or modify project descriptions
- **Contact**: Update contact information and social links

### Styling
- **Typography**: Change fonts in the CSS `--font-family` variable
- **Layout**: Modify section padding, margins, and spacing
- **Animations**: Adjust animation timing and effects

## 🔧 Technical Requirements

### For Full Functionality
- **Web Server**: Apache, Nginx, or similar
- **PHP**: Version 7.0 or higher (for contact form)
- **Email**: Server configured to send emails

### For Static Version
- **Web Browser**: Modern browser with ES6+ support
- **No server requirements** (except for hosting)

## 📱 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile browsers**: iOS Safari 12+, Chrome Mobile 60+

## 🚀 Performance Features

- **Lazy Loading**: Images load only when needed
- **CSS Optimization**: Efficient selectors and minimal reflows
- **JavaScript**: Event delegation and efficient DOM manipulation
- **Font Loading**: Preconnect to external font sources
- **Minification Ready**: CSS and JS can be minified for production

## 🔒 Security Considerations

- **Input Sanitization**: All form inputs are sanitized
- **CSRF Protection**: Form validation prevents common attacks
- **XSS Prevention**: Output encoding in PHP backend
- **Content Security**: Proper headers and validation

## 📈 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema for rich snippets
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawling instructions
- **Semantic HTML**: Proper heading hierarchy and semantic elements

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you need help setting up or customizing this portfolio site, feel free to reach out through the contact form on the website or directly at kail.keusch@hey.com.

---

**Built with ❤️ for modern web development**
