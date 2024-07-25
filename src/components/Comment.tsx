import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import type { CommentSchema } from "../schemas/comment";
import { Time } from "./Time";
import { Op } from "./Op";

interface CommentProps {
	comment: CommentSchema;
	deleteComment: (index: number) => void;
	likeComment: (index: number) => void;
}

export function Comment({ comment, deleteComment, likeComment }: CommentProps) {
	return (
		<div className="mt-6 flex gap-4 items-start">
			<Avatar className="w-12" src={comment.author.avatarUrl} />

			<div className="flex-1">
				<div className="bg-gray-700 p-4 rounded-lg">
					<header className="flex items-start justify-between">
						<div className="flex flex-col">
							<strong className="font-bold text-sm/relaxed">
								{comment.author.name}
							</strong>
							<Time date={comment.publishedAt} className="text-xs/relaxed" />
						</div>
						<button
							type="button"
							className="text-gray-400 cursor-pointer leading-[0] rounded-sm hover:text-rose-500 text-"
							title="Excluir comentário"
							onClick={() => deleteComment(comment.id)}
						>
							<Trash size={20} />
						</button>
					</header>
					<p className="text-gray-300 mt-4">
						{comment.content.map((op, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: array is never reordered
							<Op op={op} key={index} />
						))}
					</p>
				</div>
				<footer className="mt-4">
					<button
						type="button"
						className="text-gray-400 cursor-pointer flex items-center transition-colors rounded-sm hover:text-emerald-300"
						onClick={() => likeComment(comment.id)}
					>
						<ThumbsUp className="mr-2" />
						Aplaudir{" "}
						<span className="before:px-2 before:content-['•']">
							{comment.likeCount}
						</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
