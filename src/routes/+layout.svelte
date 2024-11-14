<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Titel</title>
	<meta name="description" content="Beschreibung" />
</svelte:head>

<Header />
<main class="grow">
	{@render children()}
</main>
<Footer />
