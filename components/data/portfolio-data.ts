import { BriefcaseBusiness, Code2, Globe2, Layers3, LucideIcon, Server, Sparkles } from 'lucide-react'
import { StaticImageData } from 'next/image'
import genAiImage1 from '@/components/ProjectImages/GenAiPorject/image1.png'
import genAiImage2 from '@/components/ProjectImages/GenAiPorject/image2.png'
import genAiImage3 from '@/components/ProjectImages/GenAiPorject/image3.png'
import genAiImage4 from '@/components/ProjectImages/GenAiPorject/image4.png'
import genAiImage5 from '@/components/ProjectImages/GenAiPorject/image5.png'
import genAiImage6 from '@/components/ProjectImages/GenAiPorject/image6.png'
import genAiImage7 from '@/components/ProjectImages/GenAiPorject/image7.png'
import genAiImage8 from '@/components/ProjectImages/GenAiPorject/image8.png'
import genAiImage9 from '@/components/ProjectImages/GenAiPorject/image9.png'

export interface ProjectItem {
  id?: string
  title: string
  type: string
  description: string
  modalDescription?: string
  tags: string[]
  features: string[]
  tone: string
  icon: LucideIcon
  coverImage?: StaticImageData | string
  images?: (StaticImageData | string)[]
  githubUrl?: string
  liveUrl?: string
}

export const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact']

export const stack = [
  'MongoDB',
  'Express.js',
  'React.js',
  'Node.js',
  'React Native',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'REST APIs',
  'Git',
]

export const skills = {
  'MERN Stack & Frontend': [
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'NativeWind',
  ],
  'Mobile & Backend APIs': [
    'React Native',
    'Expo',
    'REST APIs',
    'JWT Authentication',
    'Mongoose',
    'Firebase',
    'State Management',
    'API Architecture',
    'Better Auth',
    'Clerk'
  ],
  'Tools & Ecosystem': [
    'Git',
    'GitHub',
    'Redux Toolkit',
    'Context API',
    'RTK Query',
    'Axios',
    'Stripe',
    'Cloudinary',
    'TanStack Table',
    'WebSockets / Socket.IO',
    'Push Notifications',
    'Maps & Location',
  ],
}


export const genAiImages = [
  genAiImage1,
  genAiImage2,
  genAiImage3,
  genAiImage4,
  genAiImage5,
  genAiImage6,
  genAiImage7,
  genAiImage8,
  genAiImage9,
]

export const genAiGithubUrl = 'https://github.com/syedmuheminali/Gemani-Project'
export const genAiLiveUrl = 'https://gemani-project.vercel.app'

export const projects: ProjectItem[] = [
  {
    title: 'Gen AI + Full Stack Web Development Project | React, Node, JWT, Gemini',
    type: 'AI / SaaS',
    description: 'An AI-powered SaaS application featuring automated resume analysis, personalized interview preparation strategies, and secure authentication.',
    modalDescription: 'Full-stack AI SaaS application leveraging Gemini API to analyze candidate profiles, generate tailored interview strategies, and provide instant resume feedback with authentication and JWT.',
    tags: ['Vite', 'SASS', 'Node.js', 'Express.js', 'Mongodb', 'Gemini Api'],
    features: ['Authentication', 'Download Resume', 'Generate Interview Strategy'],
    tone: 'from-violet-100 via-white to-sky-100',
    icon: Code2,
    coverImage: genAiImage6,
    images: genAiImages,
    githubUrl: genAiGithubUrl,
    liveUrl: genAiLiveUrl,
  },
  {
    title: 'E-Commerce Platform',
    type: 'Commerce',
    description: 'A conversion-focused shopping experience with fast discovery and seamless checkout.',
    modalDescription: 'Modern e-commerce platform built with React, Node.js, and Stripe. Features product filtering, real-time cart updates, secure checkout, and comprehensive admin dashboard.',
    tags: ['React', 'Node.js', 'Stripe'],
    features: ['Authentication', 'Payment integration', 'Admin dashboard'],
    tone: 'from-orange-100 via-white to-rose-100',
    icon: Globe2,
    coverImage: undefined, // Yahan aap card cover image add kar sakte hain (e.g. image import karke)
    images: [], // Yahan aap modal ke screenshots add kar sakte hain (e.g. [image1, image2])
    githubUrl: 'https://github.com/syedmuheminali', // Yahan apna GitHub link lagayein
    liveUrl: 'https://example.com', // Yahan apna Live Demo link lagayein
  },
  {
    title: 'School Management System',
    type: 'Productivity',
    description: 'A thoughtful command center for students, teachers, and administrators.',
    modalDescription: 'Comprehensive school management portal built with Next.js and MongoDB. Enables role-based access control, attendance and grade tracking, interactive analytics charts, and REST API endpoints.',
    tags: ['Next.js', 'MongoDB', 'Charts'],
    features: ['Role-based access', 'Analytics', 'REST API'],
    tone: 'from-emerald-100 via-white to-teal-100',
    icon: Layers3,
    coverImage: undefined, // Yahan aap card cover image add kar sakte hain
    images: [], // Yahan aap modal ke screenshots add kar sakte hain
    githubUrl: 'https://github.com/syedmuheminali', // Yahan apna GitHub link lagayein
    liveUrl: 'https://example.com', // Yahan apna Live Demo link lagayein
  },
  {
    title: 'MotorCar Service Platform',
    type: 'Marketplace',
    description: 'A service booking platform connecting drivers with trusted automotive experts.',
    modalDescription: 'On-demand automotive service marketplace built with TypeScript and Express. Features interactive map search, service provider profiles, appointment scheduling, and customer reviews.',
    tags: ['TypeScript', 'Express', 'Maps'],
    features: ['Booking flow', 'Provider profiles', 'Location search'],
    tone: 'from-slate-200 via-white to-blue-100',
    icon: BriefcaseBusiness,
    coverImage: undefined, // Yahan aap card cover image add kar sakte hain
    images: [], // Yahan aap modal ke screenshots add kar sakte hain
    githubUrl: 'https://github.com/syedmuheminali', // Yahan apna GitHub link lagayein
    liveUrl: 'https://example.com', // Yahan apna Live Demo link lagayein
  },
]

