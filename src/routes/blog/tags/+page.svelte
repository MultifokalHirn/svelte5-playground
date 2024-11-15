<script lang="ts">
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte'
	import type { BlogPost, Tags } from '$lib/types/types.js'

	export let data
	const { blog, tags }: { blog: BlogPost[]; tags: Tags } = data
</script>

<h1>Tags</h1>
{#each Object.keys(tags) as tagName}
	<h2>{tagName}</h2>
	{#if tags[tagName].posts}
		{#each tags[tagName].posts as post}
			<BlogPostPreview {post} />
		{/each}
	{/if}
{/each}
