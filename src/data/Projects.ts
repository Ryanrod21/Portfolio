export interface ProjectData {
	id: string;
	title: string;
	description: string;
	image: string;
	link: string;
	gitLink: string;
	tags: string[];
}

export const projects: ProjectData[] = [
	{
		id: "1",
		title: "Test Title",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed at felis a enim efficitur bibendum.",
		image: "https://via.placeholder.com/400x200",
		link: "https://example.com",
		gitLink: "https://github.com",
		tags: ["React", "TypeScript", "Tailwind"],
	},
	{
		id: "2",
		title: "Test Title 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed at felis a enim efficitur bibendum.",
		image: "https://via.placeholder.com/400x200",
		link: "https://example.com",
		gitLink: "https://github.com",
		tags: ["Next.js", "JavaScript", "Node.js"],
	},
	{
		id: "3",
		title: "Test Title 3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed at felis a enim efficitur bibendum.",
		image: "https://via.placeholder.com/400x200",
		link: "https://example.com",
		gitLink: "https://github.com",
		tags: ["Python", "Django", "Tailwind"],
	},
	{
		id: "4",
		title: "Test Title 4",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed at felis a enim efficitur bibendum.",
		image: "https://via.placeholder.com/400x200",
		link: "https://example.com",
		gitLink: "https://github.com",
		tags: ["React", "TypeScript", "Tailwind"],
	},
];
