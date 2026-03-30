import { useState } from 'react';
import Card from '../components/Card';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa6';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { BsTypescript } from 'react-icons/bs';
import { projects } from '../data/Projects';
import Python from '../assets/python.svg';

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
  tailwind: {
    base: 'bg-white hover:bg-gray-100',
    active: 'bg-gray-200 ring-2 ring-blue-400',
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
    <section className="py-20  bg-[#0f172a]" id="projects">
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
                  color === 'tailwind' ? '' : 'text-white'
                } ${isActive ? active : base}`}
              >
                {icon}
                {color === 'tailwind' ? (
                  <span className="text-blue-500">{label}</span>
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
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image ?? ''}
                link={project.link}
                gitLink={project.gitLink}
                tags={project.tags}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
