export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  isoDate: string
  readTime: string
  category: string
  tags: string[]
  coverImage: string
  featured?: boolean
  author: {
    name: string
    role: string
    avatar: string
  }
  content: {
    hook: string
    initialFocus: string[]
    realizationQuote: string
    theProblems: string[]
    coreEpiphany: string
    folderBreakdown: {
      folder: string
      role: string
      color: string
    }[]
    roadmapStages: {
      stage: string
      title: string
      points: string[]
      highlight?: string
    }[]
    takeaways: string[]
    discussionQuestion: string
  }
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'backend-architecture-mistake',
    title: 'I Made This Backend Mistake for 2 Years. Maybe You’re Making It Too. 👀',
    excerpt:
      'I thought learning backend meant learning Node.js and Express.js with basic CRUD. But ignoring backend architecture turned maintaining APIs into a nightmare. Here is the 5-stage roadmap I wish I had followed from Day 1.',
    date: 'Oct 21, 2026',
    isoDate: '2026-10-21',
    readTime: '5 min read',
    category: 'Backend Architecture',
    featured: true,
    tags: [
      'Node.js',
      'Express.js',
      'Clean Architecture',
      'MongoDB',
      'REST APIs',
      'System Design',
    ],
    coverImage: '/blogs/backend-architecture-mistake.jpg',
    author: {
      name: 'Syed Muhemin Ali',
      role: 'Full Stack & MERN Developer',
      avatar: '/profile-photo.jpeg',
    },
    content: {
      hook: `I thought learning backend meant learning Node.js and Express.js.\nSo I focused on:`,
      initialFocus: [
        'Creating routes',
        'Building CRUD APIs',
        'Connecting MongoDB',
        'Sending JSON responses',
      ],
      realizationQuote:
        'But I ignored one important thing: Backend Architecture.\nMy APIs worked, but maintaining them was a nightmare.',
      theProblems: [
        '1,500+ lines in a single server.js',
        'Database queries inside route handlers',
        'Business logic duplicated across multiple endpoints',
        'Debugging became harder with every new feature',
      ],
      coreEpiphany:
        'Writing backend code is easy. Building a maintainable backend is the real skill.',
      folderBreakdown: [
        {
          folder: 'node_modules',
          role: 'Contains all installed third-party packages and dependencies.',
          color: 'from-blue-500/20 to-blue-500/5 text-blue-500',
        },
        {
          folder: 'config/',
          role: 'Contains files for database connections, env variables, and third-party setups.',
          color: 'from-sky-500/20 to-sky-500/5 text-sky-500',
        },
        {
          folder: 'controllers/',
          role: 'Handles incoming HTTP requests, input processing, and sends formatted API responses.',
          color: 'from-emerald-500/20 to-emerald-500/5 text-emerald-500',
        },
        {
          folder: 'middlewares/',
          role: 'Functions that run during request-response cycle (e.g. auth guard, rate limit, logging).',
          color: 'from-teal-500/20 to-teal-500/5 text-teal-500',
        },
        {
          folder: 'models/',
          role: 'Defines database schemas, relationships, indexing, and data structures.',
          color: 'from-indigo-500/20 to-indigo-500/5 text-indigo-500',
        },
        {
          folder: 'routes/',
          role: 'Defines API endpoints (URI patterns) and maps them cleanly to controllers.',
          color: 'from-cyan-500/20 to-cyan-500/5 text-cyan-500',
        },
        {
          folder: 'services/',
          role: 'Contains core business logic, complex calculations, database transactions & API integrations.',
          color: 'from-amber-500/20 to-amber-500/5 text-amber-500',
        },
        {
          folder: 'utils/',
          role: 'Reusable utility functions, helper methods, response formatters used across the app.',
          color: 'from-lime-500/20 to-lime-500/5 text-lime-500',
        },
        {
          folder: 'app.js & server.js',
          role: 'Main entry points to initialize the server, register middleware, and start listeners.',
          color: 'from-teal-500/20 to-teal-500/5 text-teal-400',
        },
        {
          folder: '.env',
          role: 'Stores secret keys, database URIs, API tokens, and environment configurations safely.',
          color: 'from-yellow-500/20 to-yellow-500/5 text-yellow-500',
        },
      ],
      roadmapStages: [
        {
          stage: '1️⃣',
          title: 'Core Foundations',
          points: [
            'JavaScript Event Loop & Promises',
            'HTTP, status codes & REST APIs',
            'Basic networking & terminal commands',
          ],
          highlight: 'Master the underlying asynchronous flow before touching frameworks.',
        },
        {
          stage: '2️⃣',
          title: 'Backend Fundamentals',
          points: [
            'Node.js & Express.js',
            'Request/Response lifecycle',
            'MongoDB & Mongoose',
            'Environment variables & security hygiene',
          ],
          highlight: 'Understand how every incoming request flows through middleware to response.',
        },
        {
          stage: '3️⃣',
          title: 'Clean Architecture',
          points: [
            'routes/ → Define API endpoints',
            'controllers/ → Handle requests and responses',
            'services/ → Keep business logic separated',
            'models/ → Define database schemas',
            'middlewares/ → Handle authentication and validation',
            'config/ → Manage database and app configuration',
          ],
          highlight: 'Separation of concerns is the difference between junior and senior backend engineers.',
        },
        {
          stage: '4️⃣',
          title: 'Production-Ready APIs',
          points: [
            'JWT authentication & refresh tokens',
            'Zod/Joi validation',
            'Centralized error handling',
            'Database indexing & query optimization',
            'Logging (Winston/Pino) and security headers (Helmet, CORS)',
          ],
          highlight: 'A production API protects itself against invalid inputs, crashes, and leaks.',
        },
        {
          stage: '5️⃣',
          title: 'Scalable Backend Systems',
          points: [
            'Redis caching & rate limiting',
            'Background jobs & message queues (BullMQ, Kafka/RabbitMQ)',
            'Docker & CI/CD automation',
            'System design, microservices & load testing (k6)',
          ],
          highlight: 'Scale by decoupling compute and queuing heavy operations asynchronously.',
        },
      ],
      takeaways: [
        'You don’t need to master everything on Day 1.',
        'But you should build good habits from Day 1.',
        'Because working code gets your API running. Clean architecture helps you maintain it. 🚀',
      ],
      discussionQuestion:
        'What’s one backend concept you wish you had learned earlier?',
    },
  },
  {
    id: '2',
    slug: 'nextjs-15-production-architecture',
    title: 'Building Enterprise Full-Stack Applications with Next.js App Router',
    excerpt:
      'A deep dive into React Server Components, Server Actions vs API Routes, and how to structure a clean, production-grade Next.js enterprise codebase.',
    date: 'Oct 14, 2026',
    isoDate: '2026-10-14',
    readTime: '6 min read',
    category: 'Full Stack',
    tags: ['Next.js', 'React 19', 'TypeScript', 'Server Actions', 'Web Dev'],
    coverImage: '/placeholder.jpg',
    author: {
      name: 'Syed Muhemin Ali',
      role: 'Full Stack & MERN Developer',
      avatar: '/profile-photo.jpeg',
    },
    content: {
      hook: `Next.js App Router transformed how we think about full stack React applications. But with great power comes new architectural challenges.`,
      initialFocus: [
        'Organizing route groups and parallel routes',
        'Separating Server Components from Client Components',
        'Optimizing data fetching with caching & revalidation',
        'Secure mutation flows with Server Actions and Zod',
      ],
      realizationQuote:
        'Client-side state should be minimal. Lean on server state, caching, and streaming boundaries.',
      theProblems: [
        'Over-using "use client" at top-level layouts',
        'Exposing sensitive credentials in client-side bundles',
        'Uncontrolled re-renders and bloated client bundle sizes',
      ],
      coreEpiphany:
        'Keep the client light, let the server do the heavy lifting, and structure components by domain.',
      folderBreakdown: [
        {
          folder: 'app/(auth)',
          role: 'Isolated route group for authentication pages without global layout chrome.',
          color: 'from-blue-500/20 to-blue-500/5 text-blue-500',
        },
        {
          folder: 'app/(dashboard)',
          role: 'Protected application workspace with shared sidebar and session state.',
          color: 'from-indigo-500/20 to-indigo-500/5 text-indigo-500',
        },
        {
          folder: 'lib/actions/',
          role: 'Server actions handling business mutations with Zod input validation.',
          color: 'from-emerald-500/20 to-emerald-500/5 text-emerald-500',
        },
        {
          folder: 'components/ui/',
          role: 'Atomic, headless design system primitives built with Tailwind CSS.',
          color: 'from-cyan-500/20 to-cyan-500/5 text-cyan-500',
        },
      ],
      roadmapStages: [
        {
          stage: '1️⃣',
          title: 'Component Boundary Segregation',
          points: [
            'Push "use client" as far down the tree as possible',
            'Pass server components as children/props to client wrappers',
          ],
          highlight: 'Drastically reduces JS bundle delivered to users.',
        },
        {
          stage: '2️⃣',
          title: 'Robust Validation & Mutations',
          points: [
            'Zod validation on every Server Action payload',
            'Centralized error boundary and toast notification handling',
          ],
        },
      ],
      takeaways: [
        'Leverage React Server Components for maximum performance.',
        'Validate rigorously on the server boundary.',
      ],
      discussionQuestion:
        'Are you using Server Actions or API routes for your primary mutation layer?',
    },
  },
  {
    id: '3',
    slug: 'react-native-state-and-architecture',
    title: 'Modern React Native & Expo Architecture for Smooth 60FPS Mobile Apps',
    excerpt:
      'Lessons learned shipping production iOS & Android apps with React Native, Expo, Redux Toolkit, and NativeWind without performance stutter.',
    date: 'Oct 02, 2026',
    isoDate: '2026-10-02',
    readTime: '4 min read',
    category: 'Mobile Development',
    tags: ['React Native', 'Expo', 'Redux Toolkit', 'Mobile', 'iOS', 'Android'],
    coverImage: '/placeholder.jpg',
    author: {
      name: 'Syed Muhemin Ali',
      role: 'Full Stack & MERN Developer',
      avatar: '/profile-photo.jpeg',
    },
    content: {
      hook: `Cross-platform mobile development with React Native is fast to build, but keeping it smooth at 60 FPS requires disciplined state and asset architecture.`,
      initialFocus: [
        'Expo Router for file-based native navigation',
        'FlashList instead of FlatList for heavy data feeds',
        'Normalized Redux Toolkit & RTK Query caching',
        'NativeWind for cohesive cross-platform styling',
      ],
      realizationQuote:
        'Unnecessary JS thread work translates directly to dropped frames on mobile devices.',
      theProblems: [
        'Giant non-memoized renders during fast scroll',
        'Large unoptimized image assets choking memory',
        'Deep prop drilling triggering cascade re-renders',
      ],
      coreEpiphany:
        'Optimize memory, offload work to native threads, and cache API responses aggressively.',
      folderBreakdown: [
        {
          folder: 'app/',
          role: 'File-based navigation routes powered by Expo Router.',
          color: 'from-violet-500/20 to-violet-500/5 text-violet-500',
        },
        {
          folder: 'src/services/',
          role: 'RTK Query API definitions with automatic cache invalidation.',
          color: 'from-amber-500/20 to-amber-500/5 text-amber-500',
        },
        {
          folder: 'src/hooks/',
          role: 'Custom hooks encapsulating hardware sensors and native permissions.',
          color: 'from-sky-500/20 to-sky-500/5 text-sky-500',
        },
      ],
      roadmapStages: [
        {
          stage: '1️⃣',
          title: 'Native Rendering Hygiene',
          points: [
            'Use Shopify FlashList for virtualized lists',
            'Memoize expensive callbacks and components',
          ],
        },
        {
          stage: '2️⃣',
          title: 'Offline & Cache First',
          points: [
            'AsyncStorage / MMKV persistence for token & preferences',
            'RTK Query optimistic updates for instant UI response',
          ],
        },
      ],
      takeaways: [
        'Profile on low-end Android devices early.',
        'Clean native code structures make cross-platform apps feel truly native.',
      ],
      discussionQuestion:
        'What is your go-to state management tool for React Native apps in 2026?',
    },
  },
]

export const BLOG_CATEGORIES = [
  'All',
  'Backend Architecture',
  'Full Stack',
  'Mobile Development',
]
