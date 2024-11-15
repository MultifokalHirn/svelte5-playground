<script lang="ts">
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte'
	import type { BlogPost, Tags } from '$lib/types/types.js'

	export let data
	const { blog, tags }: { blog: BlogPost[]; tags: Tags } = data
</script>

<h1 class="title">Tags</h1>
<br />
{#each Object.keys(tags) as tagName}
	<span class="tag-title"><a href={`/blog/tags/${tagName}`}>[{tagName}]</a></span>
	{#if tags[tagName].posts}
		<div class="other-posts flex flex-col justify-between">
			<br />
			{#each tags[tagName].posts as post}
				<div class="other-post flex justify-start">
					<BlogPostPreview {post} />
				</div>
			{/each}
		</div>
	{/if}
{/each}

<style>
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
