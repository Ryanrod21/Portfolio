export default function Navbar() {
	return (
		<nav className="bg-gray-800 py-4">
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between">
					<div className="text-white font-bold text-xl">Logo</div>
					<div className="space-x-4 flex items-center justify-center text-white">
						<p>Projects</p>
						<p>Experience</p>
					</div>
				</div>
			</div>
		</nav>
	);
}
