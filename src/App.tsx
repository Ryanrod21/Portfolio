import "./App.css";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";
import Contact from "./sections/Contact";
import About from "./sections/About";
import { Footer } from "./sections/Footer";

function App() {
	return (
		<main className="bg-black max-w-8xl mx-auto">
			<Hero />
			<About />
			<Tech />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
