import { useState, type FormEventHandler } from "react";
import type { PostSchema } from "../schemas/post";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { Time } from "./Time";
import { Op } from "./Op";
import { useComments } from "../hooks/useComments";

interface PostProps {
	post: PostSchema;
}

export function Post({ post }: PostProps) {
	const [comments, addComment] = useComments(post.id, post.comments);
	const [newCommentText, setNewCommentText] = useState("");

	const createComment: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		addComment(newCommentText);
		setNewCommentText("");
	};

	return (
		<article className="bg-gray-800 rounded-lg p-10">
			<header className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Avatar outline={true} src={post.author.avatarUrl} />
					<div className="flex flex-col">
						<strong className="font-bold text-gray-100 leading-relaxed">
							{post.author.name}
						</strong>
						<span className="text-sm/relaxed text-gray-400">
							{post.author.role}
						</span>
					</div>
				</div>

				<Time date={post.publishedAt} />
			</header>

			<section className="leading-relaxed text-gray-300 mt-6">
				{post.content.map((op, index) => (
					/* biome-ignore lint/suspicious/noArrayIndexKey: Array nunca é reordenado */
					<Op op={op} key={index} />
				))}
			</section>

			<form
				onSubmit={createComment}
				className="w-full mt-6 pt-6 border-t border-gray-600 dynamic-submit-button"
			>
				<strong className="leading-relaxed text-gray-100 font-bold">
					Deixe seu feedback
				</strong>
				<textarea
					value={newCommentText}
					onChange={(e) => setNewCommentText(e.target.value)}
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
				{comments.map((comment) => (
					<Comment comment={comment} key={comment.id} />
				))}
			</section>
		</article>
	);
}
