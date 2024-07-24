import { z } from "zod";
import { postSchema } from "../schemas/post";

const responseSchema = z.array(postSchema);

export async function getPosts() {
	const response = await fetch("/api/posts.json");
	return responseSchema.parse(await response.json());
}
