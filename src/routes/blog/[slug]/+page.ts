import { blog } from '$lib/data/blog'
import { error } from '@sveltejs/kit'

export function load({ params }) {
	const post = blog.find((post) => post.slug === params.slug)
	if (!post) throw error(404)
	const otherPosts = blog
		.filter((post) => post.slug !== params.slug)
		.sort(() => Math.random() - 0.5)
		.slice(0, 3)
	return { post, otherPosts }
}
