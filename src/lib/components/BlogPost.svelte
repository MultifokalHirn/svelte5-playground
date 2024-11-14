<script lang="ts">
	interface Props {
		title: string;
		content: string;
	}

	let { title, content, slug }: Props = $props();
</script>

<h1>{title}</h1>
<p>{content}</p>
