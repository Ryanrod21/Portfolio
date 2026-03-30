import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { Download } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-[#0f172a]" id="contact">
      <div className="mx-auto px-8 max-w-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Get in Touch
        </h2>
        <div className="flex items-center justify-center mb-10">
          <p className="text-center text-white text-lg">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out to me via email or connect with me on LinkedIn!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start justify-center space-x-0 sm:space-x-20 space-y-6 sm:space-y-0 border border-gray-700 py-6 px-7 rounded-lg">
          <div className="h-full flex flex-col text-white items-start justify-start space-y-4">
            <h2 className="text-xl font-bold mb-2 text-white">Email</h2>
            <a
              href="mailto:your-email@example.com"
              className="text-white hover:underline"
            >
              officialryanrod@gmail.com
            </a>
            <h2 className="text-xl font-bold mb-2 text-white">Resume</h2>
            <a
              href="Ryan Rodriguez Frontend Developer Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline bg-teal-700 hover:bg-teal-800 px-2 py-1 rounded flex items-center space-x-2"
            >
              <Download className="h-3 w-3" />
              <span>Download Resume</span>
            </a>
          </div>
          <div className="h-full flex flex-col items-start justify-start text-white space-y-5">
            <h2 className="text-xl font-bold mb-2 text-white">
              Connect with Me
            </h2>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <FaGithub className="text-black w-7 h-7" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p>Github</p>
                <span className="text-sm text-gray-400">
                  github.com/Ryanrod21
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 min-w-8 min-h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <FaLinkedinIn className="text-blue-500 w-5 h-5" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p>Linkedin</p>
                <span className="text-sm text-gray-400">
                  linkedin.com/in/ryan-rodriguez-0402281b9/
                </span>
              </div>
            </div>

            {/* <div className="flex items-center space-x-3">
							<Mail className="h-5 w-5 text-red-500 bg-white rounded-sm" />
							<div>
								<p>Email</p>
							</div>
						</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
