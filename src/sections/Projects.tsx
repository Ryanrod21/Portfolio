import { useState } from 'react';
import Card from '../components/Card';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa6';
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiSupabaseFill,
  RiFirebaseFill,
} from 'react-icons/ri';
import { BsTypescript, BsOpenai } from 'react-icons/bs';
import { projects } from '../data/Projects';
import Python from '../assets/python.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { SiMongodb, SiExpress } from 'react-icons/si';

const filterButtons = [
  { label: 'React', icon: <FaReact className="mr-2" />, color: 'blue' },
  { label: 'Next.js', icon: <RiNextjsFill className="mr-2" />, color: 'green' },
  {
    label: 'Tailwind CSS',
    icon: <RiTailwindCssFill className="mr-2 text-blue-500" />,
    color: 'tailwind',
  },
  {
    label: 'JavaScript',
    icon: <FaJs className="mr-2 text-black" />,
    color: 'yellow',
  },
  {
    label: 'TypeScript',
    icon: <BsTypescript className="mr-2" />,
    color: 'blue',
  },
  { label: 'Node.js', icon: <FaNodeJs className="mr-2" />, color: 'green' },
  {
    label: 'Python',
    icon: <img src={Python} alt="Python" className="mr-2 w-4 h-4" />,
    color: 'blue',
  },
  {
    label: 'MongoDB',
    icon: <SiMongodb className="mr-2 text-green-500" />,
    color: 'mongodb',
  },
  {
    label: 'Supabase',
    icon: <RiSupabaseFill className="mr-2 text-blue-700" />,
    color: 'blue',
  },
  {
    label: 'Express',
    icon: <SiExpress className="mr-2 text-black" />,
    color: 'gray',
  },
  {
    label: 'Firebase',
    icon: <RiFirebaseFill className="mr-2 text-red-700" />,
    color: 'red',
  },
  {
    label: 'OpenAI',
    icon: <BsOpenai className="mr-2 text-black" />,
    color: 'white',
  },
];

const colorMap: Record<string, { base: string; active: string }> = {
  blue: {
    base: 'bg-blue-500 hover:bg-blue-600',
    active: 'bg-blue-700 ring-2 ring-white',
  },
  green: {
    base: 'bg-green-500 hover:bg-green-600',
    active: 'bg-green-700 ring-2 ring-white',
  },
  yellow: {
    base: 'bg-yellow-500 hover:bg-yellow-600',
    active: 'bg-yellow-600 ring-2 ring-white',
  },
  red: {
    base: 'bg-red-500 hover:bg-red-600',
    active: 'bg-red-700 ring-2 ring-white',
  },
  gray: {
    base: 'bg-gray-500 hover:bg-gray-600',
    active: 'bg-gray-700 ring-2 ring-white',
  },
  tailwind: {
    base: 'bg-white hover:bg-gray-100',
    active: 'bg-gray-200 ring-2 ring-blue-400',
  },
  mongodb: {
    base: 'bg-white hover:bg-gray-100 border border-green-500',
    active: 'bg-green-200 text-white ring-2 ring-green-500',
  },
  white: {
    base: 'bg-white hover:bg-gray-100',
    active: 'bg-gray-200 ring-2 ring-gray-500',
  },
};

export default function Projects() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  function toggleFilter(tag: string) {
    setSelectedFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  function clearFilters() {
    setSelectedFilters([]);
  }

  const filteredProjects =
    selectedFilters.length === 0
      ? projects
      : projects.filter((project) =>
          selectedFilters.every((tag) => project.tags.includes(tag)),
        );

  return (
    <section className="py-20  bg-[#1e293b]" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Projects
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={clearFilters}
            className={`flex items-center px-3 py-1.5 rounded text-sm text-white transition ${
              selectedFilters.length === 0
                ? 'bg-blue-700 ring-2 ring-white'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            All
          </button>
          {filterButtons.map(({ label, icon, color }) => {
            const isActive = selectedFilters.includes(label);
            const { base, active } = colorMap[color];
            return (
              <button
                key={label}
                onClick={() => toggleFilter(label)}
                className={`flex items-center px-3 py-1.5 rounded text-sm transition ${
                  color === 'tailwind' ||
                  color === 'mongodb' ||
                  color === 'white'
                    ? ''
                    : 'text-white'
                } ${isActive ? active : base}`}
              >
                {icon}
                {color === 'tailwind' ? (
                  <span className="text-blue-500">{label}</span>
                ) : color === 'mongodb' ? (
                  <span className="text-green-500">{label}</span>
                ) : (
                  label
                )}
              </button>
            );
          })}
        </div>
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-400">
            No projects match the selected filters.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Card
                    title={project.title}
                    description={project.description}
                    image={project.image ?? ''}
                    link={project.link}
                    gitLink={project.gitLink}
                    tags={project.tags}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
