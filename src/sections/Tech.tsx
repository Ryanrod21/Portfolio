import Slider from "../components/Slider";

export default function Tech() {
	return (
		<section className="py-20">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold mb-10 text-center text-white">
					Technologies
				</h2>
				<p className="text-center text-white mb-10">
					Here are some of the technologies I work with:
				</p>

				<Slider />
			</div>
		</section>
	);
}
