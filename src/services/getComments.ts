import { z } from "zod";
import { commentSchema } from "../schemas/comment";

const responseSchema = z.array(commentSchema);

export async function getComments(id: number) {
  const response = await fetch(`/api/posts/${id.toString()}/comments.json`);
  return responseSchema.parse(await response.json());
}
