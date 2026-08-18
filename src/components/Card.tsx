import { useState, useRef, useEffect, useMemo } from 'react';
import type { ProjectImage } from '../data/Working';

interface CardProps {
  title: string;
  description: string;
  image: ProjectImage[];
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
  const [open, setOpen] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      setShowLeft(el.scrollLeft > 0);
      setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    check();
    el.addEventListener('scroll', check);
    window.addEventListener('resize', check);
    return () => {
      el.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [tags]);

  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 100, behavior: 'smooth' });
  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -100, behavior: 'smooth' });

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

  const slides = useMemo(
    () =>
      image.flatMap((img) =>
        img.src.map((src, i) => ({
          src,
          description: img.description,
          positionInGroup: i,
          groupLength: img.src.length,
        })),
      ),
    [image],
  );

  const currentImage = slides[imageIndex];

  const currentDescription =
    typeof currentImage?.description === 'string'
      ? currentImage.description
      : typeof description === 'string'
        ? description
        : null;

  const imageDescription =
    typeof currentImage?.description === 'object'
      ? currentImage.description.description
      : null;

  const problemDescription =
    typeof currentImage?.description === 'object'
      ? currentImage.description.problem
      : null;

  const solutionDescription =
    typeof currentImage?.description === 'object'
      ? currentImage.description.solution
      : null;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-[85vw] mx-auto md:w-full h-full">
      <img
        src={currentImage.src ?? ''}
        alt={title}
        className="w-full h-32 sm:h-40 md:h-56 object-cover object-top cursor-pointer"
        onClick={() => setIsZoomed(true)}
      />

      <div className="h-[34px] flex items-center justify-center gap-3 py-2 bg-gray-50 border-b">
        {slides.length > 1 && (
          <>
            <button
              onClick={() =>
                setImageIndex(
                  (prev) => (prev - 1 + slides.length) % slides.length,
                )
              }
              className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-xs transition-colors"
            >
              ←
            </button>
            <span className="text-xs text-gray-500">
              {imageIndex + 1} / {slides.length}
            </span>
            <button
              onClick={() =>
                setImageIndex((prev) => (prev + 1) % image.length)
              }
              className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-xs transition-colors"
            >
              →
            </button>
          </>
        )}
      </div>

      {isZoomed === true && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex flex-col gap-5 items-center justify-center"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={currentImage.src}
            className="object-contain rounded-lg max-h-[30vh] max-w-[90vw] sm:max-w-[70vw] md:max-h-[50vh] md:max-w-[40vw] lg:max-h-[40vh] lg:max-w-[40vw] xl:max-h-[50vh] xl:max-w-[50vw]"
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className="w-full max-w-[90vw] md:max-w-[80vw] bg-gray-600/80 flex flex-col rounded-md overflow-y-auto max-h-[50vh] md:max-h-[40vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {currentImage.groupLength > 1 && (
              <span className="text-sm text-white w-full pt-1 pl-2">
                Image {currentImage.positionInGroup + 1} of{' '}
                {currentImage.groupLength}
              </span>
            )}
            {problemDescription && solutionDescription ? (
              <>
                <p className="text-white text-sm sm:text-base p-2">
                  <strong>
                    <u>Description:</u>
                  </strong>{' '}
                  {imageDescription}
                </p>
                <p className="text-white text-sm sm:text-base p-2">
                  <strong>
                    <u>Problem:</u>
                  </strong>{' '}
                  {problemDescription}
                </p>
                <p className="text-white text-sm sm:text-base p-2">
                  <strong>
                    <u>Solution:</u>
                  </strong>{' '}
                  {solutionDescription}
                </p>
              </>
            ) : (
              <p className="text-white text-sm sm:text-base p-2">
                <strong>
                  <u>Description:</u>
                </strong>{' '}
                {currentDescription}
              </p>
            )}

            <div className="flex items-center justify-center gap-4 py-3">
              {image.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImageIndex(
                        (prev) => (prev - 1 + slides.length) % slides.length,
                      );
                    }}
                    className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-black text-base transition-colors"
                  >
                    ←
                  </button>
                  <span className="text-sm sm:text-base text-gray-300">
                    {imageIndex + 1} / {slides.length}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImageIndex((prev) => (prev + 1) % slides.length);
                    }}
                    className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-black text-base transition-colors"
                  >
                    →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="pt-3 px-3 pb-2 sm:pt-4 sm:px-4 flex-1">
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
          className={`overflow-y-auto transition-all duration-300 ease-in-out ${
            open ? 'h-[100px] sm:h-[120px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {problemDescription && solutionDescription ? (
            <>
              <p className="text-gray-600 text-sm pb-2">
                <strong>Description:</strong> {imageDescription}
              </p>
              <p className="text-gray-600 text-sm pb-2">
                <strong>Problem:</strong> {problemDescription}
              </p>
              <p className="text-gray-600 text-sm pb-2">
                <strong>Solution:</strong> {solutionDescription}
              </p>
            </>
          ) : (
            <p className="text-gray-600 text-sm pb-2">{currentDescription}</p>
          )}
        </div>
      </div>

      {tags && tags.length > 0 && (
        <div className="px-3 pt-3 pb-2 sm:px-4 relative flex items-center gap-1">
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-2 py-1 rounded whitespace-nowrap flex-shrink-0 ${tagColors[tag] ?? defaultTagColor}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {showRight && (
            <button
              onClick={scrollRight}
              className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-xs transition-colors"
            >
              →
            </button>
          )}

          {showLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-4 flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-xs transition-colors"
            >
              ←
            </button>
          )}
        </div>
      )}

      <div className="px-3 py-3 border-t flex flex-wrap gap-2 sm:px-4 sm:gap-3 mt-auto">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 sm:text-sm sm:px-4 sm:py-1.5 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            View Project
          </a>
        )}
        {gitLink && (
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 sm:text-sm sm:px-4 sm:py-1.5 rounded-full border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
