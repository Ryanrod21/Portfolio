import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import Ry from "../assets/ry_favicon.svg";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-black/80 backdrop-blur-md py-4 sticky top-0 w-full z-[99999] shadow-lg border-b border-teal-900/50">
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<a
						href="#home"
						className="text-white font-bold text-xl flex items-center gap-2"
					>
						<img src={Ry} alt="Ry" className="h-6 w-6" />
						Ryan Rodriguez
					</a>

					{/* Desktop links */}
					<div className="hidden md:flex items-center gap-6 text-white">
						<a
							href="#about"
							className="hover:text-teal-400 transition duration-300"
						>
							About
						</a>
						<a
							href="#projects"
							className="hover:text-teal-400 transition duration-300"
						>
							Projects
						</a>
						<a
							href="#contact"
							className="hover:text-teal-400 transition duration-300"
						>
							Contact
						</a>
						<a
							href="Ryan_Rodriguez_Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-teal-300 hover:bg-teal-400 text-black px-3 py-1.5 rounded flex items-center gap-1"
						>
							<Download className="h-3 w-3" />
							Resume
						</a>
					</div>

					{/* Hamburger button */}
					<button
						className="md:hidden text-white"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				{/* Mobile menu */}
				{isOpen && (
					<div className="md:hidden flex flex-col gap-4 pt-4 pb-2 text-white border-t border-teal-900/50 mt-4">
						<a
							href="#about"
							onClick={() => setIsOpen(false)}
							className="hover:text-teal-400 transition duration-300"
						>
							About
						</a>
						<a
							href="#projects"
							onClick={() => setIsOpen(false)}
							className="hover:text-teal-400 transition duration-300"
						>
							Projects
						</a>
						<a
							href="#contact"
							onClick={() => setIsOpen(false)}
							className="hover:text-teal-400 transition duration-300"
						>
							Contact
						</a>
						<a
							href="Ryan Rodriguez Frontend Developer Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setIsOpen(false)}
							className="bg-teal-300 hover:bg-teal-400 text-black px-3 py-1.5 rounded flex items-center gap-2 w-fit"
						>
							<Download className="h-3 w-3" />
							Resume
						</a>
					</div>
				)}
			</div>
		</nav>
	);
}
