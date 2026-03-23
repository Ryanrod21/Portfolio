import Ry from "../../public/ry.png";

export default function Hero() {
	return (
		<section className="py-20">
			<div className="container mx-auto px-6 text-center">
				<div className="relative h-80 w-80 rounded-full flex items-center justify-center mx-auto mb-6">
					<div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse"></div>
					<img
						src={Ry}
						alt="Ry"
						className="relative h-[90%] w-[90%] object-cover rounded-full border-4 border-white shadow-lg"
					/>
					<div className="absolute bottom-0 w-1/2 text-center text-white font-bold bg-blue-600 rounded-b-full shadow-lg">
						Ryan Rodriguez
					</div>
					<div className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-green-500 animate-bounce"></div>
				</div>
				<h1 className="text-4xl font-bold mb-4 text-white">
					Welcome to My Portfolio
				</h1>
				<h2 className="text-2xl font-semibold text-gray-300 mb-4">
					Frontend / Web Developer
				</h2>
				<p className="text-lg text-gray-300 mb-8">
					Explore my projects, skills, and experience.
				</p>
			</div>
		</section>
	);
}
