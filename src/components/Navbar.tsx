import { Share } from "lucide-react";

export default function Navbar() {
	return (
		<nav className="bg-black py-2">
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between">
					<div className="text-white font-bold text-xl">Ryan Rodriguez</div>
					<div className="space-x-4 flex items-center justify-center text-white">
						<a
							href="#projects"
							className="hover:underline transition duration-600 mt-0"
						>
							<p>Projects</p>
						</a>
						<a
							href="#experience"
							className="hover:underline transition duration-600 mt-0"
						>
							<p>Experience</p>
						</a>
						<a
							href="#contact"
							className="hover:underline transition duration-600 mt-0"
						>
							<p>Contact</p>
						</a>

						<button className="flex items-center space-x-2 bg-teal-300 hover:bg-teal-400 text-black px-2 py-1 rounded">
							<Share className="h-3 w-3" />
							<span>Resume</span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
