import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { CommentSchema } from "../schemas/comment";
import { getComments } from "../services/getComments";

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
        id: (old?.[old.length - 1]?.id ?? 0) + 1,
        author: {
          avatarUrl: "https://github.com/torvalds.png",
          role: "Creator of Linux",
          name: "Linus Torvalds",
        },
        publishedAt: new Date(),
        content: [{ insert: newComment }],
        likeCount: 0,
      },
    ]);
  };

  const deleteComment = (id: number) => {
    queryClient.setQueryData<CommentSchema[]>([postId, "comments"], (old) =>
      old?.filter((comment) => comment.id !== id),
    );
  };

  const likeComment = (id: number) => {
    queryClient.setQueryData<CommentSchema[]>([postId, "comments"], (old) =>
      old?.map((comment) => {
        if (comment.id === id) {
          return { ...comment, likeCount: comment.likeCount + 1 };
        }
        return comment;
      }),
    );
  };

  return [comments, addComment, deleteComment, likeComment] as const;
}
