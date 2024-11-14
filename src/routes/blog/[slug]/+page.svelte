<script lang="ts">
	import type { Blog } from '$lib/types/types';

	let { data }: { data: { post: Blog } } = $props();

	let wordCount = $state(data.post.content.split(' ').length);
	let estimatedReadingTime = $derived(wordCount / 250);
</script>

<div class="container">
	<h1>{data.post.title}</h1>
	<p>{data.post.content}</p>

	<p>Word Count: {wordCount}</p>
	<p>Estimated Reading Time: {estimatedReadingTime} minutes</p>
</div>

lol

<style>
	div.container {
		background-color: #f1f1f1;
		border: 1px solid #ccc;
		padding: 10px;
	}
</style>
