import Cardapp1 from "../assets/cardapp1.png";
import Cardapp2 from "../assets/cardapp2.png";
import cardappAI from "../assets/cardappAI.png";
import cardappAI2 from "../assets/cardappAI2.png";

export interface ProjectImage {
	src: string;
	description?:
		| string
		| {
				problem: string;
				solution: string;
		  };
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
		id: "1",
		title: "Trading Card AI Predictor App",
		description:
			"Working on making an app for card games and collections like the One Piece card game and Sports cards. The AI agent will help users find the price, market and details of each card they desire. The AI will also pull data on the markedt and the latest news.",
		tags: ["TypeScript", "React", "AI intergration", "Evaluations", "Open AI"],
		image: [
			{ src: Cardapp1 },
			{
				src: Cardapp2,
				description: {
					problem:
						"Needed a way to search One Piece cards and display relevant details in one place.",
					solution:
						"Built a search interface that queries the card database and renders image, character name, set, and rarity.",
				},
			},
			{
				src: cardappAI,
				description: {
					problem:
						"Needed to verify an AI agent could select the correct tool based on user input.",
					solution:
						"Used one shot prompting to guide the agent it correctly identified and called the right tool to surface relevant cards.",
				},
			},
			{
				src: cardappAI2,
				description: {
					problem:
						"Relying solely on web search was accurate but token-heavy and costly. Also adjust prompt for agent to select right tools for the right task.",
					solution:
						"Implemented a two-step tool chain database lookup first, using Laminar for tracing and debugging. Having the web search tool as fallback which reduced token cost while still returning complete results like card price.",
				},
			},
		],
	},
];
