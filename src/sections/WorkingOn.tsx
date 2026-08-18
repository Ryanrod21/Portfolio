import Card from '../components/Card';

import { projects } from '../data/Working';

import { motion, AnimatePresence } from 'framer-motion';

export default function WorkingOn() {
  return (
    <section className="py-20  bg-[#1e293b]" id="progress">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Projects I'm Working On
        </h2>
        <p className="text-lg font-bold mb-10 text-center text-white">
          Click on the image and go through to see my progress and thoughts
        </p>

        {/* Project Grid */}
        {projects.length === 0 ? (
          <p className="text-center text-gray-400">
            No projects match the selected filters.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="h-full"
                >
                  <Card
                    title={project.title}
                    description={project.description ?? ''}
                    image={project.image ?? []}
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
