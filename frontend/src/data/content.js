// Single source of truth for every piece of copy on the site.
import linkbridge from '../assets/linkbridge.png'
import jpw from '../assets/jpw.png'
import foodDelivery from '../assets/food-delivery.png'
import fisar from '../assets/fisar.png'
import makhdoomak from '../assets/makhdoomak-logo.png'

import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import js from '../assets/skills/js.png'
import typescript from '../assets/skills/typescript.png'
import react from '../assets/skills/react.png'
import next from '../assets/skills/nextjs.png'
import java from '../assets/skills/java.png'
import node from '../assets/skills/node.png'
import github from '../assets/skills/github.png'
import docker from '../assets/skills/docker.png'
import tailwind from '../assets/skills/tailwind.png'
import aws from '../assets/skills/aws.png'
import pg from '../assets/skills/postgre.png'
import nestjs from '../assets/skills/nestjs.svg'
import express from '../assets/skills/express.png'
import python from '../assets/skills/python.png'
import sql from '../assets/skills/sql.png'
import mongodb from '../assets/skills/mongodb.png'

export const profile = {
  name: 'Muhammad Furqan Abbas',
  first: 'Furqan',
  last: 'Abbas',
  role: 'Software Engineer',
  email: 'mfurqanabbas20@gmail.com',
  phone: '+92 311 7879393',
  phoneHref: 'tel:+923117879393',
  githubUser: 'mfurqanabbas20',
  intro:
    "I'm a full-stack developer crafting scalable web applications with the MERN stack, Next.js and modern cloud tooling.",
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/mfurqanabbas20' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-furqan-abbas-870125233' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~017100bad51363e86d' },
  { label: 'Facebook', href: 'https://www.facebook.com/malikmuhammadfurqan.abbas' },
]

export const about = {
  statement:
    "I'm Furqan — a full-stack software engineer passionate about crafting meaningful, scalable digital products.",
  body:
    'With a degree in Software Engineering and hands-on experience building production web applications, I specialize in robust digital solutions that solve real-world problems. I love turning ideas into reality through clean, efficient code and intuitive user experiences.',
}

export const stats = [
  { end: 10, suffix: '+', label: 'Completed Projects' },
  { end: 15, suffix: '+', label: 'Technologies Used' },
  { end: 2, suffix: '+', label: 'Companies Worked With' },
]

export const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'JavaScript', icon: js },
  { name: 'TypeScript', icon: typescript },
  { name: 'React', icon: react },
  { name: 'Next.js', icon: next },
  { name: 'Node.js', icon: node },
  { name: 'Express', icon: express },
  { name: 'NestJS', icon: nestjs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Python', icon: python },
  { name: 'Java', icon: java },
  { name: 'SQL Server', icon: sql },
  { name: 'PostgreSQL', icon: pg },
  { name: 'AWS', icon: aws },
  { name: 'GitHub', icon: github },
  { name: 'Docker', icon: docker },
]

export const services = [
  {
    title: 'Frontend development',
    points: [
      'Responsive, pixel-perfect interfaces with React.js and Next.js',
      'Tailwind CSS design systems and reusable components',
      'Mobile-first layouts that work on every screen',
      'Micro-interactions and smooth page transitions',
    ],
  },
  {
    title: 'Backend & API development',
    points: [
      'Secure, scalable REST APIs with Node.js and Express',
      'Authentication, authorization and session management',
      'Clean business logic and modular architecture',
      'Third-party integrations — payments, email, AI services',
    ],
  },
  {
    title: 'Full-stack web apps',
    points: [
      'End-to-end MERN stack applications',
      'From database schema to production deployment',
      'SaaS and multi-tenant application experience',
      'Real-time features, dashboards and admin panels',
    ],
  },
  {
    title: 'Databases, cloud & DevOps',
    points: [
      'Schema design across MongoDB, PostgreSQL, SQL Server and MySQL',
      'Query optimization, data integrity and performance',
      'Docker containerization and reproducible builds',
      'Git-based collaboration and CI/CD workflows',
    ],
  },
]

export const servicesLead =
  'As a full-stack engineer, I turn ideas into fast, reliable products — from the first wireframe to the deployed application.'

