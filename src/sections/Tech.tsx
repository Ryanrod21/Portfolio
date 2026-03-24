import { techStack } from "../data/Tech";

export default function Tech() {
	return (
		<section className="py-20">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold mb-10 text-center text-white">
					Technologies
				</h2>
				<p className="text-center text-white mb-10">
					Here are some of the technologies I work with:
				</p>
				<div className="flex items-center justify-center space-x-4">
					{techStack.map((tech) => (
						<div
							key={tech.id}
							className="flex justify-center items-center space-y-1 border border-gray-700 rounded-lg w-25 h-10 bg-teal-800/20 hover:bg-teal-800/30 transition duration-300 "
						>
							<div className="flex items-center px-3 space-x-2">
								{tech.icon}

								<span className="text-white text-sm">{tech.name}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
