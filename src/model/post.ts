import { z } from "zod";
import { tokenSchema } from "./token";

export const postSchema = z.object({
	id: z.number().positive().int(),
	author: z.object({
		avatarUrl: z.string().url(),
		role: z.string(),
		name: z.string(),
	}),
	publishedAt: z.coerce.date().max(new Date()),
	content: z.array(tokenSchema),
});

export type Post = z.infer<typeof postSchema>;
