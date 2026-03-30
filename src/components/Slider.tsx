import { useState, useEffect } from 'react';
import SliderLib from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { techStack } from '../data/Tech.tsx';

const ReactSlider = (SliderLib as any).default ?? SliderLib;

function getSlidesToShow() {
  if (window.innerWidth < 480) return 2;
  if (window.innerWidth < 768) return 3;
  if (window.innerWidth < 1024) return 4;
  return 6;
}

export default function Slider() {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
  };

  return (
    <ReactSlider {...settings}>
      {techStack.map((tech) => (
        <div key={tech.id} className="px-2 flex justify-center">
          <div className="flex justify-center items-center border border-gray-700 rounded-lg w-full max-w-[180px] h-12 bg-[#334155] hover:bg-[#334155]/30 transition duration-300">
            <div className="flex items-center px-3 space-x-2">
              {tech.icon}
              <span className="text-white text-smd">{tech.name}</span>
            </div>
          </div>
        </div>
      ))}
    </ReactSlider>
  );
}
