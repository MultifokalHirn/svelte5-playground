<script lang="ts">
	// store in which page the user is currently on
	import { page } from '$app/stores';
	let currentPage: string;
	function isCurrentPage(href: string) {
		return currentPage === href;
	}
	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'organization', href: '/organization' }
	];

	$: currentPage = $page.url.pathname;
</script>

{#each links as link}
	<a href={link.href} class={isCurrentPage(link.href) ? 'active' : ''}>{link.name}</a>
{/each}

<style>
	a {
		color: #000000;
		text-decoration: none;
	}
	a.active {
		color: #000000;
		text-decoration: underline;
	}
</style>
