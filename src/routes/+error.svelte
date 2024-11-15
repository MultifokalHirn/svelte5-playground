<script lang="ts">
	import { page } from '$app/stores'

	const emojis: Record<number, string> = {
		// TODO add the rest!
		404: '🧱',
		420: '🫠',
		500: '💥'
	}
	let { status, error } = $page
</script>

<div class="container">
	<span class="emoji">
		{emojis[status] ?? emojis[500]}
	</span>
	<br />
	<br />
	<br />
	<h1 style="font-family: monospace">{status}</h1>
	{#if error}
		<h2 style="font-family: monospace">{error.message} :(</h2>
	{/if}
</div>

<style>
	span.emoji {
		font-size: 5em;
		padding-bottom: 200px;
	}
	div.container {
		margin: 5%;
		/* text-align: center; */
	}
</style>
