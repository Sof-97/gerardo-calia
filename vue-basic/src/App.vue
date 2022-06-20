<template>
	<div>
		<header class="flex justify-end mt-5 mr-5">
			<nav-bar></nav-bar>
		</header>
		<main class="container min-h-full flex justify-center items-center">
			<h1 class="font-bold text-7xl mt-72 text-emerald-500 ml-8 md:ml-0"><span>Gerardo </span>Calia</h1>
		</main>
		<email-comp class="email fixed"></email-comp>
		<social-comp id="socialY" class="social fixed hidden"></social-comp>
		<social-comp id="socialX" class="social fixed"></social-comp>
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
		methods: {
		},
		mounted() {
			window.onscroll = function () {
				if (scrollY > 150) {
					const socialX = document.getElementById("socialX");
					const socialY = document.getElementById("socialY");

					const observerX = new IntersectionObserver(entries => {
						entries.forEach(entry => {
							entry.target.classList.toggle("blur-out-contract", entry.isIntersecting);
							setTimeout(() => {
								entry.target.classList.add("hidden", entry.isIntersecting);
							}, 2000);
						}),
							console.log(entries);
					});
					const observerY = new IntersectionObserver(entries => {
						entries.forEach(entry => {
							setTimeout(() => {
								entry.target.classList.remove("hidden", entry.isIntersecting);
								entry.target.classList.add("focus-in-expand", entry.isIntersecting);
							}, 1000);
						}),
							console.log(entries);
					});
					observerY.observe(socialY);
					observerX.observe(socialX);
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
	#socialX {
		transform: translate(0, 0);
		transform: rotate(90deg);
		left: 200px;
		bottom: -25vh;
		svg {
			transform: rotate(-90deg);
		}
	}
	#socialY {
		transform: translate(1.5rem, 0);
	}

	//ANIMATION BLUR HORIZONTAL
	.blur-out-contract {
		-webkit-animation: blur-out-contract 0.9s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
		animation: blur-out-contract 0.9s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
	}
	@-webkit-keyframes blur-out-contract {
		0% {
			-webkit-filter: blur(0.01);
			filter: blur(0.01);
		}
		100% {
			letter-spacing: -0.5em;
			-webkit-filter: blur(12px) opacity(0%);
			filter: blur(12px) opacity(0%);
		}
	}
	@keyframes blur-out-contract {
		0% {
			transform: translate(0, 0px) rotate(90deg);
			-webkit-filter: blur(0.01);
			filter: blur(0.01);
		}
		100% {
			transform: translate(0, 200px) rotate(0deg);
			letter-spacing: -0.5em;
			-webkit-filter: blur(12px) opacity(0%);
			filter: blur(12px) opacity(0%);
		}
	}

	//ANIMATION BLUR VERTICAL
	.focus-in-expand {
		-webkit-animation: focus-in-expand 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: focus-in-expand 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}
	@-webkit-keyframes focus-in-expand {
		0% {
			transform: translate(-1.5rem, 0);
			letter-spacing: -0.5em;
			-webkit-filter: blur(12px);
			filter: blur(12px);
			opacity: 0;
		}
		100% {
			transform: translate(1.5rem, 0);
			-webkit-filter: blur(0px);
			filter: blur(0px);
			opacity: 1;
		}
	}
	@keyframes focus-in-expand {
		0% {
			transform: translate(-1.5rem, 0);
			letter-spacing: -0.5em;
			-webkit-filter: blur(12px);
			filter: blur(12px);
			opacity: 0;
		}
		100% {
			transform: translate(1.5rem, 0);
			-webkit-filter: blur(0px);
			filter: blur(0px);
			opacity: 1;
		}
	}
</style>
