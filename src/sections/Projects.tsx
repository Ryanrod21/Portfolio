import Card from "../components/Card";
import { FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";
import { projects } from "../data/Projects";

export default function Projects() {
	return (
		<section className="py-20" id="projects">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold mb-10 text-center text-white">
					Projects
				</h2>
				<div className="flex items-center justify-center mb-10">
					<button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mb-6">
						<FaReact className="inline-block mr-2" />
						React
					</button>
					<button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mb-6 ml-4">
						<RiNextjsFill className="inline-block mr-2" />
						Next.js
					</button>
					<button className="bg-white hover:bg-white text-white px-2 py-1 rounded mb-6 ml-4">
						<RiTailwindCssFill className="inline-block mr-2 text-blue-500" />
						<span className="text-blue-500">Tailwind CSS</span>
					</button>
					<button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mb-6 ml-4">
						<FaJs className="inline-block mr-2 text-black" />
						JavaScript
					</button>
					<button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mb-6 ml-4">
						<BsTypescript className="inline-block mr-2" />
						TypeScript
					</button>
					<button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mb-6 ml-4">
						<FaNodeJs className="inline-block mr-2 text-white" />
						Node.js
					</button>
					<button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mb-6 ml-4">
						<FaPython className="inline-block mr-2 text-white" />
						Python
					</button>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<Card
							key={project.id}
							title={project.title}
							description={project.description}
							image={project.image}
							link={project.link}
							gitLink={project.gitLink}
							tags={project.tags}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
