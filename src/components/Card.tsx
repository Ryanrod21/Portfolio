import { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  gitLink?: string;
  tags?: string[];
}

export default function Card({
  title,
  description,
  image,
  link,
  gitLink,
  tags,
}: CardProps) {
  const [open, setOpen] = useState(false);

  const tagColors: Record<string, string> = {
    React: 'bg-blue-500 text-white',
    TypeScript: 'bg-blue-700 text-white',
    JavaScript: 'bg-yellow-400 text-black',
    'Next.js': 'bg-green-700 text-white',
    'Node.js': 'bg-green-500 text-white',
    Python: 'bg-blue-400 text-white',
    'Tailwind CSS': 'bg-cyan-500 text-white',
    'Express.js': 'bg-gray-800 text-white',
    MongoDB: 'bg-white text-green-600 border border-green-600',
    Firebase: 'bg-red-500 text-white',
    CSS: 'bg-blue-300 text-white',
    HTML: 'bg-red-800 text-white',
    OpenAI: 'bg-black text-white',
    Supabase: 'bg-blue-600 text-white',
    'HubSpot CMS': 'bg-orange-600 text-white',
  };

  const defaultTagColor = 'bg-gray-200 text-gray-800';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img
        src={image ?? ''}
        alt={title}
        className="w-full h-40 md:h-56 object-cover object-top"
      />

      <div className="p-4 flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-700 transition shrink-0 ml-2"
          >
            {open ? 'Hide' : 'Description'}
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M6 9l6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-600 text-sm pb-2">{description}</p>
        </div>
      </div>

      {tags && tags.length > 0 && (
        <div className="px-4 pt-3 pb-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded ${tagColors[tag] ?? defaultTagColor}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {(link || gitLink) && (
        <div className="px-4 py-3 border-t flex gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            >
              View Project
            </a>
          )}
          {gitLink && (
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 rounded-full border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition"
            >
              View Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
