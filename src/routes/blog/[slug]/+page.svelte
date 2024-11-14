<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let wordCount = $state(data.content.split(' ').length);
	let estimatedReadingTime = $derived(wordCount / 250);

	interface Props {
		title: string;
		content: string;
	}
</script>

<h1>{title}</h1>
<p>{content}</p>
