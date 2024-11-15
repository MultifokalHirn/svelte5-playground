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
		<h3 class="preview-title"><span class="hashtag">#</span>{post.title}</h3>
	</a>
	{#if post.image}
		<img src={post.image} alt={post.title} />
	{/if}
	{#if post.content}
		<p class="preview-content">{post.content.substring(0, 500)}</p>
	{/if}
</div>

<style>
	span.hashtag::hover {
		text-decoration: none !important;
	}
	span.hashtag {
		color: #00f;
		margin-left: -20px;
		margin-right: 5px;
		text-decoration: none !important;
	}
	div.preview {
		/* background-color: #f1f1f1; */
		/* border: 1px dashed #000000; */
		padding: 1% 5% 5% 2%;
		margin: 1% 3% 3% 1%;
		min-width: 300px;
	}
	h3.preview-title {
		margin-bottom: 5px;
		font-family: monospace;
	}
	.preview-content {
		font-style: italic;
		color: #666;
		margin-bottom: 20px;
		text-decoration: none !important;
	}
	p.preview-content::hover {
		text-decoration: none !important;
	}
</style>
