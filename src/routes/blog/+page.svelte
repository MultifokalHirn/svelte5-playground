<script lang="ts">
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte'

	export let data
	const { blog } = data
</script>

<h1>Blog</h1>
{#each blog as post (post.slug)}
	<BlogPostPreview title={post.title} content={post.content} slug={post.slug} />
{/each}
