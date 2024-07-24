import { z } from "zod";
import { opSchema } from "./op";

const authorSchema = z.object({
	avatarUrl: z.string().url(),
	role: z.string(),
	name: z.string(),
});

const commentSchema = z.object({
	id: z.number().positive().int(),
	author: authorSchema,
	publishedAt: z.coerce.date().max(new Date()),
	content: z.array(opSchema),
});

export const postSchema = z.object({
	id: z.number().positive().int(),
	author: authorSchema,
	publishedAt: z.coerce.date().max(new Date()),
	content: z.array(opSchema),
	comments: z.array(commentSchema),
});

export type Comment = z.infer<typeof commentSchema>;
export type Post = z.infer<typeof postSchema>;
