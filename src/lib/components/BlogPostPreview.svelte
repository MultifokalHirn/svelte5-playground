<script lang="ts">
	interface Props {
		title: string;
		content: string;
		slug: string;
	}

	let { title, content, slug }: Props = $props();
	// this renders a box which only shows the title and firsat 100 characters of the content
</script>

<div class="preview">
	<a href={`/blog/${slug}`}>
		<h1>{title}</h1>
		<p>{content.substring(0, 100)}</p>
	</a>
</div>

<style>
	.preview {
		background-color: #f1f1f1;
		border: 1px solid #ccc;
		padding: 10px;
	}
</style>
