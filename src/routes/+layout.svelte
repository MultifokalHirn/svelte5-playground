<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte'
	import Header from '$lib/components/layout/Header.svelte'
	import '../app.css'
	// import '../font-faces.css'
	import type { LayoutData } from './$types'

	let { data, children }: { data: LayoutData; children: () => any } = $props()
	// let svelteVersion: '4' | '5' = $state('4')

	// function switchVersion() {
	// 	svelteVersion = svelteVersion === '4' ? '5' : '4'
	// }

	// Create a store and update it when necessary...
	// const user = writable(data.user)
	// $effect.pre(() => {
	// 	user.set(data.user)
	// })

	// ...and add it to the context for child components to access
	// setContext('user', user)
</script>

<svelte:head>
	<title>Titel</title>
	<meta name="description" content="Beschreibung" />
</svelte:head>

<Header></Header>
<main class="grow">
	<!-- <button onclick={switchVersion}>Switch Version</button> -->
	<!-- <lw-divider> </lw-divider> -->
	{@render children()}
</main>
<Footer />
