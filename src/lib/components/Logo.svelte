<script lang="ts">
	import logo1 from '$lib/assets/img/logo/1.png'
	import logo2 from '$lib/assets/img/logo/2.png'
	import logo3 from '$lib/assets/img/logo/3.png'
	import logo4 from '$lib/assets/img/logo/4.png'
	import logo5 from '$lib/assets/img/logo/5.png'
	import logo6 from '$lib/assets/img/logo/6.png'
	import { getRandomItem } from '$lib/utils/helpers'

	const logoFiles = {
		'1': logo1,
		'2': logo2,
		'3': logo3,
		'4': logo4,
		'5': logo5,
		'6': logo6
	}
	let currentLogo: keyof typeof logoFiles = $state(getRandomItem(Object.keys(logoFiles)))
	function switchLogo() {
		currentLogo = getRandomItem(Object.keys(logoFiles).filter((logo) => logo !== currentLogo))
	}
	let logoPath = $derived(logoFiles[currentLogo])
</script>

<a href={'/'} onmouseenter={switchLogo} onmouseleave={switchLogo} class="logo-container">
	<img src={logoPath} alt="Logo" class="logo" />
</a>

<style>
	.logo-container {
		width: 100px;
		height: 100px;
		cursor: pointer;
		padding: 2px;
	}
	.logo {
		width: auto;
		height: 100px;
		border: solid 2px #000;
	}
</style>
