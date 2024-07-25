import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments } from "../services/getComments";
import type { CommentSchema } from "../schemas/comment";

export function useComments(postId: number, initialData: CommentSchema[]) {
	const queryClient = useQueryClient();
	const { data: comments } = useQuery({
		queryKey: [postId, "comments"],
		queryFn: () => getComments(postId),
		staleTime: Number.POSITIVE_INFINITY,
		initialData,
	});

	const addComment = (newComment: string) => {
		queryClient.setQueryData<CommentSchema[]>([postId, "comments"], (old) => [
			...(old ?? []),
			{
				id: old?.length ?? 1,
				author: {
					avatarUrl: "https://github.com/gurgelio.png",
					role: "Full Stack Developer",
					name: "Leonardo Gurgel",
				},
				publishedAt: new Date(),
				content: [{ insert: newComment }],
			},
		]);
	};

	const deleteComment = (id: number) => {
		queryClient.setQueryData<CommentSchema[]>([postId, "comments"], (old) =>
			old?.filter((comment) => comment.id !== id),
		);
	};

	return [comments, addComment, deleteComment] as const;
}
