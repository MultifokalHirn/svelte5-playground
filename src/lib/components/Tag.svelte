<script lang="ts">
	interface Props {
		tag: string
	}

	let { tag }: Props = $props()
</script>

<span><a class="tag" href={`/blog/tags/${tag}`}>[{tag}]</a></span>

<style>
	a.tag {
		color: #00f;
		font-family: monoscpace;
		/* margin-left: 5px; */
		margin-right: 5px;
	}
</style>
