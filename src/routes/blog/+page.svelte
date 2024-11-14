<script lang="ts">
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte';
	export let data;
	const { user, blog } = data;
</script>

{#each blog as post (post.slug)}
	<BlogPostPreview title={post.title} content={post.content} slug={post.slug} />
{/each}
{data}
