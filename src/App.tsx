import "./App.css";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";

function App() {
	return (
		<main className="bg-black max-w-8xl mx-auto">
			<Hero />
			<Projects />
			<Tech />
		</main>
	);
}

export default App;
