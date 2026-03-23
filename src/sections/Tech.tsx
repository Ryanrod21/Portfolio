import { FaReact, FaJs } from "react-icons/fa6";
import {
	RiFirebaseFill,
	RiNextjsLine,
	RiTailwindCssFill,
	RiSupabaseFill,
} from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";
import { FaNodeJs, FaPython } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

export default function Tech() {
	return (
		<section className="py-20">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold mb-10 text-center text-white">
					Technologies
				</h2>
				<div className="flex items-center justify-center space-x-6">
					<FaReact className="text-blue-500 w-10 h-10" />
					<RiNextjsLine className="text-green-300 w-10 h-10" />
					<RiTailwindCssFill className="text-blue-500 w-10 h-10" />
					<FaJs className="text-yellow-400 w-10 h-10" />
					<BsTypescript className="text-blue-700 w-10 h-10" />
					<FaNodeJs className="text-green-600 w-10 h-10" />
					<FaPython className="text-blue-400 w-10 h-10" />
					<RiFirebaseFill className="text-yellow-500 w-10 h-10" />
					<RiSupabaseFill className="text-green-500 w-10 h-10" />
					<SiMongodb className="text-green-700 w-10 h-10" />
				</div>
			</div>
		</section>
	);
}
