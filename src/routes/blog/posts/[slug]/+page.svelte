<script lang="ts">
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte'
	import type { BlogPost } from '$lib/types/types'

	let { data }: { data: { post: BlogPost; otherPosts: BlogPost[] } } = $props()
	// let { post, otherPosts }: { post: BlogPost; otherPosts: BlogPost[] } = data
	const wordCount = data.post.content ? data.post.content.split(' ').length : 0

	const estimatedReadingTime = Math.trunc(wordCount / 250)
</script>

<div class="height-full container flex flex-col justify-between">
	<div class="post justify-start">
		<h1>{data.post.title}</h1>

		<!-- <p class="meta">Word Count: {wordCount}</p> -->
		<p class="meta">Estimated Reading Time: {estimatedReadingTime} minute(s)</p>
		{#if data.post.image}
			<img src={data.post.image} alt={data.post.title} />
		{/if}
		{#if data.post.tags}
			{#each data.post.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		{/if}
		{#if data.post.date}
			<p class="date">{data.post.date}</p>
		{/if}
		{#if data.post.page}
			<p class="page">{data.post.page}</p>
		{/if}
		{#if data.post.content}
			<p>{data.post.content}</p>
		{/if}
	</div>
	<div class="other-posts flex flex-col justify-start">
		<h1 class="title">Other Posts</h1>
		{#each data.otherPosts as otherPost (otherPost.slug)}
			<div class="other-post flex justify-end">
				<BlogPostPreview post={otherPost} />
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
