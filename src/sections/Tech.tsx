import Slider from "../components/Slider";
import { techStack } from "../data/Tech";

export default function Tech() {
	const frontendTech = techStack.filter((tech) => tech.for === "Frontend");
	const backendTech = techStack.filter((tech) => tech.for === "Backend");
	const cmsTech = techStack.filter((tech) => tech.for === "CMS");
	const languageTech = techStack.filter((tech) => tech.for === "Language");
	const databaseTech = techStack.filter((tech) => tech.for === "Database");

	return (
		<section className="py-20">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold mb-10 text-center text-white">
					Technologies
				</h2>
				<p className="text-center text-white mb-10">
					Here are some of the technologies I work with:
				</p>
				<Slider />

				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur">
					{/* Frontend */}
					<div>
						<h2 className="text-white text-lg mb-3">Frontend</h2>
						<div className="grid grid-cols-2 gap-3">
							{frontendTech.map((tech) => (
								<div
									key={tech.id}
									className="flex items-center space-x-2 border border-gray-700 rounded-lg h-12 bg-teal-800/20 hover:bg-teal-800/30 px-3"
								>
									{tech.icon}
									<span className="text-white text-sm">{tech.name}</span>
								</div>
							))}
						</div>
					</div>

					{/* Backend */}
					<div>
						<h2 className="text-white text-lg mb-3">Backend</h2>
						<div className="grid grid-cols-2 gap-3">
							{backendTech.map((tech) => (
								<div
									key={tech.id}
									className="flex items-center space-x-2 border border-gray-700 rounded-lg h-12 bg-teal-800/20 hover:bg-teal-800/30 px-3"
								>
									{tech.icon}
									<span className="text-white text-sm">{tech.name}</span>
								</div>
							))}
						</div>
					</div>

					{/* Language */}
					<div>
						<h2 className="text-white text-lg mb-3">Language</h2>
						<div className="grid grid-cols-2 gap-3">
							{languageTech.map((tech) => (
								<div
									key={tech.id}
									className="flex items-center space-x-2 border border-gray-700 rounded-lg h-12 bg-teal-800/20 hover:bg-teal-800/30 px-3"
								>
									{tech.icon}
									<span className="text-white text-sm">{tech.name}</span>
								</div>
							))}
						</div>
					</div>

					{/* Database */}
					<div>
						<h2 className="text-white text-lg mb-3">Database</h2>
						<div className="grid grid-cols-2 gap-3">
							{databaseTech.map((tech) => (
								<div
									key={tech.id}
									className="flex items-center space-x-2 border border-gray-700 rounded-lg h-12 bg-teal-800/20 hover:bg-teal-800/30 px-3"
								>
									{tech.icon}
									<span className="text-white text-sm">{tech.name}</span>
								</div>
							))}
						</div>
					</div>

					{/* CMS */}
					<div>
						<h2 className="text-white text-lg mb-3">CMS</h2>
						<div className="grid grid-cols-2 gap-3">
							{cmsTech.map((tech) => (
								<div
									key={tech.id}
									className="flex items-center space-x-2 border border-gray-700 rounded-lg h-12 bg-teal-800/20 hover:bg-teal-800/30 px-3"
								>
									{tech.icon}
									<span className="text-white text-sm">{tech.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
