<script lang="ts">
	import logo1 from '$lib/assets/img/logo/1.png';
	import logo2 from '$lib/assets/img/logo/2.png';
	import logo3 from '$lib/assets/img/logo/3.png';
	import logo4 from '$lib/assets/img/logo/4.png';
	import { getRandomItem } from '$lib/utils/helpers';

	const logoFiles = {
		'1': logo1,
		'2': logo2,
		'3': logo3,
		'4': logo4
	};
	let currentLogo: keyof typeof logoFiles = $state(getRandomItem(Object.keys(logoFiles)));
	function switchLogo() {
		currentLogo = getRandomItem(Object.keys(logoFiles).filter((logo) => logo !== currentLogo));
	}
	let logoPath = $derived(logoFiles[currentLogo]);
</script>

<button onclick={switchLogo}>
	<img src={logoPath} alt="Logo" class="logo" />
</button>

<!-- <h1>LOL</h1> -->

<style>
	.logo {
		width: 100px;
		height: 100px;
	}
</style>
