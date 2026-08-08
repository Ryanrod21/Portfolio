import Cardapp1 from '../assets/cardapp1.png';
import Cardapp2 from '../assets/cardapp2.png';
import cardappAI from '../assets/cardappAI.png';
import cardappAI2 from '../assets/cardappAI2.png';

export interface ProjectImage {
  src: string;
  description?:
    | string
    | {
        description?: string;
        problem: string;
        solution: string;
      };
}

export interface WorkingOnData {
  id: string;
  title: string;
  description?: string;
  image?: ProjectImage[];
  link?: string;
  gitLink?: string;
  tags: string[];
}

export const projects: WorkingOnData[] = [
  {
    id: '1',
    title: 'Trading Card AI Predictor App',
    description:
      'Working on making an app for card games and collections like the One Piece card game and Sports cards. The AI agent will help users find the price, market and details of each card they desire. The AI will also pull data on the market and the latest news.',
    tags: ['TypeScript', 'React', 'AI intergration', 'Evaluations', 'Open AI'],
    image: [
      { src: Cardapp1 },
      {
        src: Cardapp2,
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
        src: cardappAI,
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
        src: cardappAI2,
        description: {
          description:
            'An optimized AI agent that chains a database lookup with a web search fallback, cutting token cost while maintaining full result accuracy. The agent checks the internal database first and only falls back to web search when needed.',
          problem:
            "Relying solely on web search was accurate but token-heavy and costly, and the agent's prompt needed adjustment so it picked the right tool for each task. Using web search for every query was an inefficient use of tokens when much of the data already existed internally.",
          solution:
            "Implemented a two step tool chain database lookup first, using Laminar for tracing and debugging, with web search as a fallback which reduced token cost while still returning complete results like card price. Laminar's tracing made it easier to pinpoint where the agent's tool selection needed tuning.",
        },
      },
    ],
  },
];
