<template>
	<div class="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 grid-auto gap-14">
		<div :key="i" v-for="e, i in projects">
			<img :src="require(`@/assets/img/projects/${e.image}`)" :alt="e.name">
			<div>
				<h3 class="font-bold tracking-wide text-xl my-2">{{ e.name }}</h3>
				<p class="text-slate-400 text-lg">{{ e.description }}</p>
				<div class="my-2 flex flex-wrap">
					<span class="mr-2 mt-1 py-1 px-2" v-for="t, i in e.technologies" :key="i">{{ t }}</span>
				</div>
				<div>
					<h5 class="font-bold">Take a look:</h5>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: "ProjectsComp",
	props: {
		projects: Object,
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/variable";

h3 {
	color: $fucsia;
	font-family: "IBM Plex Mono", monospace;
}

img {
	border-radius: 10px;
}

span {
	border: 0.2px solid $fucsia;
	border-radius: 5px;
}
</style>
