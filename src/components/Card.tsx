interface CardProps {
	title: string;
	description: string;
	image: string;
	link?: string;
	gitLink?: string;
	tags?: string[];
}

export default function Card({
	title,
	description,
	image,
	link,
	gitLink,
	tags,
}: CardProps) {
	const tagColors: Record<string, string> = {
		React: "bg-blue-500 text-white",
		TypeScript: "bg-blue-700 text-white",
		JavaScript: "bg-yellow-400 text-black",
		"Next.js": "bg-black text-white",
		"Node.js": "bg-green-600 text-white",
		Python: "bg-blue-400 text-white",
		Tailwind: "bg-cyan-500 text-white",
	};

	const defaultTagColor = "bg-gray-200 text-gray-800";
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden">
			<img src={image} alt={title} className="w-full h-48 object-cover" />
			<div className="p-4">
				<h3 className="text-lg font-semibold mb-2">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</div>
			<div className="px-4 py-2 border-t flex items-center justify-between">
				<div className="flex space-x-2">
					{link && (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline"
						>
							View Project
						</a>
					)}
					{gitLink && (
						<a
							href={gitLink}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-500 hover:underline"
						>
							View Code
						</a>
					)}
				</div>
				<div className="flex space-x-2">
					{tags &&
						tags.map((tag, index) => (
							<span
								key={index}
								className={`text-xs px-2 py-1 rounded ${tagColors[tag] ?? defaultTagColor}`}
							>
								{tag}
							</span>
						))}
				</div>
			</div>
		</div>
	);
}
