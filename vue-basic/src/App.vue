<template>
	<div>
		<header class="flex justify-end mt-5 mr-5">
			<nav-bar></nav-bar>
		</header>
		<main class="container min-h-full flex justify-center items-center">
			<h1 class="font-bold text-7xl mt-72 text-emerald-500 ml-8 md:ml-0"><span>Gerardo </span>Calia</h1>
		</main>
	</div>
</template>

<script>
	import NavBar from "./components/NavBar.vue";
	export default {
		components: { NavBar },
		name: "App",
	};
</script>

<style lang="scss">
	h1 {
		span {
			opacity: 0.7;
		}
	}
</style>
