import { z } from "zod";

export const tokenSchema = z.union([
	z.object({
		type: z.literal("text"),
		content: z.string(),
	}),
	z.object({
		type: z.literal("link"),
		content: z.string(),
		href: z.string().url(),
	}),
	z.object({
		type: z.literal("tag"),
		content: z.string(),
	}),
]);

export type Token = z.infer<typeof tokenSchema>;
