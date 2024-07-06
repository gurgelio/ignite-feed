import type { Post as PostType } from "../model/post";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { Token } from "./Token";

export function Post({ author, publishedAt, content }: PostType) {
	return (
		<article className="bg-gray-800 rounded-lg p-10">
			<header className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Avatar outline={true} src={author.avatarUrl} />
					<div className="flex flex-col">
						<strong className="font-bold text-gray-100 leading-relaxed">
							{author.name}
						</strong>
						<span className="text-sm/relaxed text-gray-400">{author.role}</span>
					</div>
				</div>

				<time
					className="text-sm text-gray-400"
					title="3 de julho às 14:16"
					dateTime="2024-07-03 14:06:00"
				>
					Publicado há 1h
				</time>
			</header>

			<section className="leading-relaxed text-gray-300 mt-6">
				{content.map((token, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: the order of the array never changes
					<Token key={index} token={token} />
				))}
			</section>

			<form className="w-full mt-6 pt-6 border-t border-gray-600 dynamic-submit-button">
				<strong className="leading-relaxed text-gray-100 font-bold">
					Deixe seu feedback
				</strong>
				<textarea
					className="relative w-full bg-gray-900 resize-none h-24 p-4 rounded-lg text-gray-100 leading-normal mt-4 focus:outline-emerald-500 z-50"
					placeholder="Deixe um comentário"
				/>
				<button
					className="py-4 px-6 mt-4 rounded-lg bg-emerald-500 text-white font-bold cursor-pointer hover:bg-emerald-400 transition-colors"
					type="submit"
				>
					Publicar
				</button>
			</form>

			<section>
				<Comment />
				<Comment />
				<Comment />
			</section>
		</article>
	);
}
