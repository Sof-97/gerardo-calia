<template>
	<div>
		<nav class="md:block hidden p-4">
			<ul class="flex justify-end items-center">
				<li class="text-white">
					<a href="#about"><span>01.</span> About</a>
				</li>
				<li class="text-white">
					<a href="#projects"><span>02.</span> Works</a>
				</li>
				<li class="text-white">
					<a href="#experience"><span>03.</span> Expertise</a>
				</li>
				<li class="text-white">
					<a href="#contacts"><span>04.</span> Contact</a>
				</li>
				<li>
					<ButtonComp text="Resume" link="#"></ButtonComp>
				</li>
			</ul>
		</nav>

		<!-- Menu Mobile -->
		<div class="dropdown dropdown-end md:hidden">
			<label tabindex="0" class="border h-full w-full block px-3 py-2 bg-transparent">Menu</label>
			<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
				<li class="text-white">
					<a href="#about"><span>01.</span> About</a>
				</li>
				<li class="text-white">
					<a href="#projects"><span>02.</span> Works</a>
				</li>
				<li class="text-white">
					<a href="#experience"><span>03.</span> Expertise</a>
				</li>
				<li class="text-white">
					<a href="#contacts"><span>04.</span> Contact</a>
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
		border-radius: 5px;
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
