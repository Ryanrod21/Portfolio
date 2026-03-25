import type { ReactNode } from "react";

import { FaReact, FaJs } from "react-icons/fa6";
import {
	RiFirebaseFill,
	RiNextjsLine,
	RiTailwindCssFill,
	RiSupabaseFill,
} from "react-icons/ri";
import { BsTypescript, BsOpenai } from "react-icons/bs";
import { FaNodeJs, FaPython, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

export interface TechData {
	id: string;
	name: string;
	icon?: ReactNode;
}

export const techStack: TechData[] = [
	{
		id: "1",
		name: "React",
		icon: <FaReact className="inline-block mr-2 text-blue-500 w-8 h-8" />,
	},
	{
		id: "2",
		name: "Next.js",
		icon: <RiNextjsLine className="inline-block mr-2 text-green-300 w-8 h-8" />,
	},
	{
		id: "3",
		name: "Tailwind CSS",
		icon: (
			<RiTailwindCssFill className="inline-block mr-2 text-teal-500 w-8 h-8" />
		),
	},
	{
		id: "4",
		name: "JavaScript",
		icon: <FaJs className="inline-block mr-2 text-yellow-500 w-8 h-8" />,
	},
	{
		id: "5",
		name: "TypeScript",
		icon: <BsTypescript className="inline-block mr-2 text-blue-600 w-8 h-8 " />,
	},
	{
		id: "6",
		name: "Node.js",
		icon: <FaNodeJs className="inline-block mr-2 text-green-500 w-8 h-8" />,
	},
	{
		id: "7",
		name: "Python",
		icon: <FaPython className="inline-block mr-2 text-blue-400 w-8 h-8" />,
	},
	{
		id: "8",
		name: "Firebase",
		icon: (
			<RiFirebaseFill className="inline-block mr-2 text-yellow-400 w-8 h-8" />
		),
	},
	{
		id: "9",
		name: "Supabase",
		icon: (
			<RiSupabaseFill className="inline-block mr-2 text-blue-500 w-8 h-8" />
		),
	},
	{
		id: "10",
		name: "MongoDB",
		icon: <SiMongodb className="inline-block mr-2 text-green-600 w-8 h-8" />,
	},
	{
		id: "11",
		name: "OpenAI",
		icon: (
			<BsOpenai className="inline-block mr-2 text-white bg-black rounded-full w-8 h-8" />
		),
	},
	{
		id: "12",
		name: "HTML5",
		icon: <FaHtml5 className="inline-block mr-2 text-orange-500 w-8 h-8" />,
	},
	{
		id: "13",
		name: "CSS3",
		icon: <FaCss3 className="inline-block mr-2 text-blue-500 w-8 h-8" />,
	},
];
