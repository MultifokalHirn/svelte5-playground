<script lang="ts">
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte'
	import type { BlogPost } from '$lib/types/types'
	export let data
	let { post, otherPosts }: { post: BlogPost; otherPosts: BlogPost[] } = data

	const wordCount = post.content ? post.content.split(' ').length : 0

	const estimatedReadingTime = Math.trunc(wordCount / 250)
</script>

<div class="height-full container flex flex-col justify-between">
	<div class="post justify-start">
		<h1>{post.title}</h1>

		<!-- <p class="meta">Word Count: {wordCount}</p> -->
		<p class="meta">Estimated Reading Time: {estimatedReadingTime} minute(s)</p>
		{#if post.image}
			<img src={post.image} alt={post.title} />
		{/if}
		{#if post.tags}
			{#each post.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		{/if}
		{#if post.date}
			<p class="date">{post.date}</p>
		{/if}
		{#if post.page}
			<p class="page">{post.page}</p>
		{/if}
		{#if post.content}
			<p>{post.content}</p>
		{/if}
	</div>
	<div class="other-posts flex flex-col justify-start">
		<h1 class="title">Other Posts</h1>
		{#each otherPosts as otherPost (otherPost.slug)}
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
