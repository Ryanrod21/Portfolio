import ScrubbedIn from '../assets/scrubbedDesktop.png';
import BudgetAI from '../assets/financialDesktop.jpg';
import Travel from '../assets/travel.png';
import Supplies from '../assets/supply.png';
import GameHub from '../assets/game.jpg';
import Flixx from '../assets/FlixxApp.jpg';
import Gym from '../assets/gym.png';
import Port from '../assets/port.png';
import CNM from '../assets/CNM.png';
import Cardapp1 from '../assets/cardapp1.png';
import Cardapp2 from '../assets/cardapp2.png';
import cardappAI from '../assets/cardappAI.png';
import cardappAI2 from '../assets/cardappAI2.png';
import cardappg from '../assets/cardappg.png';
import cardapps from '../assets/cardapps.png';
import cardappfail from '../assets/cardappfail.png';
import cardappfailA from '../assets/cardappfailA.png';
import cardtrade from '../assets/cardtrade.png';

export interface ProjectImage {
  src: string[];
  description?:
    | string
    | {
        description?: string;
        problem: string;
        solution: string;
      };
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image?: ProjectImage[];
  link?: string;
  gitLink?: string;
  tags: string[];
}

export const projects: ProjectData[] = [
  {
    id: '15',
    title: 'Trading Card AI Predictor App',
    description: `A card trading platform that helps collectors track their collection, monitor market prices, and make smarter trade decisions. 
                  Log and organize your cards in a personal database, stay up to date on card values, and get AI-powered insights on whether a card's value is trending up or down. 
                  Before making a deal, let the AI evaluate whether you're coming out ahead, breaking even, or getting the short end of the stick.`,
    tags: ['TypeScript', 'React', 'AI intergration', 'Evaluations', 'Open AI'],
    image: [
      { src: [Cardapp1, cardtrade] },
      {
        src: [Cardapp2],
        description: {
          description:
            'A One Piece trading card agent search app that displays card details in a clean, browsable interface. Users can quickly look up a card and see its image, character, set, and rarity at a glance.',
          problem:
            'Needed a way to search One Piece cards and display relevant details in one place. Card data was scattered across multiple sources, making it hard for the AI agent to reliably pull consistent information.',
          solution:
            'Built a search interface that queries the card database and renders image, character name, set, and rarity in a single view. This gave the AI agent a structured, reliable source of card data to draw from.',
        },
      },
      {
        src: [cardappAI],
        description: {
          description:
            "An AI agent demo that uses one shot prompting to correctly identify and call the right tool based on user input. The agent interprets the user's request and routes it to the appropriate lookup tool automatically.",
          problem:
            'Needed to verify an AI agent could reliably select the correct tool based on user input, rather than defaulting to a single tool for every query. Ambiguous prompts made this decision inconsistent early on.',
          solution:
            'Used one shot prompting to guide the agent aso it consistently identified and called the right tool to surface relevant cards. This improved the reliability of the tool selection step before scaling to more complex chains.',
        },
      },
      {
        src: [cardappAI2],
        description: {
          description:
            'An optimized AI agent that chains a database lookup with a web search fallback, cutting token cost while maintaining full result accuracy. The agent checks the internal database first and only falls back to web search when needed.',
          problem:
            "Relying solely on web search was accurate but token-heavy and costly, and the agent's prompt needed adjustment so it picked the right tool for each task. Using web search for every query was an inefficient use of tokens when much of the data already existed internally.",
          solution:
            "Implemented a two step tool chain database lookup first, using Laminar for tracing and debugging, with web search as a fallback which reduced token cost while still returning complete results like card price. Laminar's tracing made it easier to pinpoint where the agent's tool selection needed tuning.",
        },
      },
      {
        src: [cardappg],
        description: {
          description:
            'The Golden Eval test. Validates the agent returns accurate One Piece news with no collection filter applied a general query baseline test.',
          problem:
            'Needed a reliable baseline to confirm the agent fetches and structures news correctly before any user-specific filtering is introduced.',
          solution:
            'Golden eval runs a broad query with no filters, validating item count, summary quality, and source attribution against expected output.',
        },
      },
      {
        src: [cardapps],
        description: {
          description: `The Secondary Eval test. Checks the behavior of the agent when it recieves little detial about a card. `,
          problem:
            'Without an OP set specified, the agent could fail to return results or pull irrelevant data, leaving the user with an incomplete response.',
          solution:
            'Secondary eval confirms the agent still returns valid structured results across any matching cards when only a name is provided, ensuring broad queries are handled correctly.',
        },
      },
      {
        src: [cardappfail, cardappfailA],
        description: {
          description: `The Negative Eval test. Checks if the agent responds with bad input, which the agent shouldn't answer it and give a message saying invalid input. If there is any invalid inputs or made up names that the agent recieves. The agent should compare the input with any One Piece related cards and if they don't match then return nothing. Also if the users collection is empty to return nothing.`,
          problem: `Image 1 of 2. When having an empty collection or the collection showing there is somthing but its an empty string (' ') the agent would respond with something random with One Piece Cards. Second problem was when you gave the agent random input and numbpers (Example: asdfasdf 2323) the agent would try to find something that that was close to the random input `,
          solution: `Image 2 of 2. Shows that the agent responded with nothing and with that the agent passes the test. The solution for this was pretty simple, on top of the agent prompt I told the agent not to respond to any empty collections or strings or any invalid input. I also told the agent to use the websearch to match and see if it could find the card. If the agent coudln't then don't respond.
                     Having a check like this on top of the prompt is key, we don't want the agent to go through a whole proccess if it doesn't need to.`,
        },
      },
    ],
    link: 'https://tcg-investor-pink.vercel.app/',
  },
  {
    id: '1',
    title: 'CorpusNearMe a SaaS platform',
    description:
      'A website that allows clients connect with local business and platform for local businesses to manage their online presence. Having built from the ground up, I developed custom modules, optimized performance, and enhanced SEO to drive traffic and conversions. Businesses can easily update content, manage leads, and track performance.',
    tags: [
      'TypeScript',
      'React',
      'Node.js',
      'Express.js',
      'SEO',
      'SaaS',
      'NeonDB',
      'Google Authentication',
    ],
    image: [{ src: [CNM] }],
    link: 'https://corpusnearme.com',
  },

  {
    id: '4',
    title: 'Learning Platform for Nursing Students',
    description:
      'AI-driven learning platform for nursing students. Users upload study materials to generate AI-powered quizzes and flashcards, including standard, case study, and NCLEX-style questions.',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'OpenAI'],
    image: [{ src: [ScrubbedIn] }],
    link: 'https://study-app-ai.vercel.app/landing',
  },
  {
    id: '5',
    title: 'Financial Dashboard ',
    description:
      'Full-stack MERN application for analyzing financial data and generating personalized AI-driven plans. Includes user database, RESTful APIs, secure authentication, and OpenAI integration for financial insights.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'OpenAI'],
    image: [{ src: [BudgetAI] }],
    gitLink: 'https://github.com/TheRJRod/budget-AI',
  },
  {
    id: '11',
    title: 'Iron Path',
    description:
      'Full-stack gym application built with React and JavaScript on the frontend, powered by a Python backend with OpenAI and Supabase. Users get AI-generated personalized workout plans and can track their fitness progress over time.',
    tags: ['JavaScript', 'React', 'Python', 'OpenAI', 'Supabase'],
    image: [{ src: [Gym] }],
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
    image: [{ src: [Travel] }],
    link: 'https://travel-app-azure-kappa.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/travel-app.git',
  },
  {
    id: '7',
    title: 'Simple Supplies',
    description:
      'A full-stack e-commerce store built with React, Next.js, and Express.js, backed by a MongoDB database. Browse top-rated featured products, search dynamically across the catalog, and manage your cart — all wrapped in a clean, responsive UI styled with CSS and Font Awesome.',
    tags: [
      'React',
      'Next.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'CSS',
      'Font Awesome',
    ],
    image: [{ src: [Supplies] }],
    link: 'https://supplies-store.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/nextStore.git',
  },
  {
    id: '8',
    title: 'The GameHub',
    description:
      'A dynamic gaming dashboard built with React and Next.js, featuring real-time friend connectivity powered by Firebase. Search and explore games, view detailed game info, and stay connected with your network — all within a fully responsive interface backed by third-party API integration.',
    tags: ['JavaScript', 'React', 'Next.js', 'Firebase', 'APIs'],
    image: [{ src: [GameHub] }],
    link: 'https://gamer-hub-beta.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/GamerHub.git',
  },
  {
    id: '9',
    title: 'Flixx App',
    description:
      'A movie exploration platform built with vanilla JavaScript and powered by external APIs. Discover movies and TV shows, dive into cast and crew details, read reviews, and browse trending titles through smooth, touch-friendly carousels built with Swiper.js — all styled with clean CSS and Font Awesome icons.',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Font Awesome',
      'Swiper.js',
      'External APIs',
    ],
    image: [{ src: [Flixx] }],
    link: 'https://movie-app-six-kohl-38.vercel.app/',
    gitLink: 'https://github.com/Ryanrod21/movie-app.git',
  },
  {
    id: '10',
    title: 'Personal Portfolio',
    description:
      'The portfolio you are viewing right now. Built from scratch with React and TypeScript, featuring an animated Vanta.js wave background, Framer Motion transitions, filterable project cards, and a fully responsive design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vanta.js'],
    image: [{ src: [Port] }],
    gitLink: 'https://github.com/Ryanrod21/Portfolio',
  },
];
