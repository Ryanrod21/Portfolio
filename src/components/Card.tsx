import { useState, useRef, useEffect } from "react";
import type { ProjectImage } from "../data/Working";

interface CardProps {
	title: string;
	description: string;
	image: ProjectImage[];
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
	const [open, setOpen] = useState(false);

	const scrollRef = useRef<HTMLDivElement>(null);
	const [showLeft, setShowLeft] = useState(false);
	const [showRight, setShowRight] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		const check = () => {
			setShowLeft(el.scrollLeft > 0);
			setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
		};

		check();
		el.addEventListener("scroll", check);
		window.addEventListener("resize", check);
		return () => {
			el.removeEventListener("scroll", check);
			window.removeEventListener("resize", check);
		};
	}, [tags]);

	const scrollRight = () =>
		scrollRef.current?.scrollBy({ left: 100, behavior: "smooth" });
	const scrollLeft = () =>
		scrollRef.current?.scrollBy({ left: -100, behavior: "smooth" });

	const tagColors: Record<string, string> = {
		React: "bg-blue-500 text-white",
		TypeScript: "bg-blue-700 text-white",
		JavaScript: "bg-yellow-400 text-black",
		"Next.js": "bg-green-700 text-white",
		"Node.js": "bg-green-500 text-white",
		Python: "bg-blue-400 text-white",
		"Tailwind CSS": "bg-cyan-500 text-white",
		"Express.js": "bg-gray-800 text-white",
		MongoDB: "bg-white text-green-600 border border-green-600",
		Firebase: "bg-red-500 text-white",
		CSS: "bg-blue-300 text-white",
		HTML: "bg-red-800 text-white",
		OpenAI: "bg-black text-white",
		Supabase: "bg-blue-600 text-white",
		"HubSpot CMS": "bg-orange-600 text-white",
	};

	const defaultTagColor = "bg-gray-200 text-gray-800";

	const currentImage = image[imageIndex];

	const currentDescription =
		typeof currentImage?.description === "string"
			? currentImage.description
			: typeof description === "string"
				? description
				: null;

	const problemDescription =
		typeof currentImage?.description === "object"
			? currentImage.description.problem
			: null;

	const solutionDescription =
		typeof currentImage?.description === "object"
			? currentImage.description.solution
			: null;
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
			<img
				src={currentImage.src ?? ""}
				alt={title}
				className="w-full h-40 md:h-56 object-cover object-top cursor-pointer"
				onClick={() => setIsZoomed(true)}
			/>

			{image.length > 1 && (
				<div className="flex items-center justify-center gap-3 py-2 bg-gray-50 border-b">
					<button
						onClick={() =>
							setImageIndex((prev) => (prev - 1 + image.length) % image.length)
						}
						className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-xs transition-colors"
					>
						←
					</button>
					<span className="text-xs text-gray-500">
						{imageIndex + 1} / {image.length}
					</span>
					<button
						onClick={() => setImageIndex((prev) => (prev + 1) % image.length)}
						className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-xs transition-colors"
					>
						→
					</button>
				</div>
			)}

			{isZoomed === true && (
				<div
					className="fixed inset-0 z-50 bg-black/80 flex flex-col gap-5 items-center justify-center"
					onClick={() => setIsZoomed(false)}
				>
					<img
						src={currentImage.src}
						className="object-contain rounded-lg max-h-[30vh] md:max-h-[50vh] md:max-w-[40vw] lg:max-h-[40vh] lg:max-w-[40vw] xl:max-h-[50vh] xl:max-w-[50vw]"
						onClick={(e) => e.stopPropagation()}
					/>
					<div className="w-full max-w-[80vw] bg-gray-600/80 flex flex-col rounded-md">
						{problemDescription && solutionDescription ? (
							<>
								<p className="text-white text-lg sm:text-base p-1">
									<strong>
										<u>Problem:</u>
									</strong>{" "}
									{problemDescription}
								</p>
								<p className="text-white text-lg sm:text-base p-1">
									<strong>
										<u>Solution:</u>
									</strong>{" "}
									{solutionDescription}
								</p>
							</>
						) : (
							<p className="text-white text-lg sm:text-base p-1">
								<strong>
									<u>Description:</u>
								</strong>{" "}
								{currentDescription}
							</p>
						)}
						<div className="flex items-center justify-center gap-3 py-2">
							{image.length > 1 && (
								<>
									<button
										onClick={(e) => {
											e.stopPropagation();
											setImageIndex(
												(prev) => (prev - 1 + image.length) % image.length,
											);
										}}
										className="flex-shrink-0 w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-black text-lg transition-colors"
									>
										←
									</button>
									<span className="text-lg sm:text-base text-gray-300">
										{imageIndex + 1} / {image.length}
									</span>
									<button
										onClick={(e) => {
											e.stopPropagation();
											setImageIndex((prev) => (prev + 1) % image.length);
										}}
										className="flex-shrink-0 w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-black text-lg transition-colors"
									>
										→
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			)}

			<div className="p-4 flex-1">
				<div className="flex items-center justify-between mb-2">
					<h3 className="text-lg font-semibold">{title}</h3>
					<button
						onClick={() => setOpen((prev) => !prev)}
						className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-700 transition shrink-0 ml-2"
					>
						{open ? "Hide" : "Description"}
						<svg
							className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
						>
							<path
								d="M6 9l6 6 6-6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>

				<div
					className={`overflow-hidden transition-all duration-300 ease-in-out ${
						open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					{problemDescription && solutionDescription ? (
						<>
							<p className="text-gray-600 text-sm pb-2">
								<strong>Problem:</strong> {problemDescription}
							</p>
							<p className="text-gray-600 text-sm pb-2">
								<strong>Solution:</strong> {solutionDescription}
							</p>
						</>
					) : (
						<p className="text-gray-600 text-sm pb-2">{currentDescription}</p>
					)}
				</div>
			</div>

			{tags && tags.length > 0 && (
				<div className="px-4 pt-3 pb-2 relative flex items-center gap-1">
					<div
						ref={scrollRef}
						className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					>
						{tags.map((tag, index) => (
							<span
								key={index}
								className={`text-xs px-2 py-1 rounded whitespace-nowrap flex-shrink-0 ${tagColors[tag] ?? defaultTagColor}`}
							>
								{tag}
							</span>
						))}
					</div>

					{showRight && (
						<button
							onClick={scrollRight}
							className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-xs transition-colors"
						>
							→
						</button>
					)}

					{showLeft && (
						<button
							onClick={scrollLeft}
							className="absolute left-4 flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-xs transition-colors"
						>
							←
						</button>
					)}
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
