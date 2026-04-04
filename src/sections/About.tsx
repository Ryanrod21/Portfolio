import { Code, Rocket, Palette, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-[#0f172a]" id="about">
      <div className="container flex flex-col items-start justify-start mx-auto px-6">
        <div className="flex flex-col items-start justify-start space-y-2">
          <h2 className="text-2xl font-bold text-center text-teal-400">
            About Me
          </h2>

          <h1 className="text-5xl font-bold mb-4 text-white text-outline flex flex-col items-start justify-center space-y-2">
            <span>Passionate about building</span>
            <span className="text-teal-400">digital experiences</span>
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-10 mt-10 w-full">
          <div className="flex items-center justify-center mb-10">
            <p className="text-left text-white text-lg max-w-3xl">
              I'm Ryan Rodriguez — a
              <span className="font-bold"> Frontend Developer</span> based in
              Corpus Christi, TX. Driven by curiosity and a commitment to craft,
              I build things that work, look sharp, and solve real problems.
              <br />
              <br />I care about the details — the pixel that's off, the
              interaction that feels slow, the component that could be cleaner.
              That standard doesn't turn off when I clock out. I collaborate
              openly, learn fast, and hold myself accountable.
              <br />
              <br />
              I'm not looking for easy — I'm looking for the right team to grow
              with and the right problems to solve. My projects speak louder
              than my resume. Scroll down and see for yourself.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
            {/* Clean Code */}
            <div className="flex flex-col gap-3 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur hover:border-teal-500/50 transition-colors duration-300">
              <div className="bg-teal-500/20 w-12 h-12 flex items-center justify-center rounded-lg">
                <Code className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-white font-semibold">Clean Code</h3>
              <p className="text-gray-400 text-sm">
                Writing maintainable, scalable code that stands the test of time
              </p>
            </div>

            {/* Design Focus */}
            <div className="flex flex-col gap-3 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur hover:border-pink-500/50 transition-colors duration-300">
              <div className="bg-pink-500/20 w-12 h-12 flex items-center justify-center rounded-lg">
                <Palette className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-white font-semibold">Design Focus</h3>
              <p className="text-gray-400 text-sm">
                Creating beautiful interfaces with attention to every detail
              </p>
            </div>

            {/* Performance */}
            <div className="flex flex-col gap-3 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur hover:border-purple-500/50 transition-colors duration-300">
              <div className="bg-purple-500/20 w-12 h-12 flex items-center justify-center rounded-lg">
                <Rocket className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold">Performance</h3>
              <p className="text-gray-400 text-sm">
                Optimizing for speed and delivering fast user experiences
              </p>
            </div>

            {/* Collaboration */}
            <div className="flex flex-col gap-3 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur hover:border-blue-500/50 transition-colors duration-300">
              <div className="bg-blue-500/20 w-12 h-12 flex items-center justify-center rounded-lg">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold">Collaboration</h3>
              <p className="text-gray-400 text-sm">
                Working effectively with teams to bring ideas to life
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
