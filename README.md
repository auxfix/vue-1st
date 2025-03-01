# Sick World Residence 🏢

A modern luxury residence website built with Nuxt 3, featuring a beautiful UI and smooth user experience.

## Features ✨

- Modern, responsive design
- Animated page transitions
- Interactive property listings
- Contact form with validation
- Filterable portfolio
- Comprehensive services showcase

## Tech Stack 🛠️

- Nuxt 3
- Vue 3 Composition API
- Animate.css for animations
- Google Fonts (Poppins)

## Prerequisites 📋

- Node.js (v16 or higher)
- npm or yarn

## Getting Started 🚀

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sick-world-residence.git
cd sick-world-residence
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run development server:
```bash
npm run dev
# or
yarn dev
```

4. Build for production:
```bash
npm run build
# or
yarn build
```

5. Preview production build:
```bash
npm run preview
# or
yarn preview
```

## Project Structure 📁

```
├── assets/
│   └── css/
│       └── main.css    # Global styles and variables
├── components/
│   ├── TheNavigation.vue
│   └── TheFooter.vue
├── pages/
│   ├── index.vue       # Home page
│   ├── about.vue       # About page
│   ├── services.vue    # Services page
│   └── portfolio.vue   # Portfolio page
├── public/             # Static assets
├── app.vue             # App root component
└── nuxt.config.ts      # Nuxt configuration
```

## Development Guide 💻

### Adding New Pages

Create new `.vue` files in the `pages` directory. The file name will become the route path.

### Creating Components

Add reusable components in the `components` directory. They will be auto-imported.

### Styling

- Use CSS variables defined in `assets/css/main.css`
- Follow the existing color scheme and design patterns
- Use the provided utility classes

### Best Practices

- Keep components small and focused
- Use TypeScript for better type safety
- Follow Vue 3 Composition API patterns
- Implement proper SEO meta tags

## Contributing 🤝

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.
