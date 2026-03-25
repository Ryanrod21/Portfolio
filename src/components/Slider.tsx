import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { techStack } from "../data/Tech.tsx";

export default function Slider() {
	const ReactSlider = (SliderLib as any).default ?? SliderLib;

	const settings = {
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: "linear",
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		pauseOnDotsHover: false,
	};

	return (
		<ReactSlider {...settings}>
			{techStack.map((tech) => (
				<div key={tech.id} className="px-2">
					<div className="flex justify-center items-center border border-gray-700 rounded-lg w-15 h-12 bg-teal-800/20 hover:bg-teal-800/30 transition duration-300">
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
