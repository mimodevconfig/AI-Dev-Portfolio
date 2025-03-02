# Developer Portfolio & Blog Template

A modern, responsive developer portfolio and blog built with React, TypeScript, and Vite. This project showcases professional experience, projects, skills, and includes a fully-featured blog with MDX support.

![Portfolio Screenshot](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop)

## 🚀 Features

- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Mode** - Automatic theme detection with manual toggle
- **Interactive UI** - Smooth animations and transitions
- **Portfolio Sections**:
  - Hero section with animated text
  - About me with professional summary
  - Experience timeline
  - Project showcase with detailed project pages
  - Skills and technologies
  - Testimonials carousel
  - Contact form with HubSpot integration
- **Blog Platform**:
  - MDX support for interactive blog posts
  - Syntax highlighting for code blocks
  - Category and tag filtering
  - Search functionality
  - Related posts
- **Performance Optimized**:
  - Code splitting and lazy loading
  - Optimized asset delivery
  - Fast page transitions

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Blog**: MDX with react-markdown and react-syntax-highlighter
- **Deployment**: Netlify/Vercel compatible

## 📋 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── blocks/      # Reusable block components
│   │   ├── blog/        # Blog-specific components
│   │   └── ui/          # UI components and animations
│   ├── content/         # Blog content in MDX format
│   ├── lib/             # Utility functions and helpers
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # TailwindCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio-blog.git
   cd portfolio-blog
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Blog Content

Blog posts are written in MDX format and stored in the `content/blog` directory. Each post includes frontmatter with metadata:

```mdx
---
title: "Understanding React Hooks"
date: "2025-01-15"
excerpt: "A deep dive into React Hooks and how they can simplify your code."
author: "Jane Smith"
category: "React"
tags: ["React", "Hooks", "JavaScript"]
coverImage: "https://example.com/image.jpg"
---

# Understanding React Hooks

React Hooks have revolutionized how we write React components...
```

## 🔧 Customization

### Changing Personal Information

Edit the data files in the `src/data` directory to update your personal information, projects, experience, and skills.

### Styling

This project uses TailwindCSS for styling. You can customize the design by editing:

- `tailwind.config.js` - For theme colors, fonts, and other design tokens
- `src/index.css` - For global styles and custom CSS

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This will generate optimized files in the `dist` directory that can be deployed to any static hosting service.

### Deployment Platforms

This project can be easily deployed to:
- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your project for serverless deployment
- **GitHub Pages**: Deploy the `dist` directory

## 🧪 Testing

```bash
npm run test
```

## 📄 License

This project is licensed under the MIT License - see below for details:

### MIT License

Copyright (c) 2025 Michael Moceri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [MDX](https://mdxjs.com/)
- [Unsplash](https://unsplash.com/) for stock images
