<template>
	<div>
		<header class="flex justify-end mt-2 mr-2">
			<nav-bar></nav-bar>
		</header>
		<main class="container mx-auto items-center  md:mt-44">
			<hello-comp class="mx-12"></hello-comp>
			<div class="mx-8 mt-4 flex justify-end">
				<p class="text-white text-right text-2xl w-52">Ciao sono Gerardo, uno sviluppatore web!</p>
			</div>
			<image-comp></image-comp>
		</main>
		<email-comp class="email fixed hidden md:flex"></email-comp>
		<social-comp id="socialY" class="social fixed hidden "></social-comp>
		<social-comp id="socialX" class="social fixed hidden md:flex"></social-comp>
	</div>
</template>

<script>
	import NavBar from "./components/NavBar.vue";
	import EmailComp from "./components/EmailComp.vue";
	import SocialComp from "./components/SocialComp.vue";
	import HelloComp from "./components/HelloComp.vue";
	import ImageComp from "./components/ImageComp.vue"

	export default {
		components: { NavBar, EmailComp, SocialComp, HelloComp, ImageComp },
		name: "App",
		data() {
			return {};
		},
		methods: {},
		mounted() {
			//HORIZONTAL TO VERTICAL SOCIAL DISPLAY
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
	@import "./assets/_variable.scss";
	h1 {
		color: $green;
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
