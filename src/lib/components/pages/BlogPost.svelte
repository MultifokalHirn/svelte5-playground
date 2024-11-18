<script lang="ts">
	import type { BlogPost } from '$lib/types/types'

	interface Props {
		post: BlogPost
	}

	let { post }: Props = $props()
</script>

<h1 class="title">{post.title}</h1>
{#if post.page}
	<p>{post.page}</p>
{/if}
