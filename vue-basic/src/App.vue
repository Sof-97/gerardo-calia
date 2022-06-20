<template>
	<div>
		<header class="flex justify-end mt-5 mr-5">
			<nav-bar></nav-bar>
		</header>
		<main class="container min-h-full flex justify-center items-center">
			<h1 class="font-bold text-7xl mt-72 text-emerald-500 ml-8 md:ml-0"><span>Gerardo </span>Calia</h1>
		</main>
		<email-comp class="email fixed"></email-comp>
		<social-comp id="social" class="fixed"></social-comp>
	</div>
</template>

<script>
	import NavBar from "./components/NavBar.vue";
	import EmailComp from "./components/EmailComp.vue";
	import SocialComp from "./components/SocialComp.vue";

	export default {
		components: { NavBar, EmailComp, SocialComp },
		name: "App",
		data() {
			return {};
		},
		methods: {},
		mounted() {
			window.onscroll = function () {
				let scrollY = document.documentElement.scrollTop;
				let social = document.getElementById("social");
				console.log(scrollY);
				if (scrollY > 10) {
					social.classList.add("rotate");
				} else {
					social.classList.remove("rotate");
				}
			};
		},
	};
</script>

<style lang="scss">
	main {
		h1 {
			span {
				opacity: 0.7;
			}
		}
	}
	.email {
		right: -8rem;
		bottom: 180px;
		transform: rotate(90deg);
	}
	#social {
		width: fit-content;
		transition: 1s ease-in-out;
		bottom: 0px;
		left: 3rem;
	}
	
</style>
