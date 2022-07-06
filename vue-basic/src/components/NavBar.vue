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

		<!-- Menu Mobile -->
		<div class="dropdown dropdown-end md:hidden">
			<label tabindex="0" class="btn m-1 bg-transparent">Menu</label>
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
				<li class="border-solid border p-2">Resume</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "NavBar",
	};
</script>

<style lang="scss" scoped>
	@import "../assets/_variable.scss";
	li{
		font-family: 'IBM Plex Mono', monospace;
	}
	nav {
		ul {
			li {
				padding: 10px;
				margin-right: 1rem;

				span {
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
	.dropdown {
		top: 10px;
		label {
			border-color: $green;
			color: $green;
		}
		ul {
			li {
				display: block;
				border-radius: 10px;
				span {
					color: $green;
					display: inline-block;
					width: fit-content;
				}
				&:last-child {
					color: $green;
					text-align: center;
					border-color: $green;
				}
				&:active{
					background-color: $fucsia;
				}
			}
		}
	}
</style>
