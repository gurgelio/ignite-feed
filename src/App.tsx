import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
	return (
		<>
			<Header />

			<div className="max-w-6xl mx-auto my-8 px-4 grid grid-cols-[256px_1fr] gap-8 items-start">
				<Sidebar />
				<main>main</main>
			</div>
		</>
	);
}
