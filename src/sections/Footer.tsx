import { FaHeart } from "react-icons/fa6";
import RyLogo from "../assets/ry_favicon.svg";

export function Footer() {
	return (
		<footer className="bg-[#0f172a] py-8 border-t border-teal-900/50">
			<div className="container mx-auto px-6 flex flex-col items-center gap-4">
				{/* Logo */}
				<img src={RyLogo} alt="RY Logo" className="w-10 h-10" />

				{/* Nav links */}
				<div className="flex gap-6 text-sm text-gray-400">
					<a href="#home" className="hover:text-teal-400 transition-colors">
						Home
					</a>
					<a href="#about" className="hover:text-teal-400 transition-colors">
						About
					</a>
					<a href="#projects" className="hover:text-teal-400 transition-colors">
						Projects
					</a>
					<a href="#contact" className="hover:text-teal-400 transition-colors">
						Contact
					</a>
				</div>

				{/* Copyright */}
				<p className="text-gray-500 text-sm flex items-center gap-1">
					&copy; {new Date().getFullYear()} Ryan Rodriguez. All rights reserved.
					Built with
					<FaHeart className="inline-block h-3 w-3 text-red-500" />
				</p>
			</div>
		</footer>
	);
}
