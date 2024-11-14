import { blog } from '$lib/data/blog';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const post = blog.find((post) => post.slug === params.slug);

	if (!post) throw error(404);
	return { post };
}
