import type { PostSchema } from "../schemas/post";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { Time } from "./Time";
import { Op } from "./Op";
import { useComments } from "../hooks/useComments";
import { CommentForm } from "./CommentForm";

interface PostProps {
	post: PostSchema;
}

export function Post({ post }: PostProps) {
	const [comments, addComment, deleteComment, likeComment] = useComments(
		post.id,
		post.comments,
	);

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

			<CommentForm addComment={addComment} />

			<section>
				{comments.map((comment) => (
					<Comment
						comment={comment}
						key={comment.id}
						deleteComment={deleteComment}
						likeComment={likeComment}
					/>
				))}
			</section>
		</article>
	);
}
