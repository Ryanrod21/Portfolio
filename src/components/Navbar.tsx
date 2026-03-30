import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black py-4 sticky top-0 w-full z-[99999] shadow-lg border-b border-teal-900/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="#home">Ryan Rodriguez</a>
          </div>
          <div className="space-x-4 flex items-center justify-center text-white">
            <a
              href="#projects"
              className="hover:underline transition duration-600 mt-0"
            >
              <p>Projects</p>
            </a>
            {/* <a
							href="#experience"
							className="hover:underline transition duration-600 mt-0"
						>
							<p>Experience</p>
						</a> */}
            <a
              href="#contact"
              className="hover:underline transition duration-600 mt-0"
            >
              <p>Contact</p>
            </a>
            <a
              href="Ryan Rodriguez Frontend Developer Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-300 hover:bg-teal-400 text-black px-2 py-1 rounded"
            >
              <div className="flex items-baseline justify-center space-x-1">
                <Download className="h-3 w-3" />
                <span>Resume</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
