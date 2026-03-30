import Ry from '../assets/ry.png';
import { Sparkle, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import VantaBackground from '../components/VBG';

export default function Hero() {
  return (
    <VantaBackground>
      <section className="py-10" id="home">
        <div className=" mx-auto px-6 text-center">
          <div className="relative h-80 w-80 flex items-center justify-center mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-teal-300 animate-pulse"></div>
            <img
              src={Ry}
              alt="Ry"
              className="relative h-[90%] w-[90%] object-cover rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.9)]"
            />
            <div className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-green-500 animate-bounce flex items-center justify-center">
              <Sparkle className="h-2 w-2 text-black" fill="full" />
            </div>
          </div>

          <p className="text-teal-300 text-xl font-bold tracking-[0.2em] uppercase mb-2 text-outline">
            Ryan Rodriguez
          </p>
          <h1 className="text-4xl font-bold mb-4 text-white text-outline">
            I Don't Just Build Websites. I Build Things That Matter.
          </h1>
          <h2 className="text-2xl font-semibold text-white text-outline">
            Frontend / Web Developer — Corpus Christi, TX
          </h2>
          <p className="text-lg text-white mb-2 max-w-[600px] mx-auto text-outline">
            I'm not here to coast. I'm here to grow, contribute, and ship work
            that makes a difference. I learn fast, collaborate openly, and I
            hold myself to a high standard — because good enough never is.
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
    </VantaBackground>
  );
}
