<script lang="ts">
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte'
	import Tag from '$lib/components/Tag.svelte'
	import type { BlogPost } from '$lib/types/types'

	let { data }: { data: { post: BlogPost; otherPosts: BlogPost[] } } = $props()

	let wordCount = $state(data.post.content ? data.post.content.split(' ').length : 0)
	let estimatedReadingTime = $derived(Math.trunc(wordCount / 250))
</script>

<div class="height-full container flex flex-col justify-between">
	<div class="post justify-start">
		<h1>{data.post.title}</h1>
		{#if data.post.tags}
			{#each data.post.tags as tag}
				<Tag {tag} />
			{/each}
		{/if}
		<!-- <p class="meta">Word Count: {wordCount}</p> -->
		<p class="meta">Estimated Reading Time: {estimatedReadingTime} minute(s)</p>
		{#if data.post.image}
			<img src={data.post.image} alt={data.post.title} />
		{/if}

		<!-- {#if data.post.date}
			<p class="date">{data.post.date}</p>
		{/if} -->
		<br />
		<br />
		{#if data.post.page}
			<p class="page">{data.post.page}</p>
		{/if}

		{#if data.post.content}
			<p>{data.post.content}</p>
		{/if}
	</div>
</div>
<br />
<div class="other-posts flex flex-col justify-start">
	<h1>Other Posts</h1>
	{#each data.otherPosts as otherPost (otherPost.slug)}
		<div class="other-post flex justify-start">
			<BlogPostPreview post={otherPost} />
		</div>
	{/each}
</div>

<style>
	div.container {
		/* background-color: #f1f1f1; */
		/* border: 1px solid #ccc; */
		padding: 10px;
	}

	div.other-posts {
		margin-top: 3%;
		border-bottom: dotted 2px #dfdfdf;
	}

	div.other-post {
		max-width: 400px;
		margin-bottom: 3%;
	}

	p.meta {
		font-style: italic;
		font-size: 0.8em;
		color: #666;
		margin-bottom: 20px;
	}
</style>
