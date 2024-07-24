import { z } from "zod";
import { opSchema } from "./op";
import { authorSchema } from "./author";

export const commentSchema = z.object({
	id: z.number().positive().int(),
	author: authorSchema,
	publishedAt: z.coerce.date().max(new Date()),
	content: z.array(opSchema),
});

export type CommentSchema = z.infer<typeof commentSchema>;
