<script lang="ts">
	// store in which page the user is currently on
	import { page } from '$app/stores'

	function isCurrentPage(href: string) {
		// check if the current page is the same as the href or if the current page is a child of the href
		return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/')
	}
	const links = [
		{ name: '/', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Blog', href: '/blog' }
	]

	let currentPage: string = $derived($page.url.pathname)
</script>

<nav class="min-w-30 flex max-w-80 flex-row justify-between">
	{#each links as link}
		<a href={link.href} class={isCurrentPage(link.href) ? 'active' : ''}>{link.name}</a>
	{/each}
</nav>

<style>
	a {
		color: #000000;
		text-decoration: none;
		font-family: 'Handjet', monospace;
		margin: 10px 10px 5px 10px;
	}
	a:hover {
		color: #000000;
		text-decoration: underline;
	}
	a.active {
		color: #0000ff;
		text-decoration: underline;
	}
</style>
