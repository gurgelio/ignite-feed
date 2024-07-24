import { z } from "zod";

const attributeSchema = z
	.object({
		bold: z.boolean(),
		italic: z.boolean(),
		link: z.string().url().or(z.string().startsWith("#")),
		header: z.number().int().min(1).max(6),
	})
	.partial();

export const opSchema = z.union([
	z.object({
		insert: z.string().or(z.object({ image: z.string().url() })),
		attributes: attributeSchema.optional(),
	}),
	z.object({
		retain: z.number().int().min(1),
		attributes: attributeSchema.optional(),
	}),
	z.object({
		delete: z.number().int().min(1),
	}),
]);

export type OpSchema = z.infer<typeof opSchema>;
