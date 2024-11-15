<script lang="ts">
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte'
	import type { BlogPost, Tag } from '$lib/types/types.js'

	let { data }: { data: { tag: Tag; otherPosts: BlogPost[] } } = $props()
	// let { tag }: { tag: Tag } = data
	let tag = $derived(data.tag)
</script>

<p class="back-link"><a href="/blog/tags">{'Tags'}</a></p>
<br />
<p class="tag-title">[{tag.name}]</p>
{#if tag.posts}
	<div class="other-posts flex flex-col justify-between">
		{#each tag.posts as post}
			<div class="other-post flex justify-start">
				<BlogPostPreview {post} />
			</div>
		{/each}
	</div>
{/if}

<style>
	.back-link {
		font-style: italic;
		font-size: large;
		font-family: monospace;
	}
	.tag-title {
		margin-top: 5%;
		margin-bottom: 15px;
		font-style: italic;
		font-size: xx-large;
		color: #00f;
		padding-bottom: 20px;
	}
	.tag-title {
		margin-top: 15px;
		font-style: italic;
		font-size: xx-large;
		color: #00f;
		/* margin-bottom: 20px; */
	}
	div.other-posts {
		margin: 3%;
		border-bottom: dotted 2px #dfdfdf;
	}

	div.other-post {
		max-width: 400px;
		margin-bottom: 3%;
	}
</style>
