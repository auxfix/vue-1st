# Sick World Residence 🏢

A modern luxury residence website built with Nuxt 3, featuring a beautiful UI and smooth user experience.

## Features ✨

- Modern, responsive design
- Animated page transitions
- Interactive property listings
- Contact form with validation
- Filterable portfolio
- Comprehensive services showcase
- Server-side rendering (SSR)
- TypeScript support
- Automated deployment

## Tech Stack 🛠️

- Nuxt 3
- Vue 3 Composition API
- TypeScript
- ESLint
- GitHub Actions
- Animate.css
- Google Fonts (Poppins)

## Prerequisites 📋

- Node.js (v18 or higher)
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

5. Generate static site:
```bash
npm run generate
# or
yarn generate
```

## Development Guide 💻

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run typecheck` - Run TypeScript checks
- `npm run clean` - Clean build files

### Project Structure 📁

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
│   ├── portfolio.vue   # Portfolio listing
│   └── portfolio/
│       └── [id].vue    # Portfolio details
├── server/
│   └── api/
│       └── portfolio/
│           └── [id].ts # Portfolio API
├── types/
│   └── index.ts        # TypeScript interfaces
├── public/             # Static assets
├── app.vue             # App root component
└── nuxt.config.ts      # Nuxt configuration
```

## Deployment 🌐

The project is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Deployment Process

1. Push changes to the main branch
2. GitHub Actions workflow is triggered
3. Code is linted and type-checked
4. Static site is generated
5. Site is deployed to GitHub Pages

### Manual Deployment

To deploy manually:

1. Build the static site:
```bash
npm run generate
```

2. The static site will be in `.output/public`

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.
