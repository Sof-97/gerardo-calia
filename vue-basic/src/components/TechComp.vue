<template>
	<div class="mx-auto w-9/12">
		<h2 class="font-bold text-white text-lg xl:text-xl tracking-wide">Some of the technologies I've recently used:
		</h2>
		<div class=" mx-auto mt-4">
			<ul class="flex flex-wrap flex-col xl:text-lg">
				<li v-for="(e, i) in tech" :key="i">
					<span>{{ e }}</span>
				</li>
			</ul>
		</div>
		<div class="mt-8">
			<h3 class="font-bold text-white text-lg xl:text-xl tracking-wide">What I'm currently learning:</h3>
			<ul class="xl:text-lg mt-4">
				<li>React.Js</li>
				<li>Node.Js</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: "TechComp",
	data() {
		return {
			tech: [
				"HTML",
				"CSS",
				"JavaScript",
				"Bootstrap",
				"Tailwind",
				"Sass",
				"Vue.Js",
				"MySQL",
				"Php",
				"Laravel",
				"Git",
				"GitHub",
			],
		};
	},
};
</script>
<style lang="scss" scoped>
@import "../assets/variable";

ul {
	max-height: 7.5rem;

	li {
		font-family: "IBM Plex Mono", monospace;

		&::before {
			content: "> ";
			color: $fucsia;
			font-weight: bold;
		}
	}
}

h3 {
	font-family: "montserrat", sans-serif;
}
</style>
