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
		"Tailwind CSS": "bg-cyan-500 text-white",
		Express: "bg-gray-800 text-white",
		MongoDB: "bg-green-700 text-white",
		Firebase: "bg-orange-500 text-white",
		CSS: "bg-blue-300 text-white",
		HTML: "bg-red-500 text-white",
		OpenAI: "bg-green-500 text-white",
		Supabase: "bg-blue-600 text-white",
		"HubSpot CMS": "bg-orange-600 text-white",
	};

	const defaultTagColor = "bg-gray-200 text-gray-800";
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
			<img src={image ?? ""} alt={title} className="w-full h-48 object-cover" />
			<div className="p-4 flex-1">
				<h3 className="text-lg font-semibold mb-2">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</div>
			{tags && tags.length > 0 && (
				<div className="px-4 pt-3 pb-2 flex flex-wrap gap-2">
					{tags.map((tag, index) => (
						<span
							key={index}
							className={`text-xs px-2 py-1 rounded ${tagColors[tag] ?? defaultTagColor}`}
						>
							{tag}
						</span>
					))}
				</div>
			)}
			{(link || gitLink) && (
				<div className="px-4 py-3 border-t flex gap-3">
					{link && (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm px-4 py-1.5 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
						>
							View Project
						</a>
					)}
					{gitLink && (
						<a
							href={gitLink}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm px-4 py-1.5 rounded-full border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition"
						>
							View Code
						</a>
					)}
				</div>
			)}
		</div>
	);
}
