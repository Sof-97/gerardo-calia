import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
createApp(App).mount('#app')

// const animate = document.querySelectorAll('.animate')
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.toggle('show', entry.isIntersecting)
//         }
//     })
// }, {
//     threshold: 1
// })

// animate.forEach(e => {
//     observer.observe(e)
// })