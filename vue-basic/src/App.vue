<template>
	<div>
		<header class="fixed z-10 w-full">
			<div class="flex justify-between w-11/12 mx-auto pt-3 pb-1 sm:p-0">
				<a href="/" class="self-center">
					<img src="./assets/img/D20.svg" alt="little image of a d20" style="height: 50px" />
				</a>
				<nav-bar></nav-bar>
			</div>
		</header>
		<main class="lg:mt-12">
			<!-- Prima sezione piccola bio e hello Comp -->
			<section class="flex flex-col w-10/12 pt-20 sm:pt-48 pb-32 mx-auto">
				<HelloComp class="mb-12 sm:ml-8"></HelloComp>
				<IntroComp class="mb-8 sm:w-1/2 sm:mr-14 sm:mt-8 sm:self-end"></IntroComp>
				<ButtonComp text="Projects" link="#projects" class="my-1 green max-w-fit sm:mr-14 self-end">
				</ButtonComp>
			</section>
			<!-- Seconda sezione immagine + Bio grande e tecnologie -->
			<section id="about" style="scroll-snap-align: center;">
				<ImageComp></ImageComp>
				<LongBioComp class="my-2"></LongBioComp>
				<TechComp class="mt-20"></TechComp>
			</section>
			<!-- Cards Progetti -->
			<section class="mt-24">
				<h2 class="w-11/12 mx-auto text-2xl mb-6 xl:mb-12 font-bold text-center xl:text-3xl xl:tracking-wider">
					Some Of My Projects</h2>
				<ProjectsComp id="projects" :projects="projects"></ProjectsComp>
			</section>
			<!-- Esperienze lavorative -->
			<section id="experience" class="my-24">
				<h2 class="w-11/12 mx-auto text-2xl mb-6 xl:mb-12 font-bold text-center xl:text-3xl xl:tracking-wider">
					Work Experience</h2>
				<ExperienceComp :experiences="experiences"></ExperienceComp>
			</section>
			<!-- Contact Form -->
			<section id="contacts">
				<h2 class="w-11/12 mx-auto text-2xl mb-6 xl:mb-12 font-bold text-center xl:text-3xl xl:tracking-wider">
					Get In Touch</h2>
			</section>
		</main>
		<email-comp class="email fixed hidden "></email-comp>
		<social-comp id="socialY" class="social  hidden"></social-comp>
		<social-comp id="socialX" class="social  hidden"></social-comp>
	</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import EmailComp from "./components/EmailComp.vue";
import SocialComp from "./components/SocialComp.vue";
import HelloComp from "./components/HelloComp.vue";
import ImageComp from "./components/ImageComp.vue";
import IntroComp from "./components/IntroComp.vue";
import ButtonComp from "./components/ButtonComp.vue";
import LongBioComp from "./components/LongBioComp.vue";
import TechComp from "./components/TechComp.vue";
import ProjectsComp from "./components/ProjectsComp.vue";
import ExperienceComp from "./components/ExperienceComp.vue";

