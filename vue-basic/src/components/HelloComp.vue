<template>
		<div class="flex flex-col max-w-fit">
            <!-- FONT MONO -->
			<h2 class="text-3xl text-white font-bold">Hello. I am</h2>
            <!-- FONT BOLD MONTSERRAT OR POPPINS 800 -->
			<h1 class="font-bold text-7xl md:ml-0"><span>Gerardo </span>Calia</h1>
			<developer-comp class="mt-2"></developer-comp>
	</div>
</template>
<script>
	import DeveloperComp from "./DeveloperComp.vue";
	export default {
		name: "HelloComp",
		components: {
			DeveloperComp,
		},
	};
</script>