export const experience = [
  {
    name: 'Stack360',
    role: 'Associate Software Engineer',
    date: 'July 2025 — Present',
    description: [
      'Working on SaaS-based multi-tenant applications with focus on scalability and performance.',
      'Developing and maintaining frontend using Next.js and Tailwind CSS.',
      'Collaborating with cross-functional teams to deliver secure and modular solutions.',
      'Leveraging Docker for efficient deployment and Git for collaborative version control.',
    ],
  },
  {
    name: 'KryptoMind',
    role: 'Frontend Developer Intern',
    date: 'Jun 2025 — July 2025',
    description: [
      'Developed and maintained responsive web interfaces using React.js, HTML, CSS, and JavaScript.',
      'Collaborated with the backend team to integrate RESTful APIs and ensure seamless data flow.',
      'Worked with Git for version control and participated in team-based Agile development.',
    ],
  },
]

export const experienceLead = 'The teams and products that shaped how I build software today.'

export const projects = [
  {
    title: 'Makhdoomak',
    category: 'Mobile · Marketplace',
    image: makhdoomak,
    imageFit: 'contain',
    // Source logo is 439px wide, so cap it there to stay crisp
    logoClass: 'h-auto w-[55%] max-w-[439px]',
    description:
      'A bilingual (English/Arabic) on-demand home services marketplace for the Saudi market, connecting customers with service providers through native mobile apps and an admin panel.',
    highlights: [
      'Cross-platform React Native / Expo app with full English and Arabic right-to-left support',
      'End-to-end booking with Moyasar card payments (3-D Secure), wallet or cash, promo codes and VAT-itemized pricing',
      'Open-pool job matching: requests go to approved providers and the first to accept wins',
      'NestJS + PostgreSQL API with role-based access and private S3 storage via signed URLs',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'PostgreSQL', 'AWS S3', 'Moyasar'],
    live: '', // TODO: add the live URL
  },
  {
    image: fisar,
    imageFit: 'contain',
    category: 'SaaS · Microservices',
    title: 'FiSAR',
    description:
      'A multi-tenant, microservice-based SaaS platform that helps organisations, including schools and corporates, handle GDPR Subject Access Requests end to end: it gathers a person’s data from connected systems, redacts it with AI and delivers a compliant response.',
    highlights: [
      'Per-tenant MongoDB isolation with storage quotas, MFA, one-time trials and plan-limit enforcement',
      'Media AI redaction for audio, video and images, plus manual redaction and verification workflows',
      'Google Workspace connector, per-responsibility Celery queues and presigned S3 uploads',
      'Next.js 15 SAR workflows with direct-to-S3 uploads and SSE-streamed downloads',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Celery', 'AWS S3'],
    live: '', // TODO: add the live URL
  },
  {
    image: linkbridge,
    category: 'AI · MERN Stack',
    title: 'LinkBridge',
    description:
      'An AI-powered platform connecting students with industry professionals. Teachers track final year project progress, with AI-driven FYP idea suggestions, an NLP-based peer review system, resource sharing and real-time communication.',
    stack: ['MongoDB', 'Express', 'React', 'Node', 'AI / NLP'],
    live: 'https://linkbridgeweb.vercel.app',
  },
  {
    image: jpw,
    category: 'E-commerce · Stripe',
    title: 'JPW',
    description:
      'A UK-based pressure washer store built with the MERN stack. Customers browse and buy products online with secure Stripe payment integration.',
    stack: ['MongoDB', 'Express', 'React', 'Node', 'Stripe'],
    github: 'https://github.com/mfurqanabbas20/JPW',
  },
  {
    image: foodDelivery,
    category: 'MERN Stack',
    title: 'Food Delivery Shop',
    description:
      'An online food store where customers browse by category, place orders and pay securely at checkout. Admins manage products and update order tracking status.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    github: 'https://github.com/mfurqanabbas20/Food-App',
  },
]

export const projectsLead =
  'These selected projects reflect my passion for blending clean architecture with real-world impact — from AI platforms to e-commerce stores.'

export const contactServices = [
  'Full-stack web application',
  'Frontend development',
  'Backend & API development',
  'Database design',
  'Something else',
]
