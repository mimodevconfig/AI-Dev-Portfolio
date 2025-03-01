// Import mock data instead of using fs/path which are Node.js modules
import { PostMeta, Post } from '../types/blog';

// Sample blog posts data (in a real app, this would be fetched from an API)
const blogPosts: Post[] = [
  {
    title: "Hello World: My First Blog Post",
    date: "2025-01-01",
    excerpt: "Welcome to my first blog post where I share my journey as a developer.",
    author: "John Doe",
    category: "Development",
    tags: ["React", "Web Development", "Beginners"],
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    slug: "hello-world",
    content: `
# Hello World!

Welcome to my first blog post. This is a sample post to demonstrate the MDX capabilities.

## What is MDX?

MDX is a format that lets you write JSX in your markdown documents. You can import components, such as interactive charts or alerts, and embed them within your content.

\`\`\`jsx
function Button() {
  return <button>Click me</button>;
}

<Button />
\`\`\`

## Why use MDX?

- **Component-based**: Use React components within your markdown
- **Flexible**: Combine the best of markdown and JSX
- **Powerful**: Create interactive blog posts

I hope you enjoy reading my blog posts!
    `
  },
  {
    title: "Understanding React Hooks",
    date: "2025-01-15",
    excerpt: "A deep dive into React Hooks and how they can simplify your code.",
    author: "Jane Smith",
    category: "React",
    tags: ["React", "Hooks", "JavaScript"],
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
    slug: "react-hooks",
    content: `
# Understanding React Hooks

React Hooks have revolutionized how we write React components. Let's explore them in detail.

## useState Hook

The useState hook allows you to add state to functional components:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The useEffect hook lets you perform side effects in functional components:

\`\`\`jsx
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

Hooks make our code cleaner and more reusable!
    `
  },
  {
    title: "5 Tips for a Standout Developer Portfolio",
    date: "2025-02-10",
    excerpt: "Learn how to make your developer portfolio stand out from the crowd.",
    author: "Alex Johnson",
    category: "Career",
    tags: ["Portfolio", "Career", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    slug: "portfolio-tips",
    content: `
# 5 Tips for a Standout Developer Portfolio

Your portfolio is often the first impression potential employers have of you. Here's how to make it count.

## 1. Showcase Your Best Work

Quality over quantity. Include 3-5 projects that demonstrate your range of skills.

## 2. Tell a Story

For each project, explain:
- The problem you were solving
- Your approach
- Challenges you overcame
- The results

## 3. Make it Visually Appealing

A clean, responsive design shows attention to detail.

## 4. Include a Strong About Section

Let your personality shine through. Explain your journey and what drives you.

## 5. Make it Easy to Contact You

Include multiple ways for people to reach you.

Remember, your portfolio is a living document. Keep it updated with your latest work!
    `
  },
  {
    title: "TypeScript Best Practices for 2025",
    date: "2025-03-05",
    excerpt: "Discover the latest TypeScript best practices that will make your code more maintainable and robust.",
    author: "Emily Chen",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    slug: "typescript-best-practices",
    content: `
# TypeScript Best Practices for 2025

TypeScript continues to evolve, and so do the best practices around it. Here's what you need to know in 2025.

## Use Strict Mode

Always enable strict mode in your \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

This enables a suite of type-checking flags that catch more potential errors.

## Leverage Type Inference

TypeScript's type inference is powerful. Don't add type annotations when they're unnecessary:

\`\`\`typescript
// Unnecessary
const name: string = "John";

// Better - type is inferred
const name = "John";
\`\`\`

## Use Discriminated Unions

Discriminated unions are a powerful pattern for modeling complex states:

\`\`\`typescript
type LoadingState = { status: 'loading' };
type SuccessState = { status: 'success', data: string[] };
type ErrorState = { status: 'error', error: Error };

type State = LoadingState | SuccessState | ErrorState;

function handleState(state: State) {
  switch (state.status) {
    case 'loading':
      return <Spinner />;
    case 'success':
      return <DataTable data={state.data} />;
    case 'error':
      return <ErrorMessage error={state.error} />;
  }
}
\`\`\`

## Use \`unknown\` Instead of \`any\`

The \`unknown\` type is a type-safe alternative to \`any\`:

\`\`\`typescript
// Bad
function processData(data: any) {
  data.forEach(item => console.log(item)); // No error checking
}

// Good
function processData(data: unknown) {
  if (Array.isArray(data)) {
    data.forEach(item => console.log(item)); // Safe
  }
}
\`\`\`

## Prefer Interfaces for Public APIs

Use interfaces for public APIs and type aliases for complex types:

\`\`\`typescript
// Public API
interface User {
  id: string;
  name: string;
  email: string;
}

// Complex internal type
type UserState = 
  | { status: 'active', lastLogin: Date }
  | { status: 'inactive', inactiveSince: Date };
\`\`\`

## Use Utility Types

TypeScript provides many utility types that can save you time:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Create a type without the password field
type PublicUser = Omit<User, 'password'>;

// Create a type with only the id and name
type UserPreview = Pick<User, 'id' | 'name'>;

// Create a type where all fields are optional
type PartialUser = Partial<User>;
\`\`\`

By following these best practices, you'll write more maintainable and robust TypeScript code in 2025 and beyond.
    `
  },
  {
    title: "10 AI Tools Every Developer Should Use in 2025",
    date: "2025-04-12",
    excerpt: "Discover the AI-powered tools that are revolutionizing software development workflows.",
    author: "Marcus Wong",
    category: "Tools",
    tags: ["AI", "Productivity", "Development Tools"],
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    slug: "ai-tools-for-developers",
    content: `
# 10 AI Tools Every Developer Should Use in 2025

Artificial intelligence has transformed how we write, debug, and optimize code. Here are the top AI tools that should be in every developer's toolkit in 2025.

## 1. CodePilot Pro

The evolution of GitHub Copilot has become even more powerful, now offering:
- Full function implementations based on comments
- Automated test generation
- Security vulnerability detection
- Performance optimization suggestions

\`\`\`javascript
// CodePilot Pro can generate entire functions like this:
// Function that takes an array of transactions and returns the total amount spent per category
function calculateCategoryTotals(transactions) {
  return transactions.reduce((totals, transaction) => {
    const { category, amount } = transaction;
    totals[category] = (totals[category] || 0) + amount;
    return totals;
  }, {});
}
\`\`\`

## 2. DebugGPT

This AI debugging assistant can:
- Analyze stack traces and suggest fixes
- Identify logical errors by analyzing code flow
- Explain complex bugs in simple language
- Generate minimal reproduction cases

## 3. ArchitectAI

Design entire system architectures with:
- Interactive diagrams that generate infrastructure code
- Automatic scaling recommendations
- Cost optimization analysis
- Security compliance checking

## 4. TestSage

AI-powered testing that:
- Generates comprehensive test suites
- Identifies edge cases humans might miss
- Maintains tests as your code evolves
- Provides test coverage recommendations

## 5. DocuMentor

Documentation generation that:
- Creates human-readable documentation from code
- Keeps documentation in sync with code changes
- Generates examples and use cases
- Supports multiple documentation formats

## 6. PerformanceProbe

Performance optimization that:
- Identifies bottlenecks in your code
- Suggests specific optimizations
- Benchmarks before and after changes
- Predicts scaling issues before they occur

## 7. SecuritySentinel

AI security assistant that:
- Scans code for vulnerabilities in real-time
- Suggests secure alternatives
- Provides detailed explanations of security risks
- Keeps up with the latest security threats

## 8. DataVizGenius

Data visualization assistant that:
- Recommends the best visualization for your data
- Generates visualization code
- Optimizes for accessibility
- Creates interactive dashboards

## 9. APIForge

API development assistant that:
- Designs RESTful and GraphQL APIs
- Generates OpenAPI specifications
- Creates mock servers for testing
- Suggests performance optimizations

## 10. DevOpsOracle

DevOps automation that:
- Optimizes CI/CD pipelines
- Suggests infrastructure improvements
- Automates routine maintenance tasks
- Predicts and prevents deployment issues

By incorporating these AI tools into your workflow, you'll not only save time but also improve the quality of your code and systems. The key is to use AI as a collaborator, not a replacement for your expertise and judgment.
    `
  },
  {
    title: "Web Performance Optimization Techniques for 2025",
    date: "2025-05-20",
    excerpt: "Learn the latest techniques to make your websites lightning fast in 2025.",
    author: "Sarah Johnson",
    category: "Performance",
    tags: ["Web Performance", "Optimization", "Frontend"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    slug: "web-performance-optimization",
    content: `
# Web Performance Optimization Techniques for 2025

Web performance continues to be a critical factor in user experience and SEO. Here are the most effective optimization techniques for 2025.

## Core Web Vitals in 2025

Google's Core Web Vitals have evolved. The current metrics to focus on are:

1. **Largest Contentful Paint (LCP)**: Should occur within 2.0 seconds
2. **First Input Delay (FID)**: Should be less than 50 milliseconds
3. **Cumulative Layout Shift (CLS)**: Should be less than 0.1
4. **Interaction to Next Paint (INP)**: Should be less than 150 milliseconds

## Image Optimization

### Next-Gen Formats

Use modern image formats with better compression:

\`\`\`html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
\`\`\`

### Responsive Images

Serve appropriately sized images:

\`\`\`html
<img 
  srcset="image-320w.jpg 320w, image-480w.jpg 480w, image-800w.jpg 800w" 
  sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" 
  src="image-800w.jpg" 
  alt="Description"
  loading="lazy"
>
\`\`\`

## JavaScript Optimization

### Code Splitting

Split your JavaScript bundles to load only what's needed:

\`\`\`javascript
// React example with dynamic imports
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

### Web Workers

Offload heavy computations to web workers:

\`\`\`javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({ data: complexData });
worker.onmessage = (event) => {
  const result = event.data;
  updateUI(result);
};

// worker.js
self.onmessage = (event) => {
  const data = event.data;
  const result = performComplexCalculation(data);
  self.postMessage(result);
};
\`\`\`

## CSS Optimization

### Critical CSS

Inline critical CSS and defer non-critical CSS:

\`\`\`html
<head>
  <!-- Inline critical CSS -->
  <style>
    /* Critical styles needed for above-the-fold content */
  </style>
  
  <!-- Defer non-critical CSS -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
\`\`\`

### Container Queries

Use container queries for more efficient responsive designs:

\`\`\`css
.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
\`\`\`

## Network Optimization

### HTTP/3 and QUIC

Ensure your server supports HTTP/3 and QUIC for faster connections.

### Resource Hints

Use resource hints to optimize resource loading:

\`\`\`html
<link rel="preconnect" href="https://api.example.com">
<link rel="preload" href="critical-font.woff2" as="font" type="font/woff2" crossorigin>
<link rel="prefetch" href="next-page.html">
\`\`\`

## Rendering Optimization

### Partial Hydration

Only hydrate interactive parts of your page:

\`\`\`jsx
import { Island } from 'your-framework';

function Page() {
  return (
    <div>
      <StaticContent />
      <Island component={InteractiveComponent} />
      <MoreStaticContent />
    </div>
  );
}
\`\`\`

### Streaming Server Rendering

Stream HTML to the browser for faster initial rendering:

\`\`\`javascript
// Node.js example with React 18+
app.get('/', (req, res) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['/client.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    }
  });
});
\`\`\`

By implementing these techniques, you'll create websites that not only load faster but also provide a smoother user experience, leading to better engagement, conversion rates, and search engine rankings.
    `
  },
  {
    title: "The Complete Guide to Freelance Development in 2025",
    date: "2025-06-15",
    excerpt: "Everything you need to know to succeed as a freelance developer in today's market.",
    author: "David Rodriguez",
    category: "Career",
    tags: ["Freelancing", "Career", "Business"],
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    slug: "freelance-developer-guide",
    content: `
# The Complete Guide to Freelance Development in 2025

Freelance development offers unprecedented flexibility and earning potential, but it also comes with unique challenges. This guide will help you navigate the freelance landscape in 2025.

## Getting Started

### Define Your Niche

Specializing in a specific area will help you stand out:

- Frontend development (React, Vue, Angular)
- Backend development (Node.js, Python, Ruby)
- Mobile development (React Native, Flutter)
- DevOps and cloud infrastructure
- AI/ML integration

### Build Your Portfolio

Your portfolio is your most important marketing tool:

1. Include 3-5 high-quality projects
2. Showcase problem-solving abilities
3. Highlight measurable results (e.g., "Improved site performance by 40%")
4. Include case studies with before/after comparisons

## Finding Clients

### Modern Platforms

Beyond traditional freelance platforms, consider:

- **DevMatch**: AI-powered matching for developers and clients
- **BlockWork**: Blockchain-based contracting with escrow protection
- **SpecNet**: Specialized network for niche development skills
- **GuildCraft**: Cooperative platform owned by freelancers

### Direct Outreach

Cold outreach still works when done right:

\`\`\`
Subject: Solving [Company]'s [Specific Problem]

Hi [Name],

I noticed that [Company]'s website is [specific observation about a problem or opportunity].

I've helped [similar company] solve this by [brief solution], resulting in [specific result].

Would you be open to a 15-minute call to discuss how I might help [Company] achieve similar results?

Best,
[Your Name]
\`\`\`

## Pricing Your Services

### Value-Based Pricing

Instead of hourly rates, consider value-based pricing:

1. Determine the business value of the project
2. Price based on a percentage of that value
3. Present multiple pricing tiers

Example pricing structure:

\`\`\`
Basic Package: $X
- Core functionality
- Basic design
- 30 days of support

Premium Package: $Y
- Core functionality
- Premium design
- 90 days of support
- Performance optimization

Enterprise Package: $Z
- All Premium features
- Custom integrations
- 1 year of support
- SEO optimization
\`\`\`

## Managing Projects

### Contracts

Every project needs a solid contract that includes:

- Detailed scope of work
- Milestone-based payments
- Change request process
- Intellectual property rights
- Limitation of liability

### Client Communication

Set clear expectations:

- Weekly progress updates
- Dedicated communication channel
- Response time expectations
- Demo/review schedule

## Tools of the Trade

### Project Management

- **TaskWeave**: AI-assisted project management
- **ClientPortal**: Client collaboration and approval system
- **TimeTrail**: Time tracking with automatic invoicing

### Finance Management

- **InvoiceAI**: Automated invoicing and payment reminders
- **TaxPilot**: Real-time tax calculation and filing assistance
- **ContractForge**: AI-powered contract generation and management

## Scaling Your Freelance Business

### Building a Team

When you're ready to scale:

1. Start with project-based collaborators
2. Create standardized onboarding processes
3. Develop clear communication protocols
4. Implement quality control systems

### Productizing Services

Transform custom services into products:

- Create service packages with fixed scopes and prices
- Develop reusable components and templates
- Build micro-SaaS products based on client needs

## Work-Life Balance

### Setting Boundaries

Protect your time and energy:

- Define working hours and stick to them
- Create a dedicated workspace
- Use time blocking for deep work
- Schedule regular breaks and vacations

### Continuous Learning

Stay relevant in a rapidly changing field:

- Dedicate 5 hours per week to learning
- Join developer communities
- Attend virtual conferences
- Contribute to open source projects

By following this guide, you'll be well-equipped to thrive as a freelance developer in 2025's competitive landscape. Remember that success comes not just from technical skills, but from treating your freelance work as a business with strategic planning, professional client relationships, and sustainable practices.
    `
  }
];

export const getPostSlugs = (): string[] => {
  return blogPosts.map(post => post.slug);
};

export const getPostBySlug = (slug: string): Post => {
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  
  return post;
};

export const getAllPosts = (): Post[] => {
  // Sort posts by date (newest first)
  return [...blogPosts].sort((post1, post2) => 
    (new Date(post1.date) > new Date(post2.date) ? -1 : 1)
  );
};

export const getPostsByCategory = (category: string): Post[] => {
  return getAllPosts().filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
};

export const getAllCategories = (): string[] => {
  const categories = getAllPosts().map(post => post.category);
  return Array.from(new Set(categories));
};

export const getAllTags = (): string[] => {
  const tags = getAllPosts().flatMap(post => post.tags);
  return Array.from(new Set(tags));
};

export const getRecentPosts = (count: number = 5): Post[] => {
  return getAllPosts().slice(0, count);
};

export const serializeMdx = async (source: string) => {
  // In a real implementation, this would use next-mdx-remote/serialize
  // For this browser-compatible version, we'll return a simplified structure
  return {
    compiledSource: source,
    // Add any other properties that MDXRemote expects
  };
};
