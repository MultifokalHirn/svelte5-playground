import { blog } from '$lib/data/blog'
import type { BlogPost, Tags } from '$lib/types/types'

export function getBlog() {
	return blog
}

export function getTags(blog: BlogPost[]) {
	let allTags: Tags = {}
	for (const post of blog) {
		if (!post.tags) continue
		for (const tagName of post.tags) {
			if (!allTags[tagName]) {
				allTags[tagName] = { name: tagName, posts: [] }
			}
			allTags[tagName].posts.push(post)
		}
	}
	return allTags
}
