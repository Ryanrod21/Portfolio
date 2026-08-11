import "./App.css";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";
import Contact from "./sections/Contact";
import About from "./sections/About";
import { Footer } from "./sections/Footer";
import WorkingOn from "./sections/WorkingOn";

function App() {
	return (
		<main className="bg-black max-w-8xl mx-auto">
			<Hero />
			<About />
			<Projects />
			<WorkingOn />
			<Tech />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
