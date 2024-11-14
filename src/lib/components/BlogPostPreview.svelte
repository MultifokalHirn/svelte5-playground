<script lang="ts">
	interface Props {
		title: string
		content: string
		slug: string
	}

	let { title, content, slug }: Props = $props()
	// this renders a box which only shows the title and firsat 100 characters of the content
</script>

<div class="preview">
	<a href={`/blog/${slug}`}>
		<h2>{title}</h2>
		<p class="preview-content">{content.substring(0, 300)}</p>
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
