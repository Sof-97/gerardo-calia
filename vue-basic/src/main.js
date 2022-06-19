<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
createApp(App).mount('#app')
=======
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
>>>>>>> parent of 293232f (Safe - Pre Tailwind)
