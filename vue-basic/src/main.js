<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import './assets/tailwind.css'

=======
import './css/tailwind.css'
>>>>>>> cfc7dc0fa2f5d08fd0973668fdaa86adfb1793cf
createApp(App).mount('#app')
=======
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
>>>>>>> parent of 293232f (Safe - Pre Tailwind)
