import { z } from "zod";
import { authorSchema } from "./author";
import { opSchema } from "./op";
import { commentSchema } from "./comment";

export const postSchema = z.object({
	id: z.number().positive().int(),
	author: authorSchema,
	publishedAt: z.coerce.date().max(new Date()),
	content: z.array(opSchema),
	comments: z.array(commentSchema),
});

export type PostSchema = z.infer<typeof postSchema>;
