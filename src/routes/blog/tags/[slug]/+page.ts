import { error } from '@sveltejs/kit'
import { getBlog, getTags } from '../../blog.js'

export function load({ params }) {
	const blog = getBlog()
	const tags = getTags(blog)
	const tag = tags[params.slug]
	if (!tag) throw error(404)
	// const otherPosts = blog
	// 	.filter((post) => post.slug !== params.slug)
	// 	.sort(() => Math.random() - 0.5)
	// 	.slice(0, 3)
	return { tag }
}
