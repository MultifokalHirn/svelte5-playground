<script lang="ts">
	type Link = {
		label: string
		url: string
	}

	const footerLinks: Link[] = [
		{
			label: 'Link 1',
			url: 'https://www.github.com'
		},
		{
			label: 'Link 2',
			url: 'https://www.github.com'
		},
		{
			label: 'Link 3',
			url: 'https://www.github.com'
		}
	]
</script>

<footer class="relative">
	<div
		class="mx-auto mt-10 flex w-full flex-col justify-between gap-y-6 bg-white px-2 py-1 sm:px-2 md:flex-row"
	>
		<p class="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" style="color: #222222">
			© {new Date().getFullYear()} Lennard Wolf
		</p>
		<!-- <div class="flex-col gap-2 md:mt-0 md:flex md:flex-row md:gap-4">
			{#each footerLinks as { label, url }}
				<div>
					<a class="text-content" target="_blank" href={url} style="color: #222222">{label}</a>
				</div>
			{/each}
		</div> -->
	</div>
</footer>

<style>
	p {
		font-family: monospace;
	}
</style>
