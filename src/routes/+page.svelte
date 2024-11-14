<script lang="ts">
	import { getContext } from 'svelte';

	// Retrieve user store from context
	const user = getContext('user');

	export let data;
</script>

<h1>Posts</h1>

<section>
	<h1>Home</h1>
	<p>{user}</p>
</section>