export const services = [
  ['MERN Full-Stack Development', 'Scalable full-stack web applications with React, Node.js, Express, and MongoDB.', Globe2],
  ['React Native Mobile Apps', 'Modern cross-platform iOS and Android apps built with React Native and Expo.', Layers3],
  ['SaaS & Web Platforms', 'Full-stack SaaS solutions with secure authentication, dashboards, and scalable database schemas.', Sparkles],
  ['REST APIs & Backend Engineering', 'Robust backend services, MongoDB schemas, JWT authentication, and dependable RESTful APIs.', Server],
] as const

export const reasons = [
  ['Modern development', 'I build applications using modern technologies and scalable architecture.'],
  ['Clean & maintainable code', 'Reusable components, clear structure and a codebase your team can own.'],
  ['Business-focused development', 'I connect technical decisions to the real problem the product needs to solve.'],
  ['Performance & user experience', 'Fast, responsive and accessible digital experiences across devices.'],
]

export const experience = [
  {
    company: 'Enkelbok',
    location: 'Karachi, Pakistan',
    role: 'Mid-Level Developer',
    dates: 'February 2024 — Present',
    description:
      'A digital accounting and bookkeeping platform helping small and medium-sized businesses manage invoices, expenses, payroll, and financial reporting.',
    highlights: [
      'Implemented English and Swedish localization across the application for international users.',
      'Developed a real-time chat module connecting support accounts and users.',
      'Built deadline reminders with automated email alerts and in-app notifications.',
      'Migrated legacy React Table to TanStack Table v8, improving sorting, filtering, pagination, and state management.',
      'Refactored layouts for responsive behavior and cross-browser compatibility.',
      'Built reusable React components and integrated REST APIs with Axios and reusable hooks.',
      'Optimized frontend rendering and resolved UI, API integration, and stability issues.',
    ],
  },
  {
    company: 'TecStik',
    location: 'Karachi, Pakistan',
    role: 'Associate Software Engineer',
    dates: 'May 2023 — January 2024',
    description: 'Delivered modern JavaScript web and mobile solutions for startup and enterprise clients.',
    highlights: [
      'Delivered web and mobile client features within agreed timelines and project requirements.',
      'Built full-stack applications using MongoDB, Express.js, React.js, and Node.js.',
      'Developed responsive Android application interfaces using React Native.',
      'Integrated REST APIs across web and mobile applications with RTK Query and Axios.',
      'Implemented application state architecture with Redux Toolkit.',
      'Translated client requirements into functional UI and collaborated with the team on delivery.',
      'Resolved frontend, API integration, and UI issues to maintain application quality.',
    ],
  },
  {
    company: 'Deskwork Solution',
    location: 'Karachi, Pakistan',
    role: 'MERN Stack Developer Intern',
    dates: 'January 2023 — March 2023',
    description: 'Completed a hands-on internship building full-stack web applications with the MERN stack.',
    highlights: [
      'Worked on full-stack web application features using MongoDB, Express.js, React.js, and Node.js.',
      'Developed reusable, responsive frontend components in React.js.',
      'Assisted with backend development using Node.js and Express.js.',
      'Integrated APIs and managed application data using MongoDB.',
      'Collaborated with senior developers to deliver scalable web applications.',
    ],
  },
]
