import "./App.css";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";
import Contact from "./sections/Contact";

function App() {
	return (
		<main className="bg-black max-w-8xl mx-auto">
			<Hero />
			<Projects />
			<Tech />
			<Contact />
		</main>
	);
}

export default App;
