<template>
	<div class="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 grid-auto gap-14">
		<div :key="i" v-for="e, i in projects">
			<img :src="require(`@/assets/img/projects/${e.image}`)" :alt="e.name">
			<div>
				<h3 class="font-bold tracking-wide text-xl my-2">{{ e.name }}</h3>
				<p class="text-slate-400 text-lg">{{ e.description }}</p>
				<div class="my-2 flex flex-wrap">
					<span class="mr-2 mt-2 px-2" v-for="t, i in e.technologies" :key="i">{{ t }}</span>
				</div>
				<div class="flex justify-end items-center mt-5">
					<a class="mx-2 px-2" :href="e.github">GitHub</a>
					<a class="mx-2 px-2" :href="e.hostedURL">Live</a>
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
	color: $green;
	font-family: "IBM Plex Mono", monospace;
}

img {
	border-radius: 10px;
}

span {
	border: 0.2px solid $fucsia;
	border-radius: 5px;
}

a {
	background-color: #fff;
	color: $fucsia;
	border-radius: 5px;
}
</style>
