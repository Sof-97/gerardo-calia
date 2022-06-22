<template>
	<div>
		<nav class="md:block hidden">
			<ul class="flex justify-end">
				<li class="text-white"><span>01.</span> About</li>
				<li class="text-white"><span>02.</span> Work</li>
				<li class="text-white"><span>03.</span> Expertise</li>
				<li class="text-white"><span>04.</span> Contact</li>
				<li class="border-solid border">Resume</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "NavBar",
	};
</script>

<style lang="scss" scoped>
@import '../assets/_variable.scss';
	nav {
		ul {
			li {
				padding: 10px;
				margin-right: 1rem;

				span{
					color: $green;
				}

				&:last-of-type {
					padding: 10px;
					border-radius: 10px;
					color: $green;
					border-color: $green;
				}
			}
		}
	}
</style>