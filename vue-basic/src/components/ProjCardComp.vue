<template>
	<div class="">
		<img :src="`..//img/projects/${data.image}`" alt="" />
		<h4>{{ data.name }}</h4>
	</div>
</template>

<script>
	export default {
		name: "ProjCardComp",
		props: {
			data: Object,
		},
	};
</script>

<style lang="scss" scoped></style>
