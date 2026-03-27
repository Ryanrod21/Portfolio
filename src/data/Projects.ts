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
    id: '1',
    title: 'Interactive Scroll Animations Report Page',
    description:
      'Developed a visually engaging report page within HubSpot CMS, leveraging custom modules, JavaScript, and CSS to implement scroll-based animations. Smooth transitions and editable sections allow content editors to manage content easily.',
    tags: ['JavaScript', 'CSS', 'HubSpot CMS', 'animation libraries'],
    link: 'https://www.dsstpublicschools.org/2025-impact-report',
  },
  {
    id: '2',
    title: 'True Auto Protection',
    description:
      "Revamped the website's look and feel to align with the brand identity and improve customer acquisition. Built reusable custom modules and optimized performance, accessibility, and UX. Integrated with HubSpot CRM for lead capture and nurturing.",
    tags: ['HubSpot CMS', 'JavaScript', 'CSS', 'SEO', 'UX'],
    link: 'https://www.trueautoprotection.com/',
  },
  {
    id: '3',
    title: 'Tribus Warranty',
    description:
      'Transformed an outdated website into a modern platform helping homeowners navigate warranty plans. Developed custom CMS modules with flexible layouts, interactive components, and optimized accessibility and responsiveness.',
    tags: ['HubSpot CMS', 'JavaScript', 'CSS', 'HubL', 'UX'],
    link: 'https://tribushomewarranty.com/',
  },
  {
    id: '4',
    title: 'ScrubbedIn AI Powered Learning App',
    description:
      'AI-driven learning platform for nursing students. Users upload study materials to generate AI-powered quizzes and flashcards, including standard, case study, and NCLEX-style questions.',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'OpenAI', 'custom CSS'],
    link: 'https://study-app-ai.vercel.app/landing',
  },
  {
    id: '5',
    title: 'AI Budget Dashboard',
    description:
      'Full-stack MERN application for analyzing financial data and generating personalized AI-driven plans. Includes user database, RESTful APIs, secure authentication, and OpenAI integration for financial insights.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'OpenAI API'],
    gitLink: 'https://github.com/TheRJRod/budget-AI',
  },
  {
    id: '6',
    title: 'FutureTravel',
    description:
      'Interactive travel planning app with AI-powered personalized recommendations and high-quality images from Unsplash. Helps users plan trips effortlessly.',
    tags: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Firebase',
      'OpenAI API',
      'Unsplash API',
    ],
    link: 'https://travel-app-azure-kappa.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/travel-app.git',
  },
  {
    id: '7',
    title: 'Simple Supplies',
    description:
      'E-commerce store with top-rated featured products, dynamic search, and functional shopping cart.',
    tags: [
      'React',
      'Next.js',
      'JavaScript',
      'CSS',
      'Font Awesome',
      'External APIs',
    ],
    link: 'https://supplies-store.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/nextStore.git',
  },
  {
    id: '8',
    title: 'The GameHub',
    description:
      'Gaming dashboard for searching games, viewing details, and connecting with friends in real-time. Responsive dashboard with API integration.',
    tags: ['JavaScript', 'React', 'Next.js', 'Firebase', 'APIs'],
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
    link: 'https://movie-app-six-kohl-38.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/movie-app.git',
  },
];
