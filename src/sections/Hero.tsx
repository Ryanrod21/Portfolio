import Ry from "../../public/ry.png";
import { Sparkle, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Hero() {
	return (
		<section className="py-2">
			<div className="container mx-auto px-6 text-center">
				<div className="relative h-80 w-80 rounded-full flex items-center justify-center mx-auto mb-6">
					<div className="absolute inset-0 rounded-full bg-teal-300 animate-pulse"></div>
					<img
						src={Ry}
						alt="Ry"
						className="relative h-[90%] w-[90%] object-cover rounded-full border-4 border-white shadow-lg"
					/>
					<div className="absolute bottom-0 w-1/2 text-center text-white font-bold bg-teal-700 rounded-b-full shadow-lg">
						Ryan Rodriguez
					</div>
					<div className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-green-500 animate-bounce flex items-center justify-center">
						<Sparkle className=" h-2 w-2 text-black" fill="full" />
					</div>
				</div>
				<h1 className="text-4xl font-bold mb-4 text-white">
					Welcome to My Portfolio
				</h1>
				<h2 className="text-2xl font-semibold text-gray-300 mb-4">
					Frontend / Web Developer
				</h2>
				<p className="text-lg text-gray-300 mb-2">
					Explore my projects, skills, and experience.
				</p>

				<div className="flex items-center justify-center space-x-5 mt-3">
					<a
						href="https://github.com/Ryanrod21"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
							<FaGithub className="text-black w-8 h-8 bg-white p-1 rounded-full" />
						</div>
					</a>
					<a
						href="https://www.linkedin.com/in/ryan-rodriguez-0402281b9/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
							<FaLinkedinIn className="text-blue-500 w-5 h-5" />
						</div>
					</a>
				</div>

				<div className="flex flex-col items-center space-y-1 animate-bounce mt-10">
					<span className="text-white">Scroll</span>
					<div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
						<div className="w-1 h-2 bg-teal-500 rounded-full animate-pulse"></div>
					</div>
					<ArrowDown className="text-teal-500 h-4 w-4" />
				</div>
			</div>
		</section>
	);
}
