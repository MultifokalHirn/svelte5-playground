<script lang="ts">
	import type { BlogPost } from '$lib/types/types'

	interface Props {
		post: BlogPost
	}

	let { post }: Props = $props()
	// this renders a box which only shows the title and firsat 100 characters of the content
</script>

<div class="preview">
	<a href={`/blog/posts/${post.slug}`}>
		<h2>{post.title}</h2>
		{#if post.image}
			<img src={post.image} alt={post.title} />
		{/if}
		{#if post.content}
			<p class="preview-content">{post.content.substring(0, 300)}</p>
		{/if}
	</a>
</div>

<style>
	.preview {
		background-color: #f1f1f1;
		border: 1px solid #ccc;
		padding: 10px;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.preview-content {
		font-style: italic;
		color: #666;
		margin-bottom: 20px;
	}
</style>
