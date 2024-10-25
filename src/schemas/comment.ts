import { z } from "zod";
import { authorSchema } from "./author";
import { opSchema } from "./op";

export const commentSchema = z.object({
  id: z.number().positive().int(),
  author: authorSchema,
  publishedAt: z.coerce.date().max(new Date()),
  content: z.array(opSchema),
  likeCount: z.number().positive().int(),
});

export type CommentSchema = z.infer<typeof commentSchema>;
