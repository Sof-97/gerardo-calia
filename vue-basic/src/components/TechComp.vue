<template>
	<div class="mx-auto w-9/12">
		<h2 class="font-bold text-white text-lg">Alcune delle tecnologie che ho usato recentemente:</h2>
		<div class=" mx-auto mt-4">
			<ul class="flex flex-wrap flex-col">
				<li v-for="(e, i) in tech" :key="i">
					<span>{{ e }}</span>
				</li>
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
					"VueJs",
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
</style>
