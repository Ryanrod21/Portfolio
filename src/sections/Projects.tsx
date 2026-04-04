import { useState } from "react";
import Card from "../components/Card";
import { FaJs, FaReact, FaNodeJs, FaHubspot } from "react-icons/fa6";
import {
	RiNextjsFill,
	RiTailwindCssFill,
	RiSupabaseFill,
	RiFirebaseFill,
} from "react-icons/ri";
import { BsTypescript, BsOpenai } from "react-icons/bs";
import { projects } from "../data/Projects";
import Python from "../assets/python.svg";
import { motion, AnimatePresence } from "framer-motion";
import { SiMongodb, SiExpress } from "react-icons/si";

const filterGroups = [
	{
		label: "Language",
		filters: [
			{ label: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
			{ label: "TypeScript", icon: <BsTypescript className="text-blue-500" /> },
			{
				label: "Python",
				icon: <img src={Python} alt="Python" className="w-4 h-4" />,
			},
		],
	},
	{
		label: "Framework",
		filters: [
			{ label: "React", icon: <FaReact className="text-cyan-400" /> },
			{ label: "Next.js", icon: <RiNextjsFill /> },
			{
				label: "Tailwind CSS",
				icon: <RiTailwindCssFill className="text-sky-400" />,
			},
			{ label: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
			{ label: "Express.js", icon: <SiExpress /> },
		],
	},
	{
		label: "Database",
		filters: [
			{ label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
			{
				label: "Supabase",
				icon: <RiSupabaseFill className="text-emerald-400" />,
			},
			{
				label: "Firebase",
				icon: <RiFirebaseFill className="text-yellow-500" />,
			},
		],
	},
	{
		label: "Service",
		filters: [
			{ label: "OpenAI", icon: <BsOpenai /> },
			{ label: "HubSpot CMS", icon: <FaHubspot className="text-orange-500" /> },
		],
	},
];

export default function Projects() {
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

	function toggleFilter(tag: string) {
		setSelectedFilters((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
		);
	}

	function clearFilters() {
		setSelectedFilters([]);
	}

	const filteredProjects =
		selectedFilters.length === 0
			? projects
			: projects.filter((project) =>
					selectedFilters.every((tag) => project.tags.includes(tag)),
				);

	return (
		<section className="py-20 bg-[#0f172a]" id="projects">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold mb-10 text-center text-white">
					Projects
				</h2>

				{/* Filter Panel */}
				<div className="bg-[#1e293b] border border-slate-700 rounded-xl px-6 py-5 mb-10 max-w-4xl mx-auto">
					{/* All button */}
					<div className="mb-4">
						<button
							onClick={clearFilters}
							className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
								selectedFilters.length === 0
									? "bg-blue-600 text-white"
									: "bg-[#0f172a] text-slate-300 hover:bg-[#1e3a6e]"
							}`}
						>
							All
						</button>
					</div>

					{/* Grouped filters */}
					<div className="space-y-3">
						{filterGroups.map((group, i) => (
							<div key={group.label}>
								{i > 0 && <div className="border-t border-slate-700 mb-3" />}
								<div className="flex items-start gap-4">
									<span className="text-xs font-medium text-slate-500 uppercase tracking-widest pt-1.5 min-w-[80px] text-right">
										{group.label}
									</span>
									<div className="flex flex-wrap gap-2">
										{group.filters.map(({ label, icon }) => {
											const isActive = selectedFilters.includes(label);
											return (
												<button
													key={label}
													onClick={() => toggleFilter(label)}
													className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition ${
														isActive
															? "bg-blue-600 text-white"
															: "bg-[#0f172a] text-slate-300 hover:bg-[#1e3a6e]"
													}`}
												>
													<span className="text-base leading-none">{icon}</span>
													{label}
												</button>
											);
										})}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Project Grid */}
				{filteredProjects.length === 0 ? (
					<p className="text-center text-gray-400">
						No projects match the selected filters.
					</p>
				) : (
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<AnimatePresence mode="popLayout">
							{filteredProjects.map((project) => (
								<motion.div
									key={project.id}
									layout
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
								>
									<Card
										title={project.title}
										description={project.description}
										image={project.image ?? ""}
										link={project.link}
										gitLink={project.gitLink}
										tags={project.tags}
									/>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				)}
			</div>
		</section>
	);
}
