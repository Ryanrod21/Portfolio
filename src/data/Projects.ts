import Auto from '../assets/trueAuto-desktop3.png';
import Tribus from '../assets/tribusDesktop.jpg';
import ScrubbedIn from '../assets/scrubbedDesktop.png';
import BudgetAI from '../assets/financialDesktop.jpg';
import Travel from '../assets/travel.png';
import Supplies from '../assets/supply.png';
import GameHub from '../assets/game.jpg';
import Flixx from '../assets/FlixxApp.jpg';
import Gym from '../assets/gym.png';
import Port from '../assets/port.png';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  gitLink?: string;
  tags: string[];
}

export const projects: ProjectData[] = [
  {
    id: '2',
    title: 'Automotive Website Redesign',
    description:
      "Revamped the website's look and feel to align with the brand identity and improve customer acquisition. Built reusable custom modules and optimized performance, accessibility, and UX. Integrated with HubSpot CRM for lead capture and nurturing.",
    tags: ['HubSpot CMS', 'JavaScript', 'CSS', 'SEO', 'UX'],
    image: Auto,
    link: 'https://www.trueautoprotection.com/',
  },
  {
    id: '3',
    title: 'Real Estate website',
    description:
      'Transformed an outdated website into a modern platform helping homeowners navigate warranty plans. Developed custom CMS modules with flexible layouts, interactive components, and optimized accessibility and responsiveness.',
    tags: ['HubSpot CMS', 'JavaScript', 'CSS', 'HubL', 'UX'],
    image: Tribus,
    link: 'https://tribushomewarranty.com/',
  },
  {
    id: '4',
    title: 'Learning Platform for Nursing Students',
    description:
      'AI-driven learning platform for nursing students. Users upload study materials to generate AI-powered quizzes and flashcards, including standard, case study, and NCLEX-style questions.',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'OpenAI', 'custom CSS'],
    image: ScrubbedIn,
    link: 'https://study-app-ai.vercel.app/landing',
  },
  {
    id: '5',
    title: 'Financial Dashboard ',
    description:
      'Full-stack MERN application for analyzing financial data and generating personalized AI-driven plans. Includes user database, RESTful APIs, secure authentication, and OpenAI integration for financial insights.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'OpenAI'],
    image: BudgetAI,
    gitLink: 'https://github.com/TheRJRod/budget-AI',
  },
  {
    id: '1',
    title: 'Iron Path',
    description:
      'Full-stack gym application built with React and JavaScript on the frontend, powered by a Python backend with OpenAI and Supabase. Users get AI-generated personalized workout plans and can track their fitness progress over time.',
    tags: ['JavaScript', 'React', 'Python', 'OpenAI', 'Supabase'],
    image: Gym,
    link: 'https://iron-path-five.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/Iron-Path',
  },
  {
    id: '6',
    title: 'FutureTravel',
    description:
      'AI-powered travel planning app built with Next.js and React. Users get personalized trip recommendations from OpenAI, beautiful destination imagery from the Unsplash API, and seamless data storage with Firebase.',
    tags: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Firebase',
      'OpenAI',
      'Unsplash API',
    ],
    image: Travel,
    link: 'https://travel-app-azure-kappa.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/travel-app.git',
  },
  {
    id: '7',
    title: 'Simple Supplies',
    description:
      'E-commerce store with top-rated featured products, dynamic search, and functional shopping cart.',
    tags: ['React', 'Next.js', 'MongoDB', 'JavaScript', 'CSS', 'Font Awesome'],
    image: Supplies,
    link: 'https://supplies-store.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/nextStore.git',
  },
  {
    id: '8',
    title: 'The GameHub',
    description:
      'Gaming dashboard for searching games, viewing details, and connecting with friends in real-time. Responsive dashboard with API integration.',
    tags: ['JavaScript', 'React', 'Next.js', 'Firebase', 'APIs'],
    image: GameHub,
    link: 'https://gamer-hub-beta.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/GamerHub.git',
  },
  {
    id: '9',
    title: 'Flixx App',
    description:
      'Movie exploration platform. Browse movies with cast, crew, reviews, and smooth touch-friendly carousels.',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Font Awesome',
      'Swiper.js',
      'External APIs',
    ],
    image: Flixx,
    link: 'https://movie-app-six-kohl-38.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/movie-app.git',
  },
  {
    id: '10',
    title: 'Personal Portfolio',
    description:
      'The portfolio you are viewing right now. Built from scratch with React and TypeScript, featuring an animated Vanta.js wave background, Framer Motion transitions, filterable project cards, and a fully responsive design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vanta.js'],
    image: Port,
    gitLink: 'https://github.com/Ryanrod21/yourrepo',
  },
];
