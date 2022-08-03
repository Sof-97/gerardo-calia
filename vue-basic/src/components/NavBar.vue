<template>
	<div>
		<nav class="md:block hidden p-4">
			<ul class="flex justify-end items-center">
				<li class="text-white"><span>01.</span> About</li>
				<li class="text-white"><span>02.</span> Work</li>
				<li class="text-white"><span>03.</span> Expertise</li>
				<li class="text-white"><span>04.</span> Contact</li>
				<li>
					<ButtonComp text="Resume" link="#"></ButtonComp>
				</li>
			</ul>
		</nav>

		<!-- Menu Mobile -->
		<div class="dropdown dropdown-end md:hidden">
			<label tabindex="0" class="btn m-4 bg-transparent">Menu</label>
			<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
				<li class="text-white">
					<a href=""><span>01.</span> About</a>
				</li>
				<li class="text-white">
					<a href=""><span>02.</span> Work</a>
				</li>
				<li class="text-white">
					<a href=""><span>03.</span> Expertise</a>
				</li>
				<li class="text-white">
					<a href=""><span>04.</span> Contact</a>
				</li>
				<li>
					<ButtonComp text="Resume" link="#"></ButtonComp>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import ButtonComp from "./ButtonComp.vue";
export default {
	name: "NavBar",
	components: { ButtonComp },
};
</script>

<style lang="scss" scoped>
@import "../assets/_variable.scss";

* {
	font-family: "IBM Plex Mono", monospace;
}

nav {
	ul {
		li {
			padding: 10px;
			margin-right: 1rem;

			span {
				color: $green;
			}
		}
	}
}

.dropdown {
	label {
		border-color: $green;
		color: $green;
	}

	ul {
		margin-right: 1rem;

		li {
			display: block;
			border-radius: 10px;

			span {
				color: $green;
				display: inline-block;
				width: fit-content;
			}

			&:last-child {
				display: flex;
				justify-content: center;
				text-align: center;
				color: $green;
			}
		}
	}
}
</style>
