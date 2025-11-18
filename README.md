# Developer Portfolio

A modern, eye-catching developer portfolio website built with React and Vite, optimized for GitHub Pages deployment.

## Features

- 🎨 Modern, attractive UI with smooth animations
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎯 Smooth scrolling navigation
- 💫 Interactive elements and hover effects
- 🌈 Beautiful gradient designs
- 📧 Contact form
- 🚀 Easy GitHub Pages deployment

## Sections

- **Hero**: Eye-catching introduction with animated background
- **About**: Personal information and highlights
- **Skills**: Technology stack with progress bars
- **Projects**: Featured projects showcase
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd "Test Site"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Update Your Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update social media links
   - Modify the description

2. **About Section** (`src/components/About.jsx`):
   - Update the about text
   - Modify highlight numbers
   - Add your photo (replace placeholder)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update skills list and proficiency levels
   - Add/remove technologies

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update GitHub and live demo links
   - Add project images

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Configure form submission (currently uses alert)

### Styling

- Main colors are defined in `src/index.css` as CSS variables
- Each component has its own CSS file for easy customization
- Modify gradients, colors, and animations as needed

## Deployment to GitHub Pages

### Step 1: Update Repository Name

If your repository name is different from "Test-Site", update the `base` path in `vite.config.js`:

```js
base: '/your-repo-name/',
```

### Step 2: Build and Deploy

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build your project
- Deploy it to the `gh-pages` branch
- Make it available at `https://yourusername.github.io/your-repo-name/`

### Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. Push the `dist` folder to the `gh-pages` branch:
```bash
git subtree push --prefix dist origin gh-pages
```

Or use GitHub Actions for automatic deployment on push.

## Project Structure

```
.
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx      # Main app component
│   ├── App.css      # App styles
│   ├── index.css    # Global styles
│   └── main.jsx     # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (with animations and gradients)

## License

This project is open source and available under the MIT License.

## Support

Feel free to open an issue if you have any questions or suggestions!

