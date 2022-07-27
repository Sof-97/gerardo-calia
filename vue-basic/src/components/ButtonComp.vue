<template>
	<a :href="link">{{ text }}</a>
</template>

<script>
	export default {
		name: "ButtonComp",
		props: {
			link: String,
			text: String,
			color: Object,
		},
	};
</script>

<style lang="scss" scoped>
	@import "../assets/variable";
	a {
		font-family: "IBM Plex Mono", monospace;
		display: inline-block;
		padding: 0.5rem;
		border: 1px solid $green;
		border-radius: 5px;
		&:active {
			background-color: $green;
			color: #fff;
		}
	}
	.green {
		color: $green;
	}
</style>
