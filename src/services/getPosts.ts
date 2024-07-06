import { z } from "zod";
import { postSchema } from "../model/post";

const postsResponseSchema = z.array(postSchema);

export async function getPosts() {
	const response = await fetch("/api/posts.json");
	return postsResponseSchema.parse(await response.json());
}
