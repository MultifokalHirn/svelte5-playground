<script lang="ts">
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte'
	import type { Blog } from '$lib/types/types'

	let { data }: { data: { post: Blog; otherPosts: Blog[] } } = $props()

	let wordCount = $state(data.post.content.split(' ').length)
	let estimatedReadingTime = $derived(Math.trunc(wordCount / 250))
</script>

<div class="height-full container flex flex-col justify-between">
	<div class="post justify-start">
		<h1>{data.post.title}</h1>

		<!-- <p class="meta">Word Count: {wordCount}</p> -->
		<p class="meta">Estimated Reading Time: {estimatedReadingTime} minute(s)</p>

		<p>{data.post.content}</p>
	</div>
	<div class="other-posts flex flex-col justify-start">
		<h1 class="title">Other Posts</h1>
		{#each data.otherPosts as post (post.slug)}
			<div class="other-post flex justify-end">
				<BlogPostPreview title={post.title} content={post.content} slug={post.slug} />
			</div>
		{/each}
	</div>
</div>

<style>
	div.container {
		/* background-color: #f1f1f1; */
		/* border: 1px solid #ccc; */
		padding: 10px;
	}
	div.other-posts {
		margin-top: 100px;
	}
	h1.title {
		margin-bottom: 10px;
	}
	div.other-post {
		max-width: 400px;
	}
	p.meta {
		font-style: italic;
		font-size: 0.8em;
		color: #666;
		margin-bottom: 20px;
	}
</style>
