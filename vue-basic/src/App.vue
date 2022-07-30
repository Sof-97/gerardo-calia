<template>
	<div>
		<header class="flex justify-end mt-2 mr-2">
			<nav-bar></nav-bar>
		</header>
		<main class="container mx-auto items-centerm mt-8 md:mt-44">
			<hello-comp class="mx-10"></hello-comp>
			<intro-comp class="mx-10 mt-4"></intro-comp>
			<image-comp class="mt-12"></image-comp>
		</main>
		<h2>Sito in aggiornamento.</h2>
		<email-comp class="email fixed hidden md:flex"></email-comp>
		<social-comp id="socialY" class="social fixed hidden"></social-comp>
		<social-comp id="socialX" class="social fixed hidden md:flex"></social-comp>
	</div>
</template>

<script>
	import NavBar from "./components/NavBar.vue";
	import EmailComp from "./components/EmailComp.vue";
	import SocialComp from "./components/SocialComp.vue";
	import HelloComp from "./components/HelloComp.vue";
	import ImageComp from "./components/ImageComp.vue";
	import IntroComp from "./components/IntroComp.vue";

	export default {
		components: { NavBar, EmailComp, SocialComp, HelloComp, ImageComp, IntroComp },
		name: "App",
		data() {
			return {
				projects: {
					dropbox: {
						name: "Dropbox",
						description: "",
						image: "",
						hostedURL: "https://dropbpox-landingpage.netlify.app",
						technologies: ["HTML", "CSS"],
					},
					discord: {
						name: "Discord",
						description: "",
						image: "",
						hostedURL: "https://discord-landingpage.netlify.app",
						technologies: ["HTML", "CSS"],
					},
					playstation: {
						name: "Playstation",
						description: "",
						image: "",
						hostedURL: "https://playstation-landingpage.netlify.app",
						technologies: ["HTML", "CSS"],
					},
					spotify: {
						name: "Spotify",
						description: "",
						image: "",
						hostedURL: "https://spotifysof.netlify.app",
						technologies: ["HTML", "CSS"],
					},
					netflix: {
						name: "Netflix",
						description: "",
						image: "",
						hostedURL: "https://boolfix-cataloug.netlify.app",
						technologies: ["HTML", "CSS", "Scss", "JavaScript", "VueJs"],
					},
					wordpress: {
						name: "Tema Wordpress",
						description: "",
						image: "",
						hostedURL: "https://wordpress-theme-finance.netlify.app",
						technologies: ["HTML", "CSS", "Scss", "JavaScript", "VueJs"],
					},
					whatsapp: {
						name: "Whatsapp",
						description: "",
						image: "",
						hostedURL: "https://boolzap-sof.netlify.app",
						technologies: ["HTML", "CSS", "Bootsrap", "JavaScript"],
					},
					comics: {
						name: "Dc Comics",
						description: "",
						image: "",
						hostedURL: "https://dc-comics-landingpage.herokuapp.com",
						technologies: ["HTML", "CSS", "Php", "Laravel", "Scss"],
					},
					airbnb: {
						name: "Boolbnb",
						description: "",
						image: "",
						hostedURL: "",
						technologies: ["HTML", "CSS", "Scss", "JavaScript", "VueJs", "Php", "Laravel"],
					},
				},
			};
		},
		methods: {},
		mounted() {
			//HORIZONTAL TO VERTICAL SOCIAL DISPLAY
			// A function that is called when the user scrolls. It is checking if the user has scrolled more
			// than 150px. If so, it is creating two variables, socialX and socialY, which are the two social
			// components. It is then creating two intersection observers, one for each social component. The
			// intersection observer is watching the social components and when they are intersecting, it is
			// adding the class blur-out-contract to socialX and focus-in-expand to socialY. It is also adding
			// the class hidden to socialX and removing the class hidden from socialY.
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
	@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Montserrat:wght@400;900&family=Poppins:wght@700;800&display=swap");
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
