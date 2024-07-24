import { z } from "zod";

export const authorSchema = z.object({
	avatarUrl: z.string().url(),
	role: z.string(),
	name: z.string(),
});

export type AuthorSchema = z.infer<typeof authorSchema>;
