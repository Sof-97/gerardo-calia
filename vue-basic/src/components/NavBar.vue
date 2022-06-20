<template>
	<div>
		<nav class="md:block hidden">
			<ul class="flex justify-end">
				<li class="text-white"><span class="text-emerald-300">01.</span> About</li>
				<li class="text-white"><span class="text-emerald-300">02.</span> Work</li>
				<li class="text-white"><span class="text-emerald-300">03.</span> Expertise</li>
				<li class="text-white"><span class="text-emerald-300">04.</span> Contact</li>
				<li class="text-emerald-300 border-solid border border-emerald-300">Resume</li>
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
	nav {
		ul {
			li {
				padding: 10px;
				margin-right: 1rem;

				&:last-of-type {
					padding: 10px;
					border-radius: 10px;
				}
			}
		}
	}
</style>
