<script lang="ts">
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte'
	import Tag from '$lib/components/Tag.svelte'
	import type { BlogPost, Tags } from '$lib/types/types.js'

	export let data
	const { blog, tags }: { blog: BlogPost[]; tags: Tags } = data
</script>

<h1 class="title">Blog</h1>
{#each blog as post (post.slug)}
	<BlogPostPreview {post} />
{/each}

<h2><a href="/blog/tags">Tags</a></h2>
{#each Object.keys(tags) as tag}
	<Tag {tag} />
{/each}

<style>
</style>
