import { useQuery } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import { getPosts } from "./services/getPosts";

export function App() {
	const { isPending, error, data } = useQuery({
		queryKey: ["posts"],
		queryFn: getPosts,
		staleTime: Number.POSITIVE_INFINITY,
	});

	if (error != null) {
		return <p>There was an error: {error.message}</p>;
	}

	return (
		<>
			<Header />

			<div className="max-w-6xl mx-auto my-8 px-4 grid grid-cols-1 md:grid-cols-[256px_1fr] gap-8 items-start">
				<Sidebar />
				<main className="flex flex-col gap-8">
					{isPending ? (
						<p>Loading...</p>
					) : (
						data.map((post) => <Post key={post.id} post={post} />)
					)}
				</main>
			</div>
		</>
	);
}
