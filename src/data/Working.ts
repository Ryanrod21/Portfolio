import Cardapp1 from '../assets/cardapp1.png';
import Cardapp2 from '../assets/cardapp2.png';
import cardappAI from '../assets/cardappAI.png';
import cardappAI2 from '../assets/cardappAI2.png';

export interface ProjectImage {
  src: string;
  description?: string;
}

export interface WorkingOnData {
  id: string;
  title: string;
  description: string;
  image?: ProjectImage[];
  link?: string;
  gitLink?: string;
  tags: string[];
}

export const projects: WorkingOnData[] = [
  {
    id: '1',
    title: 'Card AI App',
    description:
      'Working on making an app for card games and collections like the One Piece card game and Sports cards. The AI agent will help users find the price, market and details of each card they desire. The AI will also pull data on the markedt and the latest news.',
    tags: ['TypeScript', 'React', 'AI intergration', 'Evaluations', 'Open AI'],
    image: [
      { src: Cardapp1 },
      {
        src: Cardapp2,
        description:
          'Creating a way to search for One Piece cards, displaying image, character name, set and rarity',
      },
      {
        src: cardappAI,
        description:
          'Testing Agent tools and response. Was able to use prompts to get the the Agent to select the right tool to show the cards that is related to what I have entered. The one shot prompt response was good now I can go with this or have the AI provide with more details',
      },
      {
        src: cardappAI2,
        description:
          'Was successfully able to let the AI to search our Database tool to see if the card the user was talking about first then the websearch tool. The AI found the card but not the price so it was succefully able to run both tools to get the result the user wants. This is great because just using straight up websearch tool although it gave a great accurate response, more tokens were being spent vs doing the database search + websearch. This reduce the token cost',
      },
    ],
  },
];