export default {
	components: {
		NavBar,
		EmailComp,
		SocialComp,
		HelloComp,
		ImageComp,
		IntroComp,
		ButtonComp,
		LongBioComp,
		TechComp,
		ProjectsComp,
		ExperienceComp,
	},
	name: "App",
	data() {
		return {
			projects: {
				dropbox: {
					name: "Dropbox",
					description: "Breve descrizione del progetto",
					image: "dropbox.png",
					hostedURL: "https://dropbpox-landingpage.netlify.app",
					github: "https://github.com/Sof-97/htmlcss-dropbox",
					technologies: ["HTML", "CSS"],
				},
				discord: {
					name: "Discord",
					description: "Breve descrizione del progetto",
					image: "discord.png",
					hostedURL: "https://discord-landingpage.netlify.app",
					github: "https://github.com/Sof-97/htmlcss-discord",
					technologies: ["HTML", "CSS"],
				},
				playstation: {
					name: "Playstation",
					description: "Breve descrizione del progetto",
					image: "playstation.png",
					hostedURL: "https://playstation-landingpage.netlify.app",
					github: "https://github.com/Sof-97/htmlcss-playstation",
					technologies: ["HTML", "CSS"],
				},
				spotify: {
					name: "Spotify",
					description: "Breve descrizione del progetto",
					image: "spotify.png",
					hostedURL: "https://spotifysof.netlify.app",
					github: "https://github.com/Sof-97/spotifyweb-replica",
					technologies: ["HTML", "CSS"],
				},
				netflix: {
					name: "Netflix",
					description: "Breve descrizione del progetto",
					image: "netflix.png",
					hostedURL: "https://boolfix-cataloug.netlify.app",
					github: "https://github.com/Sof-97/vue-boolflix",
					technologies: ["HTML", "CSS", "Scss", "JavaScript", "VueJs"],
				},
				wordpress: {
					name: "Tema Wordpress",
					description: "Breve descrizione del progetto",
					image: "wordpress_theme.png",
					hostedURL: "https://wordpress-theme-finance.netlify.app",
					github: "https://github.com/Sof-97/wordpress-theme",
					technologies: ["HTML", "CSS", "Scss", "JavaScript", "VueJs"],
				},
				whatsapp: {
					name: "Whatsapp",
					description: "Breve descrizione del progetto",
					image: "boolzap.png",
					hostedURL: "https://boolzap-sof.netlify.app",
					github: "https://github.com/Sof-97/vue-boolzapp",
					technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
				},
				airbnb: {
					name: "Boolbnb",
					description: "Breve descrizione del progetto",
					image: "airbnb.jpg",
					hostedURL: "",
					github: "https://github.com/Sof-97/boolbnb",
					technologies: ["HTML", "CSS", "Scss", "JavaScript", "VueJs", "Php", "Laravel"],
				},
			},
			experiences: [
				{
					name: "Photographer",
					where: "Freelance",
					date: "2016 - 2022",
					skills: ["Working directly with the client", "Suite Adobe"]
				},
				{
					name: "Waiter",
					where: "Freelance",
					date: "2016 - 2022",
					skills: ["Working directly with the client", "Suite Adobe"]
				},
				{
					name: "Photographer",
					where: "Freelance",
					date: "2016 - 2022",
					skills: ["Working directly with the client", "Suite Adobe"]
				},
				{
					name: "Photographer",
					where: "Freelance",
					date: "2016 - 2022",
					skills: ["Working directly with the client", "Suite Adobe"]
				}
			]
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
		// window.onscroll = function () {
		// 	if (scrollY > 150) {
		// 		const socialX = document.getElementById("socialX");
		// 		const socialY = document.getElementById("socialY");
		// 		const observerX = new IntersectionObserver(entries => {
		// 			entries.forEach(entry => {
		// 				entry.target.classList.toggle("blur-out-contract", entry.isIntersecting);
		// 				setTimeout(() => {
		// 					entry.target.classList.add("hidden", entry.isIntersecting);
		// 				}, 2000);
		// 			});
		// 		});
		// 		const observerY = new IntersectionObserver(entries => {
		// 			if (window.innerWidth > 600) {
		// 				entries.forEach(entry => {
		// 					setTimeout(() => {
		// 						entry.target.classList.remove("hidden", entry.isIntersecting);
		// 						entry.target.classList.add("focus-in-expand", entry.isIntersecting);
		// 					}, 1000);
		// 				});
		// 			}
		// 		});
		// 		observerY.observe(socialY);
		// 		observerX.observe(socialX);
		// 	}
		// };
	},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Montserrat:wght@400;900&family=Poppins:wght@700;800&display=swap");
@import "./assets/_variable.scss";

header {
	position: absolute;
	top: 0;
	background-color: $blue;
}

h2 {
	font-family: 'montserrat', sans-serif;
	color: $fucsia;
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
	bottom: -20vh;

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
