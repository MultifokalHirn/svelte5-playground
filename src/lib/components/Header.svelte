<script>
	import Logo from './Logo.svelte';
	import NavLinks from './NavLinks.svelte';

	let { svelteVersion } = $props();
</script>

<div class="relative mx-auto flex w-full flex-col justify-center bg-white px-6">
	<div class="flex justify-between">
		<Logo />
		{svelteVersion}
		<NavLinks />
	</div>
</div>
